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

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* iTunes で検索し、最も一致度が高い結果を返す */
async function searchItunes(title, artistHint) {
  const term = artistHint ? `${artistHint} ${title}` : title;
  const qs = new URLSearchParams({ term, entity: "song", limit: "5", country: "jp", lang: "ja_jp" });
  const res = await fetch(`https://itunes.apple.com/search?${qs}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
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

async function main() {
  const w = loadData("songs.js");
  const extra = loadData("songs-extra.js").SONGS_EXTRA || {};
  const karaoke = loadData("karaoke.js").KARAOKE || [];
  const meta = extra.meta || {};
  const songs = w.SONGS || { covers: [] };

  /* key → タイトル（カバー曲の表示タイトルが元曲名として最も信頼できる） */
  const targets = new Map();
  (songs.covers || []).forEach((g) => {
    if (!targets.has(g.key)) targets.set(g.key, g.title || g.key);
  });
  karaoke.forEach((st) => {
    (st.songs || []).forEach((s) => {
      if (!s.key) return;
      if (!targets.has(s.key)) targets.set(s.key, s.title || s.key);
    });
  });

  const out = {};
  let done = 0;
  for (const [key, title] of targets) {
    const artistHint = (meta[key] && meta[key].artist) || "";
    try {
      const info = await searchItunes(title, artistHint);
      if (info && (info.artist || info.cover)) {
        out[key] = info;
      }
    } catch (e) {
      console.warn(`search failed: ${key} (${title}): ${e.message}`);
    }
    done++;
    if (done % 25 === 0) console.log(`searched ${done}/${targets.size}`);
    await sleep(300);
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
