// Firebase 初期化・共通ヘルパ（Milli Games / Milli Unishare 共有バックエンド連携）
// 設定手順は「連携ハンドオフ.md」§6 を参照。
// config 未設定（apiKey が空）の間は連携機能は無効（エラーも出さない）
var firebaseReady = false;

function getFirebaseConfig() {
  if (typeof FIREBASE_CONFIG !== "undefined" && FIREBASE_CONFIG) return FIREBASE_CONFIG;
  if (typeof firebaseConfig !== "undefined" && firebaseConfig) return firebaseConfig;
  return null;
}

function initFirebase() {
  if (firebaseReady || typeof firebase === "undefined") return;
  var cfg = getFirebaseConfig();
  if (!cfg || !cfg.apiKey || !cfg.databaseURL) return;
  firebase.initializeApp(cfg);
  firebaseReady = true;
}

function firebaseAvailable() {
  return firebaseReady && typeof firebase !== "undefined";
}

// 本アプリ（Millipro-Chronicle）が保存する localStorage の playerId を読む
function getMilliproPlayerId() {
  try {
    var ud = JSON.parse(localStorage.getItem("millipro_userdata"));
    return ud && ud.playerId ? ud.playerId : null;
  } catch (e) { return null; }
}

// 連携IDの手動設定（ログイン不要フォールバック用・§1-4）
function setMilliproPlayerId(id) {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  if (!ud || typeof ud !== "object") ud = { createdAt: Date.now() };
  ud.playerId = String(id);
  ud.updatedAt = Date.now();
  localStorage.setItem("millipro_userdata", JSON.stringify(ud));
  return ud;
}

// ミニゲームクリアイベントを送信（ゲームIDはサイト内で一意な小文字・ハイフン形式）
function recordGameClear(gameId, score) {
  initFirebase();
  var pid = getMilliproPlayerId();
  if (!firebaseReady || !pid || !gameId) return;
  firebase.database().ref("millipro/gameEvents/" + pid + "/" + gameId + "/" + Date.now())
    .set({ score: score || 0, playedAt: Date.now() })
    .catch(function (e) { console.warn("gameEvent write failed", e); });
}

// ---------- アカウント連携（Firebase Auth・§2-4） ----------

function isAuthAvailable() {
  return firebaseAvailable() && typeof firebase.auth === "function";
}

function getMilliproUid() {
  if (!isAuthAvailable()) return null;
  var u = firebase.auth().currentUser;
  return u ? u.uid : null;
}

// ログイン状態の変化を監視（未ログイン/未設定なら null を渡す）
function onMilliproAuth(cb) {
  if (!isAuthAvailable()) { cb(null); return; }
  firebase.auth().onAuthStateChanged(function (user) {
    cb(user ? user.uid : null);
  });
}

function milliproLogin(email, password) {
  if (!isAuthAvailable()) return Promise.reject(new Error("auth unavailable"));
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

function milliproSignup(email, password) {
  if (!isAuthAvailable()) return Promise.reject(new Error("auth unavailable"));
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function milliproLogout() {
  if (!isAuthAvailable()) {
    try { localStorage.removeItem("millipro_userdata"); } catch (e) {}
    return Promise.resolve();
  }
  return firebase.auth().signOut().then(function () {
    try { localStorage.removeItem("millipro_userdata"); } catch (e) {}
  });
}

// パスワード再設定メールを送信（どのサイトからでも共通アカウントに対して送れる）
// 再設定後に戻る URL は呼び出し元サイトのオリジンを指定する（Firebase の承認済みドメイン登録が必要）
// 未登録ドメインの場合は authDomain（常に承認済み）へフォールバックして送信する
function milliproResetPassword(email) {
  if (!isAuthAvailable()) return Promise.reject(new Error("auth unavailable"));
  var auth = firebase.auth();
  email = String(email).trim();
  var origin = (typeof window !== "undefined" && window.location && window.location.origin && /^https?:/.test(window.location.origin))
    ? window.location.origin + "/" : "";
  var fallback = "https://" + (firebase.app().options.authDomain || "") + "/";
  var send = function (url) {
    return auth.sendPasswordResetEmail(email, { url: url, handleCodeInApp: false });
  };
  if (!origin) return send(fallback);
  return send(origin).catch(function (e) {
    if (e && e.code === "auth/unauthorized-continue-uri") return send(fallback);
    throw e;
  });
}

// パスワード再設定ダイアログ（ログイン画面の「パスワードをお忘れですか？」から開く）
function mpOpenReset() {
  var dialog = document.getElementById("password-reset-dialog");
  if (!dialog) return;
  var email = document.getElementById("mp-email");
  var input = document.getElementById("reset-email");
  if (input) input.value = (email && email.value && email.value.trim()) ? email.value.trim() : "";
  var msg = document.getElementById("reset-msg");
  if (msg) msg.textContent = "";
  dialog.classList.remove("hidden");
  if (input) input.focus();
}

function mpCloseReset() {
  var dialog = document.getElementById("password-reset-dialog");
  if (dialog) dialog.classList.add("hidden");
}

function mpResetError(e) {
  var j = e && e.code ? e.code : String(e);
  if (j.indexOf("user-not-found") >= 0) return "そのメールアドレスは登録されていません";
  if (j.indexOf("invalid-email") >= 0) return "メールアドレスの形式が正しくありません";
  if (j.indexOf("too-many-requests") >= 0) return "試行回数が多すぎます。しばらくしてから再度お試しください";
  return "送信に失敗しました: " + j;
}

function mpResetSubmit() {
  var input = document.getElementById("reset-email");
  var msg = document.getElementById("reset-msg");
  var btn = document.getElementById("reset-send-btn");
  if (!input || !msg) return;
  var email = input.value.trim();
  if (!email) { msg.textContent = "メールアドレスを入力してください"; return; }
  if (!isAuthAvailable()) { msg.textContent = "アカウント連携が設定されていません"; return; }
  if (btn) btn.disabled = true;
  msg.textContent = "送信中...";
  milliproResetPassword(email).then(function () {
    msg.textContent = "再設定メールを送信しました。メールのリンクからパスワードを再設定してください。";
  }).catch(function (e) {
    msg.textContent = mpResetError(e);
  }).finally(function () {
    if (btn) btn.disabled = false;
  });
}

function newPlayerIdFallback() {
  if (typeof crypto !== "undefined" && crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return "P" + Date.now();
}

// プロフィールを保証する（無ければローカルの playerId / 名前 / アイコン / 一言で作成）→ Promise<profile>
function ensureMilliproProfile(uid) {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  var localId = ud && ud.playerId;
  var localName = ud && ud.playerName;
  var localIcon = ud && ud.icon;
  var localComment = ud && ud.comment;

  return firebase.database().ref("millipro/users/" + uid + "/profile").once("value").then(function (snap) {
    var p = snap.val();
    var now = Date.now();
    if (p && typeof p === "object") {
      var changed = false;
      if (!p.playerId) { p.playerId = localId || newPlayerIdFallback(); changed = true; }
      if (!p.playerName && localName) { p.playerName = localName; changed = true; }
      if (!p.icon && localIcon) { p.icon = localIcon; changed = true; }
      if (!p.comment && localComment) { p.comment = localComment; changed = true; }
      if (changed) firebase.database().ref("millipro/users/" + uid + "/profile").set(p);
      return p;
    }
    var np = {
      playerId: localId || newPlayerIdFallback(),
      playerName: localName || "",
      icon: localIcon || "",
      comment: localComment || "",
      updatedAt: now
    };
    firebase.database().ref("millipro/users/" + uid + "/profile").set(np);
    return np;
  });
}

// profile の playerId / playerName / icon / comment をこの端末の localStorage に反映（他項目は保持）
function applyMilliproProfile(profile) {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  if (!ud || typeof ud !== "object") ud = { createdAt: Date.now() };
  ud.playerId = profile.playerId;
  if (profile.playerName) ud.playerName = profile.playerName;
  if (profile.icon) ud.icon = profile.icon;
  if (profile.comment) ud.comment = profile.comment;
  ud.updatedAt = Date.now();
  localStorage.setItem("millipro_userdata", JSON.stringify(ud));
  return ud;
}

// ログイン時にまとめて実行（Unishare / Games 版。gamedata 同期は本アプリのみの仕事）
function completeMilliproLogin(uid) {
  return ensureMilliproProfile(uid).then(function (profile) {
    applyMilliproProfile(profile);
    return profile;
  });
}

// localStorage の連携情報と Auth メールをまとめて返す
function mpProfileInfo() {
  var ud = null;
  try { ud = JSON.parse(localStorage.getItem("millipro_userdata")); } catch (e) {}
  var pid = ud && ud.playerId ? ud.playerId : "";
  var name = ud && ud.playerName ? ud.playerName : "";
  var icon = ud && ud.icon ? ud.icon : "";
  var comment = ud && ud.comment ? ud.comment : "";
  var email = "";
  try {
    if (isAuthAvailable() && firebase.auth().currentUser) email = firebase.auth().currentUser.email || "";
  } catch (e) {}
  return { pid: pid, name: name, icon: icon, comment: comment, email: email };
}

// profile.icon (絵文字 or 画像 dataURL) を表示する（§2-4 参考実装と同じロジック）
function renderUserIcon(el, user) {
  if (!el) return;
  var icon = user && user.icon;
  if (typeof icon === "string" && icon.indexOf("data:image/") === 0) {
    el.innerHTML = '<img src="' + icon + '" alt="icon">';
  } else if (icon) {
    el.textContent = icon;
  } else {
    el.textContent = user && user.playerName ? user.playerName.charAt(0) : "?";
  }
}

// ---------- アカウント連携UI（§2-4） ----------

function mpRender(uid) {
  var form = document.getElementById("mp-account-form");
  var ok = document.getElementById("mp-account-ok");
  if (!form || !ok) return;
  if (uid) {
    form.style.display = "none";
    ok.style.display = "block";
    document.getElementById("mp-pid").textContent = getMilliproPlayerId() || uid;
  } else {
    form.style.display = "block";
    ok.style.display = "none";
  }
  var ms = document.getElementById("mp-menu-status");
  if (ms) {
    var pid = getMilliproPlayerId();
    ms.textContent = pid ? "連携ID: " + pid : "未連携";
    ms.classList.toggle("linked", !!pid);
  }
  var info = mpProfileInfo();
  var pl = document.getElementById("profile-label");
  if (pl) {
    pl.textContent = info.name || info.pid || "ゲスト";
  }
  var pbtn = document.getElementById("profile-btn");
  var picon = document.getElementById("profile-header-icon");
  if (pbtn && picon) {
    renderUserIcon(picon, info);
    picon.style.display = "";
  }
  var editBox = document.getElementById("mp-edit");
  if (editBox) editBox.style.display = uid ? "block" : "none";
  var locked = document.getElementById("mp-edit-locked");
  if (locked) locked.style.display = uid ? "none" : "block";
  mpFillEditForm(uid);
}

// ---------- プロフィール編集（名前・アイコン） ----------

var mpPendingIcon = "";

// 編集フォームに現在のプロフィールを反映（ログイン時のみ表示）
function mpFillEditForm(uid) {
  var info = mpProfileInfo();
  var nameInput = document.getElementById("mp-edit-name");
  if (nameInput) nameInput.value = info.name || "";
  var preview = document.getElementById("mp-edit-icon-preview");
  if (preview) renderUserIcon(preview, { icon: info.icon, playerName: info.name });
  mpPendingIcon = info.icon || "";
  var note = document.getElementById("mp-edit-note");
  if (note) note.textContent = (window.T ? T("login.editNote") : "ログイン中の共有アカウント（Milli Games / Unishare / Chronicle と共通）に同期されます");
  var emojis = document.querySelectorAll(".mp-emoji-btn");
  emojis.forEach(function (b) {
    b.classList.toggle("active", b.dataset.emoji === mpPendingIcon);
  });
}

// 絵文字プリセットを選択
function mpPickEmoji(emoji) {
  mpPendingIcon = emoji;
  var preview = document.getElementById("mp-edit-icon-preview");
  if (preview) renderUserIcon(preview, { icon: emoji, playerName: "" });
  document.querySelectorAll(".mp-emoji-btn").forEach(function (b) {
    b.classList.toggle("active", b.dataset.emoji === emoji);
  });
}

// 画像ファイル → 128px の dataURL に圧縮（Firebase 容量対策）
function mpIconFromFile(file) {
  return new Promise(function (resolve, reject) {
    if (!file || !/^image\//.test(file.type)) { reject(new Error("画像ファイルを選択してください")); return; }
    var reader = new FileReader();
    reader.onerror = function () { reject(new Error("読み込みに失敗しました")); };
    reader.onload = function () {
      var img = new Image();
      img.onerror = function () { reject(new Error("画像を開けませんでした")); };
      img.onload = function () {
        var size = 128;
        var canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        var ctx = canvas.getContext("2d");
        var scale = Math.min(size / img.width, size / img.height);
        var w = Math.max(1, Math.round(img.width * scale));
        var h = Math.max(1, Math.round(img.height * scale));
        ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
        resolve(canvas.toDataURL("image/png"));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// アップロードファイル選択時
function mpPickIconFile(input) {
  var f = input && input.files && input.files[0];
  if (!f) return;
  mpIconFromFile(f).then(function (dataUrl) {
    mpPendingIcon = dataUrl;
    var preview = document.getElementById("mp-edit-icon-preview");
    if (preview) renderUserIcon(preview, { icon: dataUrl, playerName: "" });
    document.querySelectorAll(".mp-emoji-btn").forEach(function (b) { b.classList.remove("active"); });
  }).catch(function (e) {
    alert(e && e.message ? e.message : "エラー");
  });
}

// 名前・アイコンを保存（ログイン中のみ。共有DBへ同期）
function mpSaveProfile() {
  var nameInput = document.getElementById("mp-edit-name");
  var name = nameInput ? nameInput.value.trim() : "";
  if (!name && !mpPendingIcon) { alert("名前かアイコンを設定してください"); return; }
  var uid = getMilliproUid();
  if (!uid || !isAuthAvailable()) {
    alert("名前・アイコンの変更はログイン後に使えます");
    return;
  }
  firebase.database().ref("millipro/users/" + uid + "/profile").update({
    playerName: name,
    icon: mpPendingIcon,
    updatedAt: Date.now()
  }).then(function () {
    var merged = {
      playerId: getMilliproPlayerId() || "",
      playerName: name,
      icon: mpPendingIcon,
      comment: (function () {
        try {
          var ud = JSON.parse(localStorage.getItem("millipro_userdata"));
          return (ud && ud.comment) || "";
        } catch (e) { return ""; }
      })()
    };
    applyMilliproProfile(merged);
    mpRender(uid);
    mpRefreshBanner();
    alert("プロフィールを保存しました（共有アカウントに同期）");
  }).catch(function (e) {
    alert("保存に失敗しました: " + (e && e.message ? e.message : e));
  });
}

// ログイン / 新規登録のタブ切替
function mpTab(tab) {
  var loginPanel = document.getElementById("mp-panel-login");
  var signupPanel = document.getElementById("mp-panel-signup");
  var loginTab = document.getElementById("mp-tab-login");
  var signupTab = document.getElementById("mp-tab-signup");
  if (!loginPanel || !signupPanel) return;
  loginPanel.style.display = tab === "login" ? "block" : "none";
  signupPanel.style.display = tab === "signup" ? "block" : "none";
  if (loginTab) loginTab.className = tab === "login" ? "mp-tab active" : "mp-tab";
  if (signupTab) signupTab.className = tab === "signup" ? "mp-tab active" : "mp-tab";
  var msg = document.getElementById("mp-msg");
  if (msg) msg.textContent = "";
}

// パスワードの表示 / 非表示を切り替え
function mpToggle(inputId, btnId) {
  var input = document.getElementById(inputId);
  var btn = document.getElementById(btnId);
  if (!input) return;
  var show = input.type === "password";
  input.type = show ? "text" : "password";
  if (btn) btn.textContent = show ? "🙈" : "👁";
}

function mpAuthError(e) {
  var j = e && e.code ? e.code : String(e);
  if (j.indexOf("email-already-in-use") >= 0) return "そのメールは既に登録されています。ログインしてください";
  if (j.indexOf("wrong-password") >= 0 || j.indexOf("user-not-found") >= 0) return "メールまたはパスワードが違います";
  if (j.indexOf("weak-password") >= 0) return "パスワードは6文字以上にしてください";
  if (j.indexOf("invalid-email") >= 0) return "メールアドレスの形式が正しくありません";
  return "エラー: " + j;
}

function mpSubmit(isSignup) {
  var email = document.getElementById(isSignup ? "mp2-email" : "mp-email").value.trim();
  var pass = document.getElementById(isSignup ? "mp2-pass" : "mp-pass").value;
  var msg = document.getElementById("mp-msg");
  if (!msg) return;
  if (!email || !pass) { msg.textContent = "メールとパスワードを入力してください"; return; }
  if (isSignup) {
    var pass2 = document.getElementById("mp2-pass2").value;
    if (pass !== pass2) { msg.textContent = "パスワードが一致しません"; return; }
  }
  var p = isSignup ? milliproSignup(email, pass) : milliproLogin(email, pass);
  p.then(function () {
    msg.textContent = isSignup ? "登録しました。playerId を端末に反映中..." : "連携しました。playerId を端末に反映中...";
  }).catch(function (e) {
    msg.textContent = mpAuthError(e);
  });
}

function mpOpen() {
  var popup = document.getElementById("login-popup");
  if (popup) {
    mpFillEditForm(getMilliproUid());
    popup.classList.add("open");
  }
}

function mpClose() {
  var popup = document.getElementById("login-popup");
  if (popup) popup.classList.remove("open");
}

// ---------- 連携案内バナー（ログイン任意・§2-4） ----------

// 未ログイン & 連携ID未設定ならバナーを表示（ページ表示時に毎回判定。あとで閉じても次回また出る）
function mpRefreshBanner() {
  var b = document.getElementById("mp-banner");
  if (!b) return;
  var connected = (isAuthAvailable() && getMilliproUid()) || !!getMilliproPlayerId();
  b.style.display = connected ? "none" : "flex";
}

function mpHideBanner() {
  var b = document.getElementById("mp-banner");
  if (b) b.style.display = "none";
}

// 「連携する」→ アカウント連携UI（モーダル）を開いて案内する
function mpOpenAccount() {
  var popup = document.getElementById("login-popup");
  if (popup) {
    mpOpen();
    return;
  }
  var el = document.getElementById("mp-account");
  if (el) {
    el.style.display = "block";
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function mpLogout() {
  milliproLogout().then(function () {
    mpRender(null);
    mpRefreshBanner();
  });
}

function mpCopyId() {
  var pid = getMilliproPlayerId();
  if (!pid) { alert("連携IDが未設定です"); return; }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(pid).then(function () { alert("コピーしました: " + pid); });
  } else {
    var t = document.createElement("textarea");
    t.value = pid;
    document.body.appendChild(t);
    t.select();
    document.execCommand("copy");
    t.remove();
    alert("コピーしました: " + pid);
  }
}

function mpSetId() {
  var v = document.getElementById("mp-id").value.trim();
  if (!v) return;
  setMilliproPlayerId(v);
  mpRender(getMilliproUid());
  mpRefreshBanner();
  alert("連携IDを保存しました: " + v);
}

initFirebase();

// 画面初期化時に1回呼ぶ（auth 未設定でも mpRender(null) になるだけで安全）
onMilliproAuth(function (uid) {
  if (uid) {
    completeMilliproLogin(uid).then(function () {
      mpRender(uid);
      mpRefreshBanner();
    });
  } else {
    mpRender(null);
    mpRefreshBanner();
  }
});

if (document.getElementById("mp-popup-close")) {
  document.getElementById("mp-popup-close").addEventListener("click", function () {
    mpClose();
  });
}

// フォームのEnterキーで送信
(function () {
  var le = document.getElementById("mp-email");
  var lp = document.getElementById("mp-pass");
  if (le && lp) {
    le.addEventListener("keydown", function (e) { if (e.key === "Enter") mpSubmit(false); });
    lp.addEventListener("keydown", function (e) { if (e.key === "Enter") mpSubmit(false); });
  }
  var ne = document.getElementById("mp2-email");
  var np = document.getElementById("mp2-pass");
  var np2 = document.getElementById("mp2-pass2");
  if (ne && np && np2) {
    [ne, np, np2].forEach(function (inp) {
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") mpSubmit(true); });
    });
  }
  var ri = document.getElementById("reset-email");
  if (ri) ri.addEventListener("keydown", function (e) { if (e.key === "Enter") mpResetSubmit(); });
})();
