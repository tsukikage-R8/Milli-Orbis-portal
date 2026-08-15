/* ============================================
   ミリプロ検定 (quiz.html)
   依存: data.js の QUIZ のみ（script.js とは独立動作）
   モード: クイック（ランダム10問）/ プロ（全問出題）。URL ?mode=pro でも指定可
   ============================================ */
(function () {
  "use strict";

  if (typeof QUIZ === "undefined" || !QUIZ.length) {
    var msg = document.querySelector("#quizStart");
    if (msg) msg.innerHTML = '<div class="quiz-card card"><p class="placeholder">問題データが見つかりません。</p></div>';
    return;
  }

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  var start = $("quizStart");
  var screen = $("quizScreen");
  var result = $("quizResult");
  var rankBox = $("quizRank");
  var progress = $("quizProgress");
  var qBox = $("quizQ");
  var optsBox = $("quizOpts");
  var explainBox = $("quizExplain");
  var nextBtn = $("quizNext");
  var scoreBox = $("quizScore");
  var shareBtn = $("quizShare");
  var retryBtn = $("quizRetry");

  var mode = /[?&]mode=pro/i.test(location.search) ? "pro" : "quick";
  var questions = [];
  var idx = 0, score = 0, total = 0;

  function rankFor(sc) {
    var pct = total ? sc / total : 0;
    if (pct >= 1) return { label: "ミリプロ検定 完全制覇！", sub: "あなたは紛れもないミリプロ博士です。ミリプロのために存在しています。", icon: "🏆" };
    if (pct >= 0.8) return { label: "ミリプロマスター", sub: "かなりのミリプロ好き！あと少しで完全制覇です。", icon: "👑" };
    if (pct >= 0.6) return { label: "ミリプロファン", sub: "なかなかの知識量。推しを深掘りすればもっと上を目指せます！", icon: "💎" };
    if (pct >= 0.4) return { label: "ミリプロ入門者", sub: "まだまだこれから！Member Guideから知識を積みましょう。", icon: "🌱" };
    return { label: "駆け出しプロデューサー", sub: "まずはMember Guideでミリプロのことを知ろう！ここからがスタートです。", icon: "✨" };
  }

  function renderQ() {
    var q = questions[idx];
    progress.textContent = (idx + 1) + " / " + total;
    qBox.textContent = q.q;
    optsBox.innerHTML = "";
    explainBox.style.display = "none";
    nextBtn.style.display = "none";
    q.opts.forEach(function (opt, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-opt";
      b.textContent = opt;
      b.addEventListener("click", function () { pick(i, b); });
      optsBox.appendChild(b);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function pick(i, btn) {
    var q = questions[idx];
    var correct = i === q.a;
    if (correct) score++;
    var btns = optsBox.querySelectorAll(".quiz-opt");
    btns.forEach(function (b, bi) {
      b.disabled = true;
      if (bi === q.a) b.classList.add("is-correct");
      else if (bi === i) b.classList.add("is-wrong");
    });
    explainBox.style.display = "block";
    explainBox.innerHTML = (correct ? "✅ 正解！" : "❌ 不正解… 正解は「" + esc(q.opts[q.a]) + "」") +
      "<p>" + esc(q.exp) + "</p>";
    if (q.link) {
      var ext = q.link.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "";
      explainBox.innerHTML += '<a class="quiz-ref" href="' + q.link + '"' + ext + ">🔗 " + esc(q.linkLabel || "詳しくはこちら") + "</a>";
    }
    nextBtn.style.display = "block";
    nextBtn.textContent = idx + 1 >= total ? "結果を見る 🎉" : "次の問題 →";
  }

  function showResult() {
    screen.style.display = "none";
    result.style.display = "block";
    var r = rankFor(score);
    scoreBox.textContent = score + " / " + total + " 問正解";
    rankBox.innerHTML = '<div class="quiz-rank-icon">' + r.icon + "</div>" +
      '<div class="quiz-rank-label">' + esc(r.label) + "</div>" +
      '<p class="quiz-rank-sub">' + esc(r.sub) + "</p>";
    shareBtn.href = "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent("ミリプロ検定 " + score + "/" + total + " 問正解「" + r.label + "」！ #ミリプロ #ミリプロ検定 #MilliOrbis") +
      "&url=" + encodeURIComponent(location.origin + location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startQuiz() {
    questions = mode === "pro" ? QUIZ.slice() : shuffle(QUIZ.slice()).slice(0, Math.min(10, QUIZ.length));
    total = questions.length;
    idx = 0; score = 0;
    start.style.display = "none";
    screen.style.display = "block";
    renderQ();
  }

  var startBtn = $("quizStartBtn");
  var startPro = $("quizStartPro");
  if (startBtn) startBtn.addEventListener("click", function () { mode = "quick"; startQuiz(); });
  if (startPro) startPro.addEventListener("click", function () { mode = "pro"; startQuiz(); });
  if (mode === "pro" && startBtn && !startPro) startQuiz();

  nextBtn.addEventListener("click", function () {
    idx++;
    if (idx >= total) { showResult(); return; }
    renderQ();
  });

  retryBtn.addEventListener("click", function () {
    result.style.display = "none";
    screen.style.display = "none";
    start.style.display = "block";
  });
})();