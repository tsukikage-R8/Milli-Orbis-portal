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
  var tabLabel = $("songsTabLabel");
  var note = $("songsNote");

  var view = "covers";
  var keyword = "";
  var memberFilter = "";

  /* 歌枠: 自動取得（KARAOKE）＋手動（SONGS_EXTRA.karaoke）を id 単位でマージ（手動優先） */
  var karaokeStreams = SD.mergeKaraoke(autoKaraoke, extra.karaoke || []);

  /* カバー曲リスト（歌枠の曲を key で統合） */
  var coverData = SD.buildCoverList(data, karaokeStreams);
  var coverList = coverData.list;
  var coverByKey = coverData.byKey;

  function normKana(s) { return SD.normKana(s); }

  function thumbHtml(id) {
    return '<img class="song-thumb" src="https://i.ytimg.com/vi/' + id + '/mqdefault.jpg" alt="" loading="lazy">';
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
    return '<div class="song-card card song-cover" data-url="' + SD.videoUrl(primary.id, primary.start) + '">' +
      thumbHtml(primary.id) +
      (isNew(primary.publishedAt) ? '<span class="song-new">NEW</span>' : "") +
      '<div class="song-title">' + esc(g.title) + "</div>" +
      (art ? '<div class="song-artist">' + esc(art) + "</div>" : "") +
      (g.urls.length > 1 ? '<div class="song-collab">' + T("songs.collab") + "</div>" : "") +
      '<div class="song-versions">' + versions + "</div>" +
      "</div>";
  }

  function coversHtml() {
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
    if (!list.length) return '<div class="placeholder">' + T("songs.none") + "</div>";
    return '<div class="song-grid">' + list.map(songCardHtml).join("") + "</div>";
  }

  /* ---- 公式楽曲 ---- */
  function officialHtml() {
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
    if (!list.length) return '<div class="placeholder">' + T("songs.none") + "</div>";
    return '<div class="song-grid">' + list.map(function (v) {
      var chips = (v.members && v.members.length ? v.members : ["official"]).map(function (mid) {
        return memberChipHtml(mid, "");
      }).join("");
      return '<a class="song-card card" href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener">' +
        thumbHtml(v.id) +
        (isNew(v.publishedAt) ? '<span class="song-new">NEW</span>' : "") +
        '<div class="song-title">' + esc(v.title) + "</div>" +
        '<div class="song-members">' + chips + "</div>" +
        '<div class="song-meta">' + esc(v.publishedAt) + "</div>" +
        '<span class="btn btn-ghost">' + T("songs.youtube") + "</span></a>";
    }).join("") + "</div>";
  }

  /* ---- 歌枠: 配信単位カード（収録曲とタイムスタンプ） ---- */
  function karaokeHtml() {
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
    if (!list.length) return '<div class="placeholder">' + T("songs.none") + "</div>";
    return '<div class="song-grid">' + list.map(function (st) {
      var songs = (st.songs || []).map(function (s, i) {
        var g = coverByKey.get(s.key);
        var label = (g && g.title) || s.title || s.key;
        return '<a class="song-kitem" href="' + SD.videoUrl(st.id, s.start) + '" target="_blank" rel="noopener">' +
          '<span class="song-kidx">' + (i + 1) + "</span>" +
          '<span class="song-kname">' + esc(label) + "</span>" +
          '<span class="song-ts">' + (s.start ? SD.fmtTs(s.start) + "〜" + (s.end ? SD.fmtTs(s.end) : "") : "–") + "</span></a>";
      }).join("");
      return '<div class="song-card card">' +
        thumbHtml(st.id) +
        (isNew(st.publishedAt) ? '<span class="song-new">NEW</span>' : "") +
        '<div class="song-title">' + esc(st.title) + "</div>" +
        '<div class="song-members">' + memberChipHtml(st.memberId, "") + "</div>" +
        '<div class="song-meta">' + esc(st.publishedAt) + "</div>" +
        '<div class="song-klist">' + songs + "</div>" +
        "</div>";
    }).join("") + "</div>";
  }

  function render() {
    var n = view === "official" ? (data.official || []).length : (view === "karaoke" ? karaokeStreams.length : coverList.length);
    tabLabel.textContent = view === "covers" ? T("songs.tabLabelCovers", { n: n }) :
      view === "official" ? T("songs.tabLabelOfficial", { n: n }) : T("songs.tabLabelKaraoke", { n: n });
    note.style.display = view === "covers" ? "none" : "block";
    note.textContent = view === "karaoke" ? T("songs.karaokeNote") : T("songs.note");
    listBox.innerHTML = view === "covers" ? coversHtml() : view === "official" ? officialHtml() : karaokeHtml();
  }

  function setView(v) {
    view = v;
    if (tabOfficial) tabOfficial.classList.toggle("active", v === "official");
    if (tabCovers) tabCovers.classList.toggle("active", v === "covers");
    if (tabKaraoke) tabKaraoke.classList.toggle("active", v === "karaoke");
    render();
  }

  if (tabOfficial) tabOfficial.addEventListener("click", function () { setView("official"); });
  if (tabCovers) tabCovers.addEventListener("click", function () { setView("covers"); });
  if (tabKaraoke) tabKaraoke.addEventListener("click", function () { setView("karaoke"); });

  if (search) search.addEventListener("input", function () {
    keyword = normKana(search.value.trim());
    render();
  });

  /* カードタップで該当動画へ（メンバーチップなどのリンク部分を除く） */
  listBox.addEventListener("click", function (e) {
    if (e.target.closest("a")) return;
    var card = e.target.closest(".song-cover");
    if (card && card.dataset.url) {
      window.open(card.dataset.url, "_blank", "noopener");
    }
  });

  if (chips) chips.addEventListener("click", function (e) {
    var b = e.target.closest(".song-chip");
    if (!b) return;
    memberFilter = b.dataset.m || "";
    chips.innerHTML = chipsHtml();
    render();
  });

  chips.innerHTML = chipsHtml();
  setView("covers");
})();