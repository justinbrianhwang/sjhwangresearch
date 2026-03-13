/* ============================================
   INTERNATIONALIZATION (i18n)
   언어 전환 시스템 — 기본 언어: English
   ============================================ */

let currentLang = localStorage.getItem('lang') || 'en';

/* ── UI 텍스트 번역 (섹션 제목, 버튼, 라벨 등) ── */
const UI_TEXT = {
  // Hero
  heroResearchBy: { en: "Research by", ko: "연구자", ja: "研究者", es: "Investigación por" },
  heroViewProjects: { en: "View Current Research", ko: "진행 중인 연구 보기", ja: "進行中の研究を見る", es: "Ver investigación actual" },
  heroViewPubs: { en: "Publications", ko: "출판물 확인", ja: "出版物", es: "Publicaciones" },

  // Section titles & subtitles
  overviewTitle: { en: "Research Overview", ko: "연구 개요", ja: "研究概要", es: "Resumen de investigación" },
  overviewSubtitle: { en: "An introduction to the key research directions and goals", ko: "주요 연구 방향과 목표를 소개합니다", ja: "主要な研究方向と目標の紹介", es: "Introducción a las principales direcciones y objetivos de investigación" },
  overviewVision: { en: "Research Vision", ko: "연구 비전", ja: "研究ビジョン", es: "Visión de investigación" },
  overviewVisionP1: {
    en: "I aim to solve complex real-world problems through artificial intelligence, conducting innovative research spanning from theoretical foundations to practical applications.",
    ko: "인공지능 기술을 통해 실제 세계의 복잡한 문제를 해결하는 것을 목표로, 이론적 기초부터 실용적 응용까지 다양한 분야에서 혁신적인 연구를 수행하고 있습니다.",
    ja: "人工知能技術を通じて現実世界の複雑な問題を解決することを目指し、理論的基礎から実用的応用まで革新的な研究を行っています。",
    es: "Mi objetivo es resolver problemas complejos del mundo real mediante inteligencia artificial, realizando investigación innovadora desde los fundamentos teóricos hasta las aplicaciones prácticas."
  },
  overviewVisionP2: {
    en: "Focusing on AI security, autonomous driving with federated learning, quantum computing, AI semiconductors, and medical AI, I seek to maximize the societal impact of research through industry-academia collaboration.",
    ko: "AI 보안, 연합학습 기반 자율주행, 양자컴퓨팅, AI 반도체, 의료 AI에 중점을 두고 있으며, 산학연 협력을 통해 연구의 사회적 영향력을 극대화하고자 합니다.",
    ja: "AIセキュリティ、連合学習による自動運転、量子コンピューティング、AI半導体、医療AIに重点を置き、産学連携を通じて研究の社会的影響力を最大化することを目指しています。",
    es: "Enfocado en seguridad de IA, conducción autónoma con aprendizaje federado, computación cuántica, semiconductores de IA e IA médica, buscando maximizar el impacto social de la investigación a través de la colaboración industria-academia."
  },
  highlightGoalTitle: { en: "Core Goal", ko: "핵심 목표", ja: "核心目標", es: "Objetivo principal" },
  highlightGoalDesc: { en: "Building efficient and secure AI systems", ko: "효율적이고 안전한 AI 시스템 구축", ja: "効率的で安全なAIシステムの構築", es: "Construir sistemas de IA eficientes y seguros" },
  highlightMethodTitle: { en: "Approach", ko: "접근 방법", ja: "アプローチ", es: "Enfoque" },
  highlightMethodDesc: { en: "Balancing theory and experiments, interdisciplinary research", ko: "이론과 실험의 균형, 학제간 융합 연구", ja: "理論と実験のバランス、学際的融合研究", es: "Equilibrio entre teoría y experimentos, investigación interdisciplinaria" },
  highlightImpactTitle: { en: "Societal Impact", ko: "사회적 영향", ja: "社会的影響", es: "Impacto social" },
  highlightImpactDesc: { en: "Applying AI in healthcare, security, and communication", ko: "의료, 보안, 통신 분야에서의 AI 활용", ja: "医療、セキュリティ、通信分野でのAI活用", es: "Aplicación de IA en salud, seguridad y comunicaciones" },

  areasTitle: { en: "Research Areas", ko: "연구 분야", ja: "研究分野", es: "Áreas de investigación" },
  areasSubtitle: { en: "Core research domains currently being explored", ko: "현재 집중하고 있는 핵심 연구 영역입니다", ja: "現在注力している核心研究領域", es: "Dominios de investigación principales actualmente explorados" },

  projectsTitle: { en: "Current Projects", ko: "진행 중인 연구", ja: "進行中の研究", es: "Proyectos actuales" },
  projectsSubtitle: { en: "Check the current progress of each project", ko: "각 프로젝트의 현재 진행 상황을 확인하세요", ja: "各プロジェクトの現在の進捗状況を確認", es: "Consulte el progreso actual de cada proyecto" },
  progressLabel: { en: "Progress", ko: "진행률", ja: "進捗率", es: "Progreso" },

  experimentsTitle: { en: "Past Research", ko: "완료된 연구", ja: "完了した研究", es: "Investigación pasada" },
  experimentsSubtitle: { en: "Previously completed research projects and their outcomes", ko: "이전에 수행하여 완료된 연구 프로젝트와 성과", ja: "過去に完了した研究プロジェクトとその成果", es: "Proyectos de investigación completados anteriormente y sus resultados" },

  pubsTitle: { en: "Selected Publications", ko: "주요 출판물", ja: "主要出版物", es: "Publicaciones seleccionadas" },
  pubsSubtitle: { en: "Research papers published in conferences and journals", ko: "학회 및 저널에 게재된 연구 성과", ja: "学会およびジャーナルに掲載された研究成果", es: "Artículos de investigación publicados en conferencias y revistas" },

  talksTitle: { en: "Talks & Presentations", ko: "발표 / 강연", ja: "発表 / 講演", es: "Charlas y presentaciones" },
  talksSubtitle: { en: "Presentations at conferences, seminars, and workshops", ko: "학회, 세미나, 워크샵에서의 발표 기록", ja: "学会、セミナー、ワークショップでの発表記録", es: "Presentaciones en conferencias, seminarios y talleres" },
  talksEmptyTitle: { en: "Coming Soon", ko: "준비 중입니다", ja: "準備中", es: "Próximamente" },
  talksEmptyDesc: { en: "Talk and presentation information will be updated soon.", ko: "발표 및 강연 정보가 곧 업데이트됩니다.", ja: "発表および講演情報は近日中に更新されます。", es: "La información sobre charlas y presentaciones se actualizará pronto." },

  timelineTitle: { en: "Research Timeline", ko: "연구 타임라인", ja: "研究タイムライン", es: "Cronología de investigación" },
  timelineSubtitle: { en: "Key research milestones and achievements in chronological order", ko: "주요 연구 이정표와 성과를 시간순으로 정리", ja: "主要な研究マイルストーンと成果を時系列で整理", es: "Hitos y logros clave de investigación en orden cronológico" },

  futureTitle: { en: "Future Research", ko: "미래 연구", ja: "未来の研究", es: "Investigación futura" },
  futureSubtitle: { en: "Research topics and open questions to explore in the future", ko: "앞으로 탐구하고자 하는 연구 주제와 질문", ja: "今後探求したい研究テーマと課題", es: "Temas de investigación y preguntas abiertas para explorar en el futuro" },
  futureTimeline: { en: "Est. Timeline", ko: "예상 기간", ja: "予想期間", es: "Plazo estimado" },

  rmapTitle: { en: "Research Map", ko: "연구 지도", ja: "研究マップ", es: "Mapa de investigación" },
  rmapSubtitle: { en: "How my research areas connect and inform each other", ko: "연구 분야 간 연결과 상호작용을 시각적으로 표현합니다", ja: "研究分野間の連携と相互作用を視覚的に表現", es: "Cómo mis áreas de investigación se conectan e informan mutuamente" },
  rmapCenter: { en: "Trustworthy\nIntelligent\nSystems", ko: "신뢰할 수 있는\n지능형 시스템", ja: "信頼できる\nインテリジェント\nシステム", es: "Sistemas\ninteligentes\nconfiables" },
  rmapLegendConnection: { en: "Shared methodology", ko: "공유 방법론", ja: "共有方法論", es: "Metodología compartida" },
  rmapLegendArea: { en: "Research area", ko: "연구 분야", ja: "研究分野", es: "Área de investigación" },
  rmapLegendCore: { en: "Core theme", ko: "핵심 주제", ja: "核心テーマ", es: "Tema central" },
  rmapLegendClick: { en: "Click a node for details", ko: "노드를 클릭하면 상세 정보를 확인할 수 있습니다", ja: "ノードをクリックして詳細を表示", es: "Haz clic en un nodo para ver detalles" },
  rmapDetailConnections: { en: "Connected Areas", ko: "연결된 연구 분야", ja: "接続された研究分野", es: "Áreas conectadas" },

  collabsTitle: { en: "Collaborations", ko: "협업", ja: "コラボレーション", es: "Colaboraciones" },
  collabsSubtitle: { en: "Institutions and partners collaborating on research", ko: "함께 연구하고 있는 기관과 파트너", ja: "共同研究を行っている機関とパートナー", es: "Instituciones y socios que colaboran en la investigación" },

  footerRights: { en: "All rights reserved.", ko: "All rights reserved.", ja: "All rights reserved.", es: "Todos los derechos reservados." },
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
