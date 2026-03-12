/* ============================================
   PAST PROJECTS DATA
   완료된 연구 프로젝트
   ============================================ */

const PAST_PROJECTS = [
  {
    title: { en: "Electricity Usage Prediction Based on Weather & Consumption Data", ko: "기상 데이터 및 전기 사용량 기반 전력 수요 예측" },
    description: {
      en: "Predicting electricity consumption by integrating weather data and historical usage patterns using machine learning models.",
      ko: "기상 데이터와 과거 전기 사용량 패턴을 결합하여 머신러닝 모델로 전력 수요를 예측하는 연구."
    },
    year: "2024",
    outcome: { en: "Completed", ko: "완료" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/Korea it academi.png"],
    tags: ["Time Series", "Prediction", "Weather Data", "Energy"],
  },
  {
    title: { en: "OCR + LLM-Based Medical Document Automation", ko: "OCR 및 LLM 기반 의료 문서 자동화" },
    description: {
      en: "Automated processing and structuring of medical documents by combining OCR text extraction with LLM-based understanding and summarization.",
      ko: "OCR 텍스트 추출과 LLM 기반 이해 및 요약을 결합하여 의료 문서를 자동으로 처리하고 구조화하는 연구."
    },
    year: "2024",
    outcome: { en: "Completed", ko: "완료" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/RAISE LAB_current research.png", "assets/logos/dhsoft logo Project.png", "assets/logos/yonsei logo.png"],
    tags: ["OCR", "LLM", "Medical Document", "NLP"],
  },
  {
    title: { en: "Voice Data-Based Risk Situation Prediction", ko: "음성 데이터 기반 위험 상황 예측" },
    description: {
      en: "Detecting and predicting risk situations from voice data using audio feature extraction and deep learning classification. Follow-up research led to FPGA-based implementation (KCS 2026).",
      ko: "음성 데이터에서 오디오 특징을 추출하고 딥러닝 분류를 통해 위험 상황을 탐지 및 예측하는 연구. 후속 연구로 FPGA 기반 구현(KCS 2026 채택)으로 이어짐."
    },
    year: "2024",
    outcome: { en: "Completed → Follow-up accepted at KCS 2026", ko: "완료 → 후속 연구 KCS 2026 채택" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Voice Analysis", "Risk Detection", "Audio Classification"],
  },
  {
    title: { en: "LLM-Based Search Query Optimization for User Convenience", ko: "사용자 편의를 위한 LLM 기반 검색어 최적화" },
    description: {
      en: "Optimizing search queries using LLMs to improve search accuracy and user experience through intent understanding and query reformulation.",
      ko: "LLM을 활용하여 사용자 의도를 파악하고 검색어를 재구성함으로써 검색 정확도와 사용자 경험을 향상시키는 연구."
    },
    year: "2024",
    outcome: { en: "Completed", ko: "완료" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["LLM", "Search Optimization", "NLP", "UX"],
  },
  {
    title: { en: "Optimal AI Model for Side-Channel Attack Detection", ko: "부채널 공격 탐지에 최적화된 AI 모델 연구" },
    description: {
      en: "Comparative analysis of AI models to identify the most effective architecture for detecting side-channel attacks in hardware systems.",
      ko: "하드웨어 시스템에서 부채널 공격을 탐지하기 위한 최적의 AI 모델 아키텍처를 비교 분석하는 연구."
    },
    year: "2025",
    outcome: { en: "Completed", ko: "완료" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Side-Channel Attack", "Security", "Model Comparison", "Hardware"],
  },
  {
    title: { en: "Mathematical Analysis of Quantum GNN", ko: "양자 GNN 수학적 분석" },
    description: {
      en: "Theoretical and mathematical analysis of Quantum Graph Neural Networks, investigating expressiveness, convergence properties, and computational advantages.",
      ko: "양자 그래프 신경망(Quantum GNN)의 표현력, 수렴 특성, 계산적 이점에 대한 이론적·수학적 분석 연구."
    },
    year: "2025",
    outcome: { en: "Completed", ko: "완료" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Quantum", "GNN", "Mathematical Analysis", "Theory"],
  },
  {
    title: { en: "ViT Adversarial Robustness & Multi-Attack Study", ko: "ViT 적대적 강건성 및 다중 공격 연구" },
    description: {
      en: "Robustness enhancement and multi-adversarial attack analysis on Vision Transformer-based image classification models.",
      ko: "Vision Transformer 기반 이미지 분류 모델에 대한 강건성 향상 및 다중 적대적 공격 분석 연구."
    },
    year: "2025",
    outcome: { en: "Published at KIIT Conference 2025", ko: "KIIT Conference 2025 발표" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Adversarial Attack", "ViT", "Robustness"],
  },
  {
    title: { en: "Seismic Signal Denoising with Deep Learning", ko: "딥러닝 기반 지진 신호 디노이징" },
    description: {
      en: "Performance comparison of 8 deep learning models for seismic signal denoising tasks.",
      ko: "지진 신호 디노이징을 위한 8개 딥러닝 모델 성능 비교 연구."
    },
    year: "2025",
    outcome: { en: "Published at KIIT Conference 2025", ko: "KIIT Conference 2025 발표" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Signal Processing", "Deep Learning", "Denoising"],
  },
  {
    title: { en: "Quantum Hybrid Pneumonia Classification", ko: "양자 하이브리드 폐렴 분류" },
    description: {
      en: "Classification of pneumonia in chest X-rays using a hybrid neural network based on a 3-qubit quantum circuit.",
      ko: "3-Qubit 양자 회로 기반 하이브리드 신경망을 활용한 흉부 X-ray 폐렴 분류."
    },
    year: "2025",
    outcome: { en: "Published at KSII Conference 2025", ko: "KSII Conference 2025 발표" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Quantum ML", "Medical AI", "Hybrid Network"],
  },
  {
    title: { en: "Post-hoc Defense in Federated Learning", ko: "연합학습 Post-hoc Defense 연구" },
    description: {
      en: "Empirical study of post-hoc defense with knowledge distillation against FGSM and PGD attacks in federated learning.",
      ko: "연합학습 환경에서 FGSM/PGD 공격에 대한 Knowledge Distillation 기반 Post-hoc Defense 실증 연구."
    },
    year: "2025",
    outcome: { en: "Published at KICS Conference 2025", ko: "KICS Conference 2025 발표" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Federated Learning", "Adversarial Defense", "Knowledge Distillation"],
  },
  {
    title: { en: "FL Medical Imaging with Logit-based KD", ko: "Logit 기반 KD 의료 영상 연합학습" },
    description: {
      en: "Logit-based knowledge distillation for heterogeneous medical image federated learning.",
      ko: "이기종 의료 영상 연합학습을 위한 Logit 기반 Knowledge Distillation 연구."
    },
    year: "2025",
    outcome: { en: "Published at KIIT Conference 2025, Outstanding Paper Award", ko: "KIIT Conference 2025 발표, 우수논문상 수상" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Federated Learning", "Medical AI", "Knowledge Distillation"],
  },
  {
    title: { en: "BB84 Quantum-Secured Communication System", ko: "BB84 양자 보안 통신 시스템" },
    description: {
      en: "Quantum-secured hybrid communication system for tactical military networks using BB84 protocol implemented with PennyLane.",
      ko: "PennyLane 기반 BB84 프로토콜을 활용한 군사 전술 네트워크용 양자 보안 하이브리드 통신 시스템."
    },
    year: "2025",
    outcome: { en: "Published in JKICS 2026 (Journal)", ko: "JKICS 2026 저널 게재" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Quantum", "BB84", "Military Network", "PennyLane"],
  },
  {
    title: { en: "Quantum Noise-based Attack on Diffusion Models", ko: "양자 노이즈 기반 Diffusion Model 공격" },
    description: {
      en: "Quantum noise-based adversarial attack on diffusion models and analysis of defense mechanisms.",
      ko: "Diffusion Model에 대한 양자 노이즈 기반 적대적 공격 및 방어 메커니즘 분석."
    },
    year: "2025",
    outcome: { en: "Published in KIIT-JICS 2026", ko: "KIIT-JICS 2026 게재" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Quantum", "Adversarial Attack", "Diffusion Model"],
  },
  {
    title: { en: "Adversarial Robustness in Wireless AMC", ko: "무선 통신 AMC 적대적 강건성 분석" },
    description: {
      en: "Adversarial robustness analysis of deep learning-based automatic modulation classification in wireless communication.",
      ko: "무선 통신에서 딥러닝 기반 자동 변조 분류(AMC)의 적대적 강건성 분석."
    },
    year: "2025",
    outcome: { en: "Accepted at IEEE ICAIIC 2026", ko: "IEEE ICAIIC 2026 채택" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png", "assets/logos/Permillion Logos.png"],
    tags: ["Wireless", "AMC", "Adversarial Attack", "IEEE"],
  },
  {
    title: { en: "FPGA-Based Voice Risk Detection System", ko: "FPGA 기반 음성 위험 감지 시스템" },
    description: {
      en: "Design and implementation of an FPGA-based real-time voice risk detection system.",
      ko: "FPGA 기반 실시간 음성 위험 감지 시스템 설계 및 구현."
    },
    year: "2025",
    outcome: { en: "Accepted at KCS 2026", ko: "KCS 2026 채택" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["FPGA", "Voice Detection", "Hardware"],
  },
  {
    title: { en: "DNN Fault Recovery via Logit Calibration", ko: "Logit 캘리브레이션 기반 DNN 오류 복구" },
    description: {
      en: "Functional recovery of deep neural networks via logit-based external calibration after software fault injection.",
      ko: "소프트웨어 오류 주입 후 Logit 기반 외부 캘리브레이션을 통한 DNN 기능 복구."
    },
    year: "2025",
    outcome: { en: "Accepted at KICS 2026", ko: "KICS 2026 채택" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Fault Injection", "DNN Recovery", "Calibration"],
  },
  {
    title: { en: "AI-Based Aquaponics Monitoring & Growth Prediction", ko: "AI 기반 아쿠아포닉스 모니터링 및 생장 예측" },
    description: {
      en: "Camera-based plant growth prediction and real-time AI monitoring of pH, temperature, and other environmental factors in aquaponics systems, with automated adjustment upon anomaly detection. Collaborated with COREX.",
      ko: "아쿠아포닉스 시스템에서 카메라 기반 식물 생장 예측 및 pH, 온도 등 환경 요소의 실시간 AI 모니터링을 통해 이상 발생 시 자동 조절하는 기술 시스템 개발. COREX와 공동 수행."
    },
    year: "2025",
    outcome: { en: "Completed (with COREX)", ko: "완료 (COREX 협업)" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png", "assets/logos/Corex logo.png"],
    tags: ["Aquaponics", "Computer Vision", "IoT", "Real-time Monitoring"],
  },
];
