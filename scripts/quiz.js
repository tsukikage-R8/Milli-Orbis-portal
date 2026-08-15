/* ============================================
   ミリプロ検定 (quiz.html)
   依存: data.js の QUIZ のみ（script.js とは独立動作）
   モード: クイック（ランダム10問）/ プロ（全問出題）。URL ?mode=pro でも指定可
   ============================================ */
(function () {
  "use strict";

  if (typeof QUIZ === "undefined" || !QUIZ.length) {
    var msg = document.querySelector("#quizStart");
    if (msg) msg.innerHTML = '<div class="quiz-card card"><p class="placeholder">' + T("quizp.noData") + "</p></div>";
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

  var REVIEW_KEY = "milli-quiz-review";
  var HISTORY_KEY = "milli-quiz-history";

  function getReviewSet() {
    try { return JSON.parse(localStorage.getItem(REVIEW_KEY) || "[]") || []; } catch (e) { return []; }
  }
  function setReviewSet(arr) {
    try { localStorage.setItem(REVIEW_KEY, JSON.stringify(arr)); } catch (e) {}
  }
  function getHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]") || []; } catch (e) { return []; }
  }
  function setHistory(arr) {
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(arr.slice(0, 20))); } catch (e) {}
  }
  function fmtDate(t) {
    var d = new Date(t);
    return d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
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

  var mode = /[?&]mode=pro/i.test(location.search) ? "pro" : /[?&]mode=review/i.test(location.search) ? "review" : "quick";
  var questions = [];
  var idx = 0, score = 0, total = 0;

  function rankFor(sc) {
    var pct = total ? sc / total : 0;
    if (pct >= 1) return { label: T("quizp.rank1"), sub: T("quizp.rank1Sub"), icon: "🏆" };
    if (pct >= 0.8) return { label: T("quizp.rank2"), sub: T("quizp.rank2Sub"), icon: "👑" };
    if (pct >= 0.6) return { label: T("quizp.rank3"), sub: T("quizp.rank3Sub"), icon: "💎" };
    if (pct >= 0.4) return { label: T("quizp.rank4"), sub: T("quizp.rank4Sub"), icon: "🌱" };
    return { label: T("quizp.rank5"), sub: T("quizp.rank5Sub"), icon: "✨" };
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
    var miss = getReviewSet();
    if (correct) {
      miss = miss.filter(function (k) { return k !== q.q; });
    } else if (miss.indexOf(q.q) < 0) {
      miss.push(q.q);
    }
    setReviewSet(miss);
    var btns = optsBox.querySelectorAll(".quiz-opt");
    btns.forEach(function (b, bi) {
      b.disabled = true;
      if (bi === q.a) b.classList.add("is-correct");
      else if (bi === i) b.classList.add("is-wrong");
    });
    explainBox.style.display = "block";
    explainBox.innerHTML = (correct ? T("quizp.correct") : T("quizp.wrong", { answer: esc(q.opts[q.a]) })) +
      "<p>" + esc(q.exp) + "</p>";
    if (q.link) {
      var ext = q.link.indexOf("http") === 0 ? ' target="_blank" rel="noopener"' : "";
      explainBox.innerHTML += '<a class="quiz-ref" href="' + q.link + '"' + ext + ">🔗 " + esc(q.linkLabel || T("quizp.ref")) + "</a>";
    }
    nextBtn.style.display = "block";
    nextBtn.textContent = idx + 1 >= total ? T("quizp.result") : T("quizp.next");
  }

  function showResult() {
    screen.style.display = "none";
    result.style.display = "block";
    var r = rankFor(score);
    scoreBox.textContent = T("quizp.score", { score: score, total: total });
    rankBox.innerHTML = '<div class="quiz-rank-icon">' + r.icon + "</div>" +
      '<div class="quiz-rank-label">' + esc(r.label) + "</div>" +
      '<p class="quiz-rank-sub">' + esc(r.sub) + "</p>";
    shareBtn.href = "https://twitter.com/intent/tweet?text=" +
      encodeURIComponent(T("quizp.shareText", { score: score, total: total, rank: r.label })) +
      "&url=" + encodeURIComponent(location.origin + location.pathname);
    var hist = getHistory();
    hist.unshift({ date: Date.now(), mode: mode, score: score, total: total });
    setHistory(hist);
    renderStats();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderStats() {
    var box = $("quizStats");
    if (!box) return;
    var hist = getHistory();
    var miss = getReviewSet();
    var html = "";
    if (hist.length) {
      var best = 0, allScore = 0, allTotal = 0;
      hist.forEach(function (h) {
        if (h.total && h.score / h.total > best) best = h.score / h.total;
        allScore += h.score; allTotal += h.total;
      });
      html += '<div class="quiz-stats-row">' +
        '<span>' + T("quizp.statsBest", { n: Math.round(best * 100) }) + "</span>" +
        '<span>' + T("quizp.statsTotal", { n: Math.round((allTotal ? allScore / allTotal : 0) * 100) }) + "</span>" +
        '<span>' + T("quizp.statsCount", { n: hist.length }) + "</span></div>";
      html += '<div class="quiz-stats-list"><div class="quiz-stats-title">' + T("quizp.statsRecent") + "</div>";
      hist.slice(0, 5).forEach(function (h) {
        var label = h.mode === "pro" ? T("quizp.modeProShort") : h.mode === "review" ? T("quizp.modeReviewShort") : T("quizp.modeQuickShort");
        html += '<div class="quiz-stats-item"><span>' + label + "</span><span>" + fmtDate(h.date) +
          "</span><b>" + h.score + "/" + h.total + "</b></div>";
      });
      html += "</div>";
    } else {
      html = '<p class="placeholder">' + T("quizp.statsEmpty") + "</p>";
    }
    box.innerHTML = html;
    var rv = $("quizReviewBtn");
    if (rv) {
      rv.disabled = !miss.length;
      rv.textContent = T("quizp.reviewWithCount", { n: miss.length });
    }
  }

  function startQuiz() {
    if (mode === "review") {
      var miss = getReviewSet();
      var pool = QUIZ.filter(function (q) { return miss.indexOf(q.q) >= 0; });
      if (!pool.length) {
        alert(T("quizp.reviewNone"));
        return;
      }
      questions = shuffle(pool);
    } else if (mode === "pro") {
      questions = QUIZ.slice();
    } else {
      questions = shuffle(QUIZ.slice()).slice(0, Math.min(10, QUIZ.length));
    }
    total = questions.length;
    idx = 0; score = 0;
    start.style.display = "none";
    screen.style.display = "block";
    renderQ();
  }

  var startBtn = $("quizStartBtn");
  var startPro = $("quizStartPro");
  var reviewBtn = $("quizReviewBtn");
  if (startBtn) startBtn.addEventListener("click", function () { mode = "quick"; startQuiz(); });
  if (startPro) startPro.addEventListener("click", function () { mode = "pro"; startQuiz(); });
  if (reviewBtn) reviewBtn.addEventListener("click", function () { mode = "review"; startQuiz(); });
  if (mode === "pro" && startBtn) startQuiz();
  renderStats();

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