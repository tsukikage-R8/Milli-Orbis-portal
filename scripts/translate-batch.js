/* ============================================
   translate-batch.js — 既存データの日本語タイトルに en ブロックを付与する
   対象: data/songs.js / data/karaoke.js / data/song-master.js / data/youtube.json
   （data/songs-extra.js は手動管理のため対象外）
   使い方: node scripts/translate-batch.js   （データ書き換え・コミット対象）
   ============================================ */
"use strict";

const fs = require("fs");
const path = require("path");
const translate = require("./translate.js");

const root = path.join(__dirname, "..");
const ja = /[ぁ-んァ-ヶ一-龯]/;

function loadJs(file, varName) {
  const src = fs.readFileSync(path.join(root, "data", file), "utf8");
  const w = {};
  new Function("window", src + "\nreturn window." + varName)(w);
  return w[varName];
}

function writeJs(file, varName, obj) {
  const src = "/* 自動生成: node scripts/" + (file === "songs.js" ? "fetch-songs.js" : file === "karaoke.js" ? "fetch-karaoke.js" : "fetch-album-arts.js") +
    " + scripts/translate-batch.js（変更しないでください） */\nwindow." + varName + " = " +
    JSON.stringify(obj, null, 2) + ";\n";
  fs.writeFileSync(path.join(root, "data", file), src, "utf8");
  console.log("updated: data/" + file);
}

function setEn(rec) {
  if (!rec) return false;
  if (rec.en) return true;
  if (rec.title && ja.test(rec.title)) rec.en = { title: rec.title };
  return false;
}

async function main() {
  /* 1) songs.js */
  const SONGS = loadJs("songs.js", "SONGS");
  const songTitles = [];
  SONGS.official.forEach((s) => { if (!setEn(s)) songTitles.push(s.title); });
  SONGS.covers.forEach((c) => { if (!setEn(c)) songTitles.push(c.title); });

  /* 2) karaoke.js */
  const KARAOKE = loadJs("karaoke.js", "KARAOKE");
  const karaokeTitles = [];
  KARAOKE.forEach((k) => {
    if (!setEn(k)) karaokeTitles.push(k.title);
    (k.songs || []).forEach((s) => { if (!setEn(s)) karaokeTitles.push(s.title); });
  });

  /* 3) song-master.js（アーティスト名は固有名詞のため翻訳しない） */
  const SM = loadJs("song-master.js", "SONG_MASTER");
  const smTitles = [];
  Object.values(SM.songs || {}).forEach((e) => {
    if (!setEn(e)) smTitles.push(e.title);
  });

  /* 4) youtube.json */
  const YT = JSON.parse(fs.readFileSync(path.join(root, "data", "youtube.json"), "utf8"));
  const ytTitles = [];
  (YT.videos || []).forEach((v) => { if (!setEn(v)) ytTitles.push(v.title); });
  (YT.upcoming || []).forEach((v) => { if (!setEn(v)) ytTitles.push(v.title); });
  (YT.news || []).forEach((v) => { if (!setEn(v)) ytTitles.push(v.title); });

  /* 一括翻訳 */
  const need = [...new Set([...songTitles, ...karaokeTitles, ...smTitles, ...ytTitles])];
  console.log("to translate:", need.length);
  const map = await translate.enMap(need);

  const apply = (rec) => {
    if (!rec || !rec.en || !map[rec.en.title]) return;
    rec.en.title = map[rec.en.title];
  };
  SONGS.official.forEach(apply);
  SONGS.covers.forEach(apply);
  KARAOKE.forEach((k) => {
    apply(k);
    (k.songs || []).forEach(apply);
  });
  Object.values(SM.songs || {}).forEach(apply);
  (YT.videos || []).forEach(apply);
  (YT.upcoming || []).forEach(apply);
  (YT.news || []).forEach(apply);

  /* 翻訳に失敗したレコードは en を外す（日本語のまま） */
  const dropFailed = (rec) => {
    if (rec && rec.en && !rec.en.title) delete rec.en;
  };
  SONGS.official.forEach(dropFailed);
  SONGS.covers.forEach(dropFailed);
  KARAOKE.forEach((k) => {
    dropFailed(k);
    (k.songs || []).forEach(dropFailed);
  });
  Object.values(SM.songs || {}).forEach(dropFailed);
  (YT.videos || []).forEach(dropFailed);

  writeJs("songs.js", "SONGS", SONGS);
  writeJs("karaoke.js", "KARAOKE", KARAOKE);
  writeJs("song-master.js", "SONG_MASTER", SM);
  fs.writeFileSync(path.join(root, "data", "youtube.json"), JSON.stringify(YT, null, 2), "utf8");
  console.log("updated: data/youtube.json");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});