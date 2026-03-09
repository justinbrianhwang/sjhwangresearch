/* ============================================
   TIMELINE DATA
   {en: "English", ko: "한국어"} 형태로 다국어 지원
   ============================================ */

const TIMELINE_EVENTS = [
  {
    date: "2026 Q1",
    title: { en: "3 Papers Accepted: KICS, IEEE ICAIIC, KCS", ko: "KICS, IEEE ICAIIC, KCS 논문 3편 동시 채택" },
    description: {
      en: "DNN Fault Recovery (KICS), Adversarial Robustness in Wireless AMC (IEEE ICAIIC), and FPGA-Based Voice Risk Detection (KCS) accepted simultaneously.",
      ko: "DNN Fault Recovery(KICS), 무선통신 적대적 강건성(IEEE ICAIIC), FPGA 음성 위험 감지 시스템(KCS) 논문 채택."
    },
    tags: ["Publication", "Fault Injection", "IEEE", "FPGA"],
  },
  {
    date: "2025 Q4",
    title: { en: "JKICS & KIIT-JICS Journal Papers Accepted", ko: "JKICS & KIIT-JICS 저널 논문 채택" },
    description: {
      en: "BB84 quantum-secured communication system (JKICS journal) and quantum noise-based adversarial attack on diffusion models (KIIT-JICS) accepted.",
      ko: "BB84 양자 보안 통신 시스템(JKICS 저널)과 양자 노이즈 기반 Diffusion Model 적대적 공격(KIIT-JICS) 논문 채택."
    },
    tags: ["Journal", "Quantum", "Publication"],
  },
  {
    date: "2025 Dec",
    title: { en: "KIIT Outstanding Paper Award (2nd)", ko: "KIIT 우수논문상 수상 (2회차)" },
    description: {
      en: "Received Outstanding Paper Award from the Korea Information Technology Society, December 2025.",
      ko: "한국정보기술학회 2025년 12월 우수논문상 수상."
    },
    tags: ["Award", "KIIT"],
  },
  {
    date: "2025 Q4",
    title: { en: "FL Medical Imaging & Post-hoc Defense Papers", ko: "연합학습 의료 영상 & Post-hoc Defense 논문" },
    description: {
      en: "Presented logit-based Knowledge Distillation for FL (KIIT) and empirical study of FGSM/PGD defense in FL (KICS).",
      ko: "Logit 기반 Knowledge Distillation FL(KIIT), FGSM/PGD 공격 방어 실증 연구(KICS) 발표."
    },
    tags: ["Conference", "Federated Learning", "Medical AI"],
  },
  {
    date: "2025 Q3",
    title: { en: "Quantum Hybrid Network & Seismic Signal Papers", ko: "양자 하이브리드 신경망 & 지진 신호 논문" },
    description: {
      en: "Presented 3-qubit quantum circuit pneumonia classification (KSII) and comparison of 8 DL models for seismic signal denoising (KIIT).",
      ko: "3-Qubit 양자회로 폐렴 분류(KSII), 지진 신호 디노이징 8개 모델 비교(KIIT) 논문 발표."
    },
    tags: ["Conference", "Quantum ML", "Signal Processing"],
  },
  {
    date: "2025 Jul",
    title: { en: "KIIT Outstanding Paper Award (1st)", ko: "KIIT 우수논문상 수상 (1회차)" },
    description: {
      en: "Received Outstanding Paper Award from the Korea Information Technology Society, July 2025.",
      ko: "한국정보기술학회 2025년 7월 우수논문상 수상."
    },
    tags: ["Award", "KIIT"],
  },
  {
    date: "2025 Q2",
    title: { en: "ViT Adversarial Attack Study Published", ko: "ViT 적대적 공격 연구 발표" },
    description: {
      en: "Published study on robustness enhancement and multi-adversarial attacks in Vision Transformer-based image classification (KIIT Conference).",
      ko: "Vision Transformer 기반 이미지 분류 모델의 Multi-Adversarial Attack 강건성 연구 논문 발표 (KIIT Conference)."
    },
    tags: ["Conference", "Adversarial Attack", "ViT"],
  },
  {
    date: "2025",
    title: { en: "Autonomous Driving + FL Research Launched", ko: "자율주행 + FL 연구 본격 착수" },
    description: {
      en: "Launched federated learning research for autonomous driving at RAISE LAB. Designing experiments with heterogeneous/homogeneous models across diverse environments.",
      ko: "RAISE LAB에서 자율주행 환경의 연합학습 연구 프로젝트 시작. 이기종/동종 모델 및 다양한 환경 실험 설계."
    },
    tags: ["New Project", "Autonomous Driving", "FL"],
  },
  {
    date: "2024",
    title: { en: "Joined RAISE LAB as Undergraduate Researcher", ko: "RAISE LAB 학부연구원 합류" },
    description: {
      en: "Joined RAISE LAB at Yonsei University as an undergraduate researcher, beginning research in AI security and quantum computing.",
      ko: "연세대학교 RAISE LAB에 학부연구원으로 합류. AI 보안 및 양자컴퓨팅 연구 시작."
    },
    tags: ["Milestone", "RAISE LAB"],
  },
  {
    date: "2024",
    title: { en: "LG Aimers & AI Expert Program Certificates", ko: "LG Aimers & AI 융합 전문가 수료" },
    description: {
      en: "Earned LG Aimers certification and completed the AI Convergence Technology Expert Training Program. Academic Excellence Awards.",
      ko: "LG Aimers 인증 취득, 한국학회 AI 융합 기술 전문가 양성 프로그램 수료. 학업우수상 수상."
    },
    tags: ["Certificate", "Award", "Education"],
  },
  {
    date: "2022",
    title: { en: "Enrolled at Yonsei University", ko: "연세대학교 소프트웨어학부 입학" },
    description: {
      en: "Enrolled in the School of Computer Science at Yonsei University, beginning the CS major curriculum.",
      ko: "연세대학교 소프트웨어학부(컴퓨터과학)에 입학하여 CS 전공 과정 시작."
    },
    tags: ["Education", "Yonsei University"],
  },
];
