/* ============================================
   PROJECTS DATA
   {en: "English", ko: "한국어", ja: "日本語", es: "Español"} 형태로 다국어 지원
   progress: 0~100, status: "active" | "planning" | "completed" | "paused"
   ============================================ */

const PROJECTS = [
  {
    title: { en: "Autonomous Driving + FL (Different Models, Same Environment)", ko: "자율주행 + FL (다른 모델, 같은 환경)", ja: "自動運転 + FL（異種モデル、同一環境）", es: "Conducción autónoma + FL (diferentes modelos, mismo entorno)" },
    description: {
      en: "Training heterogeneous models via federated learning in the same driving environment. Analyzing knowledge transfer between models and performance convergence.",
      ko: "동일한 주행 환경에서 이기종(Heterogeneous) 모델들을 연합학습으로 훈련하는 연구. 모델 간 지식 전이와 성능 수렴을 분석합니다.",
      ja: "同一の走行環境で異種モデルを連合学習で訓練する研究。モデル間の知識転移と性能収束を分析。",
      es: "Entrenamiento de modelos heterogéneos mediante aprendizaje federado en el mismo entorno de conducción. Análisis de transferencia de conocimiento entre modelos y convergencia de rendimiento."
    },
    progress: 85,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png"],
    tags: ["Federated Learning", "Heterogeneous Models", "Autonomous Driving"],
  },
  {
    title: { en: "Fault Injection Research", ko: "Fault Injection 연구", ja: "Fault Injection研究", es: "Investigación de inyección de fallos" },
    description: {
      en: "Research on software fault injection in deep neural networks and functional recovery via logit-based external calibration techniques.",
      ko: "딥 뉴럴 네트워크에 대한 소프트웨어 오류 주입(Fault Injection) 및 Logit 기반 외부 캘리브레이션을 통한 기능 복구 기법 연구.",
      ja: "ディープニューラルネットワークへのソフトウェア障害注入およびLogit基盤の外部キャリブレーションによる機能回復技法の研究。",
      es: "Investigación sobre inyección de fallos de software en redes neuronales profundas y recuperación funcional mediante técnicas de calibración externa basadas en logit."
    },
    progress: 30,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png"],
    tags: ["Fault Injection", "DNN Recovery", "Logit Calibration", "Reliability"],
  },
  {
    title: { en: "Quantum AI", ko: "양자 인공지능 (Quantum AI)", ja: "量子AI", es: "IA cuántica" },
    description: {
      en: "Quantum-classical hybrid neural networks, quantum noise-based adversarial attacks, and classification models utilizing Variational Quantum Circuits (VQC).",
      ko: "양자-고전 하이브리드 뉴럴 네트워크, 양자 노이즈 기반 적대적 공격, VQC를 활용한 분류 모델 연구.",
      ja: "量子・古典ハイブリッドニューラルネットワーク、量子ノイズ基盤の敵対的攻撃、VQCを活用した分類モデルの研究。",
      es: "Redes neuronales híbridas cuántico-clásicas, ataques adversariales basados en ruido cuántico y modelos de clasificación utilizando circuitos cuánticos variacionales (VQC)."
    },
    progress: 20,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/RAISE LAB_current research.png"],
    tags: ["Quantum ML", "VQC", "Hybrid Network", "PennyLane"],
  },
  {
    title: { en: "Autonomous Driving + LLM", ko: "자율주행 + LLM 모델 연구", ja: "自動運転 + LLMモデル研究", es: "Conducción autónoma + LLM" },
    description: {
      en: "Leveraging Large Language Models (LLMs) for autonomous driving decision-making and scenario understanding. Analyzing reasoning capabilities in complex traffic situations.",
      ko: "대규모 언어 모델(LLM)을 자율주행 의사결정 및 시나리오 이해에 활용하는 연구. 복잡한 교통 상황에서의 추론 능력 분석.",
      ja: "大規模言語モデル(LLM)を自動運転の意思決定およびシナリオ理解に活用する研究。複雑な交通状況での推論能力を分析。",
      es: "Aprovechamiento de modelos de lenguaje grande (LLM) para la toma de decisiones y comprensión de escenarios en conducción autónoma. Análisis de capacidades de razonamiento en situaciones de tráfico complejas."
    },
    progress: 25,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/RAISE LAB_current research.png", "assets/logos/MPS LAB_current research.webp"],
    tags: ["LLM", "Autonomous Driving", "Decision Making"],
  },
  {
    title: { en: "Autonomous Driving + FL (Same Model, Different Environments)", ko: "자율주행 + FL (같은 모델, 다른 환경)", ja: "自動運転 + FL（同一モデル、異なる環境）", es: "Conducción autónoma + FL (mismo modelo, diferentes entornos)" },
    description: {
      en: "Training the same model via federated learning across diverse driving environments (urban, highway, night, etc.). Analyzing robustness against domain shift.",
      ko: "다양한 주행 환경(도심, 고속도로, 야간 등)에서 동일 모델을 연합학습으로 훈련. 환경 이질성(Domain Shift)에 대한 강건성 분석.",
      ja: "多様な走行環境（都心、高速道路、夜間等）で同一モデルを連合学習で訓練。Domain Shiftに対する頑健性を分析。",
      es: "Entrenamiento del mismo modelo mediante aprendizaje federado en diversos entornos de conducción (urbano, autopista, nocturno, etc.). Análisis de robustez contra el cambio de dominio."
    },
    progress: 10,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/RAISE LAB_current research.png"],
    tags: ["Federated Learning", "Domain Shift", "Autonomous Driving"],
  },
  {
    title: { en: "TDA for Medical Data Analysis", ko: "TDA 기반 의료 데이터 분석", ja: "TDA基盤医療データ分析", es: "TDA para análisis de datos médicos" },
    description: {
      en: "Applying Topological Data Analysis (TDA) to medical datasets for robust feature extraction and pattern discovery in complex healthcare data.",
      ko: "위상적 데이터 분석(TDA)을 의료 데이터에 적용하여 복잡한 의료 데이터에서 강건한 특징 추출 및 패턴 발견 연구.",
      ja: "位相的データ分析(TDA)を医療データセットに適用し、複雑な医療データから頑健な特徴抽出とパターン発見の研究。",
      es: "Aplicación de análisis topológico de datos (TDA) a conjuntos de datos médicos para extracción robusta de características y descubrimiento de patrones en datos de salud complejos."
    },
    progress: 5,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/Permillion Logos.png"],
    tags: ["TDA", "Medical Data", "Topological Analysis", "Healthcare"],
  },
  {
    title: { en: "Quantum Tunneling Mathematical Modeling & Simulation", ko: "양자 터널링 수학적 모델링 시뮬레이션", ja: "量子トンネリング数学的モデリング＆シミュレーション", es: "Modelado matemático y simulación de túnel cuántico" },
    description: {
      en: "Mathematical modeling and simulation of quantum tunneling phenomena. Implementing numerical solutions and visualizations using C++ for quantum mechanical barrier penetration problems.",
      ko: "양자 터널링 현상의 수학적 모델링 및 시뮬레이션. C++을 활용한 양자역학적 장벽 투과 문제의 수치 해석 및 시각화 구현.",
      ja: "量子トンネリング現象の数学的モデリングとシミュレーション。C++を活用した量子力学的障壁透過問題の数値解析と可視化の実装。",
      es: "Modelado matemático y simulación de fenómenos de túnel cuántico. Implementación de soluciones numéricas y visualizaciones usando C++ para problemas de penetración de barreras de mecánica cuántica."
    },
    progress: 2,
    status: "active",
    startDate: "2025",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["C++", "Modeling", "Simulation", "Quantum Tunneling"],
  },
];
