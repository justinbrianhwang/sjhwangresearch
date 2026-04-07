/* ============================================
   COLLABORATIONS DATA
   {en: "English", ko: "한국어", ja: "日本語", es: "Español"} 형태로 다국어 지원
   ============================================ */

const COLLABORATIONS = [
  // ── Current Collaborations ──
  {
    name: "RAISE LAB",
    status: "current",
    logo: "assets/logos/RAISE LAB_current research.png",  // 이미지 파일 경로 (없으면 폴백 이모지 표시)
    type: "Research Lab",
    description: {
      en: "Research lab in the School of Computer Science at Yonsei University. Conducting core research in AI security, federated learning, autonomous driving, and quantum computing.",
      ko: "연세대학교 소프트웨어학부 소속 연구실. AI 보안, 연합학습, 자율주행, 양자컴퓨팅 등 핵심 연구를 수행하는 주요 소속 연구실.",
      ja: "延世大学校コンピュータサイエンス学部所属研究室。AIセキュリティ、連合学習、自動運転、量子コンピューティング等の核心研究を行う主要所属研究室。",
      es: "Laboratorio de investigación de la Facultad de Ciencias de la Computación de la Universidad Yonsei. Realiza investigación principal en seguridad de IA, aprendizaje federado, conducción autónoma y computación cuántica."
    },
    members: [
      { name: { en: "Prof. Yohan Ko", ko: "고요한 교수님" }, role: { en: "Advisor", ko: "지도교수", ja: "指導教授", es: "Asesor" } },
      { name: { en: "Hyojun Lee", ko: "이효준" }, role: { en: "Researcher", ko: "연구원", ja: "研究員", es: "Investigador" } },
      { name: { en: "Hyunjun Kim", ko: "김현준" }, role: { en: "Researcher", ko: "연구원", ja: "研究員", es: "Investigador" } },
      { name: { en: "Soyeong Park", ko: "박소영" }, role: { en: "Researcher", ko: "연구원", ja: "研究員", es: "Investigador" } },
    ],
    topics: ["AI Security", "Federated Learning", "Autonomous Driving", "Quantum Computing"],
  },
  {
    name: "MPS LAB",
    status: "current",
    logo: "assets/logos/MPS LAB_current research.webp",
    type: "Research Lab",
    description: {
      en: "Research lab at Arizona State University (ASU) focused on mobile platforms and systems. Collaborating on autonomous driving and LLM-based research projects.",
      ko: "Arizona State University(ASU) 모바일 플랫폼 및 시스템 연구실. 자율주행 및 LLM 기반 연구 프로젝트에서 협업 중.",
      ja: "Arizona State University(ASU)モバイルプラットフォーム&システム研究室。自動運転およびLLM基盤研究プロジェクトで協業中。",
      es: "Laboratorio de investigación en plataformas y sistemas móviles de Arizona State University (ASU). Colaborando en proyectos de investigación de conducción autónoma y basados en LLM."
    },
    members: [
      { name: { en: "Prof. Aviral Shrivastava", ko: "Aviral Shrivastava 교수님" }, role: { en: "Advisor", ko: "지도교수", ja: "指導教授", es: "Asesor" } },
      { name: { en: "Kaustubh Harapanahalli", ko: "Kaustubh Harapanahalli" }, role: { en: "Researcher", ko: "연구원", ja: "研究員", es: "Investigador" } },
    ],
    topics: ["Autonomous Driving", "LLM", "Mobile Systems"],
  },
  {
    name: "Permillion",
    status: "current",
    logo: "assets/logos/Permillion Logos.png",
    darkBg: true,
    type: "Industry Partner",
    description: {
      en: "Collaborating on TDA (Topological Data Analysis) project for medical data analysis and cache-inspired federated learning research.",
      ko: "의료 데이터 분석을 위한 TDA(위상적 데이터 분석) 및 캐시 기반 연합학습 연구 프로젝트 공동 수행 중.",
      ja: "医療データ分析のためのTDA（位相的データ分析）およびキャッシュ基盤連合学習研究プロジェクト共同遂行中。",
      es: "Colaborando en proyecto de TDA (análisis topológico de datos) para análisis de datos médicos e investigación de aprendizaje federado inspirado en caché."
    },
    members: [
      { name: { en: "Eunho Choi", ko: "최은호" }, role: { en: "CEO", ko: "CEO", ja: "CEO", es: "CEO" } },
      { name: { en: "Dohyun Hwang", ko: "황도현" }, role: { en: "CTO", ko: "CTO", ja: "CTO", es: "CTO" } },
    ],
    topics: ["TDA", "Medical Data", "Data Analysis", "Federated Learning"],
  },

  // ── Past Collaborations ──
  {
    name: "DH Soft",
    status: "past",
    logo: "assets/logos/dhsoft logo Project.png",
    type: "Industry Partner",
    description: {
      en: "Medical AI company specializing in healthcare document automation. Collaborated on OCR-based medical document processing projects.",
      ko: "의료 AI 전문 기업. OCR 기반 의료 문서 자동화 프로젝트를 공동 수행.",
      ja: "医療AI専門企業。OCR基盤の医療文書自動化プロジェクトを共同遂行。",
      es: "Empresa de IA médica especializada en automatización de documentos de salud. Colaboró en proyectos de procesamiento de documentos médicos basados en OCR."
    },
    members: [
      { name: { en: "Youngkwang Nam", ko: "남영광" }, role: { en: "CEO", ko: "CEO", ja: "CEO", es: "CEO" } },
      { name: { en: "Woncheol Ryu", ko: "류원철" }, role: { en: "Senior Researcher", ko: "선임연구원", ja: "主任研究員", es: "Investigador senior" } },
    ],
    topics: ["OCR", "Medical AI", "Document Automation"],
  },
  {
    name: "COREX",
    status: "past",
    logo: "",
    type: "Industry Partner",
    description: {
      en: "Aquaponics technology company. Collaborated on AI-based aquaponics monitoring and growth prediction systems with camera-based plant analysis and real-time environmental monitoring.",
      ko: "아쿠아포닉스 기술 기업. AI 기반 아쿠아포닉스 모니터링 및 성장 예측 시스템을 카메라 기반 식물 분석과 실시간 환경 모니터링으로 공동 개발.",
      ja: "アクアポニクス技術企業。カメラ基盤の植物分析とリアルタイム環境モニタリングによるAI基盤アクアポニクスモニタリング・成長予測システムを共同開発。",
      es: "Empresa de tecnología de acuaponía. Colaboró en sistemas de monitoreo y predicción de crecimiento de acuaponía basados en IA con análisis de plantas por cámara y monitoreo ambiental en tiempo real."
    },
    members: [
      { name: { en: "Dongkyu Yoo", ko: "유동규" }, role: { en: "CEO", ko: "CEO", ja: "CEO", es: "CEO" } },
      { name: { en: "Sunjun Hwang", ko: "황선준" }, role: { en: "CTO", ko: "CTO", ja: "CTO", es: "CTO" } },
      { name: { en: "Suchan Kim", ko: "김수찬" }, role: { en: "Member", ko: "팀원", ja: "メンバー", es: "Miembro" } },
      { name: { en: "Sehee Park", ko: "박세희" }, role: { en: "Member", ko: "팀원", ja: "メンバー", es: "Miembro" } },
    ],
    topics: ["Aquaponics", "Computer Vision", "IoT", "Real-time Monitoring"],
  },
];
