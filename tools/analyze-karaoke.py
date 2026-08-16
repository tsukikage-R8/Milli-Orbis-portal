#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""analyze-karaoke.py — 歌枠の自動解析（重複防止付き）
data/karaoke.js の歌枠のうち未解析のもの（status なし / error）に対し
tools/identify-song.py を実行し、結果を data/karaoke-shazam.js に保存する。
解析済みは status: "done"、3回失敗は status: "skip" を付けて重複解析を防ぐ。

使い方:
  python tools/analyze-karaoke.py [--max-videos 3] [--max-minutes 90] [--cookies cookies.txt]

デバッグ用（YouTubeの代わりにローカル音声を使う）:
  KARAOKE_LOCAL_MAP="vos7X7sJ5Dg=/path/a.mp3,6t5oqLio_Ts=/path/b.mp3" python tools/analyze-karaoke.py
"""
import argparse
import datetime
import json
import os
import re
import subprocess
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IDENTIFY = os.path.join(ROOT, "tools", "identify-song.py")
KARAOKE_FILE = os.path.join(ROOT, "data", "karaoke.js")
OUT_FILE = os.path.join(ROOT, "data", "karaoke-shazam.js")

DONE = "done"
ERROR = "error"
SKIP = "skip"


def log(msg):
    print(msg, file=sys.stderr)


def now_utc():
    return datetime.datetime.now(datetime.timezone.utc)


def stale(rec):
    """エラー記録が1週間以上前なら再挑戦する"""
    if not rec:
        return False
    at = rec.get("attemptedAt")
    if not at:
        return False
    try:
        return (now_utc() - datetime.datetime.fromisoformat(at)).days >= 7
    except ValueError:
        return False


def skip_for_now(rec):
    """DONEは永久。SKIPは1週間クールダウン扱い"""
    if not rec:
        return False
    if rec.get("status") == DONE:
        return True
    if rec.get("status") == SKIP and not stale(rec):
        return True
    return False


def parse_js_value(text):
    """'window.XXX = [...]' 形式のJSからJSON値を取り出す"""
    m = re.search(r"=\s*(\[.*\]|\{.*\})\s*;?\s*$", text, re.S)
    if not m:
        raise RuntimeError("JSデータをパースできません")
    return json.loads(m.group(1))


def load_karaoke(karaoke_file):
    return parse_js_value(open(karaoke_file, encoding="utf-8").read())


def load_shazam(out_file):
    if not os.path.exists(out_file):
        return {}
    return parse_js_value(open(out_file, encoding="utf-8").read())


def identify(url, local_file, args):
    cmd = [sys.executable, IDENTIFY, url, "--json",
           "--chunk", str(args.chunk), "--overlap", str(args.overlap)]
    if args.max_minutes > 0:
        cmd += ["--max-duration", str(args.max_minutes * 60)]
    if args.cookies:
        cmd += ["--cookies", args.cookies]
    if local_file:
        cmd += ["--file", local_file]
    p = subprocess.run(cmd, capture_output=True, text=True)
    if p.returncode != 0:
        tail = (p.stderr or p.stdout or "").strip().splitlines()
        raise RuntimeError(tail[-1][:300] if tail else "識別に失敗しました")
    try:
        return json.loads(p.stdout)
    except ValueError as e:
        raise RuntimeError("identify-song.py のJSON出力を解析できませんでした: %s" % e)


def main():
    ap = argparse.ArgumentParser(description="歌枠の自動解析（重複防止付き）")
    ap.add_argument("--max-videos", type=int, default=3, help="1回の実行で解析する上限（件）")
    ap.add_argument("--max-minutes", type=int, default=90, help="1本あたりの解析上限（分）")
    ap.add_argument("--chunk", type=float, default=15.0, help="チャンク長（秒）")
    ap.add_argument("--overlap", type=float, default=7.5, help="オーバーラップ（秒）")
    ap.add_argument("--cookies", default=os.environ.get("KARAOKE_COOKIES", ""), help="cookies.txt（Bot判定回避用）")
    ap.add_argument("--karaoke-file", default=KARAOKE_FILE, help=argparse.SUPPRESS)
    ap.add_argument("--out-file", default=OUT_FILE, help=argparse.SUPPRESS)
    args = ap.parse_args()

    karaoke = load_karaoke(args.karaoke_file)
    shazam = load_shazam(args.out_file)

    local_map = {}
    for pair in os.environ.get("KARAOKE_LOCAL_MAP", "").split(","):
        if "=" in pair:
            vid, path = pair.split("=", 1)
            local_map[vid.strip()] = path.strip()

    candidates = [
        st for st in karaoke
        if not skip_for_now(shazam.get(st["id"]))
    ]
    candidates.sort(key=lambda s: s.get("publishedAt", ""), reverse=True)
    log("歌枠 %d 件中、未解析 %d 件" % (len(karaoke), len(candidates)))
    if len(candidates) > args.max_videos:
        log("今回の上限 %d 件（新しい順、残りは次回以降）" % args.max_videos)
        candidates = candidates[:args.max_videos]

    done_n = err_n = 0
    for st in candidates:
        vid = st["id"]
        prev = shazam.get(vid) or {}
        attempts = 1 if stale(prev) else (prev.get("attempts") or 0) + 1
        log("解析中: %s (%s)" % (vid, (st.get("title") or "")[:40]))
        try:
            if vid in local_map:
                data = identify("x", local_map[vid], args)
                log("  → ローカル音声で解析（デバッグ用）")
            else:
                data = identify("https://www.youtube.com/watch?v=" + vid, "", args)
            runs = [{
                "start": r.get("start", 0),
                "end": r.get("end", 0),
                "title": r.get("title", ""),
                "artist": r.get("artist", ""),
                "score": r.get("max_score", 0),
            } for r in data.get("runs", [])]
            shazam[vid] = {
                "status": DONE,
                "analyzedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(),
                "duration": st.get("duration", 0),
                "runs": runs,
            }
            log("  → done: %d 曲認識" % len(runs))
            done_n += 1
        except Exception as e:
            if attempts >= 5:
                shazam[vid] = {"status": SKIP, "attempts": attempts, "attemptedAt": now_utc().isoformat(), "error": str(e)[:300]}
                log("  → 今週は5回失敗のため休止（1週間後に自動再挑戦）")
            else:
                shazam[vid] = {"status": ERROR, "attempts": attempts, "attemptedAt": now_utc().isoformat(), "error": str(e)[:300]}
                log("  → error (%d/5): %s" % (attempts, str(e)[:120]))
            err_n += 1
        time.sleep(5)  # Shazam API への負荷対策

    out = ("/* 自動生成: python tools/analyze-karaoke.py（変更しないでください） */\n"
           "window.KARAOKE_SHAZAM = " + json.dumps(shazam, ensure_ascii=False, indent=2) + ";\n")
    if not os.path.exists(args.out_file) or open(args.out_file, encoding="utf-8").read() != out:
        os.makedirs(os.path.dirname(args.out_file), exist_ok=True)
        with open(args.out_file, "w", encoding="utf-8") as f:
            f.write(out)
        log("書き込み: %s" % args.out_file)

    remaining = sum(
        1 for st in karaoke
        if not skip_for_now(shazam.get(st["id"]))
    )
    log("完了: %d 件成功 / %d 件エラー / 残り %d 件" % (done_n, err_n, remaining))
    return 0


if __name__ == "__main__":
    sys.exit(main())