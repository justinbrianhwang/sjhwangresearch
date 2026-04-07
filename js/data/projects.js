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
    progress: 95,
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
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png"],
    tags: ["Fault Injection", "DNN Recovery", "Logit Calibration", "Reliability"],
  },
  {
    title: { en: "Autonomous Driving + LLM", ko: "자율주행 + LLM 모델 연구", ja: "自動運転 + LLMモデル研究", es: "Conducción autónoma + LLM" },
    description: {
      en: "Leveraging Large Language Models (LLMs) for autonomous driving decision-making and scenario understanding. Includes research on OpenEMMA, an open-source end-to-end multimodal model for autonomous driving that integrates vision-language reasoning for real-time driving decisions.",
      ko: "대규모 언어 모델(LLM)을 자율주행 의사결정 및 시나리오 이해에 활용하는 연구. 비전-언어 추론을 통합하여 실시간 주행 의사결정을 수행하는 오픈소스 엔드투엔드 멀티모달 자율주행 모델인 OpenEMMA 연구를 포함합니다.",
      ja: "大規模言語モデル(LLM)を自動運転の意思決定およびシナリオ理解に活用する研究。視覚-言語推論を統合してリアルタイムの運転判断を行うオープンソースのエンドツーエンドマルチモーダル自動運転モデルOpenEMMAの研究を含む。",
      es: "Aprovechamiento de modelos de lenguaje grande (LLM) para la toma de decisiones y comprensión de escenarios en conducción autónoma. Incluye investigación sobre OpenEMMA, un modelo multimodal de extremo a extremo de código abierto para conducción autónoma que integra razonamiento visión-lenguaje para decisiones de conducción en tiempo real."
    },
    progress: 25,
    status: "active",
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/RAISE LAB_current research.png", "assets/logos/MPS LAB_current research.webp"],
    tags: ["LLM", "Autonomous Driving", "Decision Making", "OpenEMMA", "Multimodal"],
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
    title: { en: "Cache-inspired Federated Learning", ko: "캐시 메모리 기반 연합학습", ja: "キャッシュメモリ着想の連合学習", es: "Aprendizaje federado inspirado en caché" },
    description: {
      en: "A novel federated learning framework inspired by cache memory hierarchy. Borrowing locality and replacement policy concepts from cache systems to optimize client selection, model aggregation, and communication efficiency in FL.",
      ko: "캐시 메모리 계층 구조에서 영감을 받은 새로운 연합학습 프레임워크. 캐시 시스템의 지역성(locality)과 교체 정책(replacement policy) 개념을 차용하여 FL에서의 클라이언트 선택, 모델 집계, 통신 효율성을 최적화합니다.",
      ja: "キャッシュメモリ階層構造から着想を得た新しい連合学習フレームワーク。キャッシュシステムの局所性と置換ポリシーの概念を借用し、FLにおけるクライアント選択、モデル集約、通信効率を最適化。",
      es: "Un marco de aprendizaje federado novedoso inspirado en la jerarquía de memoria caché. Tomando prestados conceptos de localidad y políticas de reemplazo de sistemas de caché para optimizar la selección de clientes, agregación de modelos y eficiencia de comunicación en FL."
    },
    progress: 60,
    status: "active",
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/Permillion Logos.png"],
    tags: ["Federated Learning", "Cache Memory", "Client Selection", "Aggregation"],
  },
  {
    title: { en: "Homogeneous FL for TCP Autonomous Driving (Different Environments)", ko: "TCP 자율 주행모델에 대한 Homogeneous Federated Learning (다른 환경)", ja: "TCP自律走行モデルのための同種連合学習（異なる環境）", es: "FL homogéneo para conducción autónoma TCP (diferentes entornos)" },
    description: {
      en: "Homogeneous federated learning research using TCP autonomous driving models across different driving environments. Training the same TCP model in diverse scenarios via FL to analyze robustness and performance convergence under environment heterogeneity.",
      ko: "서로 다른 주행 환경에서 TCP 자율 주행 모델을 활용한 동질적(Homogeneous) 연합 학습 연구. 다양한 시나리오에서 동일 TCP 모델을 FL로 훈련하여 환경 이질성에 대한 강건성과 성능 수렴을 분석.",
      ja: "異なる走行環境でTCP自律走行モデルを活用した同種連合学習の研究。多様なシナリオで同一TCPモデルをFLで訓練し、環境の異質性に対する頑健性と性能収束を分析。",
      es: "Investigación de aprendizaje federado homogéneo utilizando modelos de conducción autónoma TCP en diferentes entornos de conducción. Entrenamiento del mismo modelo TCP en diversos escenarios mediante FL para analizar la robustez y convergencia del rendimiento bajo heterogeneidad ambiental."
    },
    progress: 15,
    status: "active",
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Federated Learning", "TCP", "Autonomous Driving", "Carla", "Homogeneous FL"],
  },
  {
    title: { en: "TDA for Medical Data Analysis", ko: "TDA 기반 의료 데이터 분석", ja: "TDA基盤医療データ分析", es: "TDA para análisis de datos médicos" },
    description: {
      en: "Applying Topological Data Analysis (TDA) to BRCA breast cancer datasets to discover novel variables and hidden topological structures. Focused on identifying new biomarkers and feature patterns in breast cancer genomic data that conventional statistical methods fail to capture.",
      ko: "위상적 데이터 분석(TDA)을 BRCA 유방암 데이터셋에 적용하여 새로운 변수와 숨겨진 위상적 구조를 발견하는 연구. 기존 통계 방법으로는 포착할 수 없는 유방암 유전체 데이터의 새로운 바이오마커와 특징 패턴을 식별하는 데 집중합니다.",
      ja: "位相的データ分析(TDA)をBRCA乳がんデータセットに適用し、新たな変数と隠れた位相的構造を発見する研究。従来の統計手法では捉えられない乳がんゲノムデータの新しいバイオマーカーと特徴パターンの同定に注力。",
      es: "Aplicación de análisis topológico de datos (TDA) a conjuntos de datos de cáncer de mama BRCA para descubrir nuevas variables y estructuras topológicas ocultas. Enfocado en identificar nuevos biomarcadores y patrones de características en datos genómicos de cáncer de mama que los métodos estadísticos convencionales no logran capturar."
    },
    progress: 90,
    status: "active",
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/Permillion Logos.png"],
    tags: ["TDA", "Medical Data", "Topological Analysis", "Healthcare", "Cancer Data", "Biosignal"],
  },
  {
    title: { en: "TDA-based Detection of Generative AI Attacks", ko: "TDA 기반 생성형 AI 공격 탐지", ja: "TDA基盤生成AI攻撃検出", es: "Detección de ataques de IA generativa basada en TDA" },
    description: {
      en: "Detecting adversarial attacks generated by generative AI models using Topological Data Analysis (TDA). Since generative AI-based attacks produce perturbations imperceptible to the human eye, TDA is leveraged to capture hidden topological features and structural anomalies that conventional detection methods cannot identify.",
      ko: "생성형 AI 모델이 만들어낸 적대적 공격을 위상적 데이터 분석(TDA)으로 탐지하는 연구. 생성형 AI 기반 공격은 육안으로 식별할 수 없는 미세한 변조를 생성하므로, TDA를 활용하여 기존 탐지 기법으로는 포착할 수 없는 숨겨진 위상적 특징과 구조적 이상을 감지합니다.",
      ja: "生成AIモデルによる敵対的攻撃を位相的データ分析(TDA)で検出する研究。生成AIベースの攻撃は肉眼で識別できない微細な摂動を生成するため、TDAを活用して従来の検出手法では捉えられない隠れた位相的特徴と構造的異常を検知。",
      es: "Detección de ataques adversariales generados por modelos de IA generativa mediante análisis topológico de datos (TDA). Dado que los ataques basados en IA generativa producen perturbaciones imperceptibles al ojo humano, se aprovecha TDA para capturar características topológicas ocultas y anomalías estructurales que los métodos de detección convencionales no pueden identificar."
    },
    progress: 0,
    status: "planning",
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/Permillion Logos.png"],
    tags: ["TDA", "Generative AI", "Adversarial Attack", "Detection", "Security"],
  },
];
