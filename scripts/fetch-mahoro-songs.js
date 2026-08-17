/* ============================================
   fetch-mahoro-songs.js — 鹿乃まほろの楽曲データを data/songs.js に統合する
   - オリジナル曲プレイリスト → official（members: ["mahoro"]）
   - カバープレイリスト → covers（memberId: "mahoro"）
   - APIキー不要（プレイリスト・チャンネル動画一覧を innerTube でスクレイピング）
   - 公開日はチャンネル動画一覧の相対時間から推定（RSS の正確な日付で上書き）
   使い方: node scripts/fetch-mahoro-songs.js
   ============================================ */
"use strict";

const fs = require("fs");
const path = require("path");
const { normalizeTitle, displayTitle } = require("./song-utils.js");

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36";
const CHANNEL_ID = "UCShXNLMXCfstmWKH_q86B8w";
const ORIGINAL_PL = "PLBQuo9fQ-4ePammIzWmZc7uPQc2cN8SWA";
const COVER_PL = "PLBQuo9fQ-4eMX8TSweBQhoduIPt6wEnHI";

async function fetchText(url, opts) {
  const r = await fetch(url, Object.assign({
    headers: { "User-Agent": UA, "Accept-Language": "ja,en;q=0.9" }
  }, opts || {}));
  if (!r.ok) throw new Error("HTTP " + r.status + " " + url.slice(0, 80));
  return r.text();
}

async function fetchJson(url, opts) {
  for (let attempt = 0; attempt < 4; attempt++) {
    try {
      return JSON.parse(await fetchText(url, opts));
    } catch (e) {
      if (attempt === 3) throw e;
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  throw new Error("unreachable");
}

/* ページ HTML から ytInitialData の JSON を切り出す */
function extractJson(html, marker) {
  const i = html.indexOf(marker);
  if (i < 0) return null;
  const start = html.indexOf("{", i);
  if (start < 0) return null;
  const end = html.indexOf("</script>", start);
  if (end < 0) return null;
  const raw = html.slice(start, end).trim().replace(/;+\s*$/, "");
  try { return JSON.parse(raw); } catch (e) { return null; }
}

/* lockupViewModel を収集（videoId / contentType / title / relativeTime） */
function collectLockups(o, out, tokens) {
  if (!o || typeof o !== "object") return;
  if (Array.isArray(o)) { o.forEach((x) => collectLockups(x, out, tokens)); return; }
  for (const k in o) {
    if (k === "lockupViewModel") {
      const lv = o[k];
      const t = lv.metadata && lv.metadata.lockupMetadataViewModel && lv.metadata.lockupMetadataViewModel.title;
      const cm = lv.metadata && lv.metadata.lockupMetadataViewModel && lv.metadata.lockupMetadataViewModel.metadata &&
        lv.metadata.lockupMetadataViewModel.metadata.contentMetadataViewModel;
      const parts = (cm && cm.metadataRows && cm.metadataRows[0] && cm.metadataRows[0].metadataParts) || [];
      const rel = parts[1] && parts[1].text && parts[1].text.content;
      out.push({ contentType: lv.contentType, id: lv.contentId, title: (t && t.content) || "", rel: rel || "" });
    } else if (k === "continuation") tokens.push(o[k]);
    else if (k === "token" && typeof o[k] === "string" && o[k].length > 100) tokens.push(o[k]);
    else collectLockups(o[k], out, tokens);
  }
}

async function browseAll(url, htmlMarker) {
  const html = await fetchText(url);
  const d = extractJson(html, htmlMarker);
  if (!d) throw new Error(htmlMarker + " not found");
  const out = [];
  const tokens = [];
  collectLockups(d, out, tokens);
  const seen = new Set();
  while (tokens.length) {
    const t = tokens.pop();
    if (seen.has(t)) continue;
    seen.add(t);
    let j;
    try {
      j = await fetchJson("https://www.youtube.com/youtubei/v1/browse?prettyPrint=false", {
        method: "POST",
        headers: { "Content-Type": "application/json", "User-Agent": UA, "Accept-Language": "ja,en;q=0.9" },
        body: JSON.stringify({ context: { client: { clientName: "WEB", clientVersion: "2.20240901.00.00" } }, continuation: t })
      });
    } catch (e) {
      continue;   // ページング失敗時は取得済み分で続行
    }
    collectLockups(j, out, tokens);
    await new Promise((r) => setTimeout(r, 500));
  }
  return out;
}

/* 「X 時間前」「X か月前」等の相対時間を日付（YYYY-MM-DD）に変換 */
function relToDate(rel) {
  if (!rel) return "";
  const s = String(rel).normalize("NFKC").toLowerCase().replace(/\s+/g, " ");
  let n = 0;
  let m = /(\d+)\s*(minutes?|hours?|days?|weeks?|months?|years?)\s*ago/.exec(s);
  if (!m) m = /(\d+)\s*(分前|時間前|日前|週間前|か月前|ヶ月前|ヵ月前|年前)/.exec(s);
  if (!m) return "";
  n = parseInt(m[1], 10) || 0;
  const unit = m[2].toLowerCase();
  const now = Date.now();
  let ms;
  if (unit.startsWith("minute") || unit.indexOf("分") === 0) ms = n * 60e3;
  else if (unit.startsWith("hour") || unit.indexOf("時間") === 0) ms = n * 3600e3;
  else if (unit.startsWith("day") || unit.indexOf("日") === 0) ms = n * 86400e3;
  else if (unit.startsWith("week") || unit.indexOf("週") === 0) ms = n * 7 * 86400e3;
  else if (unit.startsWith("month") || unit.indexOf("月") === 0) ms = n * 30 * 86400e3;
  else if (unit.startsWith("year") || unit.indexOf("年") === 0) ms = n * 365 * 86400e3;
  else return "";
  return new Date(now - ms).toISOString().slice(0, 10);
}

/* まほろのカバータイトル整形（表示タイトル・キー生成の前処理） */
function cleanTitle(t) {
  let s = String(t || "");
  s = s.replace(/鹿乃.*$/i, "");                       // 「鹿乃」以降（名前・cover表記）を除去
  s = s.replace(/\s*acoustic\s+cover.*$/i, "");
  s = s.replace(/\s*arrange\s+(ver\.?|cover).*$/i, "");
  s = s.replace(/\s*covered\s+by.*$/i, "");
  s = s.replace(/\s*cover(ed)?\.?\s*$/i, "");
  s = s.replace(/\s*歌いました.*$/i, "");
  s = s.replace(/\s*歌ってみた.*$/i, "");
  s = s.replace(/[（(][^）)]*[）)]/g, "");              // （アーティスト名）等を除去
  s = s.replace(/[\s・\/|｜:：]+$/g, "");
  return s.trim();
}

/* まほろのオリジナル曲タイトル整形（「鹿乃」の名前だけを除去し、前後情報は保持） */
function cleanOfficial(t) {
  let s = String(t || "");
  s = s.replace(/鹿乃/gi, "");                         // 名前のみ除去
  s = s.replace(/【MV】\s*/gi, "");                    // 動画タグ除去
  s = s.replace(/\s+music video$/i, "");               // 英字タグ除去
  s = s.replace(/【】/g, "");                          // 「【鹿乃】」等の残骸
  s = s.replace(/[\s・\/|｜:：-]+$/g, "");
  s = s.replace(/\s{2,}/g, " ");
  return s.trim();
}

async function main() {
  /* プレイリストの VIDEO 項目 */
  const [originalsRaw, coversRaw] = await Promise.all([
    browseAll("https://www.youtube.com/playlist?list=" + ORIGINAL_PL, "ytInitialData"),
    browseAll("https://www.youtube.com/playlist?list=" + COVER_PL, "ytInitialData")
  ]);
  const isVideo = (v) => v.contentType === "LOCKUP_CONTENT_TYPE_VIDEO" && /^[A-Za-z0-9_-]{11}$/.test(v.id);
  const originals = originalsRaw.filter(isVideo);
  const covers = coversRaw.filter(isVideo);
  console.log("original videos:", originals.length, "/ cover videos:", covers.length);

  /* チャンネル動画一覧から公開日を推定（新→古で走査し、時系列を維持） */
  const channelVideos = (await browseAll("https://www.youtube.com/channel/" + CHANNEL_ID + "/videos", "ytInitialData"))
    .filter(isVideo);
  const relById = new Map();
  channelVideos.forEach((v) => relById.set(v.id, v.rel));
  const dateById = new Map();
  let lastDate = "";
  channelVideos.forEach((v) => {
    const d = relToDate(v.rel);
    if (!d) { dateById.set(v.id, lastDate); return; }
    lastDate = d;
    dateById.set(v.id, d);
  });
  console.log("channel videos:", channelVideos.length, "/ playlist ids found:", channelVideos.filter((v) => plIds.has(v.id)).length);
  const plIds = new Set([...originals, ...covers].map((v) => v.id));

  /* RSS フィードの正確な公開日（最新15件）で上書き */
  for (const pl of [ORIGINAL_PL, COVER_PL]) {
    try {
      const xml = await fetchText("https://www.youtube.com/feeds/videos.xml?playlist_id=" + pl);
      const entries = [...xml.matchAll(/<entry>[\s\S]*?<\/entry>/g)].map((m) => m[0]);
      entries.forEach((e) => {
        const id = /<yt:videoId>([^<]+)<\/yt:videoId>/.exec(e);
        const pub = /<published>([^<]+)<\/published>/.exec(e);
        if (id && pub) dateById.set(id[1], pub[1].slice(0, 10));
      });
    } catch (e) { console.warn("rss fail:", e.message); }
  }

  const pubOf = (id) => dateById.get(id) || "";

  /* 既存データを読み込む */
  const songsPath = path.join(__dirname, "..", "data", "songs.js");
  const src = fs.readFileSync(songsPath, "utf8");
  const old = JSON.parse(src.match(/window\.SONGS = (\{[\s\S]*\})/)[1]);

  const official = old.official.slice();
  const officialIds = new Set(official.map((v) => v.id));
  originals.forEach((v) => {
    const ex = official.find((o) => o.id === v.id);
    if (ex) {
      if (dateById.has(v.id)) ex.publishedAt = dateById.get(v.id);
      ex.title = cleanOfficial(v.title);
      return;
    }
    officialIds.add(v.id);
    official.push({
      id: v.id,
      title: cleanOfficial(v.title),
      publishedAt: pubOf(v.id),
      members: ["mahoro"]
    });
  });

  const coverMap = new Map();
  (old.covers || []).forEach((g) => coverMap.set(g.key, g));
  covers.forEach((v) => {
    if (officialIds.has(v.id)) return;
    const key = normalizeTitle(cleanTitle(v.title));
    if (!key) return;
    const g = coverMap.get(key);
    if (g) {
      const ex = g.urls.find((u) => u.id === v.id && u.memberId === "mahoro");
      if (ex) {
        if (!ex.publishedAt && dateById.has(v.id)) ex.publishedAt = dateById.get(v.id);
        return;
      }
      g.urls.push({ id: v.id, memberId: "mahoro", publishedAt: pubOf(v.id) });
    } else {
      const title = displayTitle(cleanTitle(v.title)) || v.title;
      coverMap.set(key, { title, key, urls: [{ id: v.id, memberId: "mahoro", publishedAt: pubOf(v.id) }] });
    }
  });
  const coverList = Array.from(coverMap.values());

  const out = {
    generatedAt: new Date().toISOString().slice(0, 10),
    official: official.sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || "")),
    covers: coverList.sort((a, b) => {
      const na = Math.max(...a.urls.map((u) => u.publishedAt || ""));
      const nb = Math.max(...b.urls.map((u) => u.publishedAt || ""));
      return String(nb).localeCompare(String(na));
    })
  };

  /* 英訳（キャッシュ＋非公式エンドポイント。失敗時は日本語のまま） */
  try {
    const translate = require("./translate.js");
    const titles = [];
    out.official.forEach((s) => titles.push(s.title));
    out.covers.forEach((c) => titles.push(c.title));
    const map = await translate.enMap(titles);
    out.official.forEach((r) => { if (!r.en && map[r.title]) r.en = { title: map[r.title] }; });
    out.covers.forEach((c) => { if (!c.en && map[c.title]) c.en = { title: map[c.title] }; });
  } catch (e) {
    console.warn("translate skipped:", e.message);
  }

  const w = "/* 自動生成: node scripts/fetch-mahoro-songs.js（変更しないでください） */\nwindow.SONGS = " +
    JSON.stringify(out, null, 2) + ";\n";
  fs.writeFileSync(songsPath, w, "utf8");
  console.log("generated: data/songs.js (official:", out.official.length + ", covers:", out.covers.length + ")");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});