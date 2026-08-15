/* ============================================
   楽曲一覧 (songs.html)
   依存: data/songs.js の SONGS のみ（script.js とは独立動作）
   ============================================ */
(function () {
  "use strict";

  var data = typeof SONGS !== "undefined" ? SONGS : window.SONGS;

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  var listBox = $("songsList");
  if (!listBox) return;

  if (!data) {
    listBox.innerHTML = '<div class="placeholder">楽曲データがまだ生成されていません。しばらく待ってから再読み込みしてください。</div>';
    return;
  }

  var search = $("songsSearch");
  var chips = $("songsChips");
  var tabOfficial = $("songsTabOfficial");
  var tabCovers = $("songsTabCovers");
  var tabLabel = $("songsTabLabel");
  var note = $("songsNote");

  var view = "covers";
  var keyword = "";
  var memberFilter = "";

  /* ひらがな/カタカナを同一視する検索用正規化（半角→全角→ひらがな→小文字） */
  function normKana(s) {
    return String(s).normalize("NFKC").replace(/[\u30A1-\u30F6]/g, function (c) {
      return String.fromCharCode(c.charCodeAt(0) - 0x60);
    }).toLowerCase();
  }

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

  function memberById(id) {
    if (typeof MEMBERS === "undefined" || !MEMBERS) return null;
    for (var i = 0; i < MEMBERS.length; i++) {
      if (MEMBERS[i].id === id) return MEMBERS[i];
    }
    return null;
  }

  function memberLabel(id) {
    var m = memberById(id);
    return m ? m.name : (id === "official" ? "ミリプロ（全体）" : id);
  }

  function chipColor(id) {
    var m = memberById(id);
    return m ? m.color : "#75b1c0";
  }

  function memberChipHtml(id, url) {
    var inner = '<span class="song-member-chip" style="--mc:' + chipColor(id) + '">' + esc(memberLabel(id)) + "</span>";
    return url ? '<a class="song-member-chip" href="' + url + '" target="_blank" rel="noopener" style="--mc:' + chipColor(id) + '">' + esc(memberLabel(id)) + "</a>" : inner;
  }

  /* カバーに登場するメンバー一覧（複数人で歌っている曲は複数メンバーで集計） */
  function coverMembers() {
    var list = [];
    (data.covers || []).forEach(function (g) {
      g.urls.forEach(function (u) {
        if (list.indexOf(u.memberId) === -1) list.push(u.memberId);
      });
    });
    return list.sort();
  }

  /* カバーに登場するメンバー一覧（「ミリプロ（全体）」は絞り込み対象外） */
  function coverMembers() {
    var list = [];
    (data.covers || []).forEach(function (g) {
      g.urls.forEach(function (u) {
        if (u.memberId === "official") return;
        if (list.indexOf(u.memberId) === -1) list.push(u.memberId);
      });
    });
    return list.sort();
  }

  function chipsHtml() {
    var members = coverMembers();
    var html = '<button type="button" class="song-chip' + (memberFilter ? "" : " active") + '" data-m="">すべて</button>';
    html += members.map(function (id) {
      return '<button type="button" class="song-chip' + (memberFilter === id ? " active" : "") + '" data-m="' + id + '"' +
        ' style="--mc:' + chipColor(id) + '">' + esc(memberLabel(id)) + "</button>";
    }).join("");
    return html;
  }

  function officialHtml() {
    var list = data.official || [];
    if (keyword) {
      list = list.filter(function (v) { return matchKeyword(v.title); });
    }
    if (!list.length) return '<div class="placeholder">該当する楽曲が見つかりません</div>';
    return '<div class="song-grid">' + list.map(function (v) {
      var chips = (v.members && v.members.length ? v.members : ["official"]).map(function (mid) {
        return memberChipHtml(mid, "");
      }).join("");
      return '<a class="song-card card" href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener">' +
        thumbHtml(v.id) +
        '<div class="song-title">' + esc(v.title) + "</div>" +
        '<div class="song-members">' + chips + "</div>" +
        '<div class="song-meta">' + esc(v.publishedAt) + "</div>" +
        '<span class="btn btn-ghost">YouTubeで見る ▶</span></a>';
    }).join("") + "</div>";
  }

  function coversHtml() {
    var list = (data.covers || []).slice();
    if (keyword) {
      list = list.filter(function (g) {
        return matchKeyword(g.title) || g.urls.some(function (u) {
          return matchMember(memberById(u.memberId));
        });
      });
    }
    if (memberFilter) {
      list = list.filter(function (g) { return g.urls.some(function (u) { return u.memberId === memberFilter; }); });
    }
    if (!list.length) return '<div class="placeholder">該当する楽曲が見つかりません</div>';
    return '<div class="song-grid">' + list.map(function (g) {
      var primary = g.urls[0];
      var members = g.urls.map(function (u) {
        return memberChipHtml(u.memberId, "https://www.youtube.com/watch?v=" + u.id);
      }).join("");
      return '<div class="song-card card song-cover" data-url="https://www.youtube.com/watch?v=' + primary.id + '">' +
        thumbHtml(primary.id) +
        '<div class="song-title">' + esc(g.title) + "</div>" +
        (g.urls.length > 1 ? '<div class="song-collab">コラボ／複数人歌唱</div>' : "") +
        '<div class="song-members">' + members + "</div>" +
        '<span class="btn btn-ghost">YouTubeで見る ▶</span>' +
        "</div>";
    }).join("") + "</div>";
  }

  function render() {
    tabLabel.textContent = view === "covers" ? "歌ってみた（" + (data.covers || []).length + "曲）" : "公式楽曲（" + (data.official || []).length + "曲）";
    note.style.display = view === "covers" ? "none" : "block";
    listBox.innerHTML = view === "covers" ? coversHtml() : officialHtml();
  }

  function setView(v) {
    view = v;
    tabOfficial.classList.toggle("active", v === "official");
    tabCovers.classList.toggle("active", v === "covers");
    render();
  }

  tabOfficial.addEventListener("click", function () { setView("official"); });
  tabCovers.addEventListener("click", function () { setView("covers"); });

  search.addEventListener("input", function () {
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

  chips.addEventListener("click", function (e) {
    var b = e.target.closest(".song-chip");
    if (!b) return;
    memberFilter = b.dataset.m || "";
    chips.innerHTML = chipsHtml();
    render();
  });

  chips.innerHTML = chipsHtml();
  setView("covers");
})();