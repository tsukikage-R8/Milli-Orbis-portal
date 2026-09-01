/* ============================================
   cursors-page.js — cursors.html 配布ページ描画
   ============================================ */
(function () {
  "use strict";
  var $ = function (s) { return document.querySelector(s); };
  function esc(s) { return String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
  function mName(m) {
    try {
      if (typeof window.mName === "function") return window.mName(m);
    } catch(e) {}
    return m.name;
  }
  // portal -> cur file mapping (liz->rizu, raco->rako, tsukuri->tsukuri)
  var CUR_MAP = { liz: "rizu", raco: "rako", tsukuri: "tsukuri", konomi:"konomi", nono:"nono", akubi:"akubi", koma:"koma", yura:"yura", nuhu:"nuhu", rei:"rei", mahoro:"mahoro" };
  var EN_MAP = { konomi:"Konomi", nono:"Nono", akubi:"Akubi", koma:"Koma", rako:"Rako", yura:"Yura", nuhu:"Nuhu", tsukuri:"Tsukuri", rizu:"Rizu", rei:"Rei", mahoro:"Mahoro", "milli-chan":"MilliChan" };
  function curId(portalId) {
    if (portalId === "milchan") return "milli-chan";
    return CUR_MAP[portalId] || portalId;
  }
  function enName(cid) { return EN_MAP[cid] || cid; }
  function render() {
    var grid = $("#cursorDistGrid");
    if (!grid || typeof MEMBERS === "undefined") return;
    var list = [];
    // members
    MEMBERS.forEach(function (m) {
      var cid = curId(m.id);
      var icon = m.icon || "/images/cursors/" + cid + ".png";
      list.push({ id: m.id, cid: cid, name: mName(m), color: m.color, icon: icon, isMilliChan:false });
    });
    // add milli-chan explicitly — タレントサイトのアイコンを使用
    var hasMilliChan = list.some(function(x){ return x.cid==="milli-chan"; });
    if (!hasMilliChan) {
      // MEMBERSの milchan からアイコンを取得（タレントサイトの画像）
      var milIcon = "images/icon/milli%20chan_profile.JPEG";
      try { for (var _mi=0; _mi<MEMBERS.length; _mi++) if (MEMBERS[_mi].id==="milchan") { milIcon = MEMBERS[_mi].icon || milIcon; break; } } catch(e) {}
      list.push({ id:"milli-chan", cid:"milli-chan", name:"ミリちゃん", color:"#74a5ae", icon: milIcon, isMilliChan:true });
    }
    grid.innerHTML = list.map(function (it) {
      var previewPng = "/images/cursors/" + it.cid + ".png";
      var curPng = "/images/cursors/" + it.cid + ".cur";
      var en = enName(it.cid);
      var zipUrl = "/dist/cursors/MilliOrbis-" + en + ".zip";
      // per-role cur files inside folder
      var folder = "/images/cursors/" + it.cid + "/";
      var roles = [
        {label:"通常", file:"arrow.cur"},
        {label:"リンク", file:"hand.cur"},
        {label:"テキスト", file:"beam.cur"},
        {label:"待機", file:"wait.cur"}
      ];
      var roleLinks = roles.map(function(r){
        return '<a href="' + folder + encodeURIComponent(r.file) + '" download class="cur-role-link">' + r.label + '</a>';
      }).join(" ");
      var note = '<span style="font-size:0.72rem;color:var(--muted);">Windows用15種（install.inf同梱）</span>';
      // One-click apply button (site cursor)
      var applyBtn = '<button type="button" class="btn btn-ghost cur-apply-btn" data-cur="' + it.cid + '" style="font-size:0.78rem;padding:6px 12px;">サイトで試す</button>';
      return '<div class="card" style="padding:16px 16px 14px;overflow:hidden;">'
        + '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">'
        + '<span style="width:48px;height:48px;border-radius:50%;overflow:hidden;border:3px solid #fff;outline:2px solid ' + esc(it.color||"#75b1c0") + ';flex:none;display:flex;align-items:center;justify-content:center;background:#fff;">'
        + '<img src="' + esc(it.icon) + '" alt="' + esc(it.name) + '" style="width:100%;height:100%;object-fit:cover;" onerror="this.src=\'' + previewPng + '\'">'
        + '</span>'
        + '<div style="flex:1;min-width:0;">'
        + '<div style="font-family:var(--font-display);font-weight:900;font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + esc(it.name) + '</div>'
        + '<div style="font-size:0.72rem;color:var(--muted);">MilliOrbis-' + esc(en) + '</div>'
        + '</div>'
        + '<span style="width:36px;height:36px;border-radius:8px;background:#fff;border:2px solid ' + esc(it.color||"#75b1c0") + ';display:flex;align-items:center;justify-content:center;flex:none;overflow:hidden;">'
        + '<img src="' + previewPng + '" alt="cursor" style="width:28px;height:28px;object-fit:contain;" onerror="this.style.display=\'none\'">'
        + '</span>'
        + '</div>'
        + '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px;">'
        + '<a href="' + zipUrl + '" download class="btn" style="font-size:0.82rem;padding:7px 14px;">一括DL（zip）</a>'
        + '<a href="' + folder + 'install.inf" download class="btn btn-ghost" style="font-size:0.82rem;padding:7px 14px;">INF</a>'
        + '<a href="' + folder + 'preview.png" download class="btn btn-ghost" style="font-size:0.78rem;padding:6px 10px;">preview</a>'
        + applyBtn
        + '</div>'
        + '<div style="font-size:0.78rem;font-weight:700;margin-bottom:6px;">ロール別（個別DL）:</div>'
        + '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">' + roleLinks + '</div>'
        + '<div style="margin-bottom:8px;">' + note + ' <a href="' + zipUrl + '" download style="font-size:0.72rem;color:var(--accent-deep);font-weight:700;">zipで全15種を入手 →</a></div>'
        + '<details style="font-size:0.78rem;"><summary style="cursor:pointer;font-weight:700;">全ファイル一覧を表示</summary>'
        + '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">'
        + '<span style="font-size:0.72rem;color:var(--muted);">15種: appstar, arrow, beam, cross, hand, help, move, no, pen, person, sizenesw, sizens, sizenwse, sizewe, wait — <a href="' + zipUrl + '" download>zip推奨</a></span>'
        + '</div></details>'
        + '</div>';
    }).join("");
    grid.addEventListener("click", function(e){
      var btn = e.target.closest(".cur-apply-btn");
      if (!btn) return;
      var cid = btn.dataset.cur;
      if (!cid) return;
      try {
        if (window.CursorStore) {
          var s = { enabled: true, talentId: cid };
          // For portal ids that map differently, store portal id if needed? But cursor expects cid
          // Store cid directly; portal's raco->rako etc will work because CSS has both
          // But to keep consistency with other site, we store canonical cid for liz/raco
          // However for portal's own state, we should store portal id for raco/liz
          // Convert back: rako->raco, rizu->liz
          var rev = { rako:"raco", rizu:"liz" };
          var portalId = rev[cid] || cid;
          if (portalId === "milli-chan") portalId = "milli-chan";
          // Use cid for CSS class, so save cid
          window.CursorStore.save({ enabled:true, talentId: cid });
          window.CursorStore.apply({ enabled:true, talentId: cid });
          // Also sync to oshi select? No
          alert("カーソルを「" + cid + "」に切り替えました（ヘッダーからOFFに戻せます）");
        }
      } catch(err){}
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render);
  else render();
})();
