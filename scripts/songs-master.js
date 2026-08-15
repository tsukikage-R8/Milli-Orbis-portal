/* ============================================
   songs-master.js — 曲まとめページ（元曲から探す）
   依存: data/songs.js, data/songs-extra.js, data/song-master.js,
         data/karaoke.js, scripts/song-data.js
   元曲（カバー・歌枠・公式オリジナル曲）を一覧表示し、
   タップすると歌っているタレントと動画リンクを展開表示する。
   ============================================ */
(function () {
  "use strict";

  var data = typeof SONGS !== "undefined" ? SONGS : window.SONGS;
  var extra = typeof SONGS_EXTRA !== "undefined" ? SONGS_EXTRA : (window.SONGS_EXTRA || {});
  var master = (typeof SONG_MASTER !== "undefined" ? SONG_MASTER : (window.SONG_MASTER || {})).songs || {};
  var autoKaraoke = (typeof KARAOKE !== "undefined" ? KARAOKE : (window.KARAOKE || [])) || [];
  var meta = extra.meta || {};
  var SD = window.SongData;
  var MEMBERS_ALL = (typeof MEMBERS !== "undefined" && MEMBERS) ? MEMBERS : [];

  function $(id) { return document.getElementById(id); }
  function esc(s) { return SD.esc(s); }

  var listBox = $("smList");
  if (!listBox) return;

  var search = $("smSearch");
  var countEl = $("smCount");
  var keyword = "";

  /* 歌枠（自動＋手動）をマージし、カバー曲リストを構築 */
  var karaokeStreams = SD.mergeKaraoke(autoKaraoke, extra.karaoke || []);
  var coverData = SD.buildCoverList(data, karaokeStreams);
  var coverList = coverData.list;

  /* ---- 元曲一覧を構築（カバー＋歌枠由来の曲） ---- */
  var originals = coverList.map(function (g) {
    return {
      key: g.key,
      kind: "cover",
      title: g.title,
      info: SD.songInfo(meta, master, g.key),
      urls: g.urls
    };
  });

  /* ---- 公式オリジナル曲も元曲として含める ---- */
  function escapeRe(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function cleanOfficialTitle(t) {
    var s = String(t || "").replace(/【[^】]*】/g, "").trim();
    MEMBERS_ALL.forEach(function (m) {
      var nm = escapeRe(m.name);
      s = s.replace(new RegExp("\\s*[/／]\\s*" + nm + "\\s*（[^）]*）?\\s*$"), "");
      s = s.replace(new RegExp("\\s*[/／]\\s*" + nm + "\\s*\\([^)]*\\)?\\s*$"), "");
    });
    s = s.replace(/\s*[/／]\s*(Official\s*MV|Official\s*Music\s*Video|Million\s*Production|official).*$/i, "");
    s = s.replace(/\s*（official）\s*$/i, "").replace(/\s*\(official[^)]*\)\s*$/i, "");
    return s.trim();
  }
  function thumbUrl(id) {
    return "https://i.ytimg.com/vi/" + id + "/mqdefault.jpg";
  }
  (data.official || []).forEach(function (v) {
    var members = (v.members && v.members.length) ? v.members : ["official"];
    originals.push({
      key: "of:" + v.id,
      kind: "official",
      title: cleanOfficialTitle(v.title),
      info: null,
      cover: thumbUrl(v.id),
      officialId: v.id,
      urls: members.map(function (mid) {
        return { id: v.id, memberId: mid, publishedAt: v.publishedAt, official: true };
      })
    });
  });

  /* 新しい順（カバー/歌枠は最新歌唱日、公式は公開日） */
  originals.sort(function (a, b) {
    var na = Math.max.apply(null, a.urls.map(function (u) { return u.publishedAt || ""; }));
    var nb = Math.max.apply(null, b.urls.map(function (u) { return u.publishedAt || ""; }));
    return na > nb ? -1 : 1;
  });

  /* ---- 表示 ---- */
  function memberSearchText(m) {
    if (!m) return "";
    return [m.name, m.nameEn, m.fanName, m.calls].filter(Boolean).join(" ");
  }

  function matchKeyword(text) {
    if (!keyword) return true;
    return SD.normKana(text).indexOf(keyword) !== -1;
  }

  function chipHtml(id) {
    return '<span class="song-member-chip" style="--mc:' + SD.chipColor(id) + '">' + esc(SD.memberLabel(id)) + "</span>";
  }

  function jacketHtml(o) {
    var src = o.kind === "official" ? o.cover : (o.info && o.info.cover ? o.info.cover : "");
    if (src) {
      return '<div class="sm-jacket-wrap"><img class="sm-jacket" src="' + esc(src) + '" alt="" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
        '<div class="sm-jacket-none" style="display:none">♪</div></div>';
    }
    return '<div class="sm-jacket-wrap"><div class="sm-jacket-none">♪</div></div>';
  }

  function versionHtml(u) {
    var href = SD.videoUrl(u.id, u.start);
    var badge = u.karaoke ? '<span class="song-kind song-kind-karaoke">' + T("songs.karaokeBadge") + "</span>"
      : (u.official ? '<span class="song-kind song-kind-official">' + T("sm.officialBadge") + "</span>" : "");
    var ts = u.karaoke && u.start ? '<span class="song-ts">' + SD.fmtTs(u.start) + "〜" + (u.end ? SD.fmtTs(u.end) : "") + "</span>" : "";
    var vdate = u.publishedAt ? '<span class="song-vdate">' + esc(u.publishedAt) + "</span>" : "";
    return '<div class="sm-version">' +
      '<a class="song-member-chip" href="' + href + '" target="_blank" rel="noopener" style="--mc:' + SD.chipColor(u.memberId) + '">' + esc(SD.memberLabel(u.memberId)) + "</a>" +
      badge + ts + vdate +
      "</div>";
  }

  function cardHtml(o) {
    var uniqueMembers = [];
    o.urls.forEach(function (u) {
      if (uniqueMembers.indexOf(u.memberId) === -1) uniqueMembers.push(u.memberId);
    });
    var chips = uniqueMembers.map(chipHtml).join("");
    var artist = o.kind === "official"
      ? T("sm.officialArtist")
      : (o.info && o.info.artist ? o.info.artist : T("sm.artistUnknown"));
    var versions = o.urls.map(versionHtml).join("");
    var detail = '<div class="sm-detail">' +
      '<p class="sm-detail-label">' + T("sm.sangBy") + "</p>" +
      '<div class="sm-versions">' + versions + "</div>" +
      "</div>";
    return '<div class="sm-card card" data-key="' + esc(o.key) + '">' +
      '<div class="sm-top">' +
      jacketHtml(o) +
      '<div class="sm-body">' +
      '<div class="sm-title">' + esc(o.title) + "</div>" +
      '<div class="sm-artist">' + esc(artist) + "</div>" +
      '<div class="sm-members">' + chips + "</div>" +
      "</div>" +
      "</div>" +
      '<span class="sm-expand-btn">' + T("sm.expand") + "</span>" +
      detail +
      "</div>";
  }

  function render() {
    var list = originals.slice();
    if (keyword) {
      list = list.filter(function (o) {
        if (matchKeyword(o.title)) return true;
        var info = o.info || {};
        if (matchKeyword(info.artist || "")) return true;
        if (matchKeyword(info.album || "")) return true;
        return o.urls.some(function (u) { return matchKeyword(memberSearchText(SD.memberById(u.memberId))); });
      });
    }
    if (countEl) countEl.textContent = T("sm.count", { n: list.length });
    if (!list.length) {
      listBox.innerHTML = '<div class="placeholder">' + T("sm.none") + "</div>";
      return;
    }
    listBox.innerHTML = '<div class="sm-grid">' + list.map(cardHtml).join("") + "</div>";
  }

  if (search) search.addEventListener("input", function () {
    keyword = SD.normKana(search.value.trim());
    render();
  });

  /* カードタップで展開（リンク部分は除外） */
  listBox.addEventListener("click", function (e) {
    if (e.target.closest("a")) return;
    var card = e.target.closest(".sm-card");
    if (!card) return;
    var wasOpen = card.classList.contains("open");
    var cards = listBox.querySelectorAll(".sm-card.open");
    Array.prototype.forEach.call(cards, function (c) { c.classList.remove("open"); });
    if (!wasOpen) card.classList.add("open");
  });

  render();
})();
