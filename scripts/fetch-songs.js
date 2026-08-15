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
  koma: { playlistId: "PLznEl2O8TKcwjom6kQLvupgwW6j0uSL74", memberId: "koma" },
  raco: { playlistId: "PLWzEr1iWdJ1jQwJL0OXHS_Z1AgLR5rAa7", memberId: "raco" },
  yura: { playlistId: "PLAOJZw9w-IQs1CfU_sreS9n1KefB77oV5", memberId: "yura" },
  nuhu: { playlistId: "PL8lnm2jOyoCCdDW7Wp6AJpL7MD-BCELqN", memberId: "nuhu" },
  tsukuri: { playlistId: "PLQA45rTkdhdeDeoBYz9xK6f_51kPzDB8R", memberId: "tsukuri" },
  liz: { playlistId: "PL8EAIbSZy-jkAp1LF2ocnAVtex4MWA4rU", memberId: "liz" }
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
  s = s.replace(/\s*covered\s+by\s+.*$/i, "");   // covered by 以降（コラボ相手名など）を除去
  // メンバー名（漢字・かな）は正規化（ー・記号除去）より先に除去する
  for (const name of Object.values(MEMBER_NAMES)) {
    s = s.replace(new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "");
  }
  MEMBER_ALIASES.forEach(([alias]) => {
    s = s.replace(new RegExp(alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "");
  });
  s = s.replace(/【[^】]*】/g, "");         // 【歌ってみた】等
  s = s.replace(/\[[^\]]*\]/g, "");         // [ ... ] タグ
  s = s.replace(/（[^）]*）/g, "");          // （字幕）等
  s = s.replace(/\([^)]*\)/g, "");
  s = s.replace(/[「」『』"“”・×]|<\/?[^>]+>/g, "");
  s = s.replace(/[\s　ー~〜]/g, "");
  s = s.replace(/歌ってみた|カバー|cover|弾いてみた|歌枠|歌って|歌う|歌/gi, "");
  s = s.replace(/[\/|｜:：]/g, "");
  s = s.replace(/millionproduction|ミリプロ|officialmv|official|mv/gi, "");
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
  s = s.replace(/[\s\/|｜]+$/, "");                  // 末尾のスラッシュ等を除去
  return s;
}

const MEMBER_NAMES = {
  konomi: "甘狼このみ",
  nono: "音ノ乃のの",
  akubi: "あくび・でもんすぺーど",
  koma: "小廻こま",
  raco: "音ノ瀬らこ",
  yura: "ゆらぎゆら",
  nuhu: "虹深°ぬふ",
  tsukuri: "眠雲ツクリ",
  liz: "雨夜リズ",
  rei: "夕霧レイ"
};

/* かな表記など別名でのメンバー検出（例: あまかみこのみ） */
const MEMBER_ALIASES = [
  ["あまかみこのみ", "konomi"],
  ["おとのののの", "nono"],
  ["こまわりこま", "koma"],
  ["おとのせらこ", "raco"],
  ["にじぷかぬふ", "nuhu"],
  ["ぬふちゃ", "nuhu"],
  ["ねむくもつくり", "tsukuri"],
  ["あまよりず", "liz"],
  ["ゆうぎりれい", "rei"]
];

/* 公式楽曲（オリジナル曲）のみ。それ以外のプレイリスト収録曲は全てカバー扱い */
const OFFICIAL_SONGS = [
  { re: /想わせ|らぶりー/, members: ["konomi"] },
  { re: /約束/, members: ["nono"] },
  { re: /アルテマ/, members: ["nono"] },
  { re: /ののの音々ネ/, members: ["nono"] },
  { re: /ロクデナシテンシ/, members: ["nono"] },
  { re: /HYPE\s*SEEKER/i, members: ["nono"] },
  { re: /Mile\s*Stone/i, members: [] },
  { re: /Princess\s*Viral/i, members: ["nono"] },
  { re: /ルミナス/, members: ["raco"] },
  { re: /おきらくスーパースター/, members: ["koma"] }
];

function officialRule(title) {
  return OFFICIAL_SONGS.find((r) => r.re.test(title)) || null;
}

/* タイトル内のメンバー名（漢字・かな）から参加メンバーを検出 */
function memberIdsInTitle(title) {
  const found = [];
  for (const [id, name] of Object.entries(MEMBER_NAMES)) {
    if (title.includes(name)) found.push(id);
  }
  MEMBER_ALIASES.forEach(([alias, id]) => {
    if (title.includes(alias) && found.indexOf(id) === -1) found.push(id);
  });
  return found;
}

/* タイトル内に他のミリプロメンバー名が含まれるコラボ曲を検出 */
function collabMembers(title, ownerId) {
  return memberIdsInTitle(title).filter((id) => id !== ownerId);
}

/* グループ曲の参加メンバー上書き（タイトルから自動判定できない既知曲）
   いずれもメンバー全員（夕霧レイを除く）が参加している全体曲 */
const ALL_BUT_REI = Object.keys(MEMBER_NAMES).filter((id) => id !== "rei");
const GROUP_OVERRIDES = {
  snowhalation: { title: "Snow halation（ミリプロ全体カバー）", members: ALL_BUT_REI },
  milestone: { title: "Mile Stone / Million Production（ミリプロ全体曲）", members: ALL_BUT_REI }
};

async function main() {
  const official = await fetchPlaylist(PLAYLISTS.official.playlistId);
  const byMember = {};
  for (const [key, cfg] of Object.entries(PLAYLISTS)) {
    if (key === "official") continue;
    byMember[cfg.memberId] = await fetchPlaylist(cfg.playlistId);
    console.log(`playlist ${key}: ${byMember[cfg.memberId].length} items`);
  }

  // 公式: オリジナル曲のみを公式楽曲として保持（動画IDで重複除去）。それ以外はカバー扱い
  const officialSeen = new Set();
  const officialList = [];
  const coverFromOfficial = [];
  official.forEach((v) => {
    if (officialSeen.has(v.id)) return;
    const rule = officialRule(v.title);
    if (rule) {
      officialSeen.add(v.id);
      officialList.push({ id: v.id, title: v.title, publishedAt: v.publishedAt, members: rule.members });
    } else {
      coverFromOfficial.push(v);
    }
  });

  // 歌ってみた: 公式カバー＋メンバープレイリストをタイトルキーで統合 → 複数メンバーで歌われた曲は1カードにまとめる
  const coverMap = new Map();
  const addCover = (title, videoId, publishedAt, ids) => {
    const k = normalizeTitle(title);
    if (!k) return;
    if (!coverMap.has(k)) {
      coverMap.set(k, { title: displayTitle(title), key: k, urls: [] });
    }
    const group = coverMap.get(k);
    ids.forEach((m) => {
      if (!group.urls.some((u) => u.id === videoId && u.memberId === m)) {
        group.urls.push({ id: videoId, memberId: m, publishedAt });
      }
    });
  };
  // 公式チャンネルのカバー（メンバー名検出、なければ「ミリプロ（全体）」扱い）
  coverFromOfficial.forEach((v) => {
    const ids = memberIdsInTitle(v.title);
    addCover(v.title, v.id, v.publishedAt, ids.length ? ids : ["official"]);
  });
  // メンバーの歌ってみたプレイリスト（オリジナル曲の再掲はカバーに含めない）
  Object.entries(byMember).forEach(([memberId, items]) => {
    items.forEach((v) => {
      if (officialRule(v.title)) return;
      const ids = [memberId].concat(collabMembers(v.title, memberId));
      addCover(v.title, v.id, v.publishedAt, ids);
    });
  });
    const coverList = Array.from(coverMap.values())
    .map((g) => {
      // グループ曲上書き: 参加メンバーに揃え、動画リンクは既存（実在）の動画にフォールバック
      const ov = GROUP_OVERRIDES[g.key];
      if (ov) {
        const fallback = g.urls[0] || { id: "", publishedAt: "" };
        g.title = ov.title;
        g.urls = ov.members.map((m) => {
          const ex = g.urls.find((u) => u.memberId === m);
          return { id: ex ? ex.id : fallback.id, memberId: m, publishedAt: ex ? ex.publishedAt : fallback.publishedAt };
        });
      }
      return { ...g, urls: g.urls.sort((a, b) => a.memberId.localeCompare(b.memberId)) };
    })
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

  const src = "/* 自動生成: node scripts/fetch-songs.js（変更しないでください） */\nwindow.SONGS = " +
    JSON.stringify(out, null, 2) + ";\n";
  const outPath = path.join(__dirname, "..", "data", "songs.js");
  fs.writeFileSync(outPath, src, "utf8");
  console.log(`generated: data/songs.js (official: ${out.official.length}, covers: ${out.covers.length})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});