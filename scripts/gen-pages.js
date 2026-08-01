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

const DECO_SVG = {
  heart: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,88 C28,66 12,50 12,34 C12,22 21,12 32,12 C41,12 48,18 50,24 C52,18 59,12 68,12 C79,12 88,22 88,34 C88,50 72,66 50,88 Z"/></svg>',
  paw: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><ellipse cx="50" cy="66" rx="24" ry="20"/><ellipse cx="14" cy="30" rx="12" ry="15"/><ellipse cx="36" cy="18" rx="12" ry="15"/><ellipse cx="64" cy="18" rx="12" ry="15"/><ellipse cx="86" cy="30" rx="12" ry="15"/></g></svg>',
  note: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M37,79 L37,20 L83,8 L83,60"/><circle cx="23" cy="80" r="12"/><circle cx="70" cy="70" r="12"/></g></svg>',
  diamond: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,8 L86,50 L50,92 L14,50 Z"/></svg>',
  spade: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M48,6 C28,24 16,36 16,52 C16,63 24,70 34,70 C40,70 45,67 48,63 L48,72 L36,72 L30,88 L70,88 L64,72 L52,72 L52,63 C55,67 60,70 66,70 C76,70 84,63 84,52 C84,36 72,24 52,6 Z"/></svg>',
  horn: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M16,50 C8,32 16,14 34,8 C24,20 22,34 26,46 Z M84,50 C92,32 84,14 66,8 C76,20 78,34 74,46 Z"/></svg>',
  flame: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,4 C60,20 74,28 74,48 C74,63 63,72 50,72 C37,72 26,63 26,48 C26,28 40,20 50,4 Z"/></svg>',
  shell: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"><path d="M18,84 A32,32 0 1 1 82,84"/><path d="M50,82 L24,42 M50,82 L38,32 M50,82 L50,28 M50,82 L62,32 M50,82 L76,42"/></g></svg>',
  wave: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" d="M4,60 C14,44 24,44 34,60 C44,76 54,76 64,60 C74,44 84,44 94,60"/></svg>',
  otter: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><ellipse cx="46" cy="64" rx="28" ry="13"/><circle cx="78" cy="50" r="11"/><circle cx="84" cy="41" r="3.5"/><circle cx="74" cy="41" r="3.5"/><circle cx="63" cy="72" r="5"/><path d="M20,60 C8,56 2,62 6,74 C10,84 20,80 22,70 Z"/></g></svg>',
  jelly: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round"><path d="M28,50 A22,22 0 0 1 72,50"/><path d="M31,52 C29,62 31,72 34,80 M41,52 C40,60 42,68 44,76 M50,52 C50,62 48,72 48,80 M59,52 C58,60 60,68 62,76 M69,52 C71,62 69,72 66,80"/></g></svg>',
  bub: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round"><circle cx="50" cy="50" r="28"/><path d="M36,36 C40,30 46,27 52,26"/></g></svg>',
  hex: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,6 L88,28 L88,72 L50,94 L12,72 L12,28 Z"/></svg>',
  top: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><path d="M50,20 C40,20 32,28 32,38 C32,52 40,64 50,70 C60,64 68,52 68,38 C68,28 60,20 50,20 Z"/><path d="M50,6 L54,18 L46,18 Z"/><path d="M50,70 L58,86 C53,90 47,90 42,86 Z"/></g></svg>',
  drop: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M50,6 C60,20 74,28 74,46 C74,61 63,72 50,72 C37,72 26,61 26,46 C26,28 40,20 50,6 Z"/></svg>',
  cloud: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="currentColor" d="M70,66 A16,16 0 0 0 68,34 A22,22 0 0 0 26,30 A15,15 0 0 0 28,66 Z"/></svg>',
  pen: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="currentColor"><path d="M30,66 L42,54 L70,82 L58,94 Z"/><path d="M30,66 L20,76 L28,84 L38,74 Z"/><path d="M70,82 L62,90 L70,98 L78,90 Z"/></g></svg>',
  rainbow: '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" d="M16,84 A34,34 0 0 1 84,84"/></svg>',
  ring: '<svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="7"><circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="7"/></g></svg>'
};

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
<meta property="og:title" content="${m.name}（${m.nameEn}）| Milli Orbis">
<meta property="og:description" content="${esc(m.catch)}">
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
