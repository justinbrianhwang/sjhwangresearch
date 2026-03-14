/* ============================================
   RESEARCH AREAS DATA
   {en: "English", ko: "한국어", ja: "日本語", es: "Español"} 형태로 다국어 지원
   tags → Research Directions (각 태그가 곧 세부 연구 방향)
   ============================================ */

const RESEARCH_AREAS = [
  {
    icon: "assets/icons/AI Security.png",
    title: { en: "AI Security", ko: "AI 보안", ja: "AIセキュリティ", es: "Seguridad de IA" },
    description: {
      en: "Research on attack and defense techniques to ensure AI system reliability and safety, including adversarial robustness, federated learning security, post-hoc defense, and fault injection.",
      ko: "Adversarial Robustness, 연합학습 보안, Post-hoc Defense, Fault Injection 등 AI 시스템의 신뢰성과 안전성을 확보하기 위한 공격/방어 기법 연구.",
      ja: "Adversarial Robustness、連合学習セキュリティ、Post-hoc Defense、Fault Injectionなど、AIシステムの信頼性と安全性を確保するための攻撃・防御技法の研究。",
      es: "Investigación sobre técnicas de ataque y defensa para garantizar la fiabilidad y seguridad de los sistemas de IA, incluyendo robustez adversarial, seguridad de aprendizaje federado, defensa post-hoc e inyección de fallos."
    },
    tags: ["Adversarial Attack", "FL Security", "Fault Injection", "Trust"],
    // 각 태그에 대한 세부 설명 (태그 순서와 1:1 매핑)
    directions: [
      { en: "Generating and defending against perturbations that fool deep learning models", ko: "딥러닝 모델을 속이는 교란의 생성과 방어", ja: "ディープラーニングモデルを欺く摂動の生成と防御", es: "Generación y defensa contra perturbaciones que engañan modelos" },
      { en: "Protecting federated learning from poisoning and gradient leakage", ko: "포이즈닝 및 그래디언트 유출로부터 연합학습 보호", ja: "ポイズニングと勾配漏洩から連合学習を保護", es: "Protección del aprendizaje federado contra envenenamiento y fuga" },
      { en: "Analyzing DNN vulnerability to software/hardware faults and recovery via logit calibration", ko: "소프트웨어/하드웨어 오류에 대한 DNN 취약성 분석 및 Logit 캘리브레이션 복구", ja: "SW/HW障害に対するDNN脆弱性分析とLogitキャリブレーション回復", es: "Análisis de vulnerabilidad de DNN ante fallos y recuperación con calibración logit" },
      { en: "Post-deployment defense and input purification without model retraining", ko: "재학습 없는 배포 후 방어 및 입력 정제", ja: "再学習なしのデプロイ後防御と入力浄化", es: "Defensa post-despliegue y purificación de entrada sin reentrenamiento" },
    ],
  },
  {
    icon: "assets/icons/Autonomous Driving.png",
    title: { en: "Autonomous Driving", ko: "자율주행 자동차", ja: "自動運転", es: "Conducción autónoma" },
    description: {
      en: "Autonomous driving systems using Federated Learning (FL) and Large Language Models (LLM). Optimizing FL across heterogeneous/homogeneous models in diverse driving environments.",
      ko: "연합학습(FL)과 대규모 언어 모델(LLM)을 활용한 자율주행 시스템 연구. 이기종/동종 모델, 다양한 환경에서의 FL 최적화.",
      ja: "連合学習(FL)と大規模言語モデル(LLM)を活用した自動運転システムの研究。異種・同種モデル、多様な環境でのFL最適化。",
      es: "Sistemas de conducción autónoma utilizando aprendizaje federado (FL) y modelos de lenguaje grande (LLM). Optimización de FL entre modelos heterogéneos/homogéneos en diversos entornos de conducción."
    },
    tags: ["Federated Learning", "LLM", "Autonomous Driving", "Simulation"],
    directions: [
      { en: "Collaborative model training across vehicles without sharing raw driving data", ko: "원시 주행 데이터 공유 없이 차량 간 협력적 모델 훈련", ja: "生データ共有なしの車両間協調モデル訓練", es: "Entrenamiento colaborativo de modelos entre vehículos sin compartir datos brutos" },
      { en: "Vision-language reasoning for real-time driving decisions using OpenEMMA", ko: "OpenEMMA를 활용한 실시간 주행 의사결정을 위한 비전-언어 추론", ja: "OpenEMMAを活用したリアルタイム運転判断のための視覚-言語推論", es: "Razonamiento visión-lenguaje para decisiones de conducción en tiempo real con OpenEMMA" },
      { en: "End-to-end perception, planning and control in complex traffic scenarios", ko: "복잡한 교통 시나리오에서의 엔드투엔드 인지, 계획, 제어", ja: "複雑な交通シナリオでのエンドツーエンド認知・計画・制御", es: "Percepción, planificación y control de extremo a extremo en escenarios de tráfico complejos" },
      { en: "CARLA-based safe training, evaluation, and adversarial scenario generation", ko: "CARLA 기반 안전한 훈련, 평가, 적대적 시나리오 생성", ja: "CARLAベースの安全な訓練・評価・敵対的シナリオ生成", es: "Entrenamiento seguro basado en CARLA y generación de escenarios adversariales" },
    ],
  },
  {
    icon: "assets/icons/Quantum Computing.png",
    title: { en: "Quantum Computing & Communication", ko: "양자컴퓨팅 / 양자 통신", ja: "量子コンピューティング / 量子通信", es: "Computación cuántica y comunicación" },
    description: {
      en: "Quantum algorithms, NISQ-era circuits, and VQC research. Quantum key distribution via BB84 protocol and quantum-secured hybrid communication systems.",
      ko: "양자 알고리즘, NISQ-era 회로, VQC 연구. BB84 프로토콜 기반 양자 키 분배 및 양자 보안 하이브리드 통신 시스템.",
      ja: "量子アルゴリズム、NISQ時代の回路、VQC研究。BB84プロトコルによる量子鍵配送と量子セキュア・ハイブリッド通信システム。",
      es: "Algoritmos cuánticos, circuitos de la era NISQ e investigación VQC. Distribución de claves cuánticas mediante el protocolo BB84 y sistemas de comunicación híbridos con seguridad cuántica."
    },
    tags: ["Quantum ML", "VQC", "BB84", "PennyLane", "Qiskit"],
    directions: [
      { en: "Quantum-classical hybrid neural networks for enhanced classification", ko: "향상된 분류를 위한 양자-고전 하이브리드 신경망", ja: "高度な分類のための量子古典ハイブリッドニューラルネットワーク", es: "Redes neuronales híbridas cuántico-clásicas para clasificación mejorada" },
      { en: "Parameterized quantum circuits optimized for NISQ-era processors", ko: "NISQ 시대 프로세서에 최적화된 매개변수화 양자 회로", ja: "NISQ時代プロセッサ向け最適化パラメータ量子回路", es: "Circuitos cuánticos parametrizados optimizados para procesadores NISQ" },
      { en: "Unconditionally secure key exchange via quantum key distribution", ko: "양자 키 분배를 통한 무조건적으로 안전한 키 교환", ja: "量子鍵配送による無条件に安全な鍵交換", es: "Intercambio de claves incondicionalmente seguro mediante distribución cuántica" },
      { en: "Quantum circuit simulation and optimization with PennyLane framework", ko: "PennyLane 프레임워크를 활용한 양자 회로 시뮬레이션 및 최적화", ja: "PennyLaneフレームワークによる量子回路シミュレーションと最適化", es: "Simulación y optimización de circuitos cuánticos con el framework PennyLane" },
      { en: "Gate-level quantum programming and noise-aware circuit design with Qiskit", ko: "Qiskit을 활용한 게이트 수준 양자 프로그래밍 및 노이즈 인식 회로 설계", ja: "Qiskitによるゲートレベル量子プログラミングとノイズ対応回路設計", es: "Programación cuántica a nivel de puerta y diseño de circuitos con Qiskit" },
    ],
  },
  {
    icon: "assets/icons/AI Semiconductors.png",
    title: { en: "AI Semiconductors", ko: "AI 반도체", ja: "AI半導体", es: "Semiconductores de IA" },
    description: {
      en: "Design and implementation of real-time AI systems on FPGA, AI accelerators, and neuromorphic computing architectures. Hardware-optimized voice risk detection systems.",
      ko: "AI 가속기, 뉴로모픽 컴퓨팅, FPGA 기반 실시간 AI 시스템 설계 및 구현. 음성 위험 감지 시스템 등 하드웨어 최적화.",
      ja: "AIアクセラレータ、ニューロモーフィック・コンピューティング、FPGA基盤のリアルタイムAIシステム設計と実装。音声リスク検知システムなどハードウェア最適化。",
      es: "Diseño e implementación de sistemas de IA en tiempo real en FPGA, aceleradores de IA y arquitecturas de computación neuromórfica. Sistemas de detección de riesgos por voz optimizados para hardware."
    },
    tags: ["FPGA", "AI Accelerator", "Neuromorphic", "CUDA"],
    directions: [
      { en: "Ultra-low latency neural network inference deployed on FPGA", ko: "FPGA에 배포된 초저지연 신경망 추론", ja: "FPGAにデプロイされた超低遅延ニューラルネットワーク推論", es: "Inferencia de redes neuronales de ultra baja latencia en FPGA" },
      { en: "Custom hardware architectures optimized for deep learning workloads", ko: "딥러닝 워크로드에 최적화된 맞춤형 하드웨어 아키텍처", ja: "ディープラーニングワークロード向け最適化カスタムハードウェア", es: "Arquitecturas de hardware personalizadas para cargas de aprendizaje profundo" },
      { en: "Brain-inspired spiking neural networks for energy-efficient AI", ko: "에너지 효율적 AI를 위한 뇌 모방 스파이킹 신경망", ja: "エネルギー効率的AIのための脳模倣スパイキングニューラルネットワーク", es: "Redes neuronales de impulsos inspiradas en el cerebro para IA eficiente" },
      { en: "GPU-accelerated parallel computing for large-scale model training", ko: "대규모 모델 훈련을 위한 GPU 가속 병렬 컴퓨팅", ja: "大規模モデル訓練のためのGPU加速並列コンピューティング", es: "Computación paralela acelerada por GPU para entrenamiento de modelos a gran escala" },
    ],
  },
  {
    icon: "assets/icons/Medical AI.png",
    title: { en: "Medical AI", ko: "의료 AI", ja: "医療AI", es: "IA médica" },
    description: {
      en: "AI applications in healthcare including pneumonia classification from chest X-rays, federated learning for medical imaging, and hybrid quantum-classical classification models with privacy preservation.",
      ko: "흉부 X-ray 폐렴 분류, 의료 영상 연합학습 등 의료 분야에서의 AI 활용. 양자 회로 기반 하이브리드 분류 모델, 프라이버시 보존 학습.",
      ja: "胸部X線肺炎分類、医療画像連合学習など医療分野でのAI活用。量子回路基盤のハイブリッド分類モデル、プライバシー保護学習。",
      es: "Aplicaciones de IA en salud, incluyendo clasificación de neumonía a partir de radiografías de tórax, aprendizaje federado para imágenes médicas y modelos de clasificación híbridos cuántico-clásicos con preservación de privacidad."
    },
    tags: ["Medical Imaging", "Chest X-ray", "Federated Learning", "Privacy"],
    directions: [
      { en: "Deep learning models for disease detection from CT, MRI, and pathology images", ko: "CT, MRI, 병리 영상에서 질병 탐지를 위한 딥러닝 모델", ja: "CT・MRI・病理画像からの疾患検出ディープラーニングモデル", es: "Modelos de aprendizaje profundo para detección de enfermedades en imágenes CT, MRI y patología" },
      { en: "Pneumonia classification and anomaly detection from chest radiographs", ko: "흉부 방사선 영상에서의 폐렴 분류 및 이상 탐지", ja: "胸部放射線画像からの肺炎分類と異常検出", es: "Clasificación de neumonía y detección de anomalías en radiografías de tórax" },
      { en: "Collaborative training across hospitals without sharing patient data", ko: "환자 데이터 공유 없이 병원 간 협력적 훈련", ja: "患者データ共有なしの病院間協調訓練", es: "Entrenamiento colaborativo entre hospitales sin compartir datos de pacientes" },
      { en: "Differential privacy and secure aggregation for sensitive medical data", ko: "민감한 의료 데이터를 위한 차등 프라이버시 및 보안 집계", ja: "機密医療データのための差分プライバシーとセキュアアグリゲーション", es: "Privacidad diferencial y agregación segura para datos médicos sensibles" },
    ],
  },
  {
    icon: "assets/icons/Netweork Security.png",
    title: { en: "Network / Communication Security", ko: "네트워크 / 통신 보안", ja: "ネットワーク / 通信セキュリティ", es: "Seguridad de red / comunicaciones" },
    description: {
      en: "Adversarial robustness analysis of Automatic Modulation Classification (AMC) in wireless communication. Quantum-secured communication systems for tactical military networks.",
      ko: "무선 통신에서의 자동 변조 분류(AMC) 적대적 강건성 분석, 군사 전술 네트워크를 위한 양자 보안 통신 시스템.",
      ja: "無線通信における自動変調分類(AMC)の敵対的頑健性分析、軍事戦術ネットワーク向け量子セキュア通信システム。",
      es: "Análisis de robustez adversarial de clasificación automática de modulación (AMC) en comunicación inalámbrica. Sistemas de comunicación con seguridad cuántica para redes tácticas militares."
    },
    tags: ["AMC", "Wireless Security", "Tactical Network", "Quantum Security"],
    directions: [
      { en: "Adversarial robustness analysis of automatic modulation classification", ko: "자동 변조 분류의 적대적 강건성 분석", ja: "自動変調分類の敵対的頑健性分析", es: "Análisis de robustez adversarial de clasificación automática de modulación" },
      { en: "Signal integrity and authentication against spoofing and jamming", ko: "스푸핑 및 재밍에 대한 신호 무결성 및 인증", ja: "スプーフィングとジャミングに対する信号完全性と認証", es: "Integridad de señal y autenticación contra suplantación y interferencia" },
      { en: "Quantum-secured protocols for military tactical communication networks", ko: "군사 전술 통신 네트워크를 위한 양자 보안 프로토콜", ja: "軍事戦術通信ネットワーク向け量子セキュアプロトコル", es: "Protocolos con seguridad cuántica para redes de comunicación tácticas militares" },
      { en: "Post-quantum cryptographic algorithms for network infrastructure", ko: "네트워크 인프라를 위한 포스트 양자 암호 알고리즘", ja: "ネットワークインフラ向けポスト量子暗号アルゴリズム", es: "Algoritmos criptográficos post-cuánticos para infraestructura de red" },
    ],
  },
  {
    icon: "assets/icons/Computer Vision.png",
    title: { en: "Computer Vision", ko: "컴퓨터 비전", ja: "コンピュータビジョン", es: "Visión por computadora" },
    description: {
      en: "Research on visual understanding including object detection, semantic/instance segmentation, 3D reconstruction, and generative models for image synthesis and style transfer.",
      ko: "객체 탐지, 시맨틱/인스턴스 분할, 3D 재구성, 이미지 생성 및 스타일 변환을 위한 생성 모델 등 시각적 이해 연구.",
      ja: "物体検出、セマンティック/インスタンスセグメンテーション、3D再構成、画像生成とスタイル変換のための生成モデルなど視覚的理解の研究。",
      es: "Investigación en comprensión visual incluyendo detección de objetos, segmentación semántica/de instancias, reconstrucción 3D y modelos generativos para síntesis de imágenes y transferencia de estilo."
    },
    tags: ["Object Detection", "Segmentation", "3D Vision", "Image Generation"],
    directions: [
      { en: "Real-time object detection and tracking in complex visual scenes", ko: "복잡한 시각적 장면에서의 실시간 객체 탐지 및 추적", ja: "複雑な視覚シーンにおけるリアルタイム物体検出と追跡", es: "Detección y seguimiento de objetos en tiempo real en escenas visuales complejas" },
      { en: "Pixel-level scene understanding via semantic and instance segmentation", ko: "시맨틱 및 인스턴스 분할을 통한 픽셀 수준의 장면 이해", ja: "セマンティック・インスタンスセグメンテーションによるピクセルレベルのシーン理解", es: "Comprensión de escenas a nivel de píxel mediante segmentación semántica y de instancias" },
      { en: "Depth estimation and 3D reconstruction from monocular and stereo imagery", ko: "단안 및 스테레오 영상으로부터의 깊이 추정 및 3D 재구성", ja: "単眼・ステレオ画像からの深度推定と3D再構成", es: "Estimación de profundidad y reconstrucción 3D a partir de imágenes monoculares y estéreo" },
      { en: "Generative adversarial networks and diffusion models for image synthesis", ko: "이미지 합성을 위한 생성적 적대 신경망 및 확산 모델", ja: "画像合成のための敵対的生成ネットワークと拡散モデル", es: "Redes generativas adversariales y modelos de difusión para síntesis de imágenes" },
    ],
  },
  {
    icon: "assets/icons/Robotics.png",
    title: { en: "Robotics", ko: "로보틱스", ja: "ロボティクス", es: "Robótica" },
    description: {
      en: "Research on intelligent robotic systems including motion planning, dexterous manipulation, sim-to-real transfer learning, and multi-agent coordination for collaborative tasks.",
      ko: "모션 플래닝, 정밀 조작, 시뮬레이션-현실 전이 학습, 협업 작업을 위한 멀티 에이전트 조정 등 지능형 로봇 시스템 연구.",
      ja: "モーションプランニング、器用な操作、シミュレーションから現実への転移学習、協調タスクのためのマルチエージェント調整など知能ロボットシステムの研究。",
      es: "Investigación en sistemas robóticos inteligentes incluyendo planificación de movimiento, manipulación diestra, transferencia de aprendizaje de simulación a realidad y coordinación multiagente para tareas colaborativas."
    },
    tags: ["Motion Planning", "Manipulation", "Sim-to-Real", "Multi-Agent"],
    directions: [
      { en: "Collision-free path planning and trajectory optimization in dynamic environments", ko: "동적 환경에서의 충돌 회피 경로 계획 및 궤적 최적화", ja: "動的環境における衝突回避経路計画と軌道最適化", es: "Planificación de trayectorias libres de colisiones y optimización en entornos dinámicos" },
      { en: "Contact-rich manipulation with force/torque feedback and tactile sensing", ko: "힘/토크 피드백 및 촉각 센싱을 활용한 접촉 기반 조작", ja: "力/トルクフィードバックと触覚センシングによる接触操作", es: "Manipulación con contacto mediante retroalimentación de fuerza/par y sensado táctil" },
      { en: "Bridging the reality gap through domain randomization and adaptation", ko: "도메인 랜덤화 및 적응을 통한 현실 격차 해소", ja: "ドメインランダム化と適応によるリアリティギャップの解消", es: "Reducción de la brecha de realidad mediante aleatorización y adaptación de dominio" },
      { en: "Decentralized coordination of multiple robots for cooperative task execution", ko: "협력적 작업 수행을 위한 다중 로봇의 분산 조정", ja: "協調タスク実行のための複数ロボットの分散制御", es: "Coordinación descentralizada de múltiples robots para ejecución cooperativa de tareas" },
    ],
  },
];
