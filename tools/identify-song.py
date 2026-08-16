#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""identify-song.py — 音声認識PoC
YouTubeの動画（歌枠ライブ配信など）から音声ストリームのみを一時取得し、
チャンク分割→Shazamioで識別して「何分何秒に何の曲が流れたか」を出力する。

使い方:
  python identify-song.py <YouTube URL または ID> [--chunk 15] [--overlap 7.5] [--start 0] [--max-duration 3600] [--json]

依存 (tools/requirements-identify.txt):
  pip install -r tools/requirements-identify.txt
  システムに ffmpeg が必要。

注意:
  - 一時ファイルは必ず finally（TemporaryDirectory）で削除する。
  - YouTubeのBot判定を受けた場合は --cookies でブラウザのcookies.txtを渡す。
  - 本スクリプトはPoCでありCIには組み込まない。
"""
import argparse
import asyncio
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.request

import yt_dlp

CHUNK_EXT = "mp3"

PIPED_INSTANCES = [
    "https://pipedapi.kavin.rocks",
    "https://api.piped.private.coffee",
    "https://pipedapi.adminforge.de",
    "https://pipedapi.drgns.space",
    "https://pipedapi.reallyaweso.me",
]

YOUTUBE_ID_RE = re.compile(r"(?:v=|youtu\.be/|shorts/|live/)?([A-Za-z0-9_-]{11})")

def log(msg):
    print(msg, file=sys.stderr)

def ffmpeg(args, chunk_dir):
    cmd = ["ffmpeg", "-y", "-hide_banner", "-loglevel", "error", "-nostdin"]
    cmd += args
    try:
        subprocess.run(cmd, check=True, cwd=chunk_dir)
    except subprocess.CalledProcessError as e:
        raise RuntimeError("ffmpeg に失敗しました（入力ファイルの形式を確認してください）: %s" % e) from e

def video_id_of(url):
    m = YOUTUBE_ID_RE.search(url or "")
    return m.group(1) if m else None

def fetch_audio_piped(video_id, workdir, instances, timeout=20):
    """Piped API（YouTube代替フロントエンド）経由で音声ストリームを取得。
    yt-dlp が Bot 判定された場合のフォールバック。"""
    errors = []
    for inst in instances:
        try:
            api = inst.rstrip("/") + "/streams/" + video_id
            req = urllib.request.Request(api, headers={
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
                "Accept": "application/json",
            })
            with urllib.request.urlopen(req, timeout=timeout) as r:
                data = json.loads(r.read().decode("utf-8"))
            streams = data.get("audioStreams") or []
            if not streams:
                raise RuntimeError("音声ストリームがありません")
            def key(s):
                mime = s.get("mimeType", "")
                pref = 3 if "opus" in mime else 2 if "webm" in mime else 1 if "m4a" in mime or "mp4" in mime else 0
                return (pref, s.get("bitrate", 0))
            best = max(streams, key=key)
            audio_url = best["url"]
            if audio_url.startswith("/"):
                audio_url = inst + audio_url
            ext = "opus" if "opus" in best.get("mimeType", "") else "webm"
            dest = os.path.join(workdir, "audio." + ext)
            req2 = urllib.request.Request(audio_url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req2, timeout=120) as r2, open(dest, "wb") as f:
                shutil.copyfileobj(r2, f)
            if not os.path.exists(dest) or os.path.getsize(dest) < 1024:
                raise RuntimeError("音声ファイルが空です")
            return dest, data.get("title", ""), data.get("duration", 0)
        except Exception as e:
            errors.append("%s: %s" % (inst, str(e)[:100]))
    raise RuntimeError("Piped でも取得できませんでした: " + " / ".join(errors))

def fetch_audio(url, workdir, cookies, clients):
    """音声ストリームのみを取得。返り値は取得したファイルパス。"""
    opts = {
        "format": "bestaudio/best",
        "outtmpl": os.path.join(workdir, "audio.%(ext)s"),
        "noplaylist": True,
        "quiet": True,
        "no_warnings": True,
        "noprogress": True,
    }
    if cookies:
        opts["cookiefile"] = cookies
    if clients:
        opts["extractor_args"] = {
            "youtube": {"player_client": [c.strip() for c in clients.split(",")]}
        }
    with yt_dlp.YoutubeDL(opts) as ydl:
        try:
            info = ydl.extract_info(url, download=True)
        except Exception as e:
            raise RuntimeError(
                "yt-dlp で音声を取得できませんでした: %s\n"
                "（YouTubeがBot判定する環境では --cookies でブラウザの cookies.txt を渡してください）" % e
            ) from e
        if not info:
            raise RuntimeError("動画情報を取得できませんでした: %s" % url)
        path = ydl.prepare_filename(info)
        if not os.path.exists(path):
            path = os.path.join(workdir, "audio." + (info.get("ext") or "m4a"))
        return path, info.get("title", ""), info.get("duration", 0)

def split_audio(src, workdir, chunk, overlap):
    """チャンク分割（オーバーラップあり）。[(index, start_sec, path)] を返す。"""
    chunks = []
    # パス0: 0秒開始 / パス1: overlap/2 秒開始
    for pass_no in (0, 1):
        offset = overlap / 2 * pass_no
        seg = os.path.join(workdir, "seg_%d_%%03d.%s" % (pass_no, CHUNK_EXT))
        ffmpeg(["-ss", str(offset), "-i", src, "-f", "segment",
                "-segment_time", str(chunk), "-c:a", "libmp3lame", "-q:a", "7", seg], workdir)
        for f in sorted(os.listdir(workdir)):
            if f.startswith("seg_%d_" % pass_no) and f.endswith("." + CHUNK_EXT):
                idx = int(f.rsplit("_", 1)[1].split(".")[0])
                chunks.append((idx, offset + idx * chunk, os.path.join(workdir, f)))
    return chunks

def merge_runs(chunks):
    """連続する同一曲をまとめて [(start, end, title, artist, max_score)] を返す。"""
    runs = []
    cur = None
    for start, title, artist, score in sorted(chunks, key=lambda c: c[0]):
        if cur and cur[2] == title and cur[3] == artist:
            cur = (cur[0], start, cur[2], cur[3], max(cur[4], score or 0))
        else:
            if cur:
                runs.append(cur)
            cur = (start, start, title, artist, score or 0)
    if cur:
        runs.append(cur)
    return [(s, e, t, a, sc) for s, e, t, a, sc in runs]

async def recognize_chunks(chunks, sem):
    from shazamio import Shazam
    shazam = Shazam()

    async def one(item):
        idx, start, path = item
        async with sem:
            try:
                out = await shazam.recognize(path)
                if out and out.get("track"):
                    t = out["track"]
                    score = (out.get("matches") or [{}])[0].get("score") or 0
                    return (start, t.get("title", ""), t.get("subtitle", ""), score)
            except Exception as e:
                log("chunk %s 認識失敗: %s" % (idx, e))
        return None

    results = await asyncio.gather(*[one(c) for c in chunks])
    return [r for r in results if r]

def fmt_ts(sec):
    h = int(sec // 3600)
    m = int(sec % 3600 // 60)
    s = int(sec % 60)
    return "%02d:%02d:%02d" % (h, m, s) if h else "%02d:%02d" % (m, s)

def main():
    ap = argparse.ArgumentParser(description="YouTube音声から流れた曲をShazamで識別するPoC")
    ap.add_argument("url", help="YouTube URL または 動画ID（--file指定時は無視）")
    ap.add_argument("--file", default="", help="ローカル音声ファイルを直接指定（yt-dlpをスキップ）")
    ap.add_argument("--chunk", type=float, default=15.0, help="チャンク長（秒）")
    ap.add_argument("--overlap", type=float, default=7.5, help="オーバーラップ（秒）")
    ap.add_argument("--start", type=float, default=0.0, help="開始オフセット（秒）")
    ap.add_argument("--max-duration", type=float, default=0.0, help="分析する最大長（秒、0=全編）")
    ap.add_argument("--cookies", default="", help="ブラウザのcookies.txt（Bot判定回避用）")
    ap.add_argument("--clients", default="web,android,tv,web_embedded,ios",
                    help="試行するYouTubeプレイヤークライアント（カンマ区切り）")
    ap.add_argument("--piped", action="store_true", default=True,
                    help="yt-dlp失敗時にPiped APIへフォールバック（既定: 有効）")
    ap.add_argument("--no-piped", dest="piped", action="store_false")
    ap.add_argument("--piped-instances", default=",".join(PIPED_INSTANCES),
                    help="Piped APIインスタンス（カンマ区切り）")
    ap.add_argument("--json", action="store_true", help="JSONで出力")
    args = ap.parse_args()

    with tempfile.TemporaryDirectory(prefix="identify-") as workdir:
        try:
            if args.file:
                src, title, dur = args.file, os.path.basename(args.file), 0
                log("入力: %s" % src)
            else:
                try:
                    src, title, dur = fetch_audio(args.url, workdir, args.cookies, args.clients)
                    log("取得: %s (%.0f秒) -> %s" % (title, dur, os.path.basename(src)))
                except Exception as e:
                    vid = video_id_of(args.url)
                    if args.piped and vid:
                        log("yt-dlp失敗（%s）。Piped APIへフォールバックします" % str(e)[:80])
                        src, title, dur = fetch_audio_piped(
                            vid, workdir, [i.strip() for i in args.piped_instances.split(",") if i.strip()])
                        log("Piped取得: %s (%.0f秒) -> %s" % (title, dur, os.path.basename(src)))
                    else:
                        raise

            if args.max_duration > 0:
                src2 = os.path.join(workdir, "clip." + CHUNK_EXT)
                ffmpeg(["-ss", str(args.start), "-t", str(args.max_duration),
                        "-i", src, "-c:a", "libmp3lame", "-q:a", "7", src2], workdir)
                src = src2
                log("クリップ: %s〜%s秒" % (fmt_ts(args.start), fmt_ts(args.start + args.max_duration)))

            chunks = split_audio(src, workdir, args.chunk, args.overlap)
            log("チャンク %d 個（%.0f秒×オーバーラップ%.0f秒）" % (len(chunks), args.chunk, args.overlap))

            found = asyncio.run(recognize_chunks(chunks, asyncio.Semaphore(4)))
            found.sort(key=lambda c: c[0])
            runs = merge_runs(found)

            if args.json:
                print(json.dumps({
                    "video": {"url": args.url, "title": title, "duration": dur},
                    "chunks": [{"start": s, "title": t, "artist": a, "score": sc}
                               for s, t, a, sc in found],
                    "runs": [{"start": s, "end": e, "title": t, "artist": a, "max_score": sc}
                             for s, e, t, a, sc in runs],
                }, ensure_ascii=False, indent=2))
            else:
                if not runs:
                    print("該当なし（認識できませんでした）")
                    return 0
                print("\n== 認識結果（連続する同一曲をまとめ） ==")
                for s, e, t, a, sc in runs:
                    print("[%s - %s] %s - %s (score %s)"
                          % (fmt_ts(s), fmt_ts(e), t, a, ("%.2f" % sc) if sc else "?"))
            return 0
        except Exception as e:
            print("ERROR: %s" % e, file=sys.stderr)
            return 1

if __name__ == "__main__":
    sys.exit(main())