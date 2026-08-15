/* ============================================
   fetch-album-arts.js — 元曲のアルバム情報（ジャケット等）を生成する
   iTunes Search API（キー不要）でカバー曲の元曲を検索し、
   アーティスト・アルバム・ジャケットURLを data/song-master.js に出力する。
   使い方: node scripts/fetch-album-arts.js
   補足: 同名別アーティスト等の誤マッチがあり得るため、
         data/songs-extra.js の meta に artist / album / cover を
         登録すると手動で上書きできる（meta が優先される）。
   ============================================ */
"use strict";

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

/* window.X = ... 形式のブラウザデータファイルを読む */
function loadData(file) {
  const src = fs.readFileSync(path.join(root, "data", file), "utf8");
  const sandbox = { window: {} };
  const fn = new Function("window", src + "\nreturn { SONGS: window.SONGS, SONGS_EXTRA: window.SONGS_EXTRA, KARAOKE: window.KARAOKE };");
  const ctx = fn(sandbox.window);
  sandbox.window.SONGS = ctx.SONGS;
  sandbox.window.SONGS_EXTRA = ctx.SONGS_EXTRA;
  sandbox.window.KARAOKE = ctx.KARAOKE;
  return sandbox.window;
}

/* 検索キー用の簡易正規化（小文字・空白/記号除去） */
function norm(s) {
  return String(s || "").normalize("NFKC").toLowerCase().replace(/[\s　()（）\[\]【】・〜〜\-'"'"`、。,.!！?？:：/／|｜]/g, "");
}

/* タイトルから「曲名 / アーティスト」を分解（歌枠チャプター形式） */
function splitSongArtist(title) {
  const t = String(title || "").trim();
  const m = /^(.+?)\s*[/／]\s*(.+)$/.exec(t);
  if (!m) return { title: t, artist: "" };
  const song = m[1].trim();
  const artist = m[2].trim().replace(/\s*[\(（].*$/, "");
  if (!song || !artist) return { title: t, artist: "" };
  return { title: song, artist };
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* iTunes で検索し、最も一致度が高い結果を返す（403 等はリトライ付き） */
async function searchItunes(title, artistHint) {
  const term = artistHint ? `${artistHint} ${title}` : title;
  const qs = new URLSearchParams({ term, entity: "song", limit: "5", country: "jp", lang: "ja_jp" });
  let res = null;
  for (let attempt = 1; attempt <= 4; attempt++) {
    res = await fetch(`https://itunes.apple.com/search?${qs}`);
    if (res.ok) break;
    if (res.status === 403) throw new Error("HTTP 403 (rate limited)");   // リトライ無意味
    await sleep(attempt * 2000);
  }
  if (!res || !res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const items = (data.results || []).filter((r) => r.kind === "song" && r.trackName);
  if (!items.length) return null;
  const want = norm(title);
  const exact = items.find((r) => norm(r.trackName) === want);
  const pick = exact || items[0];
  return {
    title: pick.trackName,
    artist: pick.artistName || "",
    album: pick.collectionName || "",
    cover: (pick.artworkUrl100 || "").replace("100x100bb", "600x600bb")
  };
}

/* iTunes が落ちているときのフォールバック: Deezer Search API（キー不要） */
async function searchDeezer(title, artistHint) {
  const q = artistHint ? `${artistHint} ${title}` : title;
  const res = await fetch(`https://api.deezer.com/search?q=${encodeURIComponent(q)}&limit=10`);
  if (!res.ok) throw new Error(`deezer HTTP ${res.status}`);
  const data = await res.json();
  /* カラオケ・インスト・メドレー版は除外（元曲のジャケットが欲しいため） */
  const karaokeRe = /カラオケ|インスト|instrumental|karaoke|ガイド無し|原曲歌手|メドレー|off vocal|オフボーカル/i;
  const items = (data.data || []).filter((r) =>
    r.title && !karaokeRe.test(`${r.title} ${(r.album && r.album.title) || ""}`)
  );
  if (!items.length) return null;
  const want = norm(title);
  let pick = null;
  if (artistHint) {
    const hint = norm(artistHint);
    pick = items.find((r) => {
      const an = norm(r.artist && r.artist.name);
      return an && (an.indexOf(hint) !== -1 || hint.indexOf(an) !== -1);
    }) || null;
  }
  if (!pick) pick = items.find((r) => norm(r.title_short || r.title) === want) || items[0];
  return {
    title: pick.title || "",
    artist: (pick.artist && pick.artist.name) || "",
    album: (pick.album && pick.album.title) || "",
    cover: (pick.album && (pick.album.cover_big || pick.album.cover_medium || "")) || ""
  };
}

async function main() {
  const w = loadData("songs.js");
  const extra = loadData("songs-extra.js").SONGS_EXTRA || {};
  const karaoke = loadData("karaoke.js").KARAOKE || [];
  const meta = extra.meta || {};
  const songs = w.SONGS || { covers: [] };

  /* key → タイトル（カバー曲の表示タイトルが元曲名として最も信頼できる。
     歌枠チャプターの「曲名 / アーティスト」が一致すればアーティストヒントとして優先） */
  const targets = new Map();
  (songs.covers || []).forEach((g) => {
    if (!targets.has(g.key)) targets.set(g.key, g.title || g.key);
  });
  karaoke.forEach((st) => {
    (st.songs || []).forEach((s) => {
      if (!s.key) return;
      if (targets.has(s.key) && /[\/／]/.test(s.title || "")) {
        targets.set(s.key, s.title);   // アーティスト付きを優先
      } else if (!targets.has(s.key)) {
        targets.set(s.key, s.title || s.key);
      }
    });
  });

  const out = {};
  let done = 0;
  for (const [key, title] of targets) {
    const metaArtist = (meta[key] && meta[key].artist) || "";
    const parsed = splitSongArtist(title);
    const artistHint = metaArtist || parsed.artist;
    const searchTitle = parsed.artist ? parsed.title : title;
    try {
      let info = null;
      try {
        info = await searchItunes(searchTitle, artistHint);
      } catch (e) {
        info = await searchDeezer(searchTitle, artistHint);   // iTunes 失敗時は Deezer へ
      }
      if (info && (info.artist || info.cover)) {
        out[key] = info;
      }
    } catch (e) {
      console.warn(`search failed: ${key} (${title}): ${e.message}`);
    }
    done++;
    if (done % 25 === 0) console.log(`searched ${done}/${targets.size}`);
    await sleep(4000);
  }

  const src = "/* 自動生成: node scripts/fetch-album-arts.js（変更しないでください） */\nwindow.SONG_MASTER = " +
    JSON.stringify({ generatedAt: new Date().toISOString().slice(0, 10), songs: out }, null, 2) + ";\n";
  fs.writeFileSync(path.join(root, "data", "song-master.js"), src, "utf8");
  console.log(`generated: data/song-master.js (${Object.keys(out).length}/${targets.size} songs)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
