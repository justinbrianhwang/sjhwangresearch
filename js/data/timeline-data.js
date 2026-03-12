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
    date: "2026 Q1",
    title: { en: "TDA Medical Data Analysis & AD+LLM Projects Launched", ko: "TDA 의료 데이터 분석 & 자율주행+LLM 프로젝트 착수" },
    description: {
      en: "Started TDA-based medical data analysis (personal project) and Autonomous Driving + LLM research in collaboration with RAISE LAB and ASU MPS LAB.",
      ko: "TDA 기반 의료 데이터 분석(개인 프로젝트) 및 RAISE LAB·ASU MPS LAB 협업 자율주행+LLM 연구 착수."
    },
    tags: ["New Project", "TDA", "LLM", "MPS LAB"],
  },
  {
    date: "2026 Feb",
    title: { en: "LG Aimers 8th Cohort Completed (LLM Compression)", ko: "LG Aimers 8기 수료 (LLM Compression)" },
    description: {
      en: "Completed LG Aimers 8th program (2026.01.02–2026.02.26). Hackathon topic: EXAONE Model Lightweight LLM Compression. Certified by LG AI Research Institute and Ministry of Employment and Labor.",
      ko: "LG Aimers 8기 프로그램 수료 (2026.01.02~2026.02.26). 해커톤 주제: EXAONE 모델 경량화(LLM Compression). LG AI연구원 및 고용노동부 인증."
    },
    tags: ["Certificate", "LG Aimers", "LLM Compression"],
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
    date: "2025 Q4",
    title: { en: "Side-Channel Attack Detection & Quantum GNN Studies Completed", ko: "부채널 공격 탐지 & 양자 GNN 연구 완료" },
    description: {
      en: "Completed comparative analysis of AI models for side-channel attack detection and mathematical analysis of Quantum Graph Neural Networks.",
      ko: "부채널 공격 탐지를 위한 AI 모델 비교 분석 및 양자 그래프 신경망(Quantum GNN) 수학적 분석 연구 완료."
    },
    tags: ["Security", "Quantum", "GNN", "Completed"],
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
    title: { en: "AI Aquaponics Monitoring System Completed (COREX)", ko: "AI 아쿠아포닉스 모니터링 시스템 완료 (COREX)" },
    description: {
      en: "Completed camera-based plant growth prediction and real-time AI monitoring system for aquaponics (pH, temperature, etc.) with automated anomaly adjustment. Collaborated with COREX.",
      ko: "COREX와 협업하여 카메라 기반 식물 생장 예측 및 pH·온도 등 실시간 AI 모니터링 시스템 개발 완료. 이상 감지 시 자동 조절 기능 구현."
    },
    tags: ["Completed", "Aquaponics", "Computer Vision", "IoT"],
  },
  {
    date: "2025 Q1",
    title: { en: "Autonomous Driving + FL Research Launched", ko: "자율주행 + FL 연구 본격 착수" },
    description: {
      en: "Launched federated learning research for autonomous driving at RAISE LAB. Designing experiments with heterogeneous/homogeneous models across diverse environments.",
      ko: "RAISE LAB에서 자율주행 환경의 연합학습 연구 프로젝트 시작. 이기종/동종 모델 및 다양한 환경 실험 설계."
    },
    tags: ["New Project", "Autonomous Driving", "FL"],
  },
  {
    date: "2024 Q4",
    title: { en: "Joined RAISE LAB as Undergraduate Researcher", ko: "RAISE LAB 학부연구원 합류" },
    description: {
      en: "Joined RAISE LAB at Yonsei University as an undergraduate researcher, beginning research in AI security and quantum computing.",
      ko: "연세대학교 RAISE LAB에 학부연구원으로 합류. AI 보안 및 양자컴퓨팅 연구 시작."
    },
    tags: ["Milestone", "RAISE LAB"],
  },
  {
    date: "2024",
    title: { en: "Multiple Independent Research Projects", ko: "다수 개인 연구 프로젝트 수행" },
    description: {
      en: "Completed electricity usage prediction (weather + consumption data), OCR + LLM medical document automation, voice-based risk prediction, and LLM search query optimization projects.",
      ko: "전력 수요 예측(기상+사용량 데이터), OCR+LLM 의료 문서 자동화, 음성 기반 위험 예측, LLM 검색어 최적화 프로젝트 완료."
    },
    tags: ["Completed", "LLM", "OCR", "Prediction"],
  },
  {
    date: "2025 Feb",
    title: { en: "LG Aimers 6th Cohort Completed (Data Intelligence)", ko: "LG Aimers 6기 수료 (Data Intelligence)" },
    description: {
      en: "Completed LG Aimers 6th program (2025.01.02–2025.02.27). Hackathon topic: Pregnancy success prediction for infertility patients. Certified by LG AI Research Institute and Ministry of Employment and Labor.",
      ko: "LG Aimers 6기 프로그램 수료 (2025.01.02~2025.02.27). 해커톤 주제: 난임 환자 대상 임신 성공 여부 예측. LG AI연구원 및 고용노동부 인증."
    },
    tags: ["Certificate", "LG Aimers", "Data Intelligence"],
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
