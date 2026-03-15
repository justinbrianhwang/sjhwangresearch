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
    detailDescription: {
      en: "This research area focuses on ensuring that AI systems remain reliable, robust, and secure under adversarial conditions. We investigate how deep neural networks can be fooled by carefully crafted perturbations (adversarial attacks) and develop defense mechanisms that detect or neutralize such threats. Our work also extends to federated learning environments, where we study poisoning attacks, gradient leakage, and secure aggregation protocols. Additionally, we analyze how software and hardware faults—such as bit-flips in memory—affect DNN predictions and propose post-hoc calibration techniques to restore model accuracy without retraining.",
      ko: "이 연구 분야는 적대적 환경에서 AI 시스템의 신뢰성, 강건성, 보안성을 확보하는 데 초점을 맞추고 있습니다. 정교하게 설계된 교란(적대적 공격)으로 딥 신경망이 어떻게 속을 수 있는지 조사하고, 이러한 위협을 탐지하거나 무력화하는 방어 메커니즘을 개발합니다. 또한 연합학습 환경에서의 포이즈닝 공격, 그래디언트 유출, 보안 집계 프로토콜을 연구합니다. 메모리 비트플립과 같은 소프트웨어/하드웨어 결함이 DNN 예측에 미치는 영향을 분석하고, 재학습 없이 모델 정확도를 복원하는 사후 캘리브레이션 기법을 제안합니다.",
      ja: "この研究分野は、敵対的環境下でAIシステムの信頼性、頑健性、安全性を確保することに焦点を当てています。精巧に設計された摂動（敵対的攻撃）によりディープニューラルネットワークがどのように騙されるかを調査し、そのような脅威を検出・無力化する防御メカニズムを開発します。連合学習環境でのポイズニング攻撃、勾配漏洩、セキュアアグリゲーションプロトコルも研究しています。メモリビットフリップなどのSW/HW障害がDNN予測に与える影響を分析し、再学習なしでモデル精度を復元する事後キャリブレーション技法を提案します。",
      es: "Esta área de investigación se centra en garantizar que los sistemas de IA permanezcan confiables, robustos y seguros bajo condiciones adversariales. Investigamos cómo las redes neuronales profundas pueden ser engañadas por perturbaciones cuidadosamente diseñadas y desarrollamos mecanismos de defensa que detectan o neutralizan tales amenazas. Nuestro trabajo se extiende a entornos de aprendizaje federado, donde estudiamos ataques de envenenamiento, fuga de gradientes y protocolos de agregación segura. También analizamos cómo las fallas de software y hardware afectan las predicciones de DNN y proponemos técnicas de calibración post-hoc para restaurar la precisión del modelo sin reentrenamiento."
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
    detailDescription: {
      en: "Our autonomous driving research combines federated learning and large language models to build safer, more intelligent self-driving systems. We explore how multiple vehicles can collaboratively train perception and decision-making models without sharing sensitive driving data, using both heterogeneous architectures (different model structures across vehicles) and homogeneous setups. A key focus is integrating vision-language models like OpenEMMA for real-time scene understanding and reasoning—enabling vehicles to interpret complex traffic situations through natural language. We use the CARLA simulator for safe, reproducible training and evaluation, including adversarial scenario generation to stress-test systems before real-world deployment.",
      ko: "자율주행 연구는 연합학습과 대규모 언어 모델을 결합하여 더 안전하고 지능적인 자율주행 시스템을 구축합니다. 민감한 주행 데이터를 공유하지 않으면서 여러 차량이 인지 및 의사결정 모델을 협력적으로 훈련하는 방법을 탐구합니다. 이기종 아키텍처(차량마다 다른 모델 구조)와 동종 설정 모두를 활용합니다. OpenEMMA와 같은 비전-언어 모델을 통합하여 실시간 장면 이해 및 추론을 수행하고, 차량이 자연어를 통해 복잡한 교통 상황을 해석할 수 있도록 합니다. CARLA 시뮬레이터를 사용하여 안전하고 재현 가능한 훈련 및 평가, 적대적 시나리오 생성을 통한 실세계 배포 전 스트레스 테스트를 수행합니다.",
      ja: "自動運転研究は、連合学習と大規模言語モデルを組み合わせて、より安全でインテリジェントな自動運転システムを構築します。機密性の高い走行データを共有せずに複数の車両が認知・意思決定モデルを協調的に訓練する方法を探求します。異種アーキテクチャと同種設定の両方を活用し、OpenEMMAなどのビジョン言語モデルを統合してリアルタイムのシーン理解と推論を行います。CARLAシミュレータを使用して安全で再現可能な訓練・評価、敵対的シナリオ生成による実世界展開前のストレステストを実施します。",
      es: "Nuestra investigación en conducción autónoma combina aprendizaje federado y modelos de lenguaje grande para construir sistemas de conducción autónoma más seguros e inteligentes. Exploramos cómo múltiples vehículos pueden entrenar colaborativamente modelos de percepción y toma de decisiones sin compartir datos sensibles, utilizando arquitecturas heterogéneas y configuraciones homogéneas. Integramos modelos de visión-lenguaje como OpenEMMA para comprensión de escenas en tiempo real. Usamos el simulador CARLA para entrenamiento y evaluación seguros y reproducibles, incluyendo generación de escenarios adversariales."
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
    detailDescription: {
      en: "This research explores the intersection of quantum computing and machine learning, focusing on variational quantum circuits (VQC) that can run on today's noisy intermediate-scale quantum (NISQ) processors. We design quantum-classical hybrid neural networks where parameterized quantum layers enhance classification tasks beyond classical limits. On the communication side, we implement the BB84 quantum key distribution protocol for unconditionally secure key exchange and build hybrid communication architectures that combine quantum channels with classical infrastructure. Our tools of choice include PennyLane for differentiable quantum programming and Qiskit for gate-level circuit design, noise simulation, and hardware execution on IBM quantum backends.",
      ko: "이 연구는 양자 컴퓨팅과 머신러닝의 교차점을 탐구하며, 현재의 노이즈가 있는 중규모 양자(NISQ) 프로세서에서 실행 가능한 변분 양자 회로(VQC)에 초점을 맞춥니다. 매개변수화된 양자 레이어가 고전적 한계를 넘어 분류 작업을 향상시키는 양자-고전 하이브리드 신경망을 설계합니다. 통신 측면에서는 BB84 양자 키 분배 프로토콜을 구현하여 무조건적으로 안전한 키 교환을 달성하고, 양자 채널과 고전적 인프라를 결합한 하이브리드 통신 아키텍처를 구축합니다. PennyLane과 Qiskit을 주요 도구로 활용합니다.",
      ja: "この研究は量子コンピューティングと機械学習の交差点を探求し、現在のノイズのある中規模量子（NISQ）プロセッサで実行可能な変分量子回路（VQC）に焦点を当てています。パラメータ化された量子レイヤーが古典的限界を超えて分類タスクを向上させる量子古典ハイブリッドニューラルネットワークを設計します。通信面ではBB84量子鍵配送プロトコルを実装し、量子チャネルと古典インフラを組み合わせたハイブリッド通信アーキテクチャを構築します。PennyLaneとQiskitを主要ツールとして活用します。",
      es: "Esta investigación explora la intersección de la computación cuántica y el aprendizaje automático, centrándose en circuitos cuánticos variacionales (VQC) ejecutables en procesadores NISQ actuales. Diseñamos redes neuronales híbridas cuántico-clásicas donde capas cuánticas parametrizadas mejoran las tareas de clasificación. En comunicaciones, implementamos el protocolo BB84 para intercambio de claves incondicionalmente seguro y construimos arquitecturas híbridas que combinan canales cuánticos con infraestructura clásica. Utilizamos PennyLane y Qiskit como herramientas principales."
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
    detailDescription: {
      en: "Our AI semiconductor research bridges the gap between deep learning algorithms and physical hardware implementation. We design custom accelerator architectures on FPGA platforms that achieve ultra-low latency inference for edge AI applications, including real-time voice risk detection systems. We explore neuromorphic computing—brain-inspired spiking neural networks that dramatically reduce power consumption compared to conventional GPUs. On the GPU side, we leverage CUDA for massively parallel model training and inference optimization, developing kernel-level techniques for memory-efficient computation. This work is critical for deploying AI in resource-constrained environments such as autonomous vehicles, IoT devices, and tactical military systems.",
      ko: "AI 반도체 연구는 딥러닝 알고리즘과 물리적 하드웨어 구현 사이의 격차를 해소합니다. FPGA 플랫폼에서 엣지 AI 애플리케이션을 위한 초저지연 추론을 달성하는 맞춤형 가속기 아키텍처를 설계하며, 실시간 음성 위험 감지 시스템을 포함합니다. 기존 GPU 대비 전력 소비를 획기적으로 줄이는 뇌 모방 스파이킹 신경망인 뉴로모픽 컴퓨팅을 탐구합니다. GPU 측면에서는 CUDA를 활용한 대규모 병렬 모델 훈련 및 추론 최적화, 메모리 효율적 연산을 위한 커널 수준 기법을 개발합니다. 이 연구는 자율주행 차량, IoT 기기, 전술 군사 시스템 등 자원 제약 환경에서 AI를 배포하는 데 핵심적입니다.",
      ja: "AI半導体研究は、ディープラーニングアルゴリズムと物理的ハードウェア実装のギャップを埋めます。FPGAプラットフォームでエッジAIアプリケーション向けの超低遅延推論を実現するカスタムアクセラレータアーキテクチャを設計します。従来のGPUと比較して消費電力を劇的に削減する脳模倣スパイキングニューラルネットワークであるニューロモーフィックコンピューティングを探求します。GPU側ではCUDAを活用した大規模並列モデル訓練と推論最適化、メモリ効率的な計算のためのカーネルレベル技法を開発します。",
      es: "Nuestra investigación en semiconductores de IA cierra la brecha entre algoritmos de aprendizaje profundo e implementación de hardware físico. Diseñamos arquitecturas de aceleradores personalizados en plataformas FPGA que logran inferencia de ultra baja latencia para aplicaciones de IA en el borde. Exploramos computación neuromórfica con redes neuronales de impulsos inspiradas en el cerebro. En el lado GPU, aprovechamos CUDA para entrenamiento masivamente paralelo y optimización de inferencia, desarrollando técnicas a nivel de kernel para computación eficiente en memoria."
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
    detailDescription: {
      en: "Medical AI research applies deep learning to critical healthcare challenges where early and accurate diagnosis can save lives. Our primary focus is pneumonia detection and classification from chest X-ray images using convolutional neural networks, achieving high sensitivity and specificity. We address the fundamental challenge of medical data privacy through federated learning, enabling multiple hospitals to collaboratively train diagnostic models without ever sharing patient records. We also explore quantum-classical hybrid architectures where variational quantum circuits augment classical feature extraction for improved classification accuracy. Differential privacy and secure aggregation protocols ensure that even gradient updates cannot leak sensitive patient information during collaborative training.",
      ko: "의료 AI 연구는 조기 및 정확한 진단이 생명을 구할 수 있는 중요한 의료 과제에 딥러닝을 적용합니다. 주요 초점은 합성곱 신경망을 사용한 흉부 X-ray 영상에서의 폐렴 탐지 및 분류이며, 높은 민감도와 특이도를 달성합니다. 연합학습을 통해 의료 데이터 프라이버시의 근본적 문제를 해결하여, 여러 병원이 환자 기록을 공유하지 않고도 진단 모델을 협력적으로 훈련할 수 있게 합니다. 변분 양자 회로가 고전적 특징 추출을 보강하는 양자-고전 하이브리드 아키텍처도 탐구합니다. 차등 프라이버시와 보안 집계 프로토콜은 협력적 훈련 중에도 그래디언트 업데이트에서 민감한 환자 정보가 유출되지 않도록 보장합니다.",
      ja: "医療AI研究は、早期かつ正確な診断が命を救える重要な医療課題にディープラーニングを適用します。主な焦点は畳み込みニューラルネットワークを使用した胸部X線画像からの肺炎検出と分類です。連合学習により医療データプライバシーの根本的課題に対処し、複数の病院が患者記録を共有せずに診断モデルを協調的に訓練できるようにします。変分量子回路が古典的特徴抽出を補強する量子古典ハイブリッドアーキテクチャも探求します。差分プライバシーとセキュアアグリゲーションにより、協調訓練中の患者情報漏洩を防止します。",
      es: "La investigación en IA médica aplica aprendizaje profundo a desafíos críticos de salud donde el diagnóstico temprano y preciso puede salvar vidas. Nuestro enfoque principal es la detección de neumonía a partir de radiografías de tórax. Abordamos la privacidad de datos médicos mediante aprendizaje federado, permitiendo que múltiples hospitales entrenen modelos colaborativamente sin compartir registros de pacientes. Exploramos arquitecturas híbridas cuántico-clásicas y aplicamos privacidad diferencial y agregación segura para proteger la información sensible durante el entrenamiento colaborativo."
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
    detailDescription: {
      en: "Network and communication security research addresses the growing threats to wireless and military communication systems in an era of AI-powered attacks. We analyze the adversarial robustness of Automatic Modulation Classification (AMC)—deep learning models that identify signal modulation types in real-time—and study how adversarial perturbations can cause misclassification of communication signals, with severe implications for spectrum management and electronic warfare. Our work extends to quantum-secured communication, implementing BB84-based quantum key distribution for tactical military networks where unconditional security is paramount. We also research post-quantum cryptographic algorithms designed to withstand future quantum computer attacks, ensuring long-term security for critical network infrastructure.",
      ko: "네트워크 및 통신 보안 연구는 AI 기반 공격 시대에 무선 및 군사 통신 시스템에 대한 증가하는 위협을 다룹니다. 실시간으로 신호 변조 유형을 식별하는 딥러닝 모델인 자동 변조 분류(AMC)의 적대적 강건성을 분석하고, 적대적 교란이 통신 신호의 오분류를 유발할 수 있는 방법을 연구합니다. BB84 기반 양자 키 분배를 통한 전술 군사 네트워크의 양자 보안 통신을 구현하며, 미래 양자 컴퓨터 공격에 대비한 포스트 양자 암호 알고리즘도 연구하여 핵심 네트워크 인프라의 장기적 보안을 보장합니다.",
      ja: "ネットワーク・通信セキュリティ研究は、AI駆動の攻撃時代における無線・軍事通信システムへの脅威に対処します。リアルタイムで信号変調タイプを識別するディープラーニングモデルである自動変調分類（AMC）の敵対的頑健性を分析し、敵対的摂動が通信信号の誤分類を引き起こす方法を研究します。BB84ベースの量子鍵配送による戦術軍事ネットワークの量子セキュア通信を実装し、ポスト量子暗号アルゴリズムの研究も行います。",
      es: "La investigación en seguridad de redes y comunicaciones aborda las crecientes amenazas a los sistemas de comunicación inalámbricos y militares. Analizamos la robustez adversarial de la Clasificación Automática de Modulación (AMC) y estudiamos cómo las perturbaciones adversariales pueden causar clasificación errónea de señales. Implementamos distribución de claves cuánticas basada en BB84 para redes tácticas militares e investigamos algoritmos criptográficos post-cuánticos para garantizar la seguridad a largo plazo de infraestructuras de red críticas."
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
    detailDescription: {
      en: "Computer vision research aims to enable machines to understand and interpret visual information at human-level or beyond. We develop real-time object detection and tracking systems capable of handling complex, cluttered scenes with occlusions and varying lighting conditions. Our semantic and instance segmentation work achieves pixel-level scene understanding, essential for applications ranging from autonomous driving to medical image analysis. We explore monocular and stereo depth estimation for 3D scene reconstruction, bridging the gap between 2D images and spatial understanding. On the generative side, we research GANs and diffusion models for high-fidelity image synthesis, style transfer, and data augmentation—techniques that also support other research areas like medical imaging where training data is scarce.",
      ko: "컴퓨터 비전 연구는 기계가 인간 수준 또는 그 이상으로 시각 정보를 이해하고 해석할 수 있도록 하는 것을 목표로 합니다. 가려짐과 다양한 조명 조건이 있는 복잡한 장면을 처리할 수 있는 실시간 객체 탐지 및 추적 시스템을 개발합니다. 시맨틱 및 인스턴스 분할 연구는 자율주행부터 의료 영상 분석에 이르는 응용에 필수적인 픽셀 수준의 장면 이해를 달성합니다. 단안 및 스테레오 깊이 추정을 통한 3D 장면 재구성을 탐구하며, GAN과 확산 모델을 활용한 고충실도 이미지 합성, 스타일 변환, 데이터 증강 기법을 연구합니다.",
      ja: "コンピュータビジョン研究は、機械が人間レベル以上で視覚情報を理解・解釈できるようにすることを目指します。遮蔽や照明変化のある複雑なシーンを処理できるリアルタイム物体検出・追跡システムを開発します。セマンティック・インスタンスセグメンテーションでピクセルレベルのシーン理解を達成し、単眼・ステレオ深度推定による3Dシーン再構成を探求します。GANと拡散モデルによる高忠実度画像合成、スタイル変換、データ拡張技法も研究しています。",
      es: "La investigación en visión por computadora busca que las máquinas comprendan e interpreten información visual a nivel humano o superior. Desarrollamos sistemas de detección y seguimiento de objetos en tiempo real para escenas complejas. Nuestro trabajo en segmentación semántica y de instancias logra comprensión de escenas a nivel de píxel. Exploramos estimación de profundidad monocular y estéreo para reconstrucción 3D, e investigamos GANs y modelos de difusión para síntesis de imágenes de alta fidelidad, transferencia de estilo y aumento de datos."
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
    detailDescription: {
      en: "Robotics research focuses on creating intelligent systems that can perceive, reason, and act in the physical world. We develop collision-free motion planning algorithms and trajectory optimization methods for robots operating in dynamic, unpredictable environments. Our manipulation research explores contact-rich tasks with force/torque feedback and tactile sensing, enabling robots to handle delicate objects with human-like dexterity. A key challenge we address is the sim-to-real gap—training policies in simulation and transferring them to physical robots through domain randomization and adaptation techniques. We also investigate multi-agent coordination, where teams of robots communicate and collaborate to execute complex tasks more efficiently than any single agent could alone.",
      ko: "로보틱스 연구는 물리적 세계에서 인지하고, 추론하고, 행동할 수 있는 지능형 시스템을 만드는 데 초점을 맞춥니다. 동적이고 예측 불가능한 환경에서 작동하는 로봇을 위한 충돌 회피 모션 플래닝 알고리즘과 궤적 최적화 방법을 개발합니다. 힘/토크 피드백과 촉각 센싱을 활용한 접촉 기반 작업을 탐구하여, 로봇이 인간과 같은 정밀함으로 섬세한 물체를 다룰 수 있게 합니다. 도메인 랜덤화와 적응 기법을 통해 시뮬레이션에서 훈련한 정책을 물리적 로봇으로 전이하는 시뮬레이션-현실 격차 문제를 해결합니다. 복잡한 작업을 효율적으로 수행하기 위한 다중 로봇 협업 조정도 연구합니다.",
      ja: "ロボティクス研究は、物理世界で認知・推論・行動できるインテリジェントシステムの構築に焦点を当てます。動的で予測不可能な環境で動作するロボットのための衝突回避モーションプランニングと軌道最適化を開発します。力/トルクフィードバックと触覚センシングによる接触操作を探求し、ドメインランダム化と適応技術によるシミュレーションから現実への転移、複数ロボットの協調制御も研究しています。",
      es: "La investigación en robótica se centra en crear sistemas inteligentes que puedan percibir, razonar y actuar en el mundo físico. Desarrollamos algoritmos de planificación de movimiento libres de colisiones y métodos de optimización de trayectorias. Exploramos tareas de manipulación con retroalimentación de fuerza/par y sensado táctil. Abordamos la brecha sim-to-real mediante aleatorización de dominio y técnicas de adaptación, e investigamos coordinación multiagente para ejecución colaborativa de tareas complejas."
    },
    tags: ["Motion Planning", "Manipulation", "Sim-to-Real", "Multi-Agent"],
    directions: [
      { en: "Collision-free path planning and trajectory optimization in dynamic environments", ko: "동적 환경에서의 충돌 회피 경로 계획 및 궤적 최적화", ja: "動的環境における衝突回避経路計画と軌道最適化", es: "Planificación de trayectorias libres de colisiones y optimización en entornos dinámicos" },
      { en: "Contact-rich manipulation with force/torque feedback and tactile sensing", ko: "힘/토크 피드백 및 촉각 센싱을 활용한 접촉 기반 조작", ja: "力/トルクフィードバックと触覚センシングによる接触操作", es: "Manipulación con contacto mediante retroalimentación de fuerza/par y sensado táctil" },
      { en: "Bridging the reality gap through domain randomization and adaptation", ko: "도메인 랜덤화 및 적응을 통한 현실 격차 해소", ja: "ドメインランダム化と適応によるリアリティギャップの解消", es: "Reducción de la brecha de realidad mediante aleatorización y adaptación de dominio" },
      { en: "Decentralized coordination of multiple robots for cooperative task execution", ko: "협력적 작업 수행을 위한 다중 로봇의 분산 조정", ja: "協調タスク実行のための複数ロボットの分散制御", es: "Coordinación descentralizada de múltiples robots para ejecución cooperativa de tareas" },
    ],
  },
  {
    icon: "assets/icons/LLM.png",
    title: { en: "Large Language Models", ko: "대규모 언어 모델", ja: "大規模言語モデル", es: "Modelos de lenguaje grande" },
    description: {
      en: "Research on large language model capabilities including prompt engineering, fine-tuning, retrieval-augmented generation (RAG), multi-modal LLMs, and alignment for safe and reliable AI systems.",
      ko: "프롬프트 엔지니어링, 파인튜닝, 검색 증강 생성(RAG), 멀티모달 LLM, 안전하고 신뢰할 수 있는 AI 시스템을 위한 정렬 등 대규모 언어 모델 역량 연구.",
      ja: "プロンプトエンジニアリング、ファインチューニング、検索拡張生成(RAG)、マルチモーダルLLM、安全で信頼性の高いAIシステムのためのアラインメントなど大規模言語モデルの研究。",
      es: "Investigación sobre capacidades de modelos de lenguaje grande, incluyendo ingeniería de prompts, ajuste fino, generación aumentada por recuperación (RAG), LLMs multimodales y alineación para sistemas de IA seguros y confiables."
    },
    detailDescription: {
      en: "Large language model research investigates the full lifecycle of LLM-powered systems—from prompt design to deployment and alignment. We study chain-of-thought prompting, few-shot learning, and structured output strategies that unlock complex reasoning capabilities without additional training. For domain adaptation, we apply parameter-efficient fine-tuning methods such as LoRA and QLoRA that achieve competitive performance while dramatically reducing computational costs. Our RAG research combines retrieval systems with generative models to produce knowledge-grounded responses that stay current and reduce hallucinations. We also explore multi-modal LLMs that integrate vision and language understanding, enabling applications like visual question answering and image-conditioned text generation. Alignment and safety remain central concerns, ensuring these powerful models behave reliably and ethically in real-world applications.",
      ko: "대규모 언어 모델 연구는 프롬프트 설계부터 배포 및 정렬에 이르는 LLM 기반 시스템의 전체 생명주기를 탐구합니다. 추가 훈련 없이 복잡한 추론 능력을 이끌어내는 사고 연쇄 프롬프팅, 퓨샷 학습, 구조화된 출력 전략을 연구합니다. 도메인 적응을 위해 LoRA, QLoRA 등 매개변수 효율적 파인튜닝 방법을 적용하여 계산 비용을 크게 줄이면서도 경쟁력 있는 성능을 달성합니다. RAG 연구는 검색 시스템과 생성 모델을 결합하여 지식 기반의 최신 응답을 생성하고 환각을 줄입니다. 비전과 언어 이해를 통합하는 멀티모달 LLM도 탐구하며, 정렬과 안전성을 통해 강력한 모델이 실제 응용에서 신뢰성 있고 윤리적으로 동작하도록 보장합니다.",
      ja: "大規模言語モデル研究は、プロンプト設計からデプロイ、アラインメントまでLLMシステムの全ライフサイクルを探求します。思考連鎖プロンプティング、フューショット学習、構造化出力戦略を研究します。LoRA・QLoRAなどのパラメータ効率的ファインチューニングでコストを削減しつつ高性能を達成します。RAG研究は検索システムと生成モデルを組み合わせ、知識に基づいた最新の応答を生成します。ビジョンと言語理解を統合するマルチモーダルLLMも探求し、アラインメントと安全性を中核に据えています。",
      es: "La investigación en modelos de lenguaje grande investiga el ciclo de vida completo de sistemas basados en LLM. Estudiamos prompting de cadena de pensamiento, aprendizaje de pocos ejemplos y estrategias de salida estructurada. Aplicamos métodos de ajuste fino eficientes en parámetros como LoRA y QLoRA. Nuestra investigación en RAG combina sistemas de recuperación con modelos generativos para producir respuestas fundamentadas. Exploramos LLMs multimodales que integran comprensión visual y lingüística, y mantenemos la alineación y seguridad como preocupaciones centrales."
    },
    tags: ["Prompt Engineering", "Fine-tuning", "RAG", "Multi-modal"],
    directions: [
      { en: "Designing effective prompts and chain-of-thought strategies for complex reasoning", ko: "복잡한 추론을 위한 효과적인 프롬프트 및 사고 연쇄 전략 설계", ja: "複雑な推論のための効果的なプロンプトと思考連鎖戦略の設計", es: "Diseño de prompts efectivos y estrategias de cadena de pensamiento para razonamiento complejo" },
      { en: "Domain-specific fine-tuning and parameter-efficient adaptation (LoRA, QLoRA)", ko: "도메인 특화 파인튜닝 및 매개변수 효율적 적응(LoRA, QLoRA)", ja: "ドメイン特化ファインチューニングとパラメータ効率的適応(LoRA、QLoRA)", es: "Ajuste fino específico de dominio y adaptación eficiente de parámetros (LoRA, QLoRA)" },
      { en: "Retrieval-augmented generation for knowledge-grounded and up-to-date responses", ko: "지식 기반의 최신 응답을 위한 검색 증강 생성", ja: "知識に基づいた最新の応答のための検索拡張生成", es: "Generación aumentada por recuperación para respuestas fundamentadas y actualizadas" },
      { en: "Vision-language models integrating visual and textual understanding", ko: "시각적, 텍스트적 이해를 통합하는 비전-언어 모델", ja: "視覚的・テキスト的理解を統合するビジョン-言語モデル", es: "Modelos de visión-lenguaje que integran comprensión visual y textual" },
    ],
  },
];
