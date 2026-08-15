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
    (m.fx ? fxHtml(m.fx) : "") +
    '<div class="intro-stage">' +
    (m.logo ? '<img class="intro-logo" src="' + m.logo + '" alt="">' : "") +
    (m.img ? '<img class="intro-art" src="' + m.img + '" alt="' + m.name + '">' : "") +
    '<p class="intro-name">' + m.name + "</p>" +
    '<p class="intro-catch" id="introCatch"></p>' +
    (m.introVoice || m.voice ? '<button type="button" class="intro-voice-btn" id="introVoiceBtn">🔁 挨拶を再生</button>' : "") +
    "</div>" +
    '<audio id="introAudio" src="' + (m.introVoice || m.voice || "") + '" preload="auto"></audio>' +
    '<button type="button" class="intro-start" id="introStartBtn">▶ タップで再生</button>' +
    "</div>";
}

/* タレント別 イントロFX演出（data.js の fx 種別 → オーバーレイ内の演出HTML） */
function fxHtml(kind) {
  var waveSvg = function (fill) {
    return '<svg class="fx-wave-svg" viewBox="0 0 1440 80" preserveAspectRatio="none"><path fill="' + fill +
      '" d="M0,42 Q120,6 240,42 T480,42 T720,42 T960,42 T1200,42 T1440,42 L1440,80 L0,80 Z"/></svg>';
  };
  var V = {
    choco:
      '<span class="fx-chip" style="left:10%;animation-delay:0s"></span>' +
      '<span class="fx-chip" style="left:30%;animation-delay:1.3s"></span>' +
      '<span class="fx-chip" style="left:52%;animation-delay:0.7s"></span>' +
      '<span class="fx-chip" style="left:72%;animation-delay:1.9s"></span>' +
      '<span class="fx-chip" style="left:88%;animation-delay:0.4s"></span>' +
      '<span class="fx-heart" style="left:16%;top:24%;animation-delay:0.3s"></span>' +
      '<span class="fx-heart" style="left:70%;top:16%;animation-delay:1.1s;animation-duration:5.5s"></span>' +
      '<span class="fx-heart" style="left:44%;top:64%;animation-delay:1.7s;animation-duration:6s"></span>' +
      '<span class="fx-spark" style="left:24%;top:40%;animation-delay:0.8s"></span>' +
      '<span class="fx-spark" style="left:85%;top:55%;animation-delay:1.5s"></span>' +
      '<span class="fx-ears"><i></i><i></i></span>' +
      '<span class="fx-paw" style="right:8%;bottom:9%;animation-delay:1.2s"><b></b></span>' +
      '<span class="fx-paw" style="right:22%;bottom:25%;animation-delay:1.7s;transform:scale(0.8) rotate(14deg)"><b></b></span>' +
      '<span class="fx-paw" style="right:37%;bottom:41%;animation-delay:2.2s;transform:scale(0.62) rotate(26deg)"><b></b></span>' +
      '<span class="fx-flash"></span>',
    note:
      '<span class="fx-note-i" style="left:12%;animation-delay:0s;font-size:34px">♩</span>' +
      '<span class="fx-note-i" style="left:32%;animation-delay:1.4s;font-size:26px">♪</span>' +
      '<span class="fx-note-i" style="left:56%;animation-delay:0.7s;font-size:40px">♫</span>' +
      '<span class="fx-note-i" style="left:78%;animation-delay:2.1s;font-size:30px">♬</span>' +
      '<span class="fx-note-i" style="left:92%;animation-delay:1s;font-size:24px">♪</span>' +
      '<span class="fx-note-gem" style="left:22%;top:18%;animation-delay:0.4s"></span>' +
      '<span class="fx-note-gem" style="left:76%;top:32%;animation-delay:1.6s;animation-duration:4s"></span>' +
      '<span class="fx-spot"></span>' +
      '<span class="fx-vinyl"></span>' +
      '<span class="fx-eq"><i style="animation-delay:0s"></i><i style="animation-delay:0.15s;animation-duration:1.05s"></i>' +
      '<i style="animation-delay:0.3s"></i><i style="animation-delay:0.45s;animation-duration:0.95s"></i>' +
      '<i style="animation-delay:0.6s"></i><i style="animation-delay:0.75s;animation-duration:1.1s"></i></span>' +
      '<span class="fx-flash"></span>' +
      '<span class="fx-fin">SHINE</span>',
    demon:
      '<span class="fx-bat" style="top:16%"></span>' +
      '<span class="fx-bat" style="top:36%;animation-delay:3.2s;animation-duration:11s;width:88px;opacity:0.7"></span>' +
      '<span class="fx-bat" style="top:62%;animation-delay:5.6s;animation-duration:9.5s;width:128px"></span>' +
      '<span class="fx-flame" style="left:16%;bottom:-16px"></span>' +
      '<span class="fx-flame" style="left:78%;bottom:-22px;animation-delay:0.8s;width:80px;height:98px"></span>' +
      '<span class="fx-penta"></span>' +
      '<span class="fx-flame2" style="left:9%;bottom:-24px"></span>' +
      '<span class="fx-flame2" style="right:8%;bottom:-30px;animation-delay:1.6s;animation-duration:2s"></span>' +
      '<span class="fx-flash"></span>',
    sea:
      '<span class="fx-sun"></span>' +
      '<span class="fx-bub2" style="left:12%;bottom:-30px"></span>' +
      '<span class="fx-bub2" style="left:38%;bottom:-30px;animation-delay:1.2s;animation-duration:6.5s"></span>' +
      '<span class="fx-bub2" style="left:66%;bottom:-30px;animation-delay:2s;animation-duration:5s"></span>' +
      '<span class="fx-bub2" style="left:88%;bottom:-30px;animation-delay:0.6s;animation-duration:7s"></span>' +
      '<span class="fx-shell">' + DECO_SVG.shell + "</span>" +
      '<span class="fx-shell" style="left:82%;top:42%;animation-delay:1.4s;animation-duration:7.5s">' + DECO_SVG.shell + "</span>" +
      '<span class="fx-spark" style="left:30%;top:10%;animation-delay:0.5s"></span>' +
      '<span class="fx-spark" style="left:70%;top:14%;animation-delay:1.1s"></span>' +
      '<span class="fx-ball" style="left:26%;bottom:14%"></span>' +
      '<span class="fx-deck"><i class="fx-plate"></i><i class="fx-fader"></i></span>' +
      '<span class="fx-beat"></span>' +
      waveSvg("rgba(255,255,255,0.4)") +
      waveSvg("rgba(255,255,255,0.22)") +
      '<span class="fx-flash"></span>',
    deep:
      '<span class="fx-ray" style="left:12%;animation-delay:0s"></span>' +
      '<span class="fx-ray" style="left:55%;animation-delay:1.6s;transform:rotate(-12deg)"></span>' +
      '<span class="fx-ray" style="left:78%;animation-delay:0.8s;animation-duration:5.5s"></span>' +
      '<span class="fx-bub3" style="left:15%;bottom:-30px"></span>' +
      '<span class="fx-bub3" style="left:35%;bottom:-30px;animation-delay:1.4s;animation-duration:8s"></span>' +
      '<span class="fx-bub3" style="left:60%;bottom:-30px;animation-delay:2.2s;animation-duration:6s"></span>' +
      '<span class="fx-bub3" style="left:82%;bottom:-30px;animation-delay:0.7s;animation-duration:9s"></span>' +
      '<span class="fx-bub3" style="left:92%;bottom:-30px;animation-delay:1.9s;animation-duration:7.5s"></span>' +
      '<span class="fx-glowdot" style="left:25%;top:30%;animation-delay:0.3s"></span>' +
      '<span class="fx-glowdot" style="left:70%;top:22%;animation-delay:1.2s"></span>' +
      '<span class="fx-glowdot" style="left:48%;top:70%;animation-delay:2s"></span>' +
      '<span class="fx-glowdot" style="left:88%;top:66%;animation-delay:0.9s;animation-duration:4.5s"></span>' +
      '<span class="fx-jelly" style="right:9%;top:8%;width:104px">' +
      '<span class="j-dome"></span>' +
      '<span class="j-t" style="left:24%;height:44px;animation-delay:0.2s"></span>' +
      '<span class="j-t" style="left:42%;height:60px;animation-delay:0.8s;animation-duration:2.2s"></span>' +
      '<span class="j-t" style="left:60%;height:52px;animation-delay:1.3s"></span>' +
      '<span class="j-t" style="left:78%;height:40px;animation-delay:1.8s;animation-duration:3s"></span>' +
      "</span>" +
      '<span class="fx-jelly" style="left:7%;bottom:12%;width:64px;opacity:0.65;animation-delay:3.4s;animation-duration:13s">' +
      '<span class="j-dome" style="height:40px"></span>' +
      '<span class="j-t" style="left:26%;height:30px;animation-delay:0.4s"></span>' +
      '<span class="j-t" style="left:52%;height:42px;animation-delay:1s"></span>' +
      '<span class="j-t" style="left:74%;height:28px;animation-delay:1.6s;animation-duration:2.2s"></span>' +
      "</span>" +
      '<span class="fx-flash"></span>',
    koma:
      '<span class="fx-koma-spin" style="left:10%;top:10%;width:96px">' + DECO_SVG.top + "</span>" +
      '<span class="fx-koma-spin" style="right:8%;bottom:6%;width:72px;animation-duration:4.2s">' + DECO_SVG.top + "</span>" +
      '<span class="fx-daruma" style="right:13%;top:12%">' +
      '<i class="fx-d-h"></i><i class="fx-d-b" style="--i:1"></i><i class="fx-d-b" style="--i:2"></i>' +
      '<i class="fx-d-b" style="--i:3"></i><i class="fx-d-b" style="--i:4"></i></span>' +
      '<span class="fx-seigaiha" style="left:6%;bottom:2%;width:170px;height:170px"></span>' +
      '<span class="fx-seigaiha" style="right:16%;bottom:24%;width:110px;height:110px;animation-duration:44s"></span>' +
      '<span class="fx-lantern" style="left:8%;top:10%"></span>' +
      '<span class="fx-lantern" style="left:16%;top:20%;animation-delay:1.4s;animation-duration:7s"></span>' +
      '<span class="fx-hanabi" style="left:60%;top:22%"></span>' +
      '<span class="fx-hanabi fx-hana2" style="left:22%;top:36%;width:88px;height:88px;animation-delay:1.1s"></span>' +
      '<span class="fx-flash"></span>',
    sleep:
      '<span class="fx-cloud" style="top:12%;animation-duration:26s"></span>' +
      '<span class="fx-cloud" style="top:30%;animation-delay:8s;animation-duration:32s;opacity:0.5;width:150px"></span>' +
      '<span class="fx-cloud" style="top:52%;animation-delay:15s;animation-duration:38s;opacity:0.35;width:120px"></span>' +
      '<span class="fx-moon"><svg viewBox="0 0 100 100" aria-hidden="true"><path fill="#fff" d="M70,10 A46,46 0 1 0 70,90 A34,34 0 0 1 70,10Z"/></svg></span>' +
      '<span class="fx-zzz" style="left:18%;bottom:16%;animation-delay:0s">Z</span>' +
      '<span class="fx-zzz" style="left:28%;bottom:26%;animation-delay:1.2s;font-size:1.5rem">z</span>' +
      '<span class="fx-zzz" style="left:36%;bottom:34%;animation-delay:2.3s;font-size:1.1rem;animation-duration:5s">z</span>' +
      '<span class="fx-star-shoot"></span>' +
      '<span class="fx-spark" style="left:12%;top:18%;animation-delay:0.4s"></span>' +
      '<span class="fx-spark" style="left:86%;top:22%;animation-delay:0.9s"></span>' +
      '<span class="fx-spark" style="left:70%;top:60%;animation-delay:1.5s"></span>' +
      '<span class="fx-spark" style="left:26%;top:52%;animation-delay:2s;width:12px;height:12px"></span>' +
      '<span class="fx-pillow"></span>' +
      '<span class="fx-flash"></span>',
    rain:
      '<span class="fx-rain-s" style="left:8%;animation-delay:0s"></span>' +
      '<span class="fx-rain-s" style="left:22%;animation-delay:0.6s;animation-duration:1.9s"></span>' +
      '<span class="fx-rain-s" style="left:37%;animation-delay:1.3s"></span>' +
      '<span class="fx-rain-s" style="left:52%;animation-delay:0.3s;animation-duration:2.1s"></span>' +
      '<span class="fx-rain-s" style="left:66%;animation-delay:1.7s"></span>' +
      '<span class="fx-rain-s" style="left:80%;animation-delay:0.9s;animation-duration:1.7s"></span>' +
      '<span class="fx-rain-s" style="left:93%;animation-delay:2s"></span>' +
      '<span class="fx-rip" style="left:18%;bottom:6%;animation-delay:0s"></span>' +
      '<span class="fx-rip" style="left:55%;bottom:10%;animation-delay:1.2s"></span>' +
      '<span class="fx-rip" style="left:82%;bottom:6%;animation-delay:2.2s;animation-duration:3.8s"></span>' +
      '<span class="fx-puddle" style="left:30%;bottom:-6px"></span>' +
      '<span class="fx-puddle" style="left:70%;bottom:-2px;animation-delay:0.9s"></span>' +
      '<span class="fx-umbrella"><svg viewBox="0 0 120 110" aria-hidden="true"><path d="M14 58a46 46 0 0 1 92 0z" fill="#3d4a55"/><path d="M14 58a46 46 0 0 1 92 0" fill="none" stroke="#5a6a78" stroke-width="2.5"/><g stroke="#54626f" stroke-width="3" stroke-linecap="round"><path d="M34 59L60 92 86 59"/><path d="M60 92v12"/></g><path d="M53 104q7 11 14 0" fill="none" stroke="#ef8b8b" stroke-width="4" stroke-linecap="round"/></svg></span>' +
      '<span class="fx-bolt"><svg viewBox="0 0 120 260" aria-hidden="true"><polygon points="72,0 26,140 62,140 38,260 100,108 62,108 88,0" fill="#ffe9a8"/></svg></span>' +
      '<span class="fx-flash2"></span>',
    paint:
      '<svg class="fx-rainbow-svg" viewBox="0 0 340 170" aria-hidden="true"><path stroke="#ff8fab" stroke-width="22" d="M20,170 A150,150 0 0 1 320,170"/><path stroke="#ffd166" stroke-width="20" d="M40,170 A130,130 0 0 1 300,170"/><path stroke="#6bc77b" stroke-width="18" d="M60,170 A110,110 0 0 1 280,170"/><path stroke="#4d96ff" stroke-width="16" d="M80,170 A90,90 0 0 1 260,170"/><path stroke="#b980f0" stroke-width="14" d="M100,170 A70,70 0 0 1 240,170"/></svg>' +
      '<span class="fx-splat" style="left:15%;top:14%;background:#ff7aa2;animation-delay:0.2s"></span>' +
      '<span class="fx-splat" style="left:84%;top:20%;background:#ffd166;animation-delay:0.9s;width:64px;height:58px"></span>' +
      '<span class="fx-splat" style="left:76%;top:66%;background:#8bd3dd;animation-delay:1.5s;width:50px;height:46px"></span>' +
      '<span class="fx-splat" style="left:9%;top:58%;background:#c49fe0;animation-delay:1.1s;width:44px;height:40px;animation-duration:6s"></span>' +
      '<span class="fx-drip" style="left:26%;background:#ff7aa2;animation-delay:0s;animation-duration:6s"></span>' +
      '<span class="fx-drip" style="left:63%;background:#8bd3dd;animation-delay:1.6s"></span>' +
      '<span class="fx-drip" style="left:82%;background:#ffd166;animation-delay:3s;height:34px"></span>' +
      '<span class="fx-spark" style="left:40%;top:26%;animation-delay:0.4s"></span>' +
      '<span class="fx-spark" style="left:58%;top:60%;animation-delay:1.3s;width:20px;height:20px"></span>' +
      '<span class="fx-blob" style="left:30%;top:16%;background:#ff8fab;animation-delay:1.9s"></span>' +
      '<span class="fx-blob" style="left:55%;top:12%;background:#ffd166;animation-delay:2.14s;width:14px;height:14px"></span>' +
      '<span class="fx-blob" style="left:42%;top:30%;background:#4d96ff;animation-delay:2.4s;width:12px;height:12px"></span>' +
      '<span class="fx-blob" style="left:66%;top:42%;background:#6bc77b;animation-delay:2.7s;width:20px;height:20px"></span>' +
      '<span class="fx-flash"></span>',
    lockon:
      '<div class="fx-grid"></div>' +
      '<span class="fx-scan"></span>' +
      '<span class="fx-scan" style="animation-delay:1.7s;opacity:0.5"></span>' +
      '<i class="fx-corner c1"></i><i class="fx-corner c2"></i><i class="fx-corner c3"></i><i class="fx-corner c4"></i>' +
      '<span class="fx-hud-top"><i class="fx-dot"></i>LOCK ON SYSTEM v4.6</span>' +
      '<span class="fx-hud-bot">対象を捕捉中…</span>' +
      '<span class="fx-code">SEC:04 // RNG:13.42%</span>' +
      '<span class="fx-clock">▮ 00:14:36</span>' +
      '<span class="fx-plus" style="left:20%;top:30%;animation-delay:0.3s"></span>' +
      '<span class="fx-plus" style="left:75%;top:18%;animation-delay:1s"></span>' +
      '<span class="fx-plus" style="left:60%;top:72%;animation-delay:0.6s"></span>' +
      '<span class="fx-plus" style="left:14%;top:60%;animation-delay:1.4s"></span>' +
      '<span class="fx-plus" style="left:88%;top:52%;animation-delay:2s"></span>' +
      '<span class="fx-reticle">' +
      '<b class="fx-lock"><i class="fx-lock2"></i></b>' +
      '<span class="fx-r-ring"></span>' +
      "</span>" +
      '<span class="fx-locktext">LOCK ON</span>' +
      '<span class="fx-lockflash"></span>'
  };
  var html = V[kind];
  if (!html) return "";
  return '<div class="intro-fx fx-' + kind + '">' + html + "</div>";
}

const navDrop = (home) => `
      <div class="nav-drop" id="memberDrop">
        <button type="button" class="nav-drop-btn">Member Guide<span class="caret"></span></button>
        <div class="nav-drop-menu">
          <a class="drop-top" href="${home}#members" data-i18n="nav.memberAll">Member Guide 一覧へ</a>
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
          <a href="ichigo.html">？？？</a>
          <a href="milchan.html">ミリちゃん</a>
          <div class="drop-sep"></div>
          <a href="members.html" data-i18n="nav.compare">メンバー比較表</a>
        </div>
      </div>
      <a href="quiz.html" data-i18n="nav.quiz">ミリプロ検定</a>
      <a href="songs.html" data-i18n="nav.songs">曲データベース</a>`;

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
      <a class="mobile-sub" href="ichigo.html">？？？</a>
      <a class="mobile-sub" href="milchan.html">ミリちゃん</a>
      <a href="${home}#calendar">Event Calendar</a>
      <a href="quiz.html" data-i18n="nav.quiz">ミリプロ検定</a>
      <a href="songs.html" data-i18n="nav.songs">曲データベース</a>
      <a href="members.html" data-i18n="nav.compare">メンバー比較表</a>
      <a href="${home}#links">Official Links</a>`;

/* 言語切替ボタン（全ページ共通のヘッダー用） */
const langToggleHtml = `
      <button type="button" class="lang-toggle" id="langToggle" aria-label="言語切替" data-i18n-aria="header.lang">EN</button>`;

const headerActions = (memberHome) => `
    <div class="header-actions">
      <a id="liveBadge" class="live-badge" href="#" target="_blank" rel="noopener">● LIVE</a>
      <button type="button" class="notif-bell" id="notifBell" aria-label="通知設定" data-i18n-aria="header.notif">🔔</button>
  <button type="button" class="profile-btn" id="profile-btn" onclick="mpOpenAccount()" aria-label="アカウント連携" data-i18n-aria="header.profile">
        <span class="profile-icon" id="profile-header-icon">?</span>
      </button>
      <select id="oshiSelect" class="oshi-select" aria-label="推しメンバーを選択" data-i18n-aria="header.oshi"></select>
      <button type="button" class="theme-toggle" id="themeToggle" aria-label="ダークモード切替" data-i18n-aria="header.theme">🌙</button>
      ${langToggleHtml}
      <button id="hamburger" class="hamburger" aria-label="メニュー" data-i18n-aria="header.menu">
        <svg viewBox="0 0 28 20" width="30" height="22" aria-hidden="true"><path d="M2 3h24M2 10h24M2 17h24" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/></svg>
      </button>
    </div>`;

const loginPopupHtml = `
<div id="login-popup" class="login-popup">
  <div class="login-popup-card">
    <div class="login-popup-header">
      <span class="login-popup-title" data-i18n="login.title">アカウント連携</span>
      <button class="login-popup-close" id="mp-popup-close" aria-label="閉じる" data-i18n-aria="login.close">&times;</button>
    </div>
    <div class="login-popup-body">
      <p class="login-popup-desc" data-i18n-html="login.desc">
        ログイン（または連携IDの設定）で、Milli Games / Milli Unishare / Millipro Chronicle と同じアカウントを共有できます。<br>
        未ログインでも本サイトの全機能は利用できます。
      </p>
      <div id="mp-account-ok" style="display:none;">
        <div class="mp-row" data-i18n-html="login.linkId">連携ID: <b id="mp-pid"></b></div>
        <div class="mp-btn-row">
          <button type="button" class="btn" onclick="mpCopyId()" data-i18n="login.copyId">🔗 IDをコピー</button>
          <button type="button" class="btn btn-ghost" onclick="mpLogout()" data-i18n="login.logout">ログアウト</button>
        </div>
      </div>
      <div id="mp-edit" class="mp-edit">
        <div class="mp-edit-sep" data-i18n="login.editSep">プロフィール編集（名前・アイコン）</div>
        <div class="mp-edit-row">
          <span class="mp-edit-label" data-i18n="login.name">名前</span>
          <input id="mp-edit-name" class="mp-input" type="text" maxlength="20" placeholder="表示名（20文字まで）" data-i18n-placeholder="login.namePh" autocomplete="off">
        </div>
        <div class="mp-edit-row">
          <span class="mp-edit-label" data-i18n="login.icon">アイコン</span>
          <span class="mp-edit-icon" id="mp-edit-icon-preview"></span>
          <label class="btn btn-ghost mp-edit-upload" data-i18n="login.pickImg">画像を選ぶ<input type="file" id="mp-edit-icon-file" accept="image/*" hidden onchange="mpPickIconFile(this)"></label>
        </div>
        <div class="mp-emoji-grid">
          <button type="button" class="mp-emoji-btn" data-emoji="🐺" onclick="mpPickEmoji('🐺')">🐺</button>
          <button type="button" class="mp-emoji-btn" data-emoji="🍫" onclick="mpPickEmoji('🍫')">🍫</button>
          <button type="button" class="mp-emoji-btn" data-emoji="🎧" onclick="mpPickEmoji('🎧')">🎧</button>
          <button type="button" class="mp-emoji-btn" data-emoji="👿" onclick="mpPickEmoji('👿')">👿</button>
          <button type="button" class="mp-emoji-btn" data-emoji="🐾" onclick="mpPickEmoji('🐾')">🐾</button>
          <button type="button" class="mp-emoji-btn" data-emoji="🦦" onclick="mpPickEmoji('🦦')">🦦</button>
          <button type="button" class="mp-emoji-btn" data-emoji="🌙" onclick="mpPickEmoji('🌙')">🌙</button>
          <button type="button" class="mp-emoji-btn" data-emoji="🧊" onclick="mpPickEmoji('🧊')">🧊</button>
          <button type="button" class="mp-emoji-btn" data-emoji="🔧" onclick="mpPickEmoji('🔧')">🔧</button>
          <button type="button" class="mp-emoji-btn" data-emoji="🧸" onclick="mpPickEmoji('🧸')">🧸</button>
          <button type="button" class="mp-emoji-btn" data-emoji="🦭" onclick="mpPickEmoji('🦭')">🦭</button>
          <button type="button" class="mp-emoji-btn" data-emoji="✨" onclick="mpPickEmoji('✨')">✨</button>
        </div>
        <p class="mp-edit-note" id="mp-edit-note"></p>
        <button type="button" class="btn mp-submit" onclick="mpSaveProfile()" data-i18n="login.save">プロフィールを保存</button>
      </div>
      <p class="mp-edit-locked" id="mp-edit-locked" style="display:none;" data-i18n="login.locked">名前・アイコンの変更はログイン後に使えます。</p>
      <div id="mp-account-form">
        <div class="mp-tabs">
          <button type="button" id="mp-tab-login" class="mp-tab active" onclick="mpTab('login')" data-i18n="login.tabLogin">ログイン</button>
          <button type="button" id="mp-tab-signup" class="mp-tab" onclick="mpTab('signup')" data-i18n="login.tabSignup">新規登録</button>
        </div>
        <div id="mp-panel-login">
          <input id="mp-email" class="mp-input" type="email" placeholder="メールアドレス" data-i18n-placeholder="login.email" autocomplete="email">
          <div class="mp-pass-row">
            <input id="mp-pass" class="mp-input" type="password" placeholder="パスワード" data-i18n-placeholder="login.pass" autocomplete="current-password">
            <button type="button" class="mp-eye" id="mp-pass-eye" onclick="mpToggle('mp-pass','mp-pass-eye')" aria-label="パスワード表示切替" data-i18n-aria="login.eye">👁</button>
          </div>
          <button type="button" class="btn mp-submit" onclick="mpSubmit(false)" data-i18n="login.btnLogin">ログイン</button>
          <button type="button" class="mp-forgot-btn" onclick="mpOpenReset()" data-i18n="login.forgot">パスワードをお忘れですか？</button>
        </div>
        <div id="mp-panel-signup" style="display:none;">
          <input id="mp2-email" class="mp-input" type="email" placeholder="メールアドレス" data-i18n-placeholder="login.email" autocomplete="email">
          <div class="mp-pass-row">
            <input id="mp2-pass" class="mp-input" type="password" placeholder="パスワード（6文字以上）" data-i18n-placeholder="login.passPh" autocomplete="new-password">
            <button type="button" class="mp-eye" id="mp2-pass-eye" onclick="mpToggle('mp2-pass','mp2-pass-eye')" aria-label="パスワード表示切替" data-i18n-aria="login.eye">👁</button>
          </div>
          <input id="mp2-pass2" class="mp-input" type="password" placeholder="パスワード（確認）" data-i18n-placeholder="login.passConfirm" autocomplete="new-password">
          <button type="button" class="btn mp-submit" onclick="mpSubmit(true)" data-i18n="login.btnRegister">登録する</button>
        </div>
        <p id="mp-msg" class="mp-msg"></p>
        <div class="mp-sep"><span data-i18n="login.or">または</span></div>
        <div class="mp-row mp-row-label" data-i18n="login.linkIdLabel">連携ID（ログイン不要）:</div>
        <div class="mp-setid-row">
          <input id="mp-id" class="mp-input" placeholder="連携ID（例: TEST001）" data-i18n-placeholder="login.linkIdPh" autocomplete="off">
          <button type="button" class="btn btn-ghost" onclick="mpSetId()" data-i18n="login.set">設定</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="password-reset-dialog" class="password-reset-dialog hidden" onclick="if(event.target===this)mpCloseReset()">
  <div class="password-reset-box">
    <button type="button" class="password-reset-close" id="reset-close-btn" onclick="mpCloseReset()" aria-label="閉じる" data-i18n-aria="login.close">✕</button>
    <div class="password-reset-title" data-i18n="login.resetTitle">🔑 パスワードを再設定</div>
    <div class="password-reset-sub" data-i18n="login.resetSub">登録したメールアドレスに再設定用のリンクを送信します。</div>
    <input class="mp-input" id="reset-email" type="email" placeholder="メールアドレス" data-i18n-placeholder="login.email" autocomplete="email">
    <button type="button" class="btn mp-submit" id="reset-send-btn" onclick="mpResetSubmit()" data-i18n="login.resetSend">メールを送信</button>
    <p id="reset-msg" class="mp-msg"></p>
  </div>
</div>`;

const footerHtml = `
<footer>
  <p class="disclaimer" data-i18n="footer.disclaimer">本サイトはファンが運営する非公式のポータルサイトです。ミリプロ公式様とは一切関係ありません。</p>
  <p class="source-note"><span data-i18n="footer.source">ミリプロ（Million Production）公式サイト:</span> <a href="https://milpr.com/" target="_blank" rel="noopener">https://milpr.com/</a></p>
  <p class="source-note">YouTube Data API を利用しています（<a href="https://developers.google.com/youtube/terms/api-services-terms-of-service" target="_blank" rel="noopener">YouTube API Services Terms of Service</a>）</p>
  <p class="source-note"><span data-i18n="footer.yt">本サイトは YouTube の利用規約に同意の上でご利用ください: </span><a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener">https://www.youtube.com/t/terms</a></p>
  <p data-i18n="footer.copy">© 2026 Milli Orbis（非公式ファンサイト）</p>
  <p class="source-note"><span data-i18n="footer.admin">作成・管理者：</span><a href="https://x.com/SunSunmachi" target="_blank" rel="noopener">すんすん（@SunSunmachi）</a></p>
</footer>`;

const i18nScriptTags = `
<script src="data/i18n.js"></script>
<script src="scripts/i18n.js"></script>`;

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
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#75b1c0">
<script>try{if(localStorage.getItem("milli-theme")==="dark"||(!localStorage.getItem("milli-theme")&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.dataset.theme="dark";}catch(e){}</script>
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
    ${headerActions()}
  </div>
  <nav id="mobileNav" class="mobile-nav">
    ${mobileNav("index.html")}
  </nav>
</header>

<nav class="talent-tabs" aria-label="タレント切り替え" data-i18n-aria="t.tabsAria">
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
        <img id="tGenIcon" class="group-icon" alt="" hidden>
        <span id="tGen"></span>
        <span data-i18n-html="t.fanName" data-i18n-var-name="${m.fanName || "—"}">ファンネーム: ${m.fanName || "—"}</span>
      </p>
      <button type="button" class="intro-btn" id="introBtn" data-i18n="t.intro">▶ イントロを見る</button>
    </div>
  </section>

  <section id="voiceSection" class="section"></section>

  <section id="profileSection" class="section"></section>

  <section id="phrasesSection" class="section"></section>

  <section id="detailSection" class="section"></section>

  <section id="tagSection" class="section"></section>

  <section id="videoSection" class="section"></section>

  <section id="linkSection" class="section"></section>

  <p class="back-to-guide"><a href="index.html#members" data-i18n="t.back">← Member Guide に戻る</a></p>
</main>

${footerHtml}

${introOverlay(m)}

${loginPopupHtml}

<div class="float-actions">
  <button type="button" class="share-x" id="shareXBtn" data-i18n="share.x">Xで共有</button>
  <button type="button" class="to-top" id="toTopBtn" aria-label="ページ上部へ" data-i18n-aria="toTop.aria">▲</button>
</div>

<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js"></script>
<script src="firebase-config.js"></script>
<script src="firebase-init.js"></script>
<script src="data.js"></script>
${i18nScriptTags}
<script src="script.js"></script>
</body>
</html>
`;
}

const outDir = path.join(__dirname, "..");

/* 検定・楽曲など汎用サブページ（共通ヘッダー/フッター/ログインポップアップ付き） */
function simplePage(o) {
  return `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${o.title} | Milli Orbis</title>
<meta name="description" content="${esc(o.desc)}">
<link rel="icon" href="images/icon/Milli%20Orbis.ico" sizes="any">
<link rel="apple-touch-icon" sizes="192x192" href="images/icon/Milli%20Orbis-192.png">
<link rel="apple-touch-icon" sizes="518x518" href="images/icon/Milli%20Orbis-518.png">
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#75b1c0">
<script>try{if(localStorage.getItem("milli-theme")==="dark"||(!localStorage.getItem("milli-theme")&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.dataset.theme="dark";}catch(e){}</script>
<meta property="og:type" content="website">
<meta property="og:site_name" content="Milli Orbis">
<meta property="og:title" content="${o.title} | Milli Orbis">
<meta property="og:description" content="${esc(o.desc)}">
<meta property="og:url" content="${SITE_CONFIG.siteUrl}/${o.file}">
<meta property="og:image" content="${SITE_CONFIG.siteUrl}${SITE_CONFIG.ogImage}">
<meta property="og:image:width" content="1729">
<meta property="og:image:height" content="910">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${o.title} | Milli Orbis">
<meta name="twitter:description" content="${esc(o.desc)}">
<meta name="twitter:image" content="${SITE_CONFIG.siteUrl}${SITE_CONFIG.ogImage}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body data-member="" data-oshi="">
<header id="siteHeader">
  <div class="header-inner">
    <a class="logo" href="index.html"><img src="images/rogo/Milli%20Orbis-rogo.png" alt="Milli Orbis"></a>
    <nav class="nav">
      <a href="index.html#home">Home</a>
      ${navDrop("index.html")}
      <a href="index.html#calendar">Event Calendar</a>
      <a href="index.html#links">Official Links</a>
    </nav>
    ${headerActions()}
  </div>
  <nav id="mobileNav" class="mobile-nav">
    ${mobileNav("index.html")}
  </nav>
</header>

<main class="container">
  <nav class="breadcrumb"><a href="index.html">Home</a><span>${o.title}</span></nav>

  <section class="subpage-hero">
    <h1>${o.title}</h1>
    <p>${esc(o.desc)}</p>${o.note ? '\n    <p class="cmp-disclaimer">' + esc(o.note) + "</p>" : ""}${o.cta ? "\n    " + o.cta : ""}
  </section>

  ${o.body}
</main>

${footerHtml}

${loginPopupHtml}

<div class="float-actions">
  <button type="button" class="share-x" id="shareXBtn" data-i18n="share.x">Xで共有</button>
  <button type="button" class="to-top" id="toTopBtn" aria-label="ページ上部へ" data-i18n-aria="toTop.aria">▲</button>
</div>

<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.12.2/firebase-database-compat.js"></script>
<script src="firebase-config.js"></script>
<script src="firebase-init.js"></script>
<script src="data.js"></script>
${i18nScriptTags}
<script src="script.js"></script>
${o.scripts}
</body>
</html>
`;
}

fs.writeFileSync(path.join(outDir, "quiz.html"), simplePage({
  file: "quiz.html",
  title: "ミリプロ検定",
  desc: "ミリプロについての25問クイズに挑戦！クイック10問からプロの全問出題まで。全問正解で「ミリプロ博士」の称号を目指せ！",
  body: `
  <section id="quizStart" class="section quiz-section">
    <div class="quiz-card card">
      <h2 data-i18n="quizp.title">ミリプロ検定に挑戦！</h2>
      <p data-i18n="quizp.sub">ミリプロメンバー・設立・流行語まで、ここでしか出ない25問。</p>
      <p class="quiz-note" data-i18n="quizp.note">答えはMember Guideから導き出せます（プロは推しの情報も丸暗記）。</p>
      <div class="quiz-mode-row">
        <div class="quiz-mode-card">
          <span class="quiz-mode-label" data-i18n="quizp.modeQuick">クイック</span>
          <p data-i18n="quizp.modeQuickDesc">ランダムに10問だけ出題。<br>隙間時間の腕試しに。</p>
          <button type="button" class="btn quiz-big-btn" id="quizStartBtn" data-i18n="quiz.quick">▶ クイック（10問）</button>
        </div>
        <div class="quiz-mode-card">
          <span class="quiz-mode-label" data-i18n="quizp.modePro">プロ</span>
          <p data-i18n="quizp.modeProDesc">全25問を出題。<br>ミリプロ博士はプロで決まる！</p>
          <button type="button" class="btn btn-ghost quiz-big-btn" id="quizStartPro" data-i18n-html="quiz.pro" data-i18n-var-n="25">▶ プロ（全25問）</button>
        </div>
      </div>
      <button type="button" class="btn btn-ghost quiz-big-btn" id="quizReviewBtn" disabled data-i18n="quizp.reviewBtn" data-i18n-var-n="0">📖 復習（間違えた問題）</button>
      <div class="quiz-stats" id="quizStats"></div>
    </div>
  </section>
  <section id="quizScreen" class="section quiz-section" style="display:none;">
    <div class="quiz-card card">
      <div class="quiz-progress-row"><span class="quiz-progress" id="quizProgress"></span></div>
      <h2 class="quiz-q" id="quizQ"></h2>
      <div class="quiz-opts" id="quizOpts"></div>
      <div class="quiz-explain" id="quizExplain" style="display:none;"></div>
      <button type="button" class="btn quiz-next" id="quizNext" style="display:none;" data-i18n="quizp.next">次の問題 →</button>
    </div>
  </section>
  <section id="quizResult" class="section quiz-section" style="display:none;">
    <div class="quiz-card card quiz-result">
      <div class="quiz-result-score" id="quizScore"></div>
      <div class="quiz-rank" id="quizRank"></div>
      <div class="quiz-btn-row">
        <a class="btn" id="quizShare" href="#" target="_blank" rel="noopener" data-i18n="quizp.share">Xで結果を共有</a>
        <button type="button" class="btn btn-ghost" id="quizRetry" data-i18n="quizp.retry">もう一度挑戦</button>
      </div>
    </div>
  </section>`,
  scripts: '<script src="scripts/quiz.js"></script>'
}), "utf8");
console.log("generated: quiz.html");

fs.writeFileSync(path.join(outDir, "songs.html"), simplePage({
  file: "songs.html",
  title: "曲データベース",
  desc: "ミリプロの楽曲・歌動画をまとめたデータベース。歌ってみた・公式楽曲・歌枠を曲単位で検索でき、元曲から誰が歌っているかも調べられます。",
  cta: `
      <a class="unishare-cta" href="https://milli-unishare.onrender.com/" target="_blank" rel="noopener">
        <img src="images/icon/Milli%20Unishare-icon.PNG" alt="Milli Unishare" loading="lazy">
        <span data-i18n="songs.unishare">通常動画・ショート・ライブ配信のデータベースはこちら</span>
      </a>`,
  body: `
  <section class="section">
    <div class="song-modes">
      <button type="button" class="song-mode active" id="songsModeVideos" data-i18n="songs.modeVideos">歌動画</button>
      <button type="button" class="song-mode" id="songsModeMaster" data-i18n="songs.modeMaster">曲まとめ</button>
    </div>
    <div id="videosSection">
      <div class="song-tools">
        <input id="songsSearch" class="song-search" type="search" placeholder="曲名・メンバー名で検索…" data-i18n-placeholder="songs.search" autocomplete="off">
        <div class="song-tabs">
          <button type="button" class="song-tab active" id="songsTabAll" data-i18n="songs.tabAll">すべて</button>
          <button type="button" class="song-tab" id="songsTabCovers" data-i18n="songs.tabCovers">歌ってみた</button>
          <button type="button" class="song-tab" id="songsTabOfficial" data-i18n="songs.tabOfficial">公式楽曲</button>
          <button type="button" class="song-tab" id="songsTabKaraoke" data-i18n="songs.tabKaraoke">歌枠</button>
        </div>
      </div>
      <div class="song-chips" id="songsChips"></div>
      <p class="song-tab-label" id="songsTabLabel"></p>
      <p class="song-note" id="songsNote" style="display:none;" data-i18n="songs.note"></p>
      <div id="songsList"></div>
    </div>
    <div id="masterSection" style="display:none;">
      <div class="song-tools">
        <input id="smSearch" class="song-search" type="search" placeholder="曲名・アーティスト・メンバー名で検索…" data-i18n-placeholder="sm.search" autocomplete="off">
      </div>
      <p class="sm-disclaimer" data-i18n="sm.disclaimer">注意: このページの元曲のアーティスト・アルバムジャケット・タイムスタンプは自動取得・自動解析のため、正確でない可能性があります。誤りを見つけた場合はお知らせください。</p>
      <p class="sm-hint" data-i18n="sm.hint">元曲をタップすると、歌っているタレントと動画リンクが表示されます</p>
      <p class="song-tab-label" id="smCount"></p>
      <div id="smList"></div>
    </div>
  </section>`,
  scripts: '<script src="data/songs.js"></script>\n<script src="data/songs-extra.js"></script>\n<script src="data/song-master.js"></script>\n<script src="data/karaoke.js"></script>\n<script src="scripts/song-data.js"></script>\n<script src="scripts/songs.js"></script>\n<script src="scripts/songs-master.js"></script>'
}), "utf8");
console.log("generated: songs.html");

fs.writeFileSync(path.join(outDir, "members.html"), simplePage({
  file: "members.html",
  title: "メンバー比較表",
  desc: "ミリプロ全メンバーの期・加入日・誕生日・身長などを一覧で比較できるメンバー比較表。推しの行はハイライトされます。",
  body: `
  <section id="memberCompare" class="section"></section>`,
  note: "掲載情報はすべて各メンバーの公式プロフィールに基づく事実情報であり、優劣を評価するものではありません。",
  scripts: ""
}), "utf8");
console.log("generated: members.html");

for (const m of MEMBERS) {
  fs.writeFileSync(path.join(outDir, m.id + ".html"), page(m), "utf8");
  console.log("generated: " + m.id + ".html");
}
