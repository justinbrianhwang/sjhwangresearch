/* ============================================
   COLLABORATIONS DATA
   {en: "English", ko: "한국어"} 형태로 다국어 지원
   ============================================ */

const COLLABORATIONS = [
  {
    name: "RAISE LAB",
    logo: "assets/logos/RAISE LAB.png",  // 이미지 파일 경로 (없으면 폴백 이모지 표시)
    type: "Research Lab",
    description: {
      en: "Research lab in the School of Computer Science at Yonsei University. Conducting core research in AI security, federated learning, autonomous driving, and quantum computing.",
      ko: "연세대학교 소프트웨어학부 소속 연구실. AI 보안, 연합학습, 자율주행, 양자컴퓨팅 등 핵심 연구를 수행하는 주요 소속 연구실."
    },
    members: [
      { name: { en: "Prof. Yohan Ko", ko: "고요한 교수님" }, role: { en: "Advisor", ko: "지도교수" } },
      { name: { en: "Hyojun Lee", ko: "이효준" }, role: { en: "Researcher", ko: "연구원" } },
      { name: { en: "Hyunjun Kim", ko: "김현준" }, role: { en: "Researcher", ko: "연구원" } },
    ],
    topics: ["AI Security", "Federated Learning", "Autonomous Driving", "Quantum Computing"],
  },
];
