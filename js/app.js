'use strict';

// ── State ────────────────────────────────────────────────────────────────────
let currentLang  = localStorage.getItem('pplf_lang') || 'fr';
let currentView  = 'home';
let examLevel    = 'CSP';
let examQuestions = [];
let examAnswers  = {};
let examPage     = 0;
const PER_PAGE        = 10;
const TOTAL_Q         = 40;
const PASS_SCORE      = 32;   // Official: 32/40 (80%) — formation-civique.interieur.gouv.fr
const TOPICS_PER_EXAM = 8;    // 8 × 5 topics = 40
const EXAM_DURATION   = 45 * 60; // 45 minutes in seconds (official duration)

let examTimeLeft     = EXAM_DURATION;
let examTimerInterval = null;
let examMode         = 'review'; // 'review' | 'immediate'

// ── Boot ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  renderAll();
  navigateTo('home');
  bindEvents();
});

// Warn on browser close / refresh / tab change during active exam
window.addEventListener('beforeunload', (e) => {
  if (isExamActive()) {
    e.preventDefault();
    e.returnValue = ''; // triggers browser's native "leave site?" dialog
  }
});

// ── Language ─────────────────────────────────────────────────────────────────
function applyLang(lang) {
  const valid = ['fr','en','zh','ar','es'];
  currentLang = valid.includes(lang) ? lang : 'fr';
  localStorage.setItem('pplf_lang', currentLang);
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
}

// ── Navigation ────────────────────────────────────────────────────────────────
function isExamActive() {
  return examTimerInterval !== null;
}

function resetExamState() {
  stopTimer();
  examAnswers   = {};
  examQuestions = [];
  examTimeLeft  = EXAM_DURATION;
}

function navigateTo(view) {
  // Warn user if they try to leave an active exam session
  if (view !== 'exam' && isExamActive()) {
    const confirmed = confirm(t('exam_leave_confirm'));
    if (!confirmed) return; // stay on exam
    resetExamState();
  }

  currentView = view;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById('view-' + view);
  if (el) el.classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.view === view);
  });
  document.querySelectorAll('.mobile-nav__item').forEach(n => {
    n.classList.toggle('active', n.dataset.view === view);
  });
  if (view === 'home')    renderHome();
  if (view === 'study')   renderStudy();
  if (view === 'exam')    renderExamSetup();
  if (view === 'tc')      renderTC();
  window.scrollTo(0,0);
}

// ── Render All ────────────────────────────────────────────────────────────────
function renderAll() {
  renderNav();
  renderHome();
  renderStudy();
  renderExamSetup();
  renderTC();
  renderFooter();
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function renderNav() {
  const items = [
    { view:'home',  icon:'🏠', key:'nav_home'  },
    { view:'study', icon:'📚', key:'nav_study' },
    { view:'exam',  icon:'✏️', key:'nav_exam'  },
    { view:'tc',    icon:'📄', key:'nav_tc'    },
  ];
  const sidebarNav = document.getElementById('sidebar-nav');
  const mobileNav  = document.getElementById('mobile-nav-items');
  if (!sidebarNav || !mobileNav) return;

  sidebarNav.innerHTML = `<div class="sidebar__nav-label">Menu</div>` + items.map(i => `
    <button class="nav-item ${currentView===i.view?'active':''}" data-view="${i.view}" aria-current="${currentView===i.view?'page':'false'}">
      <span class="nav-item__icon-wrap"><span class="nav-item__icon">${i.icon}</span></span>
      <span class="nav-item__label">${t(i.key)}</span>
    </button>`).join('');

  mobileNav.innerHTML = items.map(i => `
    <button class="mobile-nav__item ${currentView===i.view?'active':''}" data-view="${i.view}">
      <span class="mobile-nav__item__icon">${i.icon}</span>
      <span>${t(i.key)}</span>
    </button>`).join('');

  sidebarNav.querySelectorAll('.nav-item').forEach(b => b.addEventListener('click', () => {
    closeSidebar();
    navigateTo(b.dataset.view);
  }));
  mobileNav.querySelectorAll('.mobile-nav__item').forEach(b => b.addEventListener('click', () => navigateTo(b.dataset.view)));
}

// ── Home ──────────────────────────────────────────────────────────────────────
function renderHome() {
  const el = document.getElementById('view-home');
  if (!el) return;
  el.innerHTML = `
    <div class="home-hero">
      <div class="home-hero__welcome">${t('home_welcome')}</div>
      <div class="home-hero__title">${t('site_name')}</div>
      <div class="home-hero__sub">${t('home_subtitle')}</div>
      <div class="home-hero__credit">© Paris — La Tour Eiffel &amp; la Seine</div>
    </div>
    <div class="home-cards">
      <div class="home-card" tabindex="0" role="button" data-goto="study">
        <div class="card">
          <div class="home-card__icon">📚</div>
          <div class="home-card__title">${t('home_card_study_title')}</div>
          <div class="home-card__desc">${t('home_card_study_desc')}</div>
          <button class="btn btn--primary btn--sm">${t('home_card_study_btn')}</button>
        </div>
      </div>
      <div class="home-card" tabindex="0" role="button" data-goto="exam">
        <div class="card">
          <div class="home-card__icon">✏️</div>
          <div class="home-card__title">${t('home_card_exam_title')}</div>
          <div class="home-card__desc">${t('home_card_exam_desc')}</div>
          <button class="btn btn--red btn--sm">${t('home_card_exam_btn')}</button>
        </div>
      </div>
    </div>
    <div class="tip-box">
      <div class="tip-box__icon">💡</div>
      <div>
        <div class="tip-box__title">${t('home_tip_title')}</div>
        <div class="tip-box__text">${t('home_tip_text')}</div>
      </div>
    </div>`;
  el.querySelectorAll('[data-goto]').forEach(c => {
    const handler = () => navigateTo(c.dataset.goto);
    c.addEventListener('click', handler);
    c.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') handler(); });
  });
}

// ── Study ─────────────────────────────────────────────────────────────────────
let studyLang = null; // null = follow UI lang

function getStudyLang() {
  return studyLang || currentLang;
}

function getSectionText(val, lang) {
  if (typeof val === 'string') return val;
  return val[lang] || val['fr'] || '';
}

function getSectionContent(content, lang) {
  if (Array.isArray(content)) return content;
  return content[lang] || content['fr'] || [];
}

function renderStudy(preserveOpen) {
  const el = document.getElementById('view-study');
  if (!el) return;
  const lang = getStudyLang();
  const topicNames = [t('topic_1'),t('topic_2'),t('topic_3'),t('topic_4'),t('topic_5')];
  const langLabels = { fr:'FR', en:'EN', zh:'中文', ar:'ع' };
  const langNames  = { fr:'Français', en:'English', zh:'中文', ar:'العربية', es:'Español' };

  // collect open accordions before re-render
  const openIds = preserveOpen
    ? Array.from(el.querySelectorAll('.accordion-item.open')).map(i => i.id)
    : [];

  const items = MATERIALS.map((mat, idx) => `
    <div class="accordion-item ${openIds.includes('acc-'+mat.id)?'open':''}" id="acc-${mat.id}">
      <div class="accordion-header" data-id="${mat.id}" role="button" tabindex="0"
           aria-expanded="${openIds.includes('acc-'+mat.id)}">
        <div class="accordion-header__left">
          <span class="accordion-header__icon">${mat.icon}</span>
          <span class="accordion-header__title">${topicNames[idx]}</span>
        </div>
        <div style="display:flex;align-items:center;gap:.5rem">
          <span class="accordion-header__badge">Thème ${mat.id}</span>
          <span class="accordion-chevron">▾</span>
        </div>
      </div>
      <div class="accordion-body" ${openIds.includes('acc-'+mat.id)?'':'style="display:none"'}>
        ${mat.sections.map(sec => `
          <div class="accordion-section" dir="${lang==='ar'?'rtl':'ltr'}">
            <h4>${getSectionText(sec.heading, lang)}</h4>
            <ul>${getSectionContent(sec.content, lang).map(c => `<li>${c}</li>`).join('')}</ul>
          </div>`).join('')}
        <div class="accordion-source">
          ${t('study_source')} formation-civique.interieur.gouv.fr — Licence Ouverte 2.0 (Etalab)
        </div>
      </div>
    </div>`).join('');

  el.innerHTML = `
    <div class="page-title">${t('study_title')}</div>
    <div class="page-subtitle">${t('study_subtitle')}</div>
    <div class="study-lang-toggle">
${['fr','en','zh','ar','es'].map(l => `
        <button class="study-lang-btn ${getStudyLang()===l?'active':''}" data-slang="${l}" dir="${l==='ar'?'rtl':'ltr'}">${langNames[l]}</button>
      `).join('')}
    </div>
    <div class="accordion">${items}</div>`;

  el.querySelectorAll('.study-lang-btn').forEach(btn => btn.addEventListener('click', () => {
    studyLang = btn.dataset.slang;
    renderStudy(true);
  }));

  el.querySelectorAll('.accordion-header').forEach(h => {
    const toggle = () => {
      const item = document.getElementById('acc-' + h.dataset.id);
      const body = item.querySelector('.accordion-body');
      const open = item.classList.toggle('open');
      body.style.display = open ? 'block' : 'none';
      h.setAttribute('aria-expanded', open);
    };
    h.addEventListener('click', toggle);
    h.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); toggle(); }});
  });
}

// ── Exam Setup ────────────────────────────────────────────────────────────────
function renderExamSetup() {
  const el = document.getElementById('view-exam');
  if (!el) return;
  el.innerHTML = `
    <div class="page-title">${t('exam_setup_title')}</div>
    <div class="exam-setup-grid">
      <div class="level-card ${examLevel==='CSP'?'selected':''}" data-level="CSP">
        <div class="level-card__badge">CSP</div>
        <div class="level-card__title">${t('exam_setup_csp_title')}</div>
        <div class="level-card__desc">${t('exam_setup_csp_desc')}</div>
      </div>
      <div class="level-card ${examLevel==='CR'?'selected':''}" data-level="CR">
        <div class="level-card__badge">CR</div>
        <div class="level-card__title">${t('exam_setup_cr_title')}</div>
        <div class="level-card__desc">${t('exam_setup_cr_desc')}</div>
      </div>
    </div>
    <div class="exam-mode-section">
      <div class="exam-mode-title">${t('exam_mode_title')}</div>
      <div class="exam-setup-grid">
        <div class="mode-card ${examMode==='immediate'?'selected':''}" data-mode="immediate">
          <div class="mode-card__icon">⚡</div>
          <div class="mode-card__title">${t('exam_mode_immediate')}</div>
          <div class="mode-card__desc">${t('exam_mode_immediate_desc')}</div>
        </div>
        <div class="mode-card ${examMode==='review'?'selected':''}" data-mode="review">
          <div class="mode-card__icon">📋</div>
          <div class="mode-card__title">${t('exam_mode_review')}</div>
          <div class="mode-card__desc">${t('exam_mode_review_desc')}</div>
        </div>
      </div>
    </div>
    <div class="exam-info-bar">ℹ️ ${t('exam_setup_info')}</div>
    <div style="text-align:center">
      <button class="btn btn--primary btn--lg" id="start-exam-btn">${t('exam_setup_btn')} →</button>
    </div>`;

  el.querySelectorAll('.level-card').forEach(c => c.addEventListener('click', () => {
    examLevel = c.dataset.level;
    el.querySelectorAll('.level-card').forEach(x => x.classList.remove('selected'));
    c.classList.add('selected');
  }));
  el.querySelectorAll('.mode-card').forEach(c => c.addEventListener('click', () => {
    examMode = c.dataset.mode;
    el.querySelectorAll('.mode-card').forEach(x => x.classList.remove('selected'));
    c.classList.add('selected');
  }));
  el.querySelector('#start-exam-btn').addEventListener('click', startExam);
}

// ── Exam logic ────────────────────────────────────────────────────────────────
function buildExam(level) {
  const pool = QUESTIONS.filter(q => q.level.includes(level));
  // Stratified: 8 questions per topic
  const byTopic = {};
  for (let t = 1; t <= 5; t++) byTopic[t] = shuffle(pool.filter(q => q.topic === t));
  const selected = [];
  for (let t = 1; t <= 5; t++) selected.push(...byTopic[t].slice(0, TOPICS_PER_EXAM));
  return shuffle(selected).map(q => {
    const order = shuffleIndices(q.options.length);
    const newAnswer = order.indexOf(q.answer);
    return { ...q, displayOptions: order.map(i => q.options[i]), displayAnswer: newAnswer };
  });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleIndices(n) {
  const idx = Array.from({length: n}, (_, i) => i);
  return shuffle(idx);
}

function startExam() {
  examQuestions = buildExam(examLevel);
  examAnswers   = {};
  examPage      = 0;
  examTimeLeft  = EXAM_DURATION;
  stopTimer();
  startTimer();
  renderExamPage();
}

function startTimer() {
  examTimerInterval = setInterval(() => {
    examTimeLeft--;
    updateTimerDisplay();
    if (examTimeLeft <= 0) {
      stopTimer();
      alert(t('exam_time_up'));
      renderResults();
    }
  }, 1000);
}

function stopTimer() {
  if (examTimerInterval) {
    clearInterval(examTimerInterval);
    examTimerInterval = null;
  }
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function updateTimerDisplay() {
  const el = document.getElementById('exam-timer');
  if (!el) return;
  el.textContent = formatTime(examTimeLeft);
  const wrap = el.closest('.exam-timer');
  if (!wrap) return;
  wrap.classList.remove('warn', 'danger');
  if (examTimeLeft <= 60)       wrap.classList.add('danger');
  else if (examTimeLeft <= 300) wrap.classList.add('warn');
}

function renderExamPage() {
  const el = document.getElementById('view-exam');
  if (!el) return;
  const totalPages = Math.ceil(TOTAL_Q / PER_PAGE);
  const start = examPage * PER_PAGE;
  const pageQs = examQuestions.slice(start, start + PER_PAGE);
  const answered = Object.keys(examAnswers).length;
  const progress = Math.round((answered / TOTAL_Q) * 100);
  const isLast = examPage === totalPages - 1;
  const allAnswered = answered === TOTAL_Q;

  // Determine timer state class for initial render
  const timerClass = examTimeLeft <= 60 ? 'danger' : examTimeLeft <= 300 ? 'warn' : '';

  el.innerHTML = `
    <div class="exam-header">
      <div class="exam-progress-wrap">
        <span class="exam-page-label">${t('exam_page_label')} ${examPage+1} ${t('exam_page_of')} ${totalPages}</span>
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${progress}%"></div></div>
        <span class="exam-answered">${t('exam_progress')} ${answered}/${TOTAL_Q}</span>
      </div>
      <div class="exam-timer ${timerClass}" title="${t('exam_time_left')}">
        <span class="exam-timer__icon">⏱</span>
        <span id="exam-timer">${formatTime(examTimeLeft)}</span>
      </div>
    </div>
    <div class="question-dots">
      ${examQuestions.map((q,i) => {
        const pg = Math.floor(i / PER_PAGE);
        const isCur = (i >= start && i < start + PER_PAGE);
        const isAns = examAnswers[q.id] !== undefined;
        return `<div class="q-dot ${isCur?'current':''} ${isAns&&!isCur?'answered':''}" data-goto-page="${pg}">${i+1}</div>`;
      }).join('')}
    </div>
    ${pageQs.map((q, pi) => renderQuestionCard(q, start + pi)).join('')}
    <div class="exam-nav">
      <button class="btn btn--outline ${examPage===0?'hidden':''}" id="btn-prev">← ${t('exam_prev')}</button>
      <span></span>
      ${isLast
        ? `<button class="btn btn--primary" id="btn-submit" ${allAnswered?'':' style="opacity:.5"'}>${t('exam_submit')}</button>`
        : `<button class="btn btn--primary" id="btn-next">${t('exam_next')} →</button>`}
    </div>`;

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Dot navigation
  el.querySelectorAll('.q-dot').forEach(d => d.addEventListener('click', () => {
    examPage = +d.dataset.gotoPage; renderExamPage();
  }));

  // Option selection
  el.querySelectorAll('.option-item').forEach(opt => opt.addEventListener('click', () => {
    if (opt.classList.contains('locked')) return;
    const card = opt.closest('.question-card');
    const qid  = card.dataset.qid;
    const val  = +opt.dataset.idx;
    examAnswers[qid] = val;

    if (examMode === 'immediate') {
      const q = examQuestions.find(qq => qq.id === qid);
      const isCorrect = val === q.displayAnswer;
      card.querySelectorAll('.option-item').forEach(o => {
        o.classList.add('locked');
        const idx = +o.dataset.idx;
        if (idx === q.displayAnswer) o.classList.add('correct');
        else if (idx === val && !isCorrect) o.classList.add('incorrect');
      });
      const fb = document.createElement('div');
      fb.className = `inline-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
      fb.innerHTML = `<span class="inline-feedback__badge">${isCorrect ? t('results_correct_badge') : t('results_incorrect_badge')}</span><span class="inline-feedback__text">💡 ${t('results_explanation')} ${q.explanation}</span>`;
      card.appendChild(fb);
    } else {
      opt.closest('.options-list').querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    }

    // update progress bar & dot
    const answered2 = Object.keys(examAnswers).length;
    const prog2 = Math.round((answered2 / TOTAL_Q) * 100);
    const fill = el.querySelector('.progress-bar-fill');
    if (fill) fill.style.width = prog2 + '%';
    const countEl = el.querySelector('.exam-answered');
    if (countEl) countEl.textContent = `${t('exam_progress')} ${answered2}/${TOTAL_Q}`;
    // update submit button
    const sub = el.querySelector('#btn-submit');
    if (sub) sub.style.opacity = answered2===TOTAL_Q ? '1':'0.5';
    // mark dot answered
    const qIdx = examQuestions.findIndex(qq => qq.id === qid);
    const dot = el.querySelectorAll('.q-dot')[qIdx];
    if (dot && !dot.classList.contains('current')) dot.classList.add('answered');
  }));

  const prevBtn = el.querySelector('#btn-prev');
  const nextBtn = el.querySelector('#btn-next');
  const subBtn  = el.querySelector('#btn-submit');
  if (prevBtn) prevBtn.addEventListener('click', () => { examPage--; renderExamPage(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { examPage++; renderExamPage(); });
  if (subBtn)  subBtn.addEventListener('click', submitExam);
}

function renderQuestionCard(q, globalIdx) {
  const savedAnswer = examAnswers[q.id];
  const isAnswered  = savedAnswer !== undefined;
  const topicName   = t('topic_' + q.topic);
  const letters     = ['A','B','C','D'];
  const isImmediate = examMode === 'immediate';

  const optionsHtml = q.displayOptions.map((opt, i) => {
    let cls = '';
    if (isImmediate && isAnswered) {
      if (i === q.displayAnswer)             cls = 'locked correct';
      else if (i === savedAnswer)            cls = 'locked incorrect';
      else                                   cls = 'locked';
    } else if (!isImmediate && savedAnswer === i) {
      cls = 'selected';
    }
    return `
          <div class="option-item ${cls}" data-idx="${i}">
            <div class="option-radio"></div>
            <span class="option-letter">${letters[i]}.</span>
            <span class="option-text">${opt}</span>
          </div>`;
  }).join('');

  const feedbackHtml = (isImmediate && isAnswered) ? `
      <div class="inline-feedback ${savedAnswer === q.displayAnswer ? 'correct' : 'incorrect'}">
        <span class="inline-feedback__badge">${savedAnswer === q.displayAnswer ? t('results_correct_badge') : t('results_incorrect_badge')}</span>
        <span class="inline-feedback__text">💡 ${t('results_explanation')} ${q.explanation}</span>
      </div>` : '';

  return `
    <div class="question-card" data-qid="${q.id}">
      <div class="question-topic-badge">📌 ${t('exam_topic_label')} ${q.topic} — ${topicName}</div>
      <div class="question-number">Q${globalIdx+1}</div>
      <div class="question-text">${q.q}</div>
      <div class="options-list">
        ${optionsHtml}
      </div>
      ${feedbackHtml}
    </div>`;
}

function submitExam() {
  const answered = Object.keys(examAnswers).length;
  if (answered < TOTAL_Q) { alert(t('exam_unanswered')); return; }
  if (!confirm(t('exam_submit_confirm'))) return;
  stopTimer();
  renderResults();
}

// ── Results ───────────────────────────────────────────────────────────────────
function renderResults() {
  const el = document.getElementById('view-exam');
  if (!el) return;

  let score = 0;
  examQuestions.forEach(q => {
    if (examAnswers[q.id] === q.displayAnswer) score++;
  });
  const passed = score >= PASS_SCORE;
  const letters = ['A','B','C','D'];

  el.innerHTML = `
    <div class="page-title">${t('results_title')}</div>
    <div class="results-header">
      <div class="score-circle ${passed?'passed':'failed'}">
        <div class="score-circle__num">${score}</div>
        <div class="score-circle__denom">/ ${TOTAL_Q}</div>
      </div>
      <div class="results-info">
        <div class="results-info__badge ${passed?'passed':'failed'}">${passed?t('results_passed'):t('results_failed')}</div>
        <div class="results-info__msg">${passed?t('results_pass_msg'):t('results_fail_msg')}</div>
        <div class="results-info__threshold">${t('results_pass_threshold')}</div>
      </div>
    </div>
    <div class="results-actions">
      <button class="btn btn--primary" id="btn-retry">${t('results_retry')}</button>
      <button class="btn btn--outline" id="btn-home">${t('results_back_home')}</button>
    </div>
    <div class="review-title">${t('results_review_title')}</div>
    <div class="review-list">
      ${examQuestions.map((q, i) => {
        const userAns = examAnswers[q.id];
        const correct = userAns === q.displayAnswer;
        const userText = q.displayOptions[userAns] || '—';
        const corrText = q.displayOptions[q.displayAnswer];
        return `
          <div class="review-item ${correct?'correct':'incorrect'}">
            <div class="review-item__header">
              <div class="review-badge ${correct?'correct':'incorrect'}">${correct?t('results_correct_badge'):t('results_incorrect_badge')}</div>
              <div class="review-item__q">Q${i+1}. ${q.q}</div>
            </div>
            <div class="review-item__body">
              ${!correct ? `<div class="review-answer your-wrong"><span>${t('results_your_answer')}</span> ${letters[userAns]}. ${userText}</div>` : ''}
              <div class="review-answer correct-ans"><span>${t('results_correct_answer')}</span> ${letters[q.displayAnswer]}. ${corrText}</div>
              <div class="review-explanation">💡 ${t('results_explanation')} ${q.explanation}</div>
            </div>
          </div>`;
      }).join('')}
    </div>`;

  el.querySelector('#btn-retry').addEventListener('click', () => { renderExamSetup(); });
  el.querySelector('#btn-home').addEventListener('click', () => navigateTo('home'));
  window.scrollTo(0,0);
}

// ── T&C ───────────────────────────────────────────────────────────────────────
function renderTC() {
  const el = document.getElementById('view-tc');
  if (!el) return;
  const langs = [
    {code:'fr',label:'Français'},
    {code:'en',label:'English'},
    {code:'zh',label:'中文'},
    {code:'ar',label:'العربية', rtl:true},
    {code:'es',label:'Español'}
  ];
  const activeTC = currentLang;
  el.innerHTML = `
    <div class="page-title">${t('tc_title')}</div>
    <div class="tc-lang-tabs">
      ${langs.map(l=>`<button class="tc-tab ${activeTC===l.code?'active':''}" data-tclang="${l.code}" ${l.rtl?'dir="rtl"':''}>${l.label}</button>`).join('')}
    </div>
    <div id="tc-content-fr" class="tc-content ${activeTC==='fr'?'active':''}"><div class="tc-body">${TC_FR}</div></div>
    <div id="tc-content-en" class="tc-content ${activeTC==='en'?'active':''}"><div class="tc-body">${TC_EN}</div></div>
    <div id="tc-content-zh" class="tc-content ${activeTC==='zh'?'active':''}"><div class="tc-body">${TC_ZH}</div></div>
    <div id="tc-content-ar" class="tc-content ${activeTC==='ar'?'active':''}"><div class="tc-body" dir="rtl">${TC_AR}</div></div>
    <div id="tc-content-es" class="tc-content ${activeTC==='es'?'active':''}"><div class="tc-body">${TC_ES}</div></div>`;

  el.querySelectorAll('.tc-tab').forEach(tab => tab.addEventListener('click', () => {
    el.querySelectorAll('.tc-tab').forEach(t=>t.classList.remove('active'));
    el.querySelectorAll('.tc-content').forEach(c=>c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tc-content-' + tab.dataset.tclang).classList.add('active');
  }));
}

// ── Footer ────────────────────────────────────────────────────────────────────
function renderFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  el.innerHTML = `
    <span>${t('footer_attribution')}</span>
    <span>${t('footer_unofficial')} | <a href="#" data-view="tc">${t('footer_tc')}</a></span>`;
  el.querySelectorAll('[data-view]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault(); navigateTo(a.dataset.view);
  }));
}

// ── Sidebar mobile ────────────────────────────────────────────────────────────
function bindEvents() {
  document.getElementById('hamburger-btn')?.addEventListener('click', openSidebar);
  document.getElementById('sidebar-overlay')?.addEventListener('click', closeSidebar);
  document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => {
    if (isExamActive()) {
      const confirmed = confirm(t('exam_leave_confirm'));
      if (!confirmed) return;
      resetExamState();
    }
    applyLang(b.dataset.lang);
    renderAll();
    navigateTo(currentView);
  }));
}
function openSidebar() {
  document.getElementById('sidebar')?.classList.add('open');
  document.getElementById('sidebar-overlay')?.classList.add('active');
}
function closeSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('active');
}

// ── T&C content (inline, all 3 languages) ────────────────────────────────────
const TC_FR = `
<div class="tc-header-block">
  <div>REPUBLIQUE FRANÇAISE — Liberté · Égalité · Fraternité</div>
  <h1>Conditions Générales d'Utilisation</h1>
  <div>Prêt pour la France — ProjMSP</div>
  <div class="tc-meta">Version 1.0 — En vigueur le 11 avril 2026 | Droit applicable : Droit français</div>
</div>
<p><strong>Préambule.</strong> Le présent document régit l'accès et l'utilisation de l'application <em>Prêt pour la France</em> (ci-après "l'Application"), développée et exploitée par <strong>ProjMSP</strong>, développeur indépendant, dans le seul but d'aider les personnes à préparer l'examen civique requis dans le cadre du Contrat d'Intégration Républicaine (CIR). En accédant à l'Application, vous acceptez ces CGU.</p>
<h2>1. Nature de l'Application</h2>
<p>L'Application est un outil d'étude <strong>indépendant et non officiel</strong>. Elle n'est pas affiliée au Ministère de l'Intérieur, à l'OFII ni à aucune autorité publique française. Elle ne remplace pas la formation civique obligatoire de 4 jours.</p>
<h2>2. Propriété intellectuelle et contenu</h2>
<p>Le contenu éducatif est adapté du site officiel <a href="https://formation-civique.interieur.gouv.fr" target="_blank">formation-civique.interieur.gouv.fr</a>, publié sous <strong>Licence Ouverte 2.0 (Etalab)</strong>. Cette licence autorise la reproduction, l'adaptation et la redistribution, y compris à des fins commerciales, sous réserve d'attribution. La formulation des questions, l'interface et le code constituent des œuvres originales de ProjMSP.</p>
<h2>3. Absence de garantie</h2>
<p>L'Application est fournie "en l'état". ProjMSP ne garantit pas l'exhaustivité, l'exactitude ou l'actualité du contenu, ni l'obtention d'un score particulier à l'examen officiel.</p>
<h2>4. Limitation de responsabilité</h2>
<p>ProjMSP décline toute responsabilité pour l'échec à l'examen civique officiel, les décisions administratives ou juridiques prises sur la base du contenu de l'Application, ou toute erreur ou omission.</p>
<h2>5. Données personnelles</h2>
<p>L'Application ne collecte aucune donnée personnelle. Seule la préférence de langue est stockée localement dans le navigateur (localStorage). Aucune donnée n'est transmise à des tiers.</p>
<h2>6. Droit applicable</h2>
<p>Les présentes CGU sont régies par le droit français. Tout litige sera soumis aux juridictions compétentes de France.</p>
<h2>7. Contact</h2>
<p>Pour toute question relative aux présentes CGU :</p>
<ul>
  <li><strong>Développeur :</strong> ProjMSP</li>
  <li><strong>Email :</strong> projects.shehab@gmail.com</li>
  <li><strong>Site web :</strong> https://pretpourlafrance.com</li>
</ul>
<div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:6px;font-size:.82rem;color:var(--text-muted)">
  <strong>Attribution :</strong> Contenu éducatif adapté de formation-civique.interieur.gouv.fr — Ministère de l'Intérieur, Parcours d'Intégration Républicaine, sous Licence Ouverte 2.0 (Etalab). Dernière révision du contenu : avril 2026. Cette application est un outil d'étude indépendant, non affilié au gouvernement français.
</div>`;

const TC_EN = `
<div class="tc-header-block">
  <div>FRENCH REPUBLIC — Liberty · Equality · Fraternity</div>
  <h1>Terms and Conditions</h1>
  <div>Prêt pour la France — ProjMSP</div>
  <div class="tc-meta">Version 1.0 — Effective 11 April 2026 | Applicable law: French law</div>
</div>
<p><strong>Preamble.</strong> This document governs access to and use of the <em>Prêt pour la France</em> application (the "Application"), developed and operated by <strong>ProjMSP</strong>, an independent developer, for the sole purpose of helping individuals prepare for the French civic exam required under the Contrat d'Intégration Républicaine (CIR). By accessing the Application, you agree to these Terms.</p>
<h2>1. Nature of the Application</h2>
<p>The Application is an <strong>independent, unofficial</strong> study tool. It is not affiliated with the French Ministry of the Interior, OFII, or any French public authority. It does not replace the mandatory 4-day civic training programme.</p>
<h2>2. Intellectual Property and Content</h2>
<p>Educational content is adapted from the official website <a href="https://formation-civique.interieur.gouv.fr" target="_blank">formation-civique.interieur.gouv.fr</a>, published under the <strong>Licence Ouverte 2.0 (Etalab)</strong>. This licence permits reproduction, adaptation, and redistribution, including for commercial purposes, provided attribution is given. Question formulations, the interface, and the code are original works by ProjMSP.</p>
<h2>3. Disclaimer of Warranty</h2>
<p>The Application is provided "as is". ProjMSP does not guarantee completeness, accuracy, or currency of content, nor any particular score on the official exam.</p>
<h2>4. Limitation of Liability</h2>
<p>ProjMSP accepts no responsibility for failure to pass the official civic exam, administrative or legal decisions taken based on the Application's content, or any errors or omissions.</p>
<h2>5. Personal Data</h2>
<p>The Application collects no personal data. Only the language preference is stored locally in the browser (localStorage). No data is transmitted to third parties.</p>
<h2>6. Governing Law</h2>
<p>These Terms are governed by French law. Any dispute shall be submitted to the competent courts of France.</p>
<h2>7. Contact</h2>
<p>For any questions regarding these Terms:</p>
<ul>
  <li><strong>Developer:</strong> ProjMSP</li>
  <li><strong>Email:</strong> projects.shehab@gmail.com</li>
  <li><strong>Website:</strong> https://pretpourlafrance.com</li>
</ul>
<div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:6px;font-size:.82rem;color:var(--text-muted)">
  <strong>Attribution:</strong> Educational content adapted from formation-civique.interieur.gouv.fr — Ministère de l'Intérieur, Parcours d'Intégration Républicaine, under Licence Ouverte 2.0 (Etalab). Last content review: April 2026. This application is an independent study tool, not affiliated with the French government.
</div>`;

const TC_AR = `
<div class="tc-header-block" dir="rtl">
  <div>الجمهورية الفرنسية — الحرية · المساواة · الأخوة</div>
  <h1>شروط الاستخدام</h1>
  <div>Prêt pour la France — ProjMSP</div>
  <div class="tc-meta">الإصدار 1.0 — ساري المفعول منذ 11 أبريل 2026 | القانون المطبق: القانون الفرنسي</div>
</div>
<p><strong>مقدمة.</strong> تحكم هذه الوثيقة الوصول إلى تطبيق <em>Prêt pour la France</em> (يُشار إليه بـ"التطبيق")، الذي طوّره مطور مستقل باسم <strong>ProjMSP</strong>، بهدف مساعدة الأفراد على الاستعداد للامتحان المدني المطلوب في إطار عقد الاندماج الجمهوري (CIR). باستخدامك للتطبيق، فإنك توافق على هذه الشروط.</p>
<h2>1. طبيعة التطبيق</h2>
<p>التطبيق أداة دراسة <strong>مستقلة وغير رسمية</strong>. لا يرتبط بوزارة الداخلية الفرنسية أو OFII أو أي سلطة عامة فرنسية، ولا يحل محل برنامج التكوين المدني الإجباري المؤلف من 4 أيام.</p>
<h2>2. الملكية الفكرية والمحتوى</h2>
<p>تم اقتباس المحتوى التعليمي من الموقع الرسمي <a href="https://formation-civique.interieur.gouv.fr" target="_blank">formation-civique.interieur.gouv.fr</a>، المتاح بموجب <strong>رخصة Licence Ouverte 2.0 (Etalab)</strong>. تُجيز هذه الرخصة إعادة الاستخدام والتكييف والتوزيع، بما في ذلك للأغراض التجارية، شريطة الإشارة إلى المصدر.</p>
<h2>3. إخلاء المسؤولية</h2>
<p>يُقدَّم التطبيق "كما هو". لا تضمن ProjMSP اكتمال المحتوى أو دقته أو حداثته، ولا تضمن الحصول على درجة معينة في الامتحان الرسمي.</p>
<h2>4. حدود المسؤولية</h2>
<p>لا تتحمل ProjMSP أي مسؤولية عن: الرسوب في الامتحان المدني الرسمي، أو القرارات الإدارية أو القانونية المبنية على محتوى التطبيق، أو أي أخطاء أو إغفالات.</p>
<h2>5. البيانات الشخصية</h2>
<p>لا يجمع التطبيق أي بيانات شخصية. يتم تخزين تفضيل اللغة فقط محلياً في المتصفح (localStorage). لا تُرسل أي بيانات إلى أطراف ثالثة.</p>
<h2>6. القانون المطبق</h2>
<p>تخضع هذه الشروط للقانون الفرنسي. يُحال أي نزاع إلى المحاكم المختصة في فرنسا.</p>
<h2>7. التواصل</h2>
<p>لأي استفسار بخصوص هذه الشروط:</p>
<ul>
  <li><strong>المطور:</strong> ProjMSP</li>
  <li><strong>البريد الإلكتروني:</strong> projects.shehab@gmail.com</li>
  <li><strong>الموقع:</strong> https://pretpourlafrance.com</li>
</ul>
<div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:6px;font-size:.82rem;color:var(--text-muted)">
  <strong>الإسناد:</strong> تم اقتباس المحتوى التعليمي من formation-civique.interieur.gouv.fr — وزارة الداخلية الفرنسية، برنامج الاندماج الجمهوري، بموجب رخصة Licence Ouverte 2.0 (Etalab). آخر مراجعة للمحتوى: أبريل 2026. هذا التطبيق أداة دراسية مستقلة وغير تابعة للحكومة الفرنسية.
</div>`;

const TC_ZH = `
<div class="tc-header-block">
  <div>法兰西共和国 — 自由 · 平等 · 博爱</div>
  <h1>使用条款</h1>
  <div>Prêt pour la France — ProjMSP</div>
  <div class="tc-meta">版本 1.0 — 2026年4月11日生效 | 适用法律：法国法律</div>
</div>
<p><strong>前言。</strong>本文件规范对 <em>Prêt pour la France</em>（以下简称"本应用"）的访问和使用。本应用由独立开发者 <strong>ProjMSP</strong> 开发和运营，专门帮助个人准备共和国融合合同（CIR）所要求的法国公民考试。访问本应用即表示您同意这些条款。</p>
<h2>1. 应用性质</h2>
<p>本应用是<strong>独立的非官方</strong>学习工具。它与法国内政部、OFII或任何法国公共机构无关联。它不能替代强制性的4天公民培训课程。</p>
<h2>2. 知识产权和内容</h2>
<p>教育内容改编自官方网站 <a href="https://formation-civique.interieur.gouv.fr" target="_blank">formation-civique.interieur.gouv.fr</a>，该网站内容在 <strong>Licence Ouverte 2.0 (Etalab)</strong> 许可下发布。该许可证允许复制、改编和再分发，包括用于商业目的，但须注明出处。题目表述、界面和代码是 ProjMSP 的原创作品。</p>
<h2>3. 免责声明</h2>
<p>本应用按"原样"提供。ProjMSP不保证内容的完整性、准确性或时效性，也不保证在官方考试中获得特定分数。</p>
<h2>4. 责任限制</h2>
<p>ProjMSP对以下情况不承担责任：未能通过官方公民考试；基于本应用内容做出的行政或法律决定；任何错误或遗漏。</p>
<h2>5. 个人数据</h2>
<p>本应用不收集任何个人数据。仅将语言偏好本地存储在浏览器中（localStorage）。不向第三方传输任何数据。</p>
<h2>6. 适用法律</h2>
<p>本条款受法国法律管辖。任何争议应提交法国有管辖权的法院解决。</p>
<h2>7. 联系方式</h2>
<p>如有关于本条款的任何问题：</p>
<ul>
  <li><strong>开发者：</strong>ProjMSP</li>
  <li><strong>电子邮件：</strong>projects.shehab@gmail.com</li>
  <li><strong>网站：</strong>https://pretpourlafrance.com</li>
</ul>
<div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:6px;font-size:.82rem;color:var(--text-muted)">
  <strong>版权声明：</strong>教育内容改编自 formation-civique.interieur.gouv.fr — 法国内政部，共和国融合路径，依据 Licence Ouverte 2.0 (Etalab)。内容最后审查：2026年4月。本应用是独立学习工具，与法国政府无关联。
</div>`;

const TC_ES = `
<div class="tc-header-block">
  <div>REPÚBLICA FRANCESA — Libertad · Igualdad · Fraternidad</div>
  <h1>Términos y Condiciones de Uso</h1>
  <div>Prêt pour la France — ProjMSP</div>
  <div class="tc-meta">Versión 1.0 — En vigor desde el 11 de abril de 2026 | Ley aplicable: Derecho francés</div>
</div>
<p><strong>Preámbulo.</strong> El presente documento regula el acceso y el uso de la aplicación <em>Prêt pour la France</em> (en adelante "la Aplicación"), desarrollada y operada por <strong>ProjMSP</strong>, desarrollador independiente, con el único objetivo de ayudar a las personas a prepararse para el examen cívico exigido en el marco del Contrato de Integración Republicana (CIR). Al acceder a la Aplicación, usted acepta estos términos.</p>
<h2>1. Naturaleza de la Aplicación</h2>
<p>La Aplicación es una herramienta de estudio <strong>independiente y no oficial</strong>. No está afiliada al Ministerio del Interior francés, al OFII ni a ninguna autoridad pública francesa. No sustituye al programa obligatorio de formación cívica de 4 días.</p>
<h2>2. Propiedad intelectual y contenido</h2>
<p>El contenido educativo está adaptado del sitio oficial <a href="https://formation-civique.interieur.gouv.fr" target="_blank">formation-civique.interieur.gouv.fr</a>, publicado bajo la <strong>Licence Ouverte 2.0 (Etalab)</strong>. Esta licencia permite la reproducción, adaptación y redistribución, incluso con fines comerciales, siempre que se cite la fuente. La formulación de las preguntas, la interfaz y el código son obras originales de ProjMSP.</p>
<h2>3. Ausencia de garantía</h2>
<p>La Aplicación se proporciona "tal cual". ProjMSP no garantiza la exhaustividad, exactitud o actualidad del contenido, ni la obtención de una puntuación determinada en el examen oficial.</p>
<h2>4. Limitación de responsabilidad</h2>
<p>ProjMSP no acepta ninguna responsabilidad por: el suspenso en el examen cívico oficial; las decisiones administrativas o jurídicas tomadas en base al contenido de la Aplicación; ni cualquier error u omisión.</p>
<h2>5. Datos personales</h2>
<p>La Aplicación no recoge ningún dato personal. Solo se almacena localmente en el navegador la preferencia de idioma (localStorage). No se transmite ningún dato a terceros.</p>
<h2>6. Ley aplicable</h2>
<p>Los presentes términos se rigen por el derecho francés. Cualquier litigio será sometido a los tribunales competentes de Francia.</p>
<h2>7. Contacto</h2>
<p>Para cualquier pregunta relativa a estos términos:</p>
<ul>
  <li><strong>Desarrollador:</strong> ProjMSP</li>
  <li><strong>Email:</strong> projects.shehab@gmail.com</li>
  <li><strong>Sitio web:</strong> https://pretpourlafrance.com</li>
</ul>
<div style="margin-top:1.5rem;padding:1rem;background:var(--surface);border-radius:6px;font-size:.82rem;color:var(--text-muted)">
  <strong>Atribución:</strong> Contenido educativo adaptado de formation-civique.interieur.gouv.fr — Ministère de l'Intérieur, Parcours d'Intégration Républicaine, bajo Licence Ouverte 2.0 (Etalab). Última revisión del contenido: abril de 2026. Esta aplicación es una herramienta de estudio independiente, no afiliada al gobierno francés.
</div>`;
