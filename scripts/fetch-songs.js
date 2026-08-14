/* ============================================
   fetch-songs.js — ミリプロ楽曲一覧データを生成する
   公式「ミリプロ歌まとめ」プレイリスト＋メンバー10名の歌ってみたプレイリストを取得し、
   タイトルを正規化して重複を統合した data/songs.js を出力する。
   使い方: YOUTUBE_API_KEY=xxx node scripts/fetch-songs.js
   ============================================ */
"use strict";

const fs = require("fs");
const path = require("path");

const API_KEY = process.env.YOUTUBE_API_KEY;
if (!API_KEY) {
  console.error("YOUTUBE_API_KEY が設定されていません");
  process.exit(1);
}

const PLAYLISTS = {
  official: { playlistId: "PLp8b6eqrLbDoG1zpmBNq8fklvtkbelcBM", memberId: "official" },
  konomi: { playlistId: "PL5p6FQYYgVRziaI4RLjTdADmK0oU9GWG7", memberId: "konomi" },
  nono: { playlistId: "PLcuYuav35lC8wCgR7p6jzqZ27YK5vTM-c", memberId: "nono" },
  akubi: { playlistId: "PL8y8XXg_BJN_eUBFROyVitl4mXkYA70XE", memberId: "akubi" },
  raco: { playlistId: "PLWzEr1iWdJ1jQwJL0OXHS_Z1AgLR5rAa7", memberId: "raco" },
  yura: { playlistId: "PLAOJZw9w-IQs1CfU_sreS9n1KefB77oV5", memberId: "yura" },
  nuhu: { playlistId: "PLQA45rTkdhdeDeoBYz9xK6f_51kPzDB8R", memberId: "nuhu" },
  tsukuri: { playlistId: "PLznEl2O8TKcwjom6kQLvupgwW6j0uSL74", memberId: "tsukuri" },
  liz: { playlistId: "PL8EAIbSZy-jkAp1LF2ocnAVtex4MWA4rU", memberId: "liz" },
  rei: { playlistId: "PL8lnm2jOyoCCdDW7Wp6AJpL7MD-BCELqN", memberId: "rei" }
};

const BASE = "https://www.googleapis.com/youtube/v3/playlistItems";
const retry = (fn, n = 3) =>
  fn().catch((err) => {
    if (n <= 1) throw err;
    return new Promise((res) => setTimeout(res, 1500)).then(() => retry(fn, n - 1));
  });

async function fetchPlaylist(playlistId) {
  const items = [];
  let pageToken = "";
  do {
    const qs = new URLSearchParams({
      part: "snippet,contentDetails",
      playlistId,
      maxResults: "50",
      key: API_KEY
    });
    if (pageToken) qs.set("pageToken", pageToken);
    const data = await retry(() =>
      fetch(`${BASE}?${qs}`).then(async (r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status} (${playlistId})`);
        return r.json();
      })
    );
    (data.items || []).forEach((it) => {
      const s = it.snippet || {};
      if (!it.contentDetails || !it.contentDetails.videoId) return;
      const title = s.title || "";
      if (/^(private|deleted) video$/i.test(title)) return;
      items.push({
        id: it.contentDetails.videoId,
        title,
        publishedAt: (s.publishedAt || "").slice(0, 10),
        channelTitle: s.videoOwnerChannelTitle || s.channelTitle || ""
      });
    });
    pageToken = data.nextPageToken || "";
  } while (pageToken);
  return items;
}

/* タイトル正規化: 括弧タグ除去・記号除去・小文字化 → 楽曲名キー */
function normalizeTitle(t) {
  let s = String(t || "");
  s = s.replace(/【[^】]*】/g, "");         // 【歌ってみた】等
  s = s.replace(/\[[^\]]*\]/g, "");         // [ ... ] タグ
  s = s.replace(/（[^）]*）/g, "");          // （字幕）等
  s = s.replace(/\([^)]*\)/g, "");
  s = s.replace(/[「」『』"“”・]|<\/?[^>]+>/g, "");
  s = s.replace(/[\s　ー~〜]/g, "");
  s = s.replace(/歌ってみた|カバー|cover|弾いてみた|歌枠|歌って|歌う|歌/gi, "");
  s = s.replace(/[\/|｜:：]/g, "");
  return s.toLowerCase();
}

/* 表示用タイトル整理: カバー表記や「/ メンバー名（cover）」等を除去 */
function displayTitle(t) {
  let s = String(t || "");
  s = s.replace(/【[^】]*】/g, "").trim();
  s = s.replace(/\s*\/\s*[^/]*?（cover）$/i, "");   // / 甘狼このみ（cover）
  s = s.replace(/\s*\/\s*[^/]*?\(cover\)$/i, "");   // / 夕霧レイ (cover)
  s = s.replace(/\s*-\s*cover\s*$/i, "");           // - cover
  s = s.replace(/\s+covered by\s+[^/]*$/i, "");     // covered by 音ノ乃のの
  s = s.replace(/\s*\(.*?\)\s*$/g, "").trim();
  return s;
}

async function main() {
  const official = await fetchPlaylist(PLAYLISTS.official.playlistId);
  const byMember = {};
  for (const [key, cfg] of Object.entries(PLAYLISTS)) {
    if (key === "official") continue;
    byMember[cfg.memberId] = await fetchPlaylist(cfg.playlistId);
    console.log(`playlist ${key}: ${byMember[cfg.memberId].length} items`);
  }

  // 公式: タイトル正規化で重複除去
  const officialSeen = new Set();
  const officialList = [];
  official.forEach((v) => {
    const k = normalizeTitle(v.title);
    if (!k || officialSeen.has(k)) return;
    officialSeen.add(k);
    officialList.push({ id: v.id, title: v.title, publishedAt: v.publishedAt });
  });

  // 歌ってみた: タイトルキーで統合 → 複数メンバーで歌われた曲は1カードにまとめる
  const coverMap = new Map();
  Object.entries(byMember).forEach(([memberId, items]) => {
    items.forEach((v) => {
      const k = normalizeTitle(v.title);
      if (!k) return;
      if (!coverMap.has(k)) {
        coverMap.set(k, { title: displayTitle(v.title), key: k, urls: [] });
      }
      const group = coverMap.get(k);
      if (!group.urls.some((u) => u.id === v.id)) {
        group.urls.push({ id: v.id, memberId, publishedAt: v.publishedAt });
      }
    });
  });
  const coverList = Array.from(coverMap.values())
    .map((g) => ({ ...g, urls: g.urls.sort((a, b) => a.memberId.localeCompare(b.memberId)) }))
    .sort((a, b) => {
      const na = Math.max(...a.urls.map((u) => u.publishedAt || ""));
      const nb = Math.max(...b.urls.map((u) => u.publishedAt || ""));
      return na > nb ? -1 : 1;
    });

  const out = {
    generatedAt: new Date().toISOString().slice(0, 10),
    official: officialList.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1)),
    covers: coverList
  };

  const src = "/* 自動生成: node scripts/fetch-songs.js（変更しないでください） */\nconst SONGS = " +
    JSON.stringify(out, null, 2) + ";\n";
  const outPath = path.join(__dirname, "..", "data", "songs.js");
  fs.writeFileSync(outPath, src, "utf8");
  console.log(`generated: data/songs.js (official: ${out.official.length}, covers: ${out.covers.length})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});