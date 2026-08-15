/* ============================================
   楽曲一覧 (songs.html)
   依存: data/songs.js の SONGS ＋ data/songs-extra.js の SONGS_EXTRA（曲マスター・歌枠）
   曲を単位に、公式楽曲・歌ってみた・歌枠をまとめて表示する
   ============================================ */
(function () {
  "use strict";

  var data = typeof SONGS !== "undefined" ? SONGS : window.SONGS;
  var extra = typeof SONGS_EXTRA !== "undefined" ? SONGS_EXTRA : (window.SONGS_EXTRA || {});
  var meta = extra.meta || {};
  var master = (typeof SONG_MASTER !== "undefined" ? SONG_MASTER : (window.SONG_MASTER || {})).songs || {};
  var autoKaraoke = (typeof KARAOKE !== "undefined" ? KARAOKE : (window.KARAOKE || [])) || [];
  var SD = window.SongData;

  function $(id) { return document.getElementById(id); }
  function esc(s) { return SD.esc(s); }

  var listBox = $("songsList");
  if (!listBox) return;

  if (!data) {
    listBox.innerHTML = '<div class="placeholder">' + T("songs.nodata") + "</div>";
    return;
  }

  var search = $("songsSearch");
  var chips = $("songsChips");
  var tabOfficial = $("songsTabOfficial");
  var tabCovers = $("songsTabCovers");
  var tabKaraoke = $("songsTabKaraoke");
  var tabAll = $("songsTabAll");
  var tabLabel = $("songsTabLabel");
  var note = $("songsNote");
  var modeVideos = $("songsModeVideos");
  var modeMaster = $("songsModeMaster");
  var videosSection = $("videosSection");
  var masterSection = $("masterSection");

  var view = "all";
  var mode = "videos";
  var keyword = "";
  var memberFilter = "";

  /* モード切替: 歌動画 ⇔ 曲まとめ */
  function setMode(m) {
    mode = m;
    if (videosSection) videosSection.style.display = m === "videos" ? "" : "none";
    if (masterSection) masterSection.style.display = m === "master" ? "" : "none";
    if (modeVideos) modeVideos.classList.toggle("active", m === "videos");
    if (modeMaster) modeMaster.classList.toggle("active", m === "master");
  }
  if (modeVideos) modeVideos.addEventListener("click", function () { setMode("videos"); });
  if (modeMaster) modeMaster.addEventListener("click", function () { setMode("master"); });

  /* 歌枠: 自動取得（KARAOKE）＋手動（SONGS_EXTRA.karaoke）を id 単位でマージ（手動優先） */
  var karaokeStreams = SD.mergeKaraoke(autoKaraoke, extra.karaoke || []);

  /* カバー曲リスト（歌枠の曲を key で統合） */
  var coverData = SD.buildCoverList(data, karaokeStreams);
  var coverList = coverData.list;
  var coverByKey = coverData.byKey;

  function normKana(s) { return SD.normKana(s); }

  /* ---- 埋め込みプレイヤー（サムネ＋再生ボタン → iframe） ---- */
  function embedUrl(id, start) {
    return "https://www.youtube.com/embed/" + id + "?autoplay=1" + (start ? "&start=" + start : "");
  }

  function iframeHtml(src) {
    return '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>';
  }

  var PLAY_SVG = '<svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  var YT_SVG = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z"/></svg>';

  function thumbHtml(id, start) {
    return '<div class="song-thumb-wrap" data-src="' + embedUrl(id, start) + '">' +
      '<img class="song-thumb" src="https://i.ytimg.com/vi/' + id + '/mqdefault.jpg" alt="" loading="lazy">' +
      '<span class="play-overlay" aria-hidden="true">' + PLAY_SVG + "</span>" +
      "</div>";
  }

  function playInWrap(wrap, id, start) {
    if (!wrap) return;
    var src = id ? embedUrl(id, start) : wrap.getAttribute("data-src");
    if (!src) return;
    var f = wrap.querySelector("iframe");
    if (f) { if (f.getAttribute("src") !== src) f.setAttribute("src", src); }
    else { wrap.innerHTML = iframeHtml(src); }
  }

  function ytBtnHtml(id) {
    return '<a class="btn btn-ghost song-ytbtn" href="https://www.youtube.com/watch?v=' + id + '" target="_blank" rel="noopener">' + YT_SVG + " " + T("songs.youtube") + "</a>";
  }

  /* メンバー検索対象: 名前・読み・ファンネーム・呼称・英語名 */
  function memberSearchText(m) {
    if (!m) return "";
    return [m.name, m.nameEn, m.fanName, m.calls].filter(Boolean).join(" ");
  }

  function matchKeyword(text) {
    if (!keyword) return true;
    return normKana(text).indexOf(keyword) !== -1;
  }

  function matchMember(m) {
    return matchKeyword(memberSearchText(m));
  }

  /* 検索ハイライト: 一致文字列を推し色で強調（歌枠セトリ含む全テキスト用） */
  function hlColor() {
    try {
      var oshi = localStorage.getItem("milli-oshi");
      if (oshi) return SD.chipColor(oshi);
    } catch (e) { /* localStorage 不可時はデフォルト色 */ }
    return "#e8590c";
  }

  function highlight(text) {
    if (!keyword || !text) return esc(text);
    var raw = String(text);
    var norm = SD.normKana(raw).toLowerCase();
    var kw = keyword.toLowerCase();
    var out = "";
    var i = 0;
    var idx;
    while ((idx = norm.indexOf(kw, i)) !== -1) {
      out += esc(raw.slice(i, idx)) +
        '<mark class="song-hl" style="--hlc:' + hlColor() + '">' + esc(raw.slice(idx, idx + kw.length)) + "</mark>";
      i = idx + kw.length;
    }
    return out + esc(raw.slice(i));
  }

  function memberChipHtml(id, url) {
    var inner = '<span class="song-member-chip" style="--mc:' + SD.chipColor(id) + '">' + esc(SD.memberLabel(id)) + "</span>";
    return url ? '<a class="song-member-chip" href="' + url + '" target="_blank" rel="noopener" style="--mc:' + SD.chipColor(id) + '">' + esc(SD.memberLabel(id)) + "</a>" : inner;
  }

  /* カバー・歌枠に登場するメンバー一覧 */
  function coverMembers() {
    var list = [];
    coverList.forEach(function (g) {
      g.urls.forEach(function (u) {
        if (u.memberId === "official") return;
        if (list.indexOf(u.memberId) === -1) list.push(u.memberId);
      });
    });
    return list.sort();
  }

  function chipsHtml() {
    var members = coverMembers();
    var html = '<button type="button" class="song-chip' + (memberFilter ? "" : " active") + '" data-m="">' + T("songs.all") + "</button>";
    html += members.map(function (id) {
      return '<button type="button" class="song-chip' + (memberFilter === id ? " active" : "") + '" data-m="' + id + '"' +
        ' style="--mc:' + SD.chipColor(id) + '">' + esc(SD.memberLabel(id)) + "</button>";
    }).join("");
    return html;
  }

  function isNew(dateStr) {
    if (!dateStr) return false;
    var d = new Date(dateStr);
    if (!d.getTime()) return false;
    return (Date.now() - d.getTime()) <= 14 * 86400000;
  }

  function artistOf(g) {
    var info = SD.songInfo(meta, master, g.key);
    return info && info.artist ? info.artist : "";
  }

  /* ---- 歌ってみた: 曲単位カード（歌枠由来のバージョンも統合表示） ---- */
  function songCardHtml(g) {
    var primary = g.urls[0] || { id: "", publishedAt: "" };
    var art = artistOf(g);
    var versions = g.urls.map(function (u) {
      var href = SD.videoUrl(u.id, u.start);
      var badge = u.karaoke ? '<span class="song-kind song-kind-karaoke">' + T("songs.karaokeBadge") + "</span>" : "";
      var ts = u.karaoke && u.start ? '<span class="song-ts">' + SD.fmtTs(u.start) + "〜" + (u.end ? SD.fmtTs(u.end) : "") + "</span>" : "";
      var vdate = u.publishedAt ? '<span class="song-vdate">' + esc(u.publishedAt) + "</span>" : "";
      return '<div class="song-version">' +
        memberChipHtml(u.memberId, href) + badge + ts + vdate +
        "</div>";
    }).join("");
    return '<div class="song-card card">' +
      thumbHtml(primary.id, primary.start) +
      (isNew(primary.publishedAt) ? '<span class="song-new">NEW</span>' : "") +
      '<div class="song-title">' + highlight(g.title) + "</div>" +
      (art ? '<div class="song-artist">' + highlight(art) + "</div>" : "") +
      (g.urls.length > 1 ? '<div class="song-collab">' + T("songs.collab") + "</div>" : "") +
      '<div class="song-versions">' + versions + "</div>" +
      ytBtnHtml(primary.id) +
      "</div>";
  }

  /* ---- 歌ってみた: 曲単位カード（歌枠由来のバージョンも統合表示） ---- */
  function coverCards() {
    var list = coverList.slice();
    if (keyword) {
      list = list.filter(function (g) {
        if (matchKeyword(g.title)) return true;
        if (matchKeyword(artistOf(g))) return true;
        return g.urls.some(function (u) { return matchMember(SD.memberById(u.memberId)); });
      });
    }
    if (memberFilter) {
      list = list.filter(function (g) { return g.urls.some(function (u) { return u.memberId === memberFilter; }); });
    }
    return list.map(function (g) {
      return { date: (g.urls[0] && g.urls[0].publishedAt) || "", html: songCardHtml(g) };
    });
  }

  function coversHtml() {
    var cards = coverCards();
    if (!cards.length) return '<div class="placeholder">' + T("songs.none") + "</div>";
    return gridHtml(cards);
  }

  function gridHtml(cards) {
    return '<div class="song-grid">' + cards.map(function (c) { return c.html; }).join("") + "</div>";
  }

  /* ---- 公式楽曲 ---- */
  function officialCards() {
    var list = (data.official || []).slice();
    if (keyword) {
      list = list.filter(function (v) {
        if (matchKeyword(v.title)) return true;
        return (v.members || []).some(function (mid) { return matchMember(SD.memberById(mid)); });
      });
    }
    if (memberFilter) {
      list = list.filter(function (v) {
        return (v.members && v.members.length ? v.members : ["official"]).indexOf(memberFilter) !== -1;
      });
    }
    return list.map(function (v) {
      var chips = (v.members && v.members.length ? v.members : ["official"]).map(function (mid) {
        return memberChipHtml(mid, "");
      }).join("");
      return { date: v.publishedAt || "", html:
        '<div class="song-card card">' +
        thumbHtml(v.id) +
        (isNew(v.publishedAt) ? '<span class="song-new">NEW</span>' : "") +
        '<div class="song-title">' + highlight(v.title) + "</div>" +
        '<div class="song-members">' + chips + "</div>" +
        '<div class="song-meta">' + esc(v.publishedAt) + "</div>" +
        ytBtnHtml(v.id) +
        "</div>" };
    });
  }

  /* ---- 歌枠: 配信単位カード（収録曲とタイムスタンプ） ---- */
  function karaokeCards() {
    var list = karaokeStreams.slice();
    if (keyword) {
      list = list.filter(function (st) {
        if (matchKeyword(st.title)) return true;
        return (st.songs || []).some(function (s) {
          return matchKeyword(s.title || s.key) || matchKeyword((coverByKey.get(s.key) || {}).title || "");
        });
      });
    }
    if (memberFilter) {
      list = list.filter(function (st) { return st.memberId === memberFilter; });
    }
    return list.map(function (st) {
      var songs = (st.songs || []).map(function (s, i) {
        var g = coverByKey.get(s.key);
        var label = (g && g.title) || s.title || s.key;
        return '<div class="song-kitem" role="button" tabindex="0" data-stream="' + st.id + '" data-start="' + (s.start || "") + '">' +
          '<span class="song-kidx">' + (i + 1) + "</span>" +
          '<span class="song-kname">' + highlight(label) + "</span>" +
          '<span class="song-ts">' + (s.start ? SD.fmtTs(s.start) + "〜" + (s.end ? SD.fmtTs(s.end) : "") : "–") + "</span>" +
          '<a class="song-kext" href="' + SD.videoUrl(st.id, s.start) + '" target="_blank" rel="noopener" aria-label="' + T("songs.openYt") + '">' + YT_SVG + "</a>" +
          "</div>";
      }).join("");
      return { date: st.publishedAt || "", html:
        '<div class="song-card card">' +
        thumbHtml(st.id) +
        (isNew(st.publishedAt) ? '<span class="song-new">NEW</span>' : "") +
        '<div class="song-title">' + highlight(st.title) + "</div>" +
        '<div class="song-members">' + memberChipHtml(st.memberId, "") + "</div>" +
        '<div class="song-meta">' + esc(st.publishedAt) + "</div>" +
        '<div class="song-klist">' + songs + "</div>" +
        ytBtnHtml(st.id) +
        "</div>" };
    });
  }

  function karaokeHtml() {
    var cards = karaokeCards();
    if (!cards.length) return '<div class="placeholder">' + T("songs.none") + "</div>";
    return gridHtml(cards);
  }

  /* ---- すべて: 歌ってみた・公式・歌枠を新しい順に統合表示 ---- */
  function allHtml() {
    var cards = coverCards().concat(officialCards(), karaokeCards());
    if (!cards.length) return '<div class="placeholder">' + T("songs.none") + "</div>";
    cards.sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
    return gridHtml(cards);
  }

  function render() {
    var n = view === "all"
      ? coverList.length + (data.official || []).length + karaokeStreams.length
      : view === "official" ? (data.official || []).length
        : view === "karaoke" ? karaokeStreams.length : coverList.length;
    tabLabel.textContent = view === "all" ? T("songs.tabLabelAll", { n: n }) :
      view === "covers" ? T("songs.tabLabelCovers", { n: n }) :
        view === "official" ? T("songs.tabLabelOfficial", { n: n }) : T("songs.tabLabelKaraoke", { n: n });
    note.style.display = view === "covers" ? "none" : "block";
    note.textContent = view === "karaoke" ? T("songs.karaokeNote")
      : view === "all" ? T("songs.note") + " " + T("songs.karaokeNote")
        : T("songs.note");
    listBox.innerHTML = view === "all" ? allHtml()
      : view === "covers" ? coversHtml()
        : view === "official" ? officialHtml() : karaokeHtml();
  }

  function setView(v) {
    view = v;
    if (tabAll) tabAll.classList.toggle("active", v === "all");
    if (tabOfficial) tabOfficial.classList.toggle("active", v === "official");
    if (tabCovers) tabCovers.classList.toggle("active", v === "covers");
    if (tabKaraoke) tabKaraoke.classList.toggle("active", v === "karaoke");
    render();
  }

  if (tabAll) tabAll.addEventListener("click", function () { setView("all"); });
  if (tabOfficial) tabOfficial.addEventListener("click", function () { setView("official"); });
  if (tabCovers) tabCovers.addEventListener("click", function () { setView("covers"); });
  if (tabKaraoke) tabKaraoke.addEventListener("click", function () { setView("karaoke"); });

  if (search) search.addEventListener("input", function () {
    keyword = normKana(search.value.trim());
    render();
  });

  /* サムネ・再生ボタン → iframe再生 / 歌枠セトリ行 → タイムスタンプ付きで再生 / リンク系は既定動作 */
  listBox.addEventListener("click", function (e) {
    if (e.target.closest("a")) return;
    var wrap = e.target.closest(".song-thumb-wrap");
    if (wrap) { playInWrap(wrap); return; }
    var kitem = e.target.closest(".song-kitem");
    if (kitem) {
      var card = kitem.closest(".song-card");
      playInWrap(card && card.querySelector(".song-thumb-wrap"), kitem.dataset.stream, parseInt(kitem.dataset.start, 10) || 0);
    }
  });

  listBox.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" && e.key !== " ") return;
    var kitem = e.target.closest(".song-kitem");
    if (!kitem) return;
    e.preventDefault();
    var card = kitem.closest(".song-card");
    playInWrap(card && card.querySelector(".song-thumb-wrap"), kitem.dataset.stream, parseInt(kitem.dataset.start, 10) || 0);
  });

  if (chips) chips.addEventListener("click", function (e) {
    var b = e.target.closest(".song-chip");
    if (!b) return;
    memberFilter = b.dataset.m || "";
    chips.innerHTML = chipsHtml();
    render();
  });

  chips.innerHTML = chipsHtml();
  setView("all");
})();