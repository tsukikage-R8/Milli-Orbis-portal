/* ============================================
   楽曲一覧 (songs.html)
   公式プレイリスト「ミリプロ歌まとめ」＋メンバー歌ってみた
   ============================================ */
(function () {
  "use strict";

  var data = window.SONGS;
  if (!data) return;

  var listBox = $("#songsList");
  var search = $("#songsSearch");
  var chips = $("#songsChips");
  var tabOfficial = $("#songsTabOfficial");
  var tabCovers = $("#songsTabCovers");
  var tabLabel = $("#songsTabLabel");
  var note = $("#songsNote");

  var view = "covers";
  var keyword = "";
  var memberFilter = "";

  function memberById(id) {
    if (typeof MEMBERS === "undefined") return null;
    return MEMBERS.find(function (m) { return m.id === id; }) || null;
  }

  function chipsHtml() {
    var members = [];
    (data.covers || []).forEach(function (g) {
      g.urls.forEach(function (u) {
        if (members.indexOf(u.memberId) === -1) members.push(u.memberId);
      });
    });
    members.sort();
    var html = '<button type="button" class="song-chip' + (memberFilter ? "" : " active") + '" data-m="">すべて</button>';
    html += members.map(function (id) {
      var m = memberById(id);
      return '<button type="button" class="song-chip' + (memberFilter === id ? " active" : "") + '" data-m="' + id + '"' +
        (m ? ' style="--mc:' + m.color + '"' : "") + ">" + esc(m ? m.name : id) + "</button>";
    }).join("");
    return html;
  }

  function officialHtml() {
    var list = data.official || [];
    if (keyword) {
      list = list.filter(function (v) { return v.title.toLowerCase().indexOf(keyword) !== -1; });
    }
    return '<div class="song-grid">' + list.map(function (v) {
      return '<a class="song-card card" href="https://www.youtube.com/watch?v=' + v.id + '" target="_blank" rel="noopener">' +
        '<div class="song-title">' + esc(v.title) + "</div>" +
        '<div class="song-meta">' + esc(v.publishedAt) + "</div>" +
        '<span class="btn btn-ghost">YouTubeで見る ▶</span></a>';
    }).join("") + "</div>";
  }

  function coversHtml() {
    var list = (data.covers || []).slice();
    if (keyword) {
      list = list.filter(function (g) {
        return g.title.toLowerCase().indexOf(keyword) !== -1 ||
          g.urls.some(function (u) {
            var m = memberById(u.memberId);
            return m && m.name.toLowerCase().indexOf(keyword) !== -1;
          });
      });
    }
    if (memberFilter) {
      list = list.filter(function (g) { return g.urls.some(function (u) { return u.memberId === memberFilter; }); });
    }
    return '<div class="song-grid">' + list.map(function (g) {
      var chips2 = g.urls.map(function (u) {
        var m = memberById(u.memberId);
        return '<a class="song-member-chip" href="https://www.youtube.com/watch?v=' + u.id + '" target="_blank" rel="noopener" style="--mc:' + (m ? m.color : "#75b1c0") + '">' +
          (m ? m.name : esc(u.memberId)) + "</a>";
      }).join("");
      return '<div class="song-card card song-cover">' +
        '<div class="song-title">' + esc(g.title) + "</div>" +
        '<div class="song-members">' + chips2 + "</div>" +
        "</div>";
    }).join("") + "</div>";
  }

  function render() {
    tabLabel.textContent = view === "covers" ? "歌ってみた" : "公式楽曲";
    note.style.display = view === "covers" ? "none" : "block";
    listBox.innerHTML = view === "covers" ? coversHtml() : officialHtml();
    if (!listBox.children.length || !listBox.children[0].children.length) {
      listBox.innerHTML = '<div class="placeholder">該当する楽曲が見つかりません</div>';
    }
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
    keyword = search.value.trim().toLowerCase();
    render();
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