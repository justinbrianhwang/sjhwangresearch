/* ============================================
   PROJECTS DATA
   {en: "English", ko: "한국어"} 형태로 다국어 지원
   progress: 0~100, status: "active" | "planning" | "completed" | "paused"
   ============================================ */

const PROJECTS = [
  {
    title: { en: "Autonomous Driving + FL (Different Models, Same Environment)", ko: "자율주행 + FL (다른 모델, 같은 환경)" },
    description: {
      en: "Training heterogeneous models via federated learning in the same driving environment. Analyzing knowledge transfer between models and performance convergence.",
      ko: "동일한 주행 환경에서 이기종(Heterogeneous) 모델들을 연합학습으로 훈련하는 연구. 모델 간 지식 전이와 성능 수렴을 분석합니다."
    },
    progress: 85,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png"],
    tags: ["Federated Learning", "Heterogeneous Models", "Autonomous Driving"],
  },
  {
    title: { en: "Fault Injection Research", ko: "Fault Injection 연구" },
    description: {
      en: "Research on software fault injection in deep neural networks and functional recovery via logit-based external calibration techniques.",
      ko: "딥 뉴럴 네트워크에 대한 소프트웨어 오류 주입(Fault Injection) 및 Logit 기반 외부 캘리브레이션을 통한 기능 복구 기법 연구."
    },
    progress: 30,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png"],
    tags: ["Fault Injection", "DNN Recovery", "Logit Calibration", "Reliability"],
  },
  {
    title: { en: "Quantum AI", ko: "양자 인공지능 (Quantum AI)" },
    description: {
      en: "Quantum-classical hybrid neural networks, quantum noise-based adversarial attacks, and classification models utilizing Variational Quantum Circuits (VQC).",
      ko: "양자-고전 하이브리드 뉴럴 네트워크, 양자 노이즈 기반 적대적 공격, VQC를 활용한 분류 모델 연구."
    },
    progress: 20,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/RAISE LAB_current research.png"],
    tags: ["Quantum ML", "VQC", "Hybrid Network", "PennyLane"],
  },
  {
    title: { en: "Autonomous Driving + LLM", ko: "자율주행 + LLM 모델 연구" },
    description: {
      en: "Leveraging Large Language Models (LLMs) for autonomous driving decision-making and scenario understanding. Analyzing reasoning capabilities in complex traffic situations.",
      ko: "대규모 언어 모델(LLM)을 자율주행 의사결정 및 시나리오 이해에 활용하는 연구. 복잡한 교통 상황에서의 추론 능력 분석."
    },
    progress: 25,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/RAISE LAB_current research.png", "assets/logos/MPS LAB_current research.webp"],
    tags: ["LLM", "Autonomous Driving", "Decision Making"],
  },
  {
    title: { en: "Autonomous Driving + FL (Same Model, Different Environments)", ko: "자율주행 + FL (같은 모델, 다른 환경)" },
    description: {
      en: "Training the same model via federated learning across diverse driving environments (urban, highway, night, etc.). Analyzing robustness against domain shift.",
      ko: "다양한 주행 환경(도심, 고속도로, 야간 등)에서 동일 모델을 연합학습으로 훈련. 환경 이질성(Domain Shift)에 대한 강건성 분석."
    },
    progress: 10,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/RAISE LAB_current research.png"],
    tags: ["Federated Learning", "Domain Shift", "Autonomous Driving"],
  },
  {
    title: { en: "TDA for Medical Data Analysis", ko: "TDA 기반 의료 데이터 분석" },
    description: {
      en: "Applying Topological Data Analysis (TDA) to medical datasets for robust feature extraction and pattern discovery in complex healthcare data.",
      ko: "위상적 데이터 분석(TDA)을 의료 데이터에 적용하여 복잡한 의료 데이터에서 강건한 특징 추출 및 패턴 발견 연구."
    },
    progress: 5,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/Permillion Logos.png"],
    tags: ["TDA", "Medical Data", "Topological Analysis", "Healthcare"],
  },
];
