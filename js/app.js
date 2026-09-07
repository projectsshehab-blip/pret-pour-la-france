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
  clearExamState();
}

// ── Exam persistence (local only — no cookies, no network) ────────────────────
// Lets a user resume after an accidental refresh/close. Stored on-device in
// localStorage and wiped the moment the exam is submitted or abandoned.
const EXAM_SAVE_KEY = 'pplf_exam';

function persistExamState() {
  if (!isExamActive()) return;
  try {
    localStorage.setItem(EXAM_SAVE_KEY, JSON.stringify({
      level: examLevel, mode: examMode, page: examPage,
      timeLeft: examTimeLeft, answers: examAnswers,
      questions: examQuestions, savedAt: Date.now()
    }));
  } catch (e) { /* storage full or blocked — non-fatal */ }
}

function loadExamState() {
  try {
    const raw = localStorage.getItem(EXAM_SAVE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || !Array.isArray(s.questions) || s.questions.length !== TOTAL_Q) return null;
    if (typeof s.timeLeft !== 'number' || s.timeLeft <= 0) return null;
    return s;
  } catch (e) { return null; }
}

function clearExamState() {
  try { localStorage.removeItem(EXAM_SAVE_KEY); } catch (e) {}
}

function resumeExam() {
  const s = loadExamState();
  if (!s) { renderExamSetup(); return; }
  examLevel     = s.level;
  examMode      = s.mode;
  examQuestions = s.questions;
  examAnswers   = s.answers || {};
  examPage      = s.page || 0;
  examTimeLeft  = s.timeLeft;
  stopTimer();
  startTimer();
  renderExamPage();
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

// ── Icons (inline SVG, Lucide-style stroke set) ───────────────────────────────
// Professional line icons that inherit currentColor. No external files/CDN.
const ICONS = {
  home:  '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  study: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  exam:  '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  tc:    '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5"/><path d="M8 13h8"/><path d="M8 17h8"/><path d="M8 9h1"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/><path d="M5 3 2 6"/><path d="m22 6-3-3"/>',
  bulb:  '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  bolt:  '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
  list:  '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
  info:  '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>',
  // Study-topic icons
  landmark: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
  scroll: '<path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/>',
  map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  community: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
};
function icon(name, size) {
  const s = size || 22;
  return `<svg class="icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

// ── Nav ───────────────────────────────────────────────────────────────────────
function renderNav() {
  const items = [
    { view:'home',  icon:'home',  key:'nav_home'  },
    { view:'study', icon:'study', key:'nav_study' },
    { view:'exam',  icon:'exam',  key:'nav_exam'  },
    { view:'tc',    icon:'tc',    key:'nav_tc'    },
  ];
  const sidebarNav = document.getElementById('sidebar-nav');
  const mobileNav  = document.getElementById('mobile-nav-items');
  if (!sidebarNav || !mobileNav) return;

  sidebarNav.innerHTML = `<div class="sidebar__nav-label">Menu</div>` + items.map(i => `
    <button class="nav-item ${currentView===i.view?'active':''}" data-view="${i.view}" aria-current="${currentView===i.view?'page':'false'}">
      <span class="nav-item__icon-wrap"><span class="nav-item__icon">${icon(i.icon)}</span></span>
      <span class="nav-item__label">${t(i.key)}</span>
    </button>`).join('');

  mobileNav.innerHTML = items.map(i => `
    <button class="mobile-nav__item ${currentView===i.view?'active':''}" data-view="${i.view}">
      <span class="mobile-nav__item__icon">${icon(i.icon)}</span>
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
      <div class="home-hero__chevrons"><span></span><span></span></div>
      <div class="home-hero__welcome">${t('home_welcome')}</div>
      <div class="home-hero__title">${t('site_name')}</div>
      <div class="home-hero__sub">${t('home_subtitle')}</div>
      <div class="home-hero__credit">© Paris — La Tour Eiffel &amp; la Seine</div>
    </div>
    <div class="home-cards">
      <div class="home-card" tabindex="0" role="button" data-goto="study">
        <div class="card">
          <div class="home-card__icon">${icon('study', 30)}</div>
          <div class="home-card__title">${t('home_card_study_title')}</div>
          <div class="home-card__desc">${t('home_card_study_desc')}</div>
          <button class="btn btn--primary btn--sm">${t('home_card_study_btn')}</button>
        </div>
      </div>
      <div class="home-card" tabindex="0" role="button" data-goto="exam">
        <div class="card">
          <div class="home-card__icon">${icon('exam', 30)}</div>
          <div class="home-card__title">${t('home_card_exam_title')}</div>
          <div class="home-card__desc">${t('home_card_exam_desc')}</div>
          <button class="btn btn--red btn--sm">${t('home_card_exam_btn')}</button>
        </div>
      </div>
    </div>
    <div class="tip-box">
      <div class="tip-box__icon">${icon('bulb', 22)}</div>
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
          <span class="accordion-header__icon">${icon(mat.icon, 22)}</span>
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
  const saved = loadExamState();
  const resumeBanner = saved ? `
    <div class="resume-banner">
      <div class="resume-banner__icon">${icon('refresh', 22)}</div>
      <div class="resume-banner__text">
        <div class="resume-banner__title">${t('exam_resume_title')}</div>
        <div class="resume-banner__meta">${saved.level} · ${Object.keys(saved.answers||{}).length}/${TOTAL_Q} · ${formatTime(saved.timeLeft)}</div>
      </div>
      <div class="resume-banner__actions">
        <button class="btn btn--primary btn--sm" id="resume-exam-btn">${t('exam_resume_btn')}</button>
        <button class="btn btn--outline btn--sm" id="discard-exam-btn">${t('exam_discard_btn')}</button>
      </div>
    </div>` : '';

  el.innerHTML = `
    <div class="page-title">${t('exam_setup_title')}</div>
    ${resumeBanner}
    <div class="exam-setup-grid" role="radiogroup" aria-label="${t('exam_setup_title')}">
      <div class="level-card ${examLevel==='CSP'?'selected':''}" data-level="CSP" role="radio" aria-checked="${examLevel==='CSP'}" tabindex="0">
        <div class="level-card__badge">CSP</div>
        <div class="level-card__title">${t('exam_setup_csp_title')}</div>
        <div class="level-card__desc">${t('exam_setup_csp_desc')}</div>
      </div>
      <div class="level-card ${examLevel==='CR'?'selected':''}" data-level="CR" role="radio" aria-checked="${examLevel==='CR'}" tabindex="0">
        <div class="level-card__badge">CR</div>
        <div class="level-card__title">${t('exam_setup_cr_title')}</div>
        <div class="level-card__desc">${t('exam_setup_cr_desc')}</div>
      </div>
    </div>
    <div class="exam-mode-section">
      <div class="exam-mode-title">${t('exam_mode_title')}</div>
      <div class="exam-setup-grid" role="radiogroup" aria-label="${t('exam_mode_title')}">
        <div class="mode-card ${examMode==='immediate'?'selected':''}" data-mode="immediate" role="radio" aria-checked="${examMode==='immediate'}" tabindex="0">
          <div class="mode-card__icon">${icon('bolt', 26)}</div>
          <div class="mode-card__title">${t('exam_mode_immediate')}</div>
          <div class="mode-card__desc">${t('exam_mode_immediate_desc')}</div>
        </div>
        <div class="mode-card ${examMode==='review'?'selected':''}" data-mode="review" role="radio" aria-checked="${examMode==='review'}" tabindex="0">
          <div class="mode-card__icon">${icon('list', 26)}</div>
          <div class="mode-card__title">${t('exam_mode_review')}</div>
          <div class="mode-card__desc">${t('exam_mode_review_desc')}</div>
        </div>
      </div>
    </div>
    <div class="exam-info-bar">${icon('info', 16)} ${t('exam_setup_info')}</div>
    <div style="text-align:center">
      <button class="btn btn--primary btn--lg" id="start-exam-btn">${t('exam_setup_btn')} →</button>
    </div>`;

  const pick = (card, group, apply) => {
    apply(card.dataset);
    el.querySelectorAll(group).forEach(x => {
      const sel = x === card;
      x.classList.toggle('selected', sel);
      x.setAttribute('aria-checked', sel ? 'true' : 'false');
    });
  };
  el.querySelectorAll('.level-card').forEach(c => {
    const act = () => pick(c, '.level-card', d => examLevel = d.level);
    c.addEventListener('click', act);
    c.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); act(); } });
  });
  el.querySelectorAll('.mode-card').forEach(c => {
    const act = () => pick(c, '.mode-card', d => examMode = d.mode);
    c.addEventListener('click', act);
    c.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); act(); } });
  });
  el.querySelector('#start-exam-btn').addEventListener('click', startExam);

  const resumeBtn = el.querySelector('#resume-exam-btn');
  const discardBtn = el.querySelector('#discard-exam-btn');
  if (resumeBtn)  resumeBtn.addEventListener('click', resumeExam);
  if (discardBtn) discardBtn.addEventListener('click', () => { clearExamState(); renderExamSetup(); });
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
  persistExamState();
}

function startTimer() {
  examTimerInterval = setInterval(() => {
    examTimeLeft--;
    updateTimerDisplay();
    if (examTimeLeft % 5 === 0) persistExamState(); // keep saved time fresh
    if (examTimeLeft <= 0) {
      stopTimer();
      clearExamState();
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
        <span class="exam-timer__icon">${icon('timer', 18)}</span>
        <span id="exam-timer">${formatTime(examTimeLeft)}</span>
      </div>
    </div>
    <div class="question-dots">
      ${examQuestions.map((q,i) => {
        const pg = Math.floor(i / PER_PAGE);
        const isCur = (i >= start && i < start + PER_PAGE);
        const isAns = examAnswers[q.id] !== undefined;
        return `<div class="q-dot ${isCur?'current':''} ${isAns&&!isCur?'answered':''}" data-goto-page="${pg}" role="button" tabindex="0" aria-label="${t('exam_page_label')} ${pg+1}, Q${i+1}${isAns?' — ✓':''}">${i+1}</div>`;
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

  // Dot navigation (click + keyboard)
  el.querySelectorAll('.q-dot').forEach(d => {
    const go = () => { examPage = +d.dataset.gotoPage; renderExamPage(); };
    d.addEventListener('click', go);
    d.addEventListener('keydown', e => { if (e.key==='Enter'||e.key===' ') { e.preventDefault(); go(); } });
  });

  // Option selection (click + keyboard, with roving focus inside each radiogroup)
  el.querySelectorAll('.option-item').forEach(opt => {
    opt.addEventListener('click', () => selectOption(opt, el));
    opt.addEventListener('keydown', e => {
      const group = Array.from(opt.closest('.options-list').querySelectorAll('.option-item'));
      const idx = group.indexOf(opt);
      if (e.key==='Enter' || e.key===' ') {
        e.preventDefault(); selectOption(opt, el);
      } else if (e.key==='ArrowDown' || e.key==='ArrowRight') {
        e.preventDefault(); const n = group[(idx+1)%group.length]; if (n.tabIndex!==-1) n.focus();
      } else if (e.key==='ArrowUp' || e.key==='ArrowLeft') {
        e.preventDefault(); const p = group[(idx-1+group.length)%group.length]; if (p.tabIndex!==-1) p.focus();
      }
    });
  });

  const prevBtn = el.querySelector('#btn-prev');
  const nextBtn = el.querySelector('#btn-next');
  const subBtn  = el.querySelector('#btn-submit');
  if (prevBtn) prevBtn.addEventListener('click', () => { examPage--; renderExamPage(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { examPage++; renderExamPage(); });
  if (subBtn)  subBtn.addEventListener('click', submitExam);

  persistExamState();
}

// Shared selection logic for click + keyboard, both feedback modes
function selectOption(opt, el) {
  if (opt.classList.contains('locked')) return;
  const card = opt.closest('.question-card');
  const list = opt.closest('.options-list');
  const qid  = card.dataset.qid;
  const val  = +opt.dataset.idx;
  examAnswers[qid] = val;

  // aria-checked + roving tabindex across the group
  list.querySelectorAll('.option-item').forEach(o => {
    const sel = o === opt;
    o.setAttribute('aria-checked', sel ? 'true' : 'false');
    o.tabIndex = sel ? 0 : -1;
  });

  if (examMode === 'immediate') {
    const q = examQuestions.find(qq => qq.id === qid);
    const isCorrect = val === q.displayAnswer;
    list.querySelectorAll('.option-item').forEach(o => {
      o.classList.add('locked');
      o.tabIndex = -1;
      const idx = +o.dataset.idx;
      if (idx === q.displayAnswer) o.classList.add('correct');
      else if (idx === val && !isCorrect) o.classList.add('incorrect');
    });
    const slot = card.querySelector('.feedback-slot');
    if (slot) slot.innerHTML = feedbackMarkup(q, val);
  } else {
    list.querySelectorAll('.option-item').forEach(o => o.classList.remove('selected'));
    opt.classList.add('selected');
  }

  // update progress bar, count, submit button, dot
  const answered2 = Object.keys(examAnswers).length;
  const fill = el.querySelector('.progress-bar-fill');
  if (fill) fill.style.width = Math.round((answered2 / TOTAL_Q) * 100) + '%';
  const countEl = el.querySelector('.exam-answered');
  if (countEl) countEl.textContent = `${t('exam_progress')} ${answered2}/${TOTAL_Q}`;
  const sub = el.querySelector('#btn-submit');
  if (sub) sub.style.opacity = answered2===TOTAL_Q ? '1':'0.5';
  const qIdx = examQuestions.findIndex(qq => qq.id === qid);
  const dot = el.querySelectorAll('.q-dot')[qIdx];
  if (dot && !dot.classList.contains('current')) dot.classList.add('answered');

  persistExamState();
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
    const checked = savedAnswer === i;
    const locked  = isImmediate && isAnswered;
    return `
          <div class="option-item ${cls}" data-idx="${i}" role="radio"
               aria-checked="${checked}" tabindex="${locked ? -1 : (checked || (savedAnswer===undefined && i===0) ? 0 : -1)}">
            <div class="option-radio"></div>
            <span class="option-letter">${letters[i]}.</span>
            <span class="option-text">${opt}</span>
          </div>`;
  }).join('');

  const feedbackHtml = (isImmediate && isAnswered) ? feedbackMarkup(q, savedAnswer) : '';

  return `
    <div class="question-card" data-qid="${q.id}">
      <div class="question-topic-badge">${t('exam_topic_label')} ${q.topic} — ${topicName}</div>
      <div class="question-number">Q${globalIdx+1}</div>
      <div class="question-text" id="qtext-${q.id}">${q.q}</div>
      <div class="options-list" role="radiogroup" aria-labelledby="qtext-${q.id}">
        ${optionsHtml}
      </div>
      <div class="feedback-slot" aria-live="polite">${feedbackHtml}</div>
    </div>`;
}

function feedbackMarkup(q, chosen) {
  const correct = chosen === q.displayAnswer;
  return `
      <div class="inline-feedback ${correct ? 'correct' : 'incorrect'}">
        <span class="inline-feedback__badge">${correct ? t('results_correct_badge') : t('results_incorrect_badge')}</span>
        <span class="inline-feedback__text">${t('results_explanation')} ${q.explanation}</span>
      </div>`;
}

function submitExam() {
  const answered = Object.keys(examAnswers).length;
  if (answered < TOTAL_Q) { alert(t('exam_unanswered')); return; }
  if (!confirm(t('exam_submit_confirm'))) return;
  stopTimer();
  clearExamState();
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
    <div class="review-title">${examMode==='immediate' ? t('results_review_wrong_title') : t('results_review_title')}</div>
    <div class="review-list">
      ${examQuestions.map((q, i) => {
        const userAns = examAnswers[q.id];
        const correct = userAns === q.displayAnswer;
        // In immediate mode the user already saw every answer inline — show wrong ones only.
        if (examMode === 'immediate' && correct) return '';
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
              <div class="review-explanation">${t('results_explanation')} ${q.explanation}</div>
            </div>
          </div>`;
      }).join('')}
      ${examMode==='immediate' && score===TOTAL_Q ? `<div class="review-allcorrect">${t('results_all_correct')}</div>` : ''}
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
<p>L'Application ne collecte aucune donnée personnelle et n'utilise aucun cookie. Seules la préférence de langue et, le cas échéant, la progression d'un examen en cours sont stockées localement dans votre navigateur (localStorage), sur votre appareil uniquement. La progression de l'examen est automatiquement effacée lors de la soumission ou de l'abandon. Aucune donnée n'est transmise à des tiers ni à un serveur.</p>
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
<p>The Application collects no personal data and uses no cookies. Only your language preference and, where applicable, the progress of an exam in progress are stored locally in your browser (localStorage), on your device only. Exam progress is automatically erased on submission or abandonment. No data is transmitted to third parties or to any server.</p>
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
<p>لا يجمع التطبيق أي بيانات شخصية ولا يستخدم أي ملفات تعريف ارتباط (Cookies). يتم تخزين تفضيل اللغة فقط، وعند الاقتضاء تقدُّم الامتحان الجاري، محلياً في متصفحك (localStorage) وعلى جهازك فقط. يُمحى تقدُّم الامتحان تلقائياً عند التسليم أو الإلغاء. لا تُرسل أي بيانات إلى أطراف ثالثة أو إلى أي خادم.</p>
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
<p>本应用不收集任何个人数据，也不使用任何 Cookie。仅将您的语言偏好以及（如有）正在进行的考试进度本地存储在您的浏览器中（localStorage），且仅保存在您的设备上。考试进度在提交或放弃时会自动清除。不向第三方或任何服务器传输任何数据。</p>
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
<p>La Aplicación no recoge ningún dato personal y no utiliza cookies. Solo se almacenan localmente en tu navegador (localStorage), y únicamente en tu dispositivo, la preferencia de idioma y, en su caso, el progreso de un examen en curso. El progreso del examen se borra automáticamente al enviarlo o abandonarlo. No se transmite ningún dato a terceros ni a ningún servidor.</p>
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
