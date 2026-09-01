/* ============================================
   cursor.js — オリジナルマウスカーソル（プレビュー移植）
   preview: video.css + js/storage.js + js/video.js の移植
   localStorage: milli-cursor {enabled:boolean, talentId:string}
   初回は preview の milpro_cursor からのマイグレーションも読む
   ============================================ */
(function () {
  "use strict";

  var KEY = "milli-cursor";
  var LEGACY_KEY = "milpro_cursor";

  // 旧 milpro_cursor からのマイグレーション（初回のみ）
  function migrateLegacy() {
    try {
      if (localStorage.getItem(KEY)) return;
      var legacy = localStorage.getItem(LEGACY_KEY);
      if (legacy) localStorage.setItem(KEY, legacy);
    } catch (e) {}
  }

  function getCursorSettings() {
    try { return JSON.parse(localStorage.getItem(KEY) || "null"); }
    catch (e) { return null; }
  }

  function saveCursorSettings(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
  }

  function initCursorSettings() {
    migrateLegacy();
    var existing = getCursorSettings();
    if (existing && typeof existing === "object") return existing;
    var s = { enabled: false, talentId: "default" };
    saveCursorSettings(s);
    return s;
  }

  function applyCursor(s) {
    var html = document.documentElement;
    if (!s || !s.enabled) {
      html.classList.remove("cursor-custom");
      for (var i = 0; i < html.classList.length; ) {
        var c = html.classList[i];
        if (c.indexOf("cursor-") === 0) html.classList.remove(c);
        else i++;
      }
      html.classList.remove("cursor-custom");
    } else {
      html.classList.add("cursor-custom");
      // remove old cursor-* except cursor-custom
      var toRemove = [];
      for (var j = 0; j < html.classList.length; j++) {
        var cc = html.classList[j];
        if (cc.indexOf("cursor-") === 0 && cc !== "cursor-custom") toRemove.push(cc);
      }
      toRemove.forEach(function (c) { html.classList.remove(c); });
      var id = (s.talentId && s.talentId !== "default") ? s.talentId : "";
      if (id) html.classList.add("cursor-" + id);
    }
    // トップバーの表示を更新
    try {
      var label = document.getElementById("cursorTopLabel");
      var preview = document.getElementById("cursorTopPreview");
      var btn = document.getElementById("cursorTopBtn");
      if (label) {
        if (!s || !s.enabled) label.textContent = "カーソルOFF";
        else {
          var m = null;
          if (typeof MEMBERS !== "undefined") {
            for (var k = 0; k < MEMBERS.length; k++) if (MEMBERS[k].id === s.talentId) { m = MEMBERS[k]; break; }
            if (!m && s.talentId === "milli-chan") m = { name: "ミリちゃん" };
            if (!m && s.talentId === "milli-chan") m = { name: "ミリちゃん" };
          }
          label.textContent = m ? m.name : "カーソル";
        }
      }
      if (preview) {
        if (s && s.enabled && s.talentId && s.talentId !== "default") {
          var icon = "";
          if (typeof MEMBERS !== "undefined") {
            var mm = null;
            for (var kk = 0; kk < MEMBERS.length; kk++) if (MEMBERS[kk].id === s.talentId) { mm = MEMBERS[kk]; break; }
            if (mm) {
              icon = mm.icon || "";
              // prefer icon path as is
              if (icon && icon.indexOf("/") === 0) { /* absolute */ }
            }
          }
          if (s.talentId === "milli-chan") icon = "/images/cursors/milli-chan.png";
          if (!icon) icon = "/images/cursors/" + s.talentId + ".png";
          preview.style.backgroundImage = "url('" + icon + "')";
          preview.style.backgroundSize = "cover";
          preview.style.backgroundColor = "#fff";
        } else if (s && s.enabled) {
          preview.style.backgroundImage = "url('/images/cursors/default.png')";
          preview.style.backgroundSize = "cover";
          preview.style.backgroundColor = "#fff";
        } else {
          preview.style.backgroundImage = "";
          preview.style.backgroundColor = "#7a4fc4";
        }
      }
      if (btn) btn.style.opacity = s && s.enabled ? "1" : "0.7";
      var items = document.querySelectorAll(".cursor-dropdown-item");
      for (var ii = 0; ii < items.length; ii++) {
        var el = items[ii];
        var active = el.dataset.id === (s ? s.talentId : "default") || (!s.enabled && el.dataset.id === "__off");
        if (!s || !s.enabled) active = el.dataset.id === "__off";
        else active = el.dataset.id === s.talentId;
        el.classList.toggle("active", active);
      }
    } catch (e) {}
  }

  function initCursor() {
    try { applyCursor(initCursorSettings()); } catch (e) {}
  }

  function initCursorTopBar() {
    var wrap = document.getElementById("cursorTopWrap");
    var btn = document.getElementById("cursorTopBtn");
    var dd = document.getElementById("cursorDropdown");
    if (!wrap || !btn || !dd) return;
    wrap.style.display = "";
    var members = [];
    if (typeof MEMBERS !== "undefined") {
      for (var i = 0; i < MEMBERS.length; i++) {
        var id = MEMBERS[i].id;
        if (id === "milchan") continue;
        members.push(MEMBERS[i]);
      }
    }
    function renderDropdown() {
      var cur = getCursorSettings() || { enabled: false, talentId: "default" };
      var items = [];
      var offActive = !cur.enabled ? " active" : "";
      items.push('<button class="cursor-dropdown-item' + offActive + '" data-id="__off" role="menuitem"><span style="width:28px;height:28px;border-radius:50%;background:#eee;display:flex;align-items:center;justify-content:center;font-size:12px">🚫</span><span>OFF（標準）</span><span class="check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg></span></button>');
      for (var mi = 0; mi < members.length; mi++) {
        var m = members[mi];
        var active = cur.enabled && cur.talentId === m.id ? " active" : "";
        var icon = m.icon || ("/images/cursors/" + m.id + ".png");
        // Handle portal's icon path with encoded space etc. Keep as is, fallback via onerror
        items.push('<button class="cursor-dropdown-item' + active + '" data-id="' + m.id + '" role="menuitem"><img src="' + icon + '" alt="" onerror="this.src=\'/images/cursors/default.png\'"><span>' + esc(m.name) + '</span><span class="check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg></span></button>');
      }
      // ミリちゃん
      {
        var mId = "milli-chan";
        var a = cur.enabled && cur.talentId === mId ? " active" : "";
        var ic = "/images/cursors/milli-chan.png";
        items.push('<button class="cursor-dropdown-item' + a + '" data-id="' + mId + '" role="menuitem"><img src="' + ic + '" alt="" onerror="this.src=\'/images/cursors/default.png\'"><span>ミリちゃん</span><span class="check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg></span></button>');
      }
      dd.innerHTML = items.join("");
      var els = dd.querySelectorAll(".cursor-dropdown-item");
      for (var ei = 0; ei < els.length; ei++) (function (el) {
        el.addEventListener("click", function () {
          var id = el.dataset.id;
          if (id === "__off") {
            var s = { enabled: false, talentId: "default" };
            saveCursorSettings(s);
            applyCursor(s);
          } else {
            var s2 = { enabled: true, talentId: id };
            saveCursorSettings(s2);
            applyCursor(s2);
          }
          dd.classList.remove("open");
          btn.setAttribute("aria-expanded", "false");
          dd.setAttribute("aria-hidden", "true");
          renderDropdown();
          applyCursor(getCursorSettings());
        });
      })(els[ei]);
    }
    renderDropdown();
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = dd.classList.contains("open");
      dd.classList.toggle("open", !open);
      btn.setAttribute("aria-expanded", String(!open));
      dd.setAttribute("aria-hidden", String(open));
      if (!open) renderDropdown();
    });
    document.addEventListener("click", function (e) {
      if (!wrap.contains(e.target)) {
        dd.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        dd.setAttribute("aria-hidden", "true");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dd.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        dd.setAttribute("aria-hidden", "true");
      }
    });
    applyCursor(getCursorSettings());
  }

  function esc(s) {
    return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // Expose globally for other scripts
  window.CursorStore = {
    get: getCursorSettings,
    save: saveCursorSettings,
    init: initCursorSettings,
    apply: applyCursor
  };
  window.initCursor = initCursor;
  window.initCursorTopBar = initCursorTopBar;

  // Auto-init on DOMContentLoaded (defer-safe)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initCursor();
      try { initCursorTopBar(); } catch (e) {}
    });
  } else {
    initCursor();
    try { initCursorTopBar(); } catch (e) {}
  }
})();
