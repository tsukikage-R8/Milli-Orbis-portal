(function () {
  "use strict";

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function pad2(n) { return String(n).padStart(2, "0"); }

  function getMember(id) {
    return MEMBERS.find(function (m) { return m.id === id; });
  }

  function getMemberByDate(mmdd, type) {
    return MEMBERS.filter(function (m) {
      if (!m.birthday) return false;
      if (type === "birthday" && m.birthday === mmdd) return true;
      if (type === "anniversary") {
        var d = m.debut.slice(5);
        return d === mmdd;
      }
      return false;
    });
  }

  function nextOccurrence(mmdd, fromDate) {
    var now = fromDate || new Date();
    var y = now.getFullYear();
    var t = new Date(y, parseInt(mmdd.slice(0, 2), 10) - 1, parseInt(mmdd.slice(3), 10));
    if (t < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
      t = new Date(y + 1, parseInt(mmdd.slice(0, 2), 10) - 1, parseInt(mmdd.slice(3), 10));
    }
    return t;
  }

  function fmtDate(d) {
    return d.getFullYear() + "/" + pad2(d.getMonth() + 1) + "/" + pad2(d.getDate());
  }

  function fmtTime(d) {
    return pad2(d.getHours()) + ":" + pad2(d.getMinutes());
  }

  function jstNow() { return new Date(); }

  /* ============ ヘッダー ============ */
  function closeNavDrops() {
    $$(".nav-drop.open").forEach(function (d) { d.classList.remove("open"); });
  }

  function initHeader() {
    var burger = $("#hamburger");
    if (burger) {
      burger.addEventListener("click", function () {
        var nav = $("#mobileNav");
        if (nav) nav.classList.toggle("open");
      });
    }

    $$(".nav-drop").forEach(function (drop) {
      var btn = $(".nav-drop-btn", drop);
      if (!btn) return;
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = drop.classList.contains("open");
        closeNavDrops();
        if (!isOpen) drop.classList.add("open");
      });
      drop.addEventListener("click", function (e) {
        if (e.target.closest(".nav-drop-menu")) closeNavDrops();
      });
    });
    document.addEventListener("click", closeNavDrops);

    var select = $("#oshiSelect");
    if (select) {
      MEMBERS.forEach(function (m) {
        var opt = document.createElement("option");
        opt.value = m.id;
        opt.textContent = m.name;
        select.appendChild(opt);
      });
      select.value = getOshi() || "";
      select.addEventListener("change", function () { setOshi(select.value); });
    }
  }

  /* ============ 推しカラー ============ */
  function getOshi() {
    try { return localStorage.getItem("milli-oshi") || ""; } catch (e) { return ""; }
  }

  function setOshi(id) {
    try { localStorage.setItem("milli-oshi", id); } catch (e) {}
    applyOshi(id);
    var select = $("#oshiSelect");
    if (select && select.value !== id) select.value = id;
  }

  function applyOshi(id) {
    var m = getMember(id);
    var color = m ? m.color : "#75b1c0";
    var soft = m ? m.subColor : "#d8ecf2";
    var r = document.documentElement.style;
    r.setProperty("--accent", color);
    r.setProperty("--accent-soft", soft);
    r.setProperty("--grad", "linear-gradient(135deg, " + soft + ", #ffffff 60%)");
    r.setProperty("--accent-deep", shade(color, -35));
    document.body.dataset.oshi = id || "";
  }

  function shade(hex, pct) {
    var c = hex.replace("#", "");
    if (c.length === 3) c = c.split("").map(function (x) { return x + x; }).join("");
    var n = parseInt(c, 16);
    var r = Math.max(0, Math.min(255, ((n >> 16) & 255) + Math.round(((pct / 100) * 255) * 1.6)));
    var g = Math.max(0, Math.min(255, ((n >> 8) & 255) + Math.round(((pct / 100) * 255) * 1.6)));
    var b = Math.max(0, Math.min(255, (n & 255) + Math.round(((pct / 100) * 255) * 1.6)));
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function initOnboarding() {
    if (!$("#oshiModal")) return;
    if (getOshi()) return;
    var list = $("#oshiList");
    MEMBERS.forEach(function (m) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "oshi-option";
      b.innerHTML = (m.icon
        ? '<span class="oshi-mark"><img src="' + m.icon + '" alt=""></span>'
        : '<span class="oshi-mark">' + m.fanMark + "</span>") + m.name;
      b.style.setProperty("--mc", m.color);
      b.addEventListener("click", function () {
        setOshi(m.id);
        closeModal();
        $(".birthday-banner") && checkBirthday();
      });
      list.appendChild(b);
    });
    $("#oshiModal").classList.add("open");
  }

  function closeModal() {
    var m = $("#oshiModal");
    if (m) m.classList.remove("open");
  }

  /* ============ カウントダウン ============ */
  function getCdStyle() {
    try { return localStorage.getItem("milli-cd-style") || "pop"; } catch (e) { return "pop"; }
  }

  function getCdFeatured() {
    try { return localStorage.getItem("milli-cd-featured") || ""; } catch (e) { return ""; }
  }

  function cdLeft(item, now) {
    var diff = new Date(item.date).getTime() - now.getTime();
    if (diff < 0) return null;
    var secs = Math.floor(diff / 1000);
    return {
      days: Math.floor(secs / 86400),
      hours: Math.floor((secs % 86400) / 3600),
      mins: Math.floor((secs % 3600) / 60),
      secs: secs % 60
    };
  }

  function initCountdown() {
    var wrap = $("#countdown");
    var rail = $("#cdRail");
    var stylesBox = $("#cdStyles");
    if (!wrap || !rail) return;
    var style = getCdStyle();
    var featuredId = getCdFeatured();
    var valid = COUNTDOWN.filter(function (c) { return cdLeft(c, jstNow()); });
    if (valid.length === 0) return;
    if (!cdItem(featuredId) || !valid.some(function (c) { return c.id === featuredId; })) {
      featuredId = valid[0].id;
    }

    var units = [["days", "日"], ["hours", "時間"], ["mins", "分"], ["secs", "秒"]];

    function cdItem(id) {
      return COUNTDOWN.find(function (c) { return c.id === id; });
    }

    function renderFeatured() {
      var item = cdItem(featuredId);
      if (!item) return;
      wrap.innerHTML =
        '<div class="cd-card cd-' + style + ' cd-featured" data-id="' + item.id + '">' +
        '<div class="cd-label">' + item.label + "</div>" +
        '<div class="cd-when">' + fmtDate(new Date(item.date)) + " " + fmtTime(new Date(item.date)) + " まで</div>" +
        '<div class="cd-digits">' + units.map(function (u) {
          return '<div class="cd-unit"><div class="cd-num" data-unit="' + u[0] + '">00</div><small>' + u[1] + "</small></div>";
        }).join("") + "</div>" +
        (item.note ? '<div class="cd-note">' + item.note + "</div>" : "") +
        (item.url ? '<a class="cd-link" href="' + item.url + '">' +
          (item.url.indexOf(".html") > -1 ? "詳細ページへ" : "公式サイトへ") + "</a>" : "") +
        "</div>";
    }

    function renderRail() {
      rail.innerHTML = valid.map(function (item) {
        return '<button type="button" class="cd-rail-item' + (item.id === featuredId ? " is-active" : "") + '" data-id="' + item.id + '">' +
          '<span class="cd-label">' + item.label + "</span>" +
          '<span class="cd-diff" data-diff></span>' +
          "</button>";
      }).join("");
    }

    function updateCard(card, now) {
      var item = cdItem(card.dataset.id);
      if (!item) return;
      var left = cdLeft(item, now);
      if (!left) { card.style.display = "none"; return; }
      card.style.display = "";
      if (card.classList.contains("cd-featured")) {
        $$(".cd-num", card).forEach(function (num) {
          num.textContent = pad2(left[num.dataset.unit]);
        });
      } else {
        var diff = $("[data-diff]", card);
        if (diff) diff.textContent = "あと " + left.days + "日 " + left.hours + "時間 " + left.mins + "分";
      }
    }

    function tick() {
      var now = jstNow();
      var card = $(".cd-card", wrap);
      if (card) updateCard(card, now);
      $$(".cd-rail-item", rail).forEach(function (b) { updateCard(b, now); });
    }

    if (stylesBox) {
      $$(".cd-style-btn", stylesBox).forEach(function (btn) {
        btn.addEventListener("click", function () {
          var s = btn.dataset.style;
          try { localStorage.setItem("milli-cd-style", s); } catch (e) {}
          style = s;
          $$(".cd-style-btn", stylesBox).forEach(function (b) { b.classList.toggle("active", b === btn); });
          renderFeatured();
          tick();
        });
        btn.classList.toggle("active", btn.dataset.style === style);
      });
    }

    rail.addEventListener("click", function (e) {
      var b = e.target.closest(".cd-rail-item");
      if (!b || b.dataset.id === featuredId) return;
      featuredId = b.dataset.id;
      try { localStorage.setItem("milli-cd-featured", featuredId); } catch (err) {}
      renderFeatured();
      renderRail();
      tick();
    });

    renderFeatured();
    renderRail();
    tick();
    setInterval(tick, 1000);
  }

  /* ============ 誕生日バナー ============ */
  function checkBirthday() {
    var banner = $("#birthdayBanner");
    if (!banner) return;
    var now = jstNow();
    var mmdd = pad2(now.getMonth() + 1) + "-" + pad2(now.getDate());
    var list = getMemberByDate(mmdd, "birthday");
    if (list.length === 0) return;
    var names = list.map(function (m) { return m.name; }).join("・");
    banner.innerHTML = '今日は ' + names + ' の誕生日！ みんなでお祝いしよう！';
    banner.classList.add("show");
  }

  /* ============ YouTubeデータ（youtube.json） ============ */
  function loadYoutubeData() {
    fetch(YOUTUBE.dataUrl)
      .then(function (res) {
        if (!res.ok) throw new Error("not found");
        return res.json();
      })
      .then(renderYoutube)
      .catch(function () {
        renderYoutube(null);
      });
  }

  function renderYoutube(data) {
    renderStreams(data ? data.streams : null);
    renderLatestVideos(data ? data.videos : null);
    renderLiveBadge(data ? data.streams : null);
  }

  function videoUrl(id) { return "https://www.youtube.com/watch?v=" + id; }

  function thumbUrl(id) { return "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg"; }

  function renderStreams(streams) {
    var box = $("#streams");
    if (!box) return;
    if (!streams || streams.length === 0) {
      box.innerHTML = '<div class="placeholder">配信予定データがまだありません。GitHub Actionsの設定後、自動で表示されます。</div>';
      return;
    }
    var sorted = streams.slice().sort(function (a, b) {
      return new Date(a.scheduledStartTime) - new Date(b.scheduledStartTime);
    }).slice(0, YOUTUBE.maxStreams);
    box.innerHTML = sorted.map(function (s) {
      var m = getMember(s.memberId);
      var start = new Date(s.scheduledStartTime);
      var diff = Math.floor((start.getTime() - jstNow().getTime()) / 1000);
      var soon = diff >= 0 ? ' <span class="stream-count">あと' + hoursText(diff) + "</span>" : "";
      return '<a class="stream-item card" href="' + videoUrl(s.id) + '" target="_blank" rel="noopener">' +
        '<div class="video-thumb"><img src="' + thumbUrl(s.id) + '" alt="" loading="lazy"></div>' +
        "<div><div class='video-title'>" + esc(s.title) + (s.status === "live" ? '<span class="video-tag">LIVE</span>' : "") + "</div>" +
        '<div class="video-meta">' + (m ? m.name + " ・ " : "") + fmtDate(start) + " " + fmtTime(start) + soon + "</div>" +
        "</div></a>";
    }).join("");
  }

  function hoursText(secs) {
    var h = Math.floor(secs / 3600);
    var min = Math.floor((secs % 3600) / 60);
    if (h > 0) return h + "時間" + (min > 0 ? min + "分" : "");
    if (min > 0) return min + "分";
    return "もうすぐ";
  }

  function renderLatestVideos(videos) {
    var box = $("#latestVideos");
    if (!box) return;
    if (!videos || videos.length === 0) {
      box.innerHTML = '<div class="placeholder">最新動画データがまだありません。GitHub Actionsの設定後、自動で表示されます。</div>';
      return;
    }
    var vids = videos.slice(0, YOUTUBE.maxVideos);
    box.innerHTML = vids.map(function (v) {
      var m = getMember(v.memberId);
      var typeLabel = v.type === "short" ? "Short" : v.type === "live" ? "配信" : "";
      var published = new Date(v.publishedAt);
      return '<a class="video-card card" href="' + videoUrl(v.id) + '" target="_blank" rel="noopener">' +
        '<div class="video-thumb"><img src="' + thumbUrl(v.id) + '" alt="" loading="lazy"></div>' +
        '<div class="video-body"><div class="video-title">' + esc(v.title) +
        (typeLabel ? '<span class="video-tag">' + typeLabel + "</span>" : "") + "</div>" +
        '<div class="video-meta">' + (m ? m.name + " ・ " : "") + fmtDate(published) + "</div></div></a>";
    }).join("");
  }

  function renderLiveBadge(streams) {
    var badge = $("#liveBadge");
    if (!badge) return;
    if (!streams) return;
    var live = streams.find(function (s) { return s.status === "live"; });
    if (!live) return;
    badge.classList.add("show");
    badge.href = videoUrl(live.id);
    badge.title = "配信中: " + live.title;
  }

  function esc(s) {
    return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /* ============ ニュース ============ */
  function renderNews() {
    var box = $("#newsList");
    if (!box) return;
    box.innerHTML = NEWS.map(function (n) {
      return '<div class="news-item card"><div class="news-head"><span class="news-date">' +
        fmtDate(new Date(n.date)) + '</span><span class="news-tag">' + n.tag + "</span></div>" +
        '<div class="news-title">' + esc(n.title) + "</div>" +
        '<div class="news-desc">' + esc(n.desc) + "</div>" +
        (n.url ? '<a class="btn btn-ghost" href="' + n.url + '" target="_blank" rel="noopener">詳しく見る</a>' : "") +
        "</div>";
    }).join("");
  }

  /* ============ X埋め込み ============ */
  function renderXPosts() {
    var box = $("#xposts");
    if (!box) return;
    var urls = X_POSTS.filter(function (u) { return u; });
    if (urls.length === 0) return;
    box.innerHTML = urls.map(function (u) {
      return '<div class="xpost-card"><blockquote class="twitter-tweet" data-dnt="true"><a href="' + u + '"></a></blockquote></div>';
    }).join("");
    var w = document.createElement("script");
    w.src = "https://platform.twitter.com/widgets.js";
    w.async = true;
    document.body.appendChild(w);
  }

  /* ============ メンバーカード（Member Guide） ============ */
  function renderMembers() {
    var box = $("#memberGrid");
    if (!box) return;
    box.innerHTML = MEMBERS.map(function (m) {
      var tags = [m.tags.stream, m.tags.clip, m.tags.art].filter(Boolean)
        .map(function (t) { return '<span>' + esc(t) + "</span>"; }).join("");
      var cardLink = m.id + ".html";
      var mark = m.icon
        ? '<span class="member-mark"><img src="' + m.icon + '" alt="' + esc(m.name) + '"></span>'
        : (m.img
          ? '<span class="member-mark"><img src="' + m.img + '" alt="' + esc(m.name) + '"></span>'
          : '<span class="member-mark">' + m.fanMark + "</span>");
      return '<a class="member-card card" href="' + cardLink + '" style="--mc:' + m.color + ";--mc-soft:" + m.subColor + '">' +
        mark +
        '<span class="member-name">' + m.name + "</span>" +
        '<span class="member-gen">' + m.gen + "</span>" +
        '<span class="member-catch">' + esc(m.catch) + "</span>" +
        '<span class="member-tags">' + tags + "</span>" +
        '<span class="btn">詳細を見る</span>' +
        "</a>";
    }).join("");
  }

  /* ============ ランチャー ============ */
  function renderLaunchers() {
    var box = $("#launcherGrid");
    if (!box) return;
    box.innerHTML = LAUNCHERS.map(function (l) {
      var badge = l.icon
        ? '<span class="launcher-icon"><img src="' + l.icon + '" alt=""></span>'
        : '<span class="shape-badge" style="background:linear-gradient(135deg,' + l.shape.grad[0] + "," + l.shape.grad[1] + ')">' + l.shape.char + "</span>";
      var inner = badge +
        "<h3>" + esc(l.name) + "</h3><p>" + esc(l.desc) + "</p>" +
        (l.url ? '<span class="btn">開く</span>' : '<span class="prep-badge">準備中</span>');
      if (l.url) return '<a class="launcher-card card" href="' + l.url + '" target="_blank" rel="noopener">' + inner + "</a>";
      return '<div class="launcher-card card">' + inner + "</div>";
    }).join("");
  }

  /* ============ カレンダー ============ */
  var calViewMonth = (function () {
    var now = jstNow();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  })();

  function evColor(type) {
    return type === "birthday" ? "#ef6a8d" : type === "anniversary" ? "#f2a93b" : "#6a9ef0";
  }

  function evTypeLabel(type) {
    return type === "birthday" ? "誕生日" : type === "anniversary" ? "記念日" : "イベント";
  }

  function eventOccurrences() {
    var list = [];
    EVENTS.forEach(function (e) {
      if (e.date) {
        var t = new Date(e.date);
        if (t >= new Date(jstNow().getFullYear(), jstNow().getMonth(), jstNow().getDate())) {
          list.push({ ev: e, date: t });
        }
        return;
      }
      if (e.member) {
        var m = getMember(e.member);
        if (!m) return;
        if (e.type === "birthday" && m.birthday) {
          list.push({ ev: e, date: nextOccurrence(m.birthday) });
        } else if (e.type === "anniversary" && m.debut) {
          list.push({ ev: e, date: nextOccurrence(m.debut.slice(5)) });
        }
      }
    });
    return list.sort(function (a, b) { return a.date - b.date; });
  }

  function eventsOn(y, mo, d) {
    return eventOccurrences().filter(function (it) {
      return it.date.getFullYear() === y && it.date.getMonth() === mo && it.date.getDate() === d;
    });
  }

  function initCalendar() {
    var listBox = $("#eventList");
    var gridBox = $("#calendarGrid");
    var title = $("#calTitle");
    var listBtn = $("#calListBtn");
    var gridBtn = $("#calGridBtn");
    var modal = $("#eventModal");
    if (!listBox) return;

    function evLink(url, label) {
      if (!url) return "";
      var external = url.indexOf(".html") === -1 ? ' target="_blank" rel="noopener"' : "";
      return '<a class="btn btn-ghost" style="margin-left:auto" href="' + url + '"' + external + ">" + label + "</a>";
    }

    function renderList() {
      var y = calViewMonth.getFullYear();
      var mo = calViewMonth.getMonth();
      var items = eventOccurrences().filter(function (it) {
        return it.date.getFullYear() === y && it.date.getMonth() === mo;
      });
      listBox.innerHTML = items.length ? items.map(function (it) {
        var d = it.date;
        return '<div class="cal-item card"><div class="cal-date-box"><b>' + d.getDate() + "</b><small>" + (d.getMonth() + 1) + "月</small></div>" +
          '<div><div class="cal-type" style="--ec:' + evColor(it.ev.type) + '">' + evTypeLabel(it.ev.type) + "</div>" +
          '<div class="cal-title2">' + esc(it.ev.title) + "</div>" +
          (it.ev.desc ? '<div class="video-meta">' + esc(it.ev.desc) + "</div>" : "") + "</div>" + evLink(it.ev.url, "詳細") + "</div>";
      }).join("") : '<div class="placeholder">この月のイベントはありません</div>';
    }

    function renderGrid() {
      var y = calViewMonth.getFullYear();
      var mo = calViewMonth.getMonth();
      var first = new Date(y, mo, 1);
      var daysInMonth = new Date(y, mo + 1, 0).getDate();
      var mmdd = pad2(mo + 1);
      var today = jstNow();
      var cells = [];

      for (var i = 0; i < first.getDay(); i++) {
        cells.push('<div class="cal-day empty"></div>');
      }

      for (var d = 1; d <= daysInMonth; d++) {
        var evs = eventsOn(y, mo, d);
        var dow = new Date(y, mo, d).getDay();
        var cls = "cal-day";
        if (dow === 0) cls += " sunday";
        if (dow === 6) cls += " saturday";
        if (d === today.getDate() && mo === today.getMonth() && y === today.getFullYear()) cls += " today";
        if (evs.length) cls += " has-event";
        var badges = evs.slice(0, 2).map(function (it) {
          return '<span class="cal-ebadge" style="--ec:' + evColor(it.ev.type) + '">' + esc(it.ev.title) + "</span>";
        }).join("");
        var more = evs.length > 2 ? '<span class="cal-more">+</span>' : "";
        cells.push('<div class="' + cls + '" data-ymd="' + y + "-" + mmdd + "-" + pad2(d) + '">' +
          "<b>" + d + "</b>" + badges + more + "</div>");
      }

      var dows = ["日", "月", "火", "水", "木", "金", "土"];
      gridBox.innerHTML = dows.map(function (w, i) {
        return '<div class="cal-dow' + (i === 0 ? ' sunday' : i === 6 ? ' saturday' : '') + '">' + w + "</div>";
      }).join("") + cells.join("");
      title.textContent = y + "年 " + (mo + 1) + "月";
    }

    function openDayModal(ymd) {
      if (!modal) return;
      var p = ymd.split("-");
      var y = parseInt(p[0], 10), mo = parseInt(p[1], 10) - 1, d = parseInt(p[2], 10);
      var evs = eventsOn(y, mo, d);
      if (!evs.length) return;
      $("#evmDate").textContent = y + "年 " + (mo + 1) + "月 " + d + "日 のイベント";
      $("#evmList").innerHTML = evs.map(function (it) {
        return '<div class="evm-item card"><span class="cal-type" style="--ec:' + evColor(it.ev.type) + '">' + evTypeLabel(it.ev.type) + "</span>" +
          '<div class="evm-title">' + esc(it.ev.title) + "</div>" +
          (it.ev.desc ? '<div class="evm-desc">' + esc(it.ev.desc) + "</div>" : "") + evLink(it.ev.url, "詳細を見る") + "</div>";
      }).join("");
      modal.classList.add("open");
    }

    function closeDayModal() {
      if (modal) modal.classList.remove("open");
    }

    function setView(view) {
      listBox.style.display = view === "list" ? "grid" : "none";
      gridBox.style.display = view === "grid" ? "grid" : "none";
      listBtn.classList.toggle("active", view === "list");
      gridBtn.classList.toggle("active", view === "grid");
    }

    listBtn.addEventListener("click", function () { setView("list"); });
    gridBtn.addEventListener("click", function () { setView("grid"); });
    $("#calPrev").addEventListener("click", function () {
      calViewMonth = new Date(calViewMonth.getFullYear(), calViewMonth.getMonth() - 1, 1);
      renderList();
      renderGrid();
    });
    $("#calNext").addEventListener("click", function () {
      calViewMonth = new Date(calViewMonth.getFullYear(), calViewMonth.getMonth() + 1, 1);
      renderList();
      renderGrid();
    });
    if (modal) {
      modal.addEventListener("click", function (e) { if (e.target === modal) closeDayModal(); });
      var closeBtn = $("#evmClose");
      if (closeBtn) closeBtn.addEventListener("click", closeDayModal);
    }
    gridBox.addEventListener("click", function (e) {
      var cell = e.target.closest(".cal-day.has-event");
      if (cell) openDayModal(cell.dataset.ymd);
    });

    renderList();
    renderGrid();
    setView("list");
  }

  /* ============ ヒストリー ============ */
  function renderHistory() {
    var box = $("#historyList");
    if (!box) return;
    box.innerHTML = HISTORY.map(function (h) {
      return '<div class="timeline-item"><div class="timeline-date">' + h.date + "</div>" +
        '<div class="timeline-title">' + esc(h.title) + "</div>" +
        (h.desc ? '<div class="timeline-desc">' + esc(h.desc) + "</div>" : "") + "</div>";
    }).join("");
  }

  /* ============ リンク集 ============ */
  function renderLinks() {
    var box = $("#linkGrid");
    if (!box) return;
    box.innerHTML = LINKS.map(function (l) {
      return '<a class="link-card card" href="' + l.url + '" target="_blank" rel="noopener">' +
        '<div class="link-name">' + esc(l.name) + "</div>" +
        '<div class="link-desc">' + esc(l.desc) + "</div></a>";
    }).join("");
  }

  /* ============ スクロールリビール ============ */
  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach(function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.1 });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  }

  /* ============ タレントページ ============ */
  function renderTalentPage() {
    var body = document.body;
    var memberId = body.dataset.member;
    if (!memberId) return;
    var m = getMember(memberId);
    if (!m) return;

    var hero = $("#talentHero");
    if (hero) {
      hero.style.setProperty("--mc", m.color);
      hero.style.setProperty("--mc-soft", m.subColor);
    }
    var cardStyle = "style=\"--mc:" + m.color + ";--mc-soft:" + m.subColor + "\"";

    var bc = $("#bcName");
    if (bc) bc.textContent = m.name;
    document.title = m.name + " | Milli Orbis";

    var tCatch = $("#tCatch");
    if (tCatch) tCatch.textContent = m.catch;
    var tGen = $("#tGen");
    if (tGen) tGen.textContent = m.gen;

    /* 挨拶ボイス */
    var voice = $("#voiceSection");
    if (voice) {
      if (m.voice) {
        voice.innerHTML = '<div class="voice-box card profile-card"><div><h3>挨拶ボイス</h3>' +
          '<button type="button" class="voice-btn" id="voiceBtn">▶ 挨拶を再生</button></div>' +
          '<div class="voice-note">配信音声から抽出した挨拶ボイス（MP3）を再生します。音声素材の再配布・アップロードはしないでください。</div>' +
          '<audio id="voiceAudio" src="' + m.voice + '" preload="none"></audio></div>';
        var btn = $("#voiceBtn");
        var audio = $("#voiceAudio");
        btn.addEventListener("click", function () {
          if (audio.paused) { audio.play(); btn.classList.add("playing"); btn.textContent = "⏸ 停止"; }
          else { audio.pause(); audio.currentTime = 0; btn.classList.remove("playing"); btn.textContent = "▶ 挨拶を再生"; }
        });
        audio.addEventListener("ended", function () {
          btn.classList.remove("playing");
          btn.textContent = "▶ 挨拶を再生";
        });
      } else {
        voice.innerHTML = '<div class="placeholder">挨拶ボイスは準備中です。<br>配信音声から抽出したMP3を assets/voices/' + m.id + '.mp3 に置き、data.js の voice に指定すると再生されます。</div>';
      }
    }

    /* プロフィール */
    var profile = $("#profileSection");
    if (profile) {
      profile.innerHTML =
        '<div class="talent-layout"><div class="profile-card card" ' + cardStyle + '><h3>プロフィール</h3>' +
        '<table class="profile-table"><tr><th>所属</th><td>' + m.gen + "</td></tr>" +
        (m.birthday ? "<tr><th>誕生日</th><td>" + m.birthday.slice(0, 2) + "月" + parseInt(m.birthday.slice(3), 10) + "日</td></tr>" : "") +
        (m.debut ? "<tr><th>デビュー</th><td>" + m.debut + "</td></tr>" : "") +
        (m.fanName ? "<tr><th>ファンネーム</th><td>" + m.fanName + "</td></tr>" : "") +
        (m.fanMark ? "<tr><th>ファンマーク</th><td>" +
          (m.icon ? '<span class="fanmark-img"><img src="' + m.icon + '" alt=""></span>' : "") +
          m.fanMark + "</td></tr>" : "") +
        (m.calls ? "<tr><th>呼び方</th><td>" + m.calls + "</td></tr>" : "") +
        "<tr><th>紹介</th><td>" + esc(m.profile) + "</td></tr>" +
        "<tr><th>特技・武器</th><td>" + esc(m.skills) + "</td></tr></table></div>" +

        '<div class="profile-card card"><h3>好きなもの</h3><p class="lead">' + esc(m.likes || "情報準備中") + "</p>" +
        "<h3>苦手なもの</h3><p class='lead'>" + esc(m.dislikes || "情報準備中") + "</p></div></div>";
    }

    /* 語録 */
    var phrases = $("#phrasesSection");
    if (phrases && m.phrases && m.phrases.length) {
      phrases.innerHTML = '<div class="profile-card card" ' + cardStyle + '><h3>語録</h3>' +
        '<div class="phrase-list">' + m.phrases.map(function (p) {
          return '<div class="phrase-card">' + esc(p) + "</div>";
        }).join("") + "</div></div>";
    }

    /* 歴史・実績 */
    var detail = $("#detailSection");
    if (detail && m.achievements && m.achievements.length) {
      detail.innerHTML = '<div class="profile-card card"><h3>歴史・実績</h3><div class="timeline">' +
        m.achievements.map(function (a) {
          return '<div class="timeline-item"><div class="timeline-title">' + esc(a) + "</div></div>";
        }).join("") + "</div></div>";
    }

    /* 人気動画（手動選定） */
    var videos = $("#videoSection");
    if (videos) {
      if (m.featuredVideos && m.featuredVideos.length) {
        videos.innerHTML = '<div class="profile-card card"><h3>おすすめ動画</h3><div class="grid grid-2">' +
          m.featuredVideos.map(function (vid) {
            return '<div class="video-embed"><iframe src="https://www.youtube.com/embed/' + vid +
              '" loading="lazy" allowfullscreen title="おすすめ動画"></iframe></div>';
          }).join("") + "</div></div>";
      } else {
        videos.innerHTML = '<div class="placeholder">おすすめ動画は準備中です。<br>data.js の featuredVideos にYouTube動画IDを登録すると埋め込み表示されます。</div>';
      }
    }

    /* 配信タグ */
    var tags = $("#tagSection");
    if (tags) {
      var items = [];
      if (m.tags.stream) items.push(["配信タグ", m.tags.stream]);
      if (m.tags.clip) items.push(["切り抜きタグ", m.tags.clip]);
      if (m.tags.art) items.push(["ファンアートタグ", m.tags.art]);
      if (items.length) {
        tags.innerHTML = '<div class="profile-card card"><h3>ハッシュタグ</h3><div class="tag-row">' +
          items.map(function (t) {
            return '<a class="tag-btn" href="https://x.com/search?q=' + encodeURIComponent("#" + t[1]) + '" target="_blank" rel="noopener">' +
              t[0] + ": #" + esc(t[1]) + "</a>";
          }).join("") + "</div></div>";
      }
    }

    /* SNSリンク */
    var links = $("#linkSection");
    if (links) {
      var sns = [];
      if (m.links.yt) sns.push(["YouTube", m.links.yt]);
      if (m.links.x) sns.push(["X", m.links.x]);
      if (m.links.tiktok) sns.push(["TikTok", m.links.tiktok]);
      if (sns.length) {
        links.innerHTML = '<div class="profile-card card"><h3>公式リンク</h3><div class="sns-row">' +
          sns.map(function (s) {
            return '<a class="sns-btn" href="' + s[1] + '" target="_blank" rel="noopener">' + s[0] + "</a>";
          }).join("") + "</div></div>";
      }
    }
  }

  /* ============ タレントイントロ演出 ============ */
  function initIntro() {
    var overlay = $("#introOverlay");
    if (!overlay) return;
    var memberId = overlay.dataset.member;
    var m = getMember(memberId);
    var audio = $("#introAudio", overlay);
    var skipBtn = $("#introSkip", overlay);
    var catchBox = $("#introCatch", overlay);

    /* キャッチコピーを一文字ずつ表示する準備（音声に合わせて順に出現） */
    if (m && m.catchphrase && catchBox) {
      var delay = 2.1;
      catchBox.innerHTML = m.catchphrase.split("").map(function (c) {
        if (c === " ") { delay += 0.05; return " "; }
        var d = delay;
        delay += 0.05;
        return '<span class="c-char" style="--cd:' + d.toFixed(2) + 's">' + c + "</span>";
      }).join("");
    }

    function closeIntro() {
      overlay.classList.add("close");
      setTimeout(function () {
        overlay.classList.remove("show", "play", "close");
        if (audio) { audio.pause(); audio.currentTime = 0; }
      }, 1000);
    }

    function startPlay() {
      overlay.classList.remove("close");
      overlay.classList.add("show", "play");
      var done = false;
      var finish = function () {
        if (done) return;
        done = true;
        closeIntro();
      };
      if (audio && m && m.introVoice) {
        var tryPlay = function () {
          try {
            var p = audio.play();
            if (p && p.catch) p.catch(function () {});
          } catch (e) {}
        };
        /* 自動再生がブラウザ制限でブロックされた場合は、最初の操作を起点に再生 */
        var retried = false;
        var retry = function () {
          if (retried) return;
          retried = true;
          tryPlay();
        };
        document.addEventListener("pointerdown", retry, { once: true });
        document.addEventListener("keydown", retry, { once: true });
        audio.addEventListener("ended", finish);
        var onMeta = function () {
          if (isFinite(audio.duration) && audio.duration > 0) {
            setTimeout(finish, audio.duration * 1000 + 1500);
          }
        };
        if (audio.readyState >= 1) onMeta();
        else audio.addEventListener("loadedmetadata", onMeta);
        /* 音声が読み込めない場合（ファイル未配置・自動再生ブロック等）でも必ず閉じる安全タイマー */
        setTimeout(finish, 8000);
        tryPlay();
      } else {
        setTimeout(finish, 7000);
      }
    }

    if (skipBtn) skipBtn.addEventListener("click", closeIntro);

    /* ヒーローの「▶ イントロを見る」ボタンからいつでも再再生 */
    var replayBtn = $("#introBtn");
    if (replayBtn) replayBtn.addEventListener("click", startPlay);

    /* タレントページを開くたびに自動再生（スキップは右上） */
    overlay.classList.add("show");
    startPlay();
  }

  /* ============ 起動 ============ */
  function boot() {
    applyOshi(getOshi());
    initHeader();
    initCountdown();
    checkBirthday();
    loadYoutubeData();
    renderNews();
    renderXPosts();
    renderMembers();
    renderLaunchers();
    initCalendar();
    renderHistory();
    renderLinks();
    renderTalentPage();
    initIntro();
    initReveal();
    initOnboarding();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
