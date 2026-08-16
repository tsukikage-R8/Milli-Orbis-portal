/* ============================================
   translate.js — 日本語→英語 翻訳エンジン（fetch スクリプト共用）
   - TRANSLATE_API_KEY が設定されていれば Google Cloud Translation v2 を使用
   - なければ非公式エンドポイント（translate.googleapis.com translate_a/single?client=gtx）
   - どちらも失敗・翻訳不要（日本語を含まない）場合は null を返す（= 英語訳なし、日本語のまま）
   - キャッシュ: data/translate-cache.json（コミット対象。週次 fetch で再翻訳を防ぐ）
   使い方:
     const translate = require("./translate.js");
     const en = await translate.en("かげろうデイズ");      // → "Kagerou Days" | null
     const map = await translate.enMap(["a", "b"]);        // → { "a": "A", ... }（翻訳できたもののみ）
   ============================================ */
"use strict";

const fs = require("fs");
const path = require("path");

const CACHE_FILE = path.join(__dirname, "..", "data", "translate-cache.json");
const JA_RE = /[ぁ-んァ-ヶ一-龯]/;
const API_KEY = process.env.TRANSLATE_API_KEY || "";

let cache = null;

function loadCache() {
  if (cache) return cache;
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
  } catch (e) {
    cache = {};
  }
  return cache;
}

function saveCache() {
  if (!cache) return;
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 1), "utf8");
  } catch (e) {
    console.error("translate: cache save failed:", e.message);
  }
}

function clean(s) {
  return String(s)
    .replace(/\u200b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/* 公式 API（Google Cloud Translation v2） */
async function official(texts) {
  const out = new Array(texts.length).fill(null);
  const CHUNK = 100;
  for (let i = 0; i < texts.length; i += CHUNK) {
    const chunk = texts.slice(i, i + CHUNK);
    const qs = new URLSearchParams();
    chunk.forEach((t) => qs.append("q", t));
    qs.set("target", "en");
    qs.set("format", "text");
    const res = await fetch("https://translation.googleapis.com/language/translate/v2?key=" + encodeURIComponent(API_KEY), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: qs.toString()
    });
    if (!res.ok) throw new Error("official API " + res.status);
    const data = await res.json();
    const list = (data.data && data.data.translations) || [];
    list.forEach((tr, j) => {
      const t = clean(tr.translatedText);
      if (t && t !== texts[i + j]) out[i + j] = t;
    });
  }
  return out;
}

/* 非公式エンドポイント（1件ずつ） */
async function unofficial(texts, onProgress) {
  const out = new Array(texts.length).fill(null);
  let done = 0;
  for (let i = 0; i < texts.length; i++) {
    const t = texts[i];
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const res = await fetch(
          "https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=en&dt=t&q=" +
          encodeURIComponent(t)
        );
        if (!res.ok) throw new Error("gtx " + res.status);
        const data = await res.json();
        const seg = (data[0] || []).map((s) => s[0]).join("");
        const en = clean(seg);
        if (en && en !== t) out[i] = en;
        break;
      } catch (e) {
        if (attempt === 2) {
          console.warn("translate: failed " + JSON.stringify(t.slice(0, 30)) + " — " + e.message);
          break;
        }
        await new Promise((r) => setTimeout(r, 800 * (attempt + 1)));
      }
    }
    done++;
    if (onProgress && done % 50 === 0) onProgress(done, texts.length);
    await new Promise((r) => setTimeout(r, 60));
  }
  return out;
}

/* 日本語を含むテキストを英語に翻訳（不要・失敗時は null） */
async function en(text) {
  const map = await enMap([text]);
  return map[text] || null;
}

/* 配列一括翻訳 → { 原文: 訳文 }（翻訳できたもののみ含む） */
async function enMap(texts) {
  const c = loadCache();
  const todo = [];
  const idx = [];
  texts.forEach((t, i) => {
    if (!t || !JA_RE.test(t)) return;
    if (c[t] !== undefined) return;
    todo.push(t);
    idx.push(i);
  });
  const result = {};
  if (todo.length) {
    const plain = [...new Set(todo)];
    let enList;
    if (API_KEY) {
      enList = await official(plain);
    } else {
      enList = await unofficial(plain, (d, n) => console.log(`translate: ${d}/${n}`));
    }
    plain.forEach((t, j) => {
      const v = enList[j];
      if (v) {
        c[t] = v;
        result[t] = v;
      }
    });
    saveCache();
  }
  texts.forEach((t, i) => {
    if (c[t] !== undefined) result[t] = c[t];
  });
  return result;
}

module.exports = { en, enMap, loadCache, saveCache };