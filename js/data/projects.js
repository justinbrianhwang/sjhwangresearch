/* ============================================
   PROJECTS DATA
   {en: "English", ko: "한국어", ja: "日本語", es: "Español"} 형태로 다국어 지원
   progress: 0~100, status: "active" | "planning" | "completed" | "paused"
   ============================================ */

const PROJECTS = [
  {
    title: { en: "AI Moral Reasoning and Value Alignment Research", ko: "AI 도덕적 추론 및 가치 정렬 연구", ja: "AI道徳的推論と価値整合性研究", es: "Investigación en razonamiento moral de IA y alineación de valores" },
    description: {
      en: "Research on computational models of moral reasoning, ethical decision-making, and value alignment for advanced AI systems. Exploring how intelligent agents can make socially acceptable and ethically aligned decisions in complex environments.",
      ko: "고도화된 AI 시스템을 위한 도덕적 추론, 윤리적 의사결정, 가치 정렬의 계산 모델 연구. 지능형 에이전트가 복잡한 환경에서 사회적으로 수용 가능하고 윤리적으로 정렬된 의사결정을 내릴 수 있는 방법을 탐구.",
      ja: "高度化されたAIシステムのための道徳的推論、倫理的意思決定、価値整合性の計算モデル研究。知能エージェントが複雑な環境で社会的に受容可能で倫理的に整合された意思決定を下す方法を探求する。",
      es: "Investigación sobre modelos computacionales de razonamiento moral, toma de decisiones éticas y alineación de valores para sistemas de IA avanzados. Explorando cómo los agentes inteligentes pueden tomar decisiones socialmente aceptables y éticamente alineadas en entornos complejos."
    },
    progress: 30,
    status: "active",
    startDate: "2026-03",
    teamLogos: ["assets/logos/sjjb logos.png"],
    tags: ["AI Safety", "Value Alignment", "Moral Reasoning", "Ethics", "Agent Decision-Making"],
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
    title: { en: "MARSHAL: LLM Autonomous Driving Benchmark", ko: "MARSHAL: LLM 자율주행 벤치마크", ja: "MARSHAL: LLM自動運転ベンチマーク", es: "MARSHAL: Benchmark de conducción autónoma con LLM" },
    description: {
      en: "MARSHAL (Modeling Authority Recognition for Safe Human-directed Autonomous Locomotion) is a benchmark for evaluating how well LLM-based autonomous driving models recognize and respond to human-directed authority — such as traffic police gestures, hand signals, and on-the-spot verbal directions — in order to ensure safe locomotion. Conducted jointly with MPS Lab and RAISE Lab.",
      ko: "MARSHAL(Modeling Authority Recognition for Safe Human-directed Autonomous Locomotion)은 LLM 기반 자율주행 모델이 교통 경찰의 수신호, 손짓, 현장 음성 지시 등 사람이 지시하는 권위(authority)를 얼마나 잘 인식하고 안전하게 반응하는지 평가하는 벤치마크입니다. MPS Lab과 RAISE Lab이 공동으로 진행합니다.",
      ja: "MARSHAL(Modeling Authority Recognition for Safe Human-directed Autonomous Locomotion)は、LLMベースの自動運転モデルが交通警察の手信号、ジェスチャー、現場での口頭指示など、人間が指示する権限をどれだけ正確に認識し安全に反応できるかを評価するベンチマークです。MPS LabとRAISE Labが共同で進めています。",
      es: "MARSHAL (Modeling Authority Recognition for Safe Human-directed Autonomous Locomotion) es un benchmark para evaluar qué tan bien los modelos de conducción autónoma basados en LLM reconocen y responden a la autoridad dirigida por humanos —como gestos de la policía de tránsito, señales con las manos e indicaciones verbales en el momento— para garantizar una locomoción segura. Realizado conjuntamente con MPS Lab y RAISE Lab."
    },
    progress: 60,
    status: "active",
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/RAISE LAB_current research.png", "assets/logos/MPS LAB_current research.webp"],
    tags: ["LLM", "Autonomous Driving", "Benchmark", "Authority Recognition", "Safety"],
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
    progress: 95,
    status: "active",
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/Permillion Logos.png"],
    tags: ["Federated Learning", "Cache Memory", "Client Selection", "Aggregation"],
  },
  {
    title: { en: "Mamba-based Autonomous Vehicle", ko: "Mamba 기반 자율주행", ja: "Mambaベースの自動運転", es: "Vehículo autónomo basado en Mamba" },
    description: {
      en: "Exploring the Mamba (State Space Model) architecture for autonomous driving perception and decision-making. Leveraging Mamba's linear-time sequence modeling to replace Transformer-based backbones in end-to-end autonomous driving pipelines, aiming for improved efficiency and long-range temporal reasoning.",
      ko: "자율주행의 인지 및 의사결정 모듈에 Mamba(State Space Model) 아키텍처를 적용하는 연구. Mamba의 선형 시간 시퀀스 모델링을 활용해 기존 Transformer 기반 백본을 대체하고, End-to-End 자율주행 파이프라인에서 효율성과 장기 시간적 추론 성능을 향상시키는 것을 목표로 합니다.",
      ja: "自動運転の認識と意思決定モジュールにMamba(State Space Model)アーキテクチャを適用する研究。Mambaの線形時間シーケンスモデリングを活用し、既存のTransformerベースのバックボーンを置き換え、エンドツーエンド自動運転パイプラインで効率性と長期時間推論性能を向上させることを目指します。",
      es: "Exploración de la arquitectura Mamba (Modelo de Espacio de Estados) para la percepción y toma de decisiones en conducción autónoma. Aprovechando el modelado de secuencias en tiempo lineal de Mamba para reemplazar backbones basados en Transformer en pipelines de conducción autónoma de extremo a extremo, buscando mayor eficiencia y razonamiento temporal de largo alcance."
    },
    progress: 2,
    status: "active",
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png", "assets/logos/Permillion Logos.png"],
    tags: ["Mamba", "State Space Model", "Autonomous Driving", "Sequence Modeling", "End-to-End"],
  },
  {
    title: { en: "TDA-based Drug Discovery", ko: "TDA 기반 신약 개발", ja: "TDA基盤の創薬", es: "Descubrimiento de fármacos basado en TDA" },
    description: {
      en: "Applying Topological Data Analysis (TDA) to molecular point clouds, protein-ligand interaction networks, and binding pocket geometries for drug discovery. Persistent homology and Mapper-based shape features guide virtual screening, lead optimization, and structure-based drug design — providing topology-aware representations that complement conventional cheminformatics descriptors.",
      ko: "분자 점군(molecular point cloud), 단백질-리간드 상호작용 네트워크, 결합 포켓 기하 구조에 위상적 데이터 분석(TDA)을 적용하여 신약 개발을 진행. Persistent Homology와 Mapper 기반 shape feature를 활용하여 virtual screening, lead optimization, 구조 기반 신약 설계를 가이드하며, 기존 cheminformatics 디스크립터를 보완하는 topology-aware 표현을 제공합니다.",
      ja: "分子点群、タンパク質-リガンド相互作用ネットワーク、結合ポケット形状にTDAを適用した創薬研究。Persistent HomologyとMapperによる形状特徴でバーチャルスクリーニング、リード最適化、構造ベース創薬を支援。",
      es: "Aplicación de TDA a nubes de puntos moleculares, redes de interacción proteína-ligando y geometrías de bolsillos de unión para el descubrimiento de fármacos. Las características de forma basadas en homología persistente y Mapper guían el cribado virtual, la optimización de líderes y el diseño basado en estructura."
    },
    progress: 5,
    status: "active",
    startDate: "2026",
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/Permillion Logos.png"],
    tags: ["TDA", "Drug Discovery", "Molecular Design", "Persistent Homology", "Cheminformatics"],
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
