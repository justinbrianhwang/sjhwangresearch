/* ============================================
   INTERNATIONALIZATION (i18n)
   언어 전환 시스템 — 기본 언어: English
   ============================================ */

let currentLang = localStorage.getItem('lang') || 'en';

/* ── UI 텍스트 번역 (섹션 제목, 버튼, 라벨 등) ── */
const UI_TEXT = {
  // Hero
  heroResearchBy: { en: "Research by", ko: "연구자" },
  heroViewProjects: { en: "View Current Research", ko: "진행 중인 연구 보기" },
  heroViewPubs: { en: "Publications", ko: "출판물 확인" },

  // Section titles & subtitles
  overviewTitle: { en: "Research Overview", ko: "연구 개요" },
  overviewSubtitle: { en: "An introduction to the key research directions and goals", ko: "주요 연구 방향과 목표를 소개합니다" },
  overviewVision: { en: "Research Vision", ko: "연구 비전" },
  overviewVisionP1: {
    en: "I aim to solve complex real-world problems through artificial intelligence, conducting innovative research spanning from theoretical foundations to practical applications.",
    ko: "인공지능 기술을 통해 실제 세계의 복잡한 문제를 해결하는 것을 목표로, 이론적 기초부터 실용적 응용까지 다양한 분야에서 혁신적인 연구를 수행하고 있습니다."
  },
  overviewVisionP2: {
    en: "Focusing on AI security, autonomous driving with federated learning, quantum computing, AI semiconductors, and medical AI, I seek to maximize the societal impact of research through industry-academia collaboration.",
    ko: "AI 보안, 연합학습 기반 자율주행, 양자컴퓨팅, AI 반도체, 의료 AI에 중점을 두고 있으며, 산학연 협력을 통해 연구의 사회적 영향력을 극대화하고자 합니다."
  },
  highlightGoalTitle: { en: "Core Goal", ko: "핵심 목표" },
  highlightGoalDesc: { en: "Building efficient and secure AI systems", ko: "효율적이고 안전한 AI 시스템 구축" },
  highlightMethodTitle: { en: "Approach", ko: "접근 방법" },
  highlightMethodDesc: { en: "Balancing theory and experiments, interdisciplinary research", ko: "이론과 실험의 균형, 학제간 융합 연구" },
  highlightImpactTitle: { en: "Societal Impact", ko: "사회적 영향" },
  highlightImpactDesc: { en: "Applying AI in healthcare, security, and communication", ko: "의료, 보안, 통신 분야에서의 AI 활용" },

  areasTitle: { en: "Research Areas", ko: "연구 분야" },
  areasSubtitle: { en: "Core research domains currently being explored", ko: "현재 집중하고 있는 핵심 연구 영역입니다" },

  projectsTitle: { en: "Current Projects", ko: "진행 중인 연구" },
  projectsSubtitle: { en: "Check the current progress of each project", ko: "각 프로젝트의 현재 진행 상황을 확인하세요" },
  progressLabel: { en: "Progress", ko: "진행률" },

  experimentsTitle: { en: "Past Research", ko: "완료된 연구" },
  experimentsSubtitle: { en: "Previously completed research projects and their outcomes", ko: "이전에 수행하여 완료된 연구 프로젝트와 성과" },

  pubsTitle: { en: "Selected Publications", ko: "주요 출판물" },
  pubsSubtitle: { en: "Research papers published in conferences and journals", ko: "학회 및 저널에 게재된 연구 성과" },

  talksTitle: { en: "Talks & Presentations", ko: "발표 / 강연" },
  talksSubtitle: { en: "Presentations at conferences, seminars, and workshops", ko: "학회, 세미나, 워크샵에서의 발표 기록" },
  talksEmptyTitle: { en: "Coming Soon", ko: "준비 중입니다" },
  talksEmptyDesc: { en: "Talk and presentation information will be updated soon.", ko: "발표 및 강연 정보가 곧 업데이트됩니다." },

  timelineTitle: { en: "Research Timeline", ko: "연구 타임라인" },
  timelineSubtitle: { en: "Key research milestones and achievements in chronological order", ko: "주요 연구 이정표와 성과를 시간순으로 정리" },

  futureTitle: { en: "Future Research", ko: "미래 연구" },
  futureSubtitle: { en: "Research topics and open questions to explore in the future", ko: "앞으로 탐구하고자 하는 연구 주제와 질문" },
  futureTimeline: { en: "Est. Timeline", ko: "예상 기간" },

  rmapTitle: { en: "Research Map", ko: "연구 지도" },
  rmapSubtitle: { en: "How my research areas connect and inform each other", ko: "연구 분야 간 연결과 상호작용을 시각적으로 표현합니다" },
  rmapCenter: { en: "Trustworthy\nIntelligent\nSystems", ko: "신뢰할 수 있는\n지능형 시스템" },
  rmapLegendConnection: { en: "Shared methodology", ko: "공유 방법론" },
  rmapLegendArea: { en: "Research area", ko: "연구 분야" },
  rmapLegendCore: { en: "Core theme", ko: "핵심 주제" },

  collabsTitle: { en: "Collaborations", ko: "협업" },
  collabsSubtitle: { en: "Institutions and partners collaborating on research", ko: "함께 연구하고 있는 기관과 파트너" },

  footerRights: { en: "All rights reserved.", ko: "All rights reserved." },
};

/* ── 번역 헬퍼 함수 ── */
function t(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value[currentLang] !== undefined) {
    return value[currentLang];
  }
  // fallback to English
  if (typeof value === 'object' && value.en !== undefined) {
    return value.en;
  }
  return String(value);
}

function ui(key) {
  return t(UI_TEXT[key]) || key;
}

/* ── 언어 전환 (with transition effect) ── */
function setLanguage(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // 토글 버튼 상태 업데이트
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });

  // 페이드 아웃 → 재렌더링 → 페이드 인
  const main = document.getElementById('main-content');
  const footer = document.getElementById('footer');

  main.classList.add('lang-switching');
  if (footer) footer.classList.add('lang-switching');

  setTimeout(() => {
    renderAll();

    main.classList.remove('lang-switching');
    main.classList.add('lang-switched');
    if (footer) {
      footer.classList.remove('lang-switching');
      footer.classList.add('lang-switched');
    }

    setTimeout(() => {
      main.classList.remove('lang-switched');
      if (footer) footer.classList.remove('lang-switched');
    }, 500);
  }, 300);
}

function initLanguageToggle() {
  // 저장된 언어 상태 반영
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === currentLang);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
}
