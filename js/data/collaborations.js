/* ============================================
   COLLABORATIONS DATA
   {en: "English", ko: "한국어"} 형태로 다국어 지원
   ============================================ */

const COLLABORATIONS = [
  {
    name: "RAISE LAB",
    logo: "assets/logos/RAISE LAB_current research.png",  // 이미지 파일 경로 (없으면 폴백 이모지 표시)
    type: "Research Lab",
    description: {
      en: "Research lab in the School of Computer Science at Yonsei University. Conducting core research in AI security, federated learning, autonomous driving, and quantum computing.",
      ko: "연세대학교 소프트웨어학부 소속 연구실. AI 보안, 연합학습, 자율주행, 양자컴퓨팅 등 핵심 연구를 수행하는 주요 소속 연구실."
    },
    members: [
      { name: { en: "Prof. Yohan Ko", ko: "고요한 교수님" }, role: { en: "Advisor", ko: "지도교수" } },
      { name: { en: "Hyojun Lee", ko: "이효준" }, role: { en: "Researcher", ko: "연구원" } },
      { name: { en: "Hyunjun Kim", ko: "김현준" }, role: { en: "Researcher", ko: "연구원" } },
      { name: { en: "Soyeong Park", ko: "박소영" }, role: { en: "Researcher", ko: "연구원" } },
    ],
    topics: ["AI Security", "Federated Learning", "Autonomous Driving", "Quantum Computing"],
  },
  {
    name: "MPS LAB",
    logo: "assets/logos/MPS LAB_current research.webp",
    type: "Research Lab",
    description: {
      en: "Research lab at Arizona State University (ASU) focused on mobile platforms and systems. Collaborating on autonomous driving and LLM-based research projects.",
      ko: "Arizona State University(ASU) 모바일 플랫폼 및 시스템 연구실. 자율주행 및 LLM 기반 연구 프로젝트에서 협업 중."
    },
    members: [
      { name: { en: "Prof. Aviral Shrivastava", ko: "Aviral Shrivastava 교수님" }, role: { en: "Advisor", ko: "지도교수" } },
      { name: { en: "Kaustubh Harapanahalli", ko: "Kaustubh Harapanahalli" }, role: { en: "Researcher", ko: "연구원" } },
    ],
    topics: ["Autonomous Driving", "LLM", "Mobile Systems"],
  },
  {
    name: "DH Soft",
    logo: "assets/logos/dhsoft logo Project.png",
    type: "Industry Partner",
    description: {
      en: "Medical AI company specializing in healthcare document automation. Collaborated on OCR-based medical document processing projects.",
      ko: "의료 AI 전문 기업. OCR 기반 의료 문서 자동화 프로젝트를 공동 수행."
    },
    members: [
      { name: { en: "Youngkwang Nam", ko: "남영광" }, role: { en: "CEO", ko: "CEO" } },
      { name: { en: "Woncheol Ryu", ko: "류원철" }, role: { en: "Senior Researcher", ko: "선임연구원" } },
    ],
    topics: ["OCR", "Medical AI", "Document Automation"],
  },
  {
    name: "Permillion",
    logo: "assets/logos/Permillion Logos.png",
    darkBg: true,
    type: "Industry Partner",
    description: {
      en: "Collaborated on TDA (Topological Data Analysis) project for medical data analysis.",
      ko: "의료 데이터 분석을 위한 TDA(위상적 데이터 분석) 프로젝트 공동 수행."
    },
    members: [
      { name: { en: "Eunho Choi", ko: "최은호" }, role: { en: "CEO", ko: "CEO" } },
      { name: { en: "Dohyun Hwang", ko: "황도현" }, role: { en: "CTO", ko: "CTO" } },
    ],
    topics: ["TDA", "Medical Data", "Data Analysis"],
  },
];
