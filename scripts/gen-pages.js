const fs = require("fs");
const path = require("path");

const dataSrc = fs.readFileSync(path.join(__dirname, "..", "data.js"), "utf8");
eval(dataSrc.replace(/^const (\w+) =/gm, "globalThis.$1 ="));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function page(m) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${m.name}（${m.nameEn}）| Milli Orbis</title>
<meta name="description" content="${esc(m.catch)}。${m.gen}・${m.fanName}（ファンネーム: ${esc(m.fanName)}・ファンマーク: ${m.fanMark}）">
<meta property="og:type" content="website">
<meta property="og:title" content="${m.name}（${m.nameEn}）| Milli Orbis">
<meta property="og:description" content="${esc(m.catch)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body data-member="${m.id}" data-oshi="">
<header id="siteHeader">
  <div class="header-inner">
    <a class="logo" href="index.html"><span class="logo-mark">◉</span>Milli Orbis</a>
    <nav class="nav">
      <a href="index.html#home">Home</a>
      <a href="index.html#members">Member Guide</a>
      <a href="index.html#calendar">Event Calendar</a>
      <a href="index.html#links">Official Links</a>
    </nav>
    <div style="display:flex;gap:10px;align-items:center;">
      <a id="liveBadge" class="live-badge" href="#" target="_blank" rel="noopener">● LIVE</a>
      <select id="oshiSelect" class="oshi-select" aria-label="推しメンバーを選択"></select>
      <button id="hamburger" class="hamburger" aria-label="メニュー">☰</button>
    </div>
  </div>
  <nav id="mobileNav" class="mobile-nav">
    <a href="index.html#home">Home</a>
    <a href="index.html#members">Member Guide</a>
    <a href="index.html#calendar">Event Calendar</a>
    <a href="index.html#links">Official Links</a>
  </nav>
</header>
<div id="progressBar" class="progress"></div>

<main class="container">
  <nav class="breadcrumb"><a href="index.html">Home</a><a href="index.html#members">Member Guide</a><span id="bcName">${m.name}</span></nav>

  <section id="talentHero" class="talent-hero">
    <div class="heroSweep"></div>
    <div class="talent-hero-inner">
      <div class="talent-mark" data-anim="markIn">${m.fanMark}</div>
      <h1 data-anim="nameIn">${m.name}</h1>
      <p class="talent-name-en">${m.nameEn}</p>
      <p class="talent-catch" id="tCatch"></p>
      <p class="talent-tags">
        <span id="tGen"></span>
        <span>ファンネーム: ${m.fanName}</span>
        <span>ファンマーク: ${m.fanMark}</span>
      </p>
    </div>
  </section>

  <section id="voiceSection" class="section"></section>

  <section id="profileSection" class="section"></section>

  <section id="phrasesSection" class="section"></section>

  <section id="detailSection" class="section"></section>

  <section id="tagSection" class="section"></section>

  <section id="videoSection" class="section"></section>

  <section id="linkSection" class="section"></section>

  <p class="back-to-guide"><a href="index.html#members">← Member Guide に戻る</a></p>
</main>

<footer>
  <p class="disclaimer">本サイトはファンが運営する非公式のポータルサイトです。ミリプロ公式様とは一切関係ありません。</p>
  <p class="source-note">${esc(SITE_CONFIG.sourceNote)}</p>
  <p>© 2026 Milli Orbis（非公式ファンサイト）</p>
</footer>

<script src="data.js"></script>
<script src="script.js"></script>
</body>
</html>
`;
}

const outDir = path.join(__dirname, "..");
for (const m of MEMBERS) {
  fs.writeFileSync(path.join(outDir, m.id + ".html"), page(m), "utf8");
  console.log("generated: " + m.id + ".html");
}
