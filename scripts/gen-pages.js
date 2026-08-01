const fs = require("fs");
const path = require("path");

const dataSrc = fs.readFileSync(path.join(__dirname, "..", "data.js"), "utf8");
eval(dataSrc.replace(/^const (\w+) =/gm, "globalThis.$1 ="));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function tabs(m) {
  return MEMBERS.map((x) =>
    '<a class="t-tab' + (x.id === m.id ? " active" : "") + '" href="' + x.id + '.html">' +
    (x.icon ? '<img src="' + x.icon + '" alt="" loading="lazy">' : "") +
    x.name + "</a>"
  ).join("");
}

function introOverlay(m) {
  return '<div id="introOverlay" class="intro-overlay" data-member="' + m.id + '" aria-hidden="true">' +
    '<button type="button" class="intro-skip" id="introSkip">スキップ</button>' +
    '<span class="intro-ring r1"></span><span class="intro-ring r2"></span>' +
    '<span class="intro-ring r3"></span><span class="intro-ring r4"></span>' +
    '<span class="intro-ring r5"></span>' +
    '<div class="intro-stage">' +
    (m.logo ? '<img class="intro-logo" src="' + m.logo + '" alt="">' : "") +
    (m.img ? '<img class="intro-art" src="' + m.img + '" alt="' + m.name + '">' : "") +
    '<p class="intro-name">' + m.name + "</p>" +
    '<p class="intro-catch" id="introCatch"></p>' +
    "</div>" +
    '<audio id="introAudio" src="' + (m.introVoice || "") + '" preload="auto"></audio>' +
    "</div>";
}

const navDrop = (home) => `
      <div class="nav-drop" id="memberDrop">
        <button type="button" class="nav-drop-btn">Member Guide<span class="caret"></span></button>
        <div class="nav-drop-menu">
          <a class="drop-top" href="${home}#members">Member Guide 一覧へ</a>
          <div class="drop-sep"></div>
          <a href="konomi.html">甘狼このみ</a>
          <a href="nono.html">音ノ乃のの</a>
          <a href="akubi.html">あくび・でもんすぺーど</a>
          <a href="koma.html">小廻こま</a>
          <a href="raco.html">音ノ瀬らこ</a>
          <a href="yura.html">ゆらぎゆら</a>
          <a href="nuhu.html">虹深°ぬふ</a>
          <a href="tsukuri.html">眠雲ツクリ</a>
          <a href="liz.html">雨夜リズ</a>
          <a href="rei.html">夕霧レイ</a>
          <a href="milchan.html">ミリちゃん</a>
        </div>
      </div>`;

const mobileNav = (home) => `
      <a href="${home}#home">Home</a>
      <a href="${home}#members">Member Guide</a>
      <a class="mobile-sub" href="konomi.html">甘狼このみ</a>
      <a class="mobile-sub" href="nono.html">音ノ乃のの</a>
      <a class="mobile-sub" href="akubi.html">あくび・でもんすぺーど</a>
      <a class="mobile-sub" href="koma.html">小廻こま</a>
      <a class="mobile-sub" href="raco.html">音ノ瀬らこ</a>
      <a class="mobile-sub" href="yura.html">ゆらぎゆら</a>
      <a class="mobile-sub" href="nuhu.html">虹深°ぬふ</a>
      <a class="mobile-sub" href="tsukuri.html">眠雲ツクリ</a>
      <a class="mobile-sub" href="liz.html">雨夜リズ</a>
      <a class="mobile-sub" href="rei.html">夕霧レイ</a>
      <a class="mobile-sub" href="milchan.html">ミリちゃん</a>
      <a href="${home}#calendar">Event Calendar</a>
      <a href="${home}#links">Official Links</a>`;

function decoHtml(m) {
  var d = m.deco;
  if (!d || !(d.floats || d.shape)) return "";
  var s = "";
  (d.floats || []).forEach(function (f) {
    s += '<span class="d-f" data-k="' + f.k + '" style="left:' + f.x + "%;top:" + f.y + "%;width:" + f.size +
      "px;height:" + f.size + "px;--dur:" + f.dur + 's">' + (DECO_SVG[f.k] || "") + "</span>";
  });
  if (d.shape === "paw") s += '<span class="d-paw" style="left:82%;top:30%"><i></i><i></i><i></i><i></i></span>';
  if (d.shape === "bub") s += '<span class="d-bub" style="left:12%;top:30%"></span><span class="d-bub" style="left:76%;top:40%;animation-delay:2s"></span>';
  if (d.shape === "rain") s += '<span class="d-rain" style="left:74%;top:6%"></span><span class="d-drop" style="left:88%;top:18%"></span><span class="d-drop" style="left:66%;top:44%;animation-delay:1.4s"></span>';
  if (d.shape === "cross") s += '<span class="d-cross" style="left:82%;top:20%"></span>';
  if (d.shape === "wheel") s += '<span class="d-wheel" style="left:84%;top:12%"></span>';
  if (d.shape === "zzz") s += '<span class="d-zzz" style="left:16%;top:62%">Z</span><span class="d-zzz" style="left:27%;top:74%;font-size:2.1rem;animation-delay:1.1s">z</span><span class="d-zzz" style="left:37%;top:84%;font-size:1.4rem;animation-delay:2.1s">z</span>';
  return '<div class="page-deco" aria-hidden="true">' + s + "</div>";
}

function page(m) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${m.name}（${m.nameEn}）| Milli Orbis</title>
<meta name="description" content="${esc(m.catch)}。${m.gen}の${m.name}の非公式ファンページ。ファンネーム: ${esc(m.fanName || "—")}。">
<link rel="icon" href="images/icon/Milli%20Orbis.ico" sizes="any">
<link rel="apple-touch-icon" sizes="192x192" href="images/icon/Milli%20Orbis-192.png">
<link rel="apple-touch-icon" sizes="518x518" href="images/icon/Milli%20Orbis-518.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Milli Orbis">
<meta property="og:title" content="${m.name}（${m.nameEn}）| Milli Orbis">
<meta property="og:description" content="${esc(m.catch)}">
<meta property="og:url" content="${SITE_CONFIG.siteUrl}/${m.id}.html">
<meta property="og:image" content="${SITE_CONFIG.siteUrl}${SITE_CONFIG.ogImage}">
<meta property="og:image:width" content="1729">
<meta property="og:image:height" content="910">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${m.name}（${m.nameEn}）| Milli Orbis">
<meta name="twitter:description" content="${esc(m.catch)}">
<meta name="twitter:image" content="${SITE_CONFIG.siteUrl}${SITE_CONFIG.ogImage}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body data-member="${m.id}" data-oshi="">
${decoHtml(m)}
<header id="siteHeader">
  <div class="header-inner">
    <a class="logo" href="index.html"><img src="images/rogo/Milli%20Orbis-rogo.png" alt="Milli Orbis"></a>
    <nav class="nav">
      <a href="index.html#home">Home</a>
      ${navDrop("index.html")}
      <a href="index.html#calendar">Event Calendar</a>
      <a href="index.html#links">Official Links</a>
    </nav>
    <div style="display:flex;gap:10px;align-items:center;">
      <a id="liveBadge" class="live-badge" href="#" target="_blank" rel="noopener">● LIVE</a>
      <select id="oshiSelect" class="oshi-select" aria-label="推しメンバーを選択"></select>
      <button id="hamburger" class="hamburger" aria-label="メニュー">
        <svg viewBox="0 0 28 20" width="30" height="22" aria-hidden="true"><path d="M2 3h24M2 10h24M2 17h24" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>
      </button>
    </div>
  </div>
  <nav id="mobileNav" class="mobile-nav">
    ${mobileNav("index.html")}
  </nav>
</header>

<nav class="talent-tabs" aria-label="タレント切り替え">
  ${tabs(m)}
</nav>

<main class="container">
  <nav class="breadcrumb"><a href="index.html">Home</a><a href="index.html#members">Member Guide</a><span id="bcName">${m.name}</span></nav>

  <section id="talentHero" class="talent-hero">
    <div class="heroSweep"></div>
    <div class="talent-hero-inner">
      ${m.logo ? '<img class="talent-hero-logo" src="' + m.logo + '" alt="">' : ""}
      ${m.img ? '<img class="talent-hero-art" src="' + m.img + '" alt="' + m.name + '">' : ""}
      <h1>${m.name}</h1>
      <p class="talent-name-en">${m.nameEn}</p>
      <p class="talent-catch" id="tCatch"></p>
      <p class="talent-tags">
        <span id="tGen"></span>
        <span>ファンネーム: ${m.fanName || "—"}</span>
      </p>
      <button type="button" class="intro-btn" id="introBtn">▶ イントロを見る</button>
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

${introOverlay(m)}

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
