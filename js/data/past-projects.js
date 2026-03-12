/* ============================================
   PAST PROJECTS DATA
   완료된 연구 프로젝트
   ============================================ */

const PAST_PROJECTS = [
  {
    title: { en: "Electricity Usage Prediction Based on Weather & Consumption Data", ko: "기상 데이터 및 전기 사용량 기반 전력 수요 예측", ja: "気象データおよび電力使用量に基づく電力需要予測", es: "Predicción de uso de electricidad basada en datos meteorológicos y de consumo" },
    description: {
      en: "Predicting electricity consumption by integrating weather data and historical usage patterns using machine learning models.",
      ko: "기상 데이터와 과거 전기 사용량 패턴을 결합하여 머신러닝 모델로 전력 수요를 예측하는 연구.",
      ja: "気象データと過去の電力使用パターンを組み合わせて機械学習モデルで電力需要を予測する研究。",
      es: "Predicción del consumo de electricidad integrando datos meteorológicos y patrones de uso histórico mediante modelos de aprendizaje automático."
    },
    year: "2024",
    outcome: { en: "Completed", ko: "완료", ja: "完了", es: "Completado" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/Korea it academi.png"],
    tags: ["Time Series", "Prediction", "Weather Data", "Energy"],
  },
  {
    title: { en: "OCR + LLM-Based Medical Document Automation", ko: "OCR 및 LLM 기반 의료 문서 자동화", ja: "OCRおよびLLMによる医療文書自動化", es: "Automatización de documentos médicos basada en OCR + LLM" },
    description: {
      en: "Automated processing and structuring of medical documents by combining OCR text extraction with LLM-based understanding and summarization.",
      ko: "OCR 텍스트 추출과 LLM 기반 이해 및 요약을 결합하여 의료 문서를 자동으로 처리하고 구조화하는 연구.",
      ja: "OCRテキスト抽出とLLMによる理解・要約を組み合わせて医療文書を自動処理・構造化する研究。",
      es: "Procesamiento automatizado y estructuración de documentos médicos combinando extracción de texto OCR con comprensión y resumen basados en LLM."
    },
    year: "2024",
    outcome: { en: "Completed", ko: "완료", ja: "完了", es: "Completado" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/RAISE LAB_current research.png", "assets/logos/dhsoft logo Project.png", "assets/logos/yonsei logo.png"],
    tags: ["OCR", "LLM", "Medical Document", "NLP"],
  },
  {
    title: { en: "Voice Data-Based Risk Situation Prediction", ko: "음성 데이터 기반 위험 상황 예측", ja: "音声データによる危険状況予測", es: "Predicción de situaciones de riesgo basada en datos de voz" },
    description: {
      en: "Detecting and predicting risk situations from voice data using audio feature extraction and deep learning classification. Follow-up research led to FPGA-based implementation (KCS 2026).",
      ko: "음성 데이터에서 오디오 특징을 추출하고 딥러닝 분류를 통해 위험 상황을 탐지 및 예측하는 연구. 후속 연구로 FPGA 기반 구현(KCS 2026 채택)으로 이어짐.",
      ja: "音声データから特徴を抽出しディープラーニング分類で危険状況を検知・予測する研究。後続研究でFPGA実装（KCS 2026採択）に発展。",
      es: "Detección y predicción de situaciones de riesgo a partir de datos de voz utilizando extracción de características de audio y clasificación por aprendizaje profundo. La investigación de seguimiento llevó a una implementación basada en FPGA (KCS 2026)."
    },
    year: "2024",
    outcome: { en: "Completed → Follow-up accepted at KCS 2026", ko: "완료 → 후속 연구 KCS 2026 채택", ja: "完了 → 後続研究KCS 2026採択", es: "Completado → Seguimiento aceptado en KCS 2026" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Voice Analysis", "Risk Detection", "Audio Classification"],
  },
  {
    title: { en: "LLM-Based Search Query Optimization for User Convenience", ko: "사용자 편의를 위한 LLM 기반 검색어 최적화", ja: "ユーザー利便性のためのLLM検索クエリ最適化", es: "Optimización de consultas de búsqueda basada en LLM para comodidad del usuario" },
    description: {
      en: "Optimizing search queries using LLMs to improve search accuracy and user experience through intent understanding and query reformulation.",
      ko: "LLM을 활용하여 사용자 의도를 파악하고 검색어를 재구성함으로써 검색 정확도와 사용자 경험을 향상시키는 연구.",
      ja: "LLMを活用してユーザー意図を把握し検索クエリを再構成することで検索精度とUXを向上させる研究。",
      es: "Optimización de consultas de búsqueda usando LLM para mejorar la precisión de búsqueda y la experiencia del usuario mediante comprensión de intención y reformulación de consultas."
    },
    year: "2024",
    outcome: { en: "Completed", ko: "완료", ja: "完了", es: "Completado" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["LLM", "Search Optimization", "NLP", "UX"],
  },
  {
    title: { en: "Optimal AI Model for Side-Channel Attack Detection", ko: "부채널 공격 탐지에 최적화된 AI 모델 연구", ja: "サイドチャネル攻撃検知に最適なAIモデル研究", es: "Modelo de IA óptimo para detección de ataques de canal lateral" },
    description: {
      en: "Comparative analysis of AI models to identify the most effective architecture for detecting side-channel attacks in hardware systems.",
      ko: "하드웨어 시스템에서 부채널 공격을 탐지하기 위한 최적의 AI 모델 아키텍처를 비교 분석하는 연구.",
      ja: "ハードウェアシステムにおけるサイドチャネル攻撃を検知するための最適なAIモデルアーキテクチャの比較分析研究。",
      es: "Análisis comparativo de modelos de IA para identificar la arquitectura más efectiva para detectar ataques de canal lateral en sistemas de hardware."
    },
    year: "2025",
    outcome: { en: "Completed", ko: "완료", ja: "完了", es: "Completado" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Side-Channel Attack", "Security", "Model Comparison", "Hardware"],
  },
  {
    title: { en: "Mathematical Analysis of Quantum GNN", ko: "양자 GNN 수학적 분석", ja: "量子GNNの数学的分析", es: "Análisis matemático de GNN cuánticas" },
    description: {
      en: "Theoretical and mathematical analysis of Quantum Graph Neural Networks, investigating expressiveness, convergence properties, and computational advantages.",
      ko: "양자 그래프 신경망(Quantum GNN)의 표현력, 수렴 특성, 계산적 이점에 대한 이론적·수학적 분석 연구.",
      ja: "量子グラフニューラルネットワークの表現力、収束特性、計算的利点に関する理論的・数学的分析研究。",
      es: "Análisis teórico y matemático de redes neuronales de grafos cuánticos, investigando expresividad, propiedades de convergencia y ventajas computacionales."
    },
    year: "2025",
    outcome: { en: "Completed", ko: "완료", ja: "完了", es: "Completado" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Quantum", "GNN", "Mathematical Analysis", "Theory"],
  },
  {
    title: { en: "ViT Adversarial Robustness & Multi-Attack Study", ko: "ViT 적대적 강건성 및 다중 공격 연구", ja: "ViT敵対的頑健性＆多重攻撃研究", es: "Robustez adversarial de ViT y estudio de ataques múltiples" },
    description: {
      en: "Robustness enhancement and multi-adversarial attack analysis on Vision Transformer-based image classification models.",
      ko: "Vision Transformer 기반 이미지 분류 모델에 대한 강건성 향상 및 다중 적대적 공격 분석 연구.",
      ja: "Vision Transformer基盤の画像分類モデルに対する頑健性向上と多重敵対的攻撃分析の研究。",
      es: "Mejora de robustez y análisis de ataques adversariales múltiples en modelos de clasificación de imágenes basados en Vision Transformer."
    },
    year: "2025",
    outcome: { en: "Published at KIIT Conference 2025", ko: "KIIT Conference 2025 발표", ja: "KIIT Conference 2025発表", es: "Publicado en KIIT Conference 2025" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Adversarial Attack", "ViT", "Robustness"],
  },
  {
    title: { en: "Seismic Signal Denoising with Deep Learning", ko: "딥러닝 기반 지진 신호 디노이징", ja: "ディープラーニングによる地震信号ノイズ除去", es: "Eliminación de ruido en señales sísmicas con aprendizaje profundo" },
    description: {
      en: "Performance comparison of 8 deep learning models for seismic signal denoising tasks.",
      ko: "지진 신호 디노이징을 위한 8개 딥러닝 모델 성능 비교 연구.",
      ja: "地震信号ノイズ除去のための8つのディープラーニングモデル性能比較研究。",
      es: "Comparación de rendimiento de 8 modelos de aprendizaje profundo para tareas de eliminación de ruido en señales sísmicas."
    },
    year: "2025",
    outcome: { en: "Published at KIIT Conference 2025", ko: "KIIT Conference 2025 발표", ja: "KIIT Conference 2025発表", es: "Publicado en KIIT Conference 2025" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Signal Processing", "Deep Learning", "Denoising"],
  },
  {
    title: { en: "Quantum Hybrid Pneumonia Classification", ko: "양자 하이브리드 폐렴 분류", ja: "量子ハイブリッド肺炎分類", es: "Clasificación híbrida cuántica de neumonía" },
    description: {
      en: "Classification of pneumonia in chest X-rays using a hybrid neural network based on a 3-qubit quantum circuit.",
      ko: "3-Qubit 양자 회로 기반 하이브리드 신경망을 활용한 흉부 X-ray 폐렴 분류.",
      ja: "3-Qubit量子回路基盤のハイブリッドニューラルネットワークを活用した胸部X線肺炎分類。",
      es: "Clasificación de neumonía en radiografías de tórax utilizando una red neuronal híbrida basada en un circuito cuántico de 3 qubits."
    },
    year: "2025",
    outcome: { en: "Published at KSII Conference 2025", ko: "KSII Conference 2025 발표", ja: "KSII Conference 2025発表", es: "Publicado en KSII Conference 2025" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Quantum ML", "Medical AI", "Hybrid Network"],
  },
  {
    title: { en: "Post-hoc Defense in Federated Learning", ko: "연합학습 Post-hoc Defense 연구", ja: "連合学習におけるPost-hoc Defense研究", es: "Defensa post-hoc en aprendizaje federado" },
    description: {
      en: "Empirical study of post-hoc defense with knowledge distillation against FGSM and PGD attacks in federated learning.",
      ko: "연합학습 환경에서 FGSM/PGD 공격에 대한 Knowledge Distillation 기반 Post-hoc Defense 실증 연구.",
      ja: "連合学習環境でのFGSM/PGD攻撃に対するKnowledge Distillation基盤Post-hoc Defense実証研究。",
      es: "Estudio empírico de defensa post-hoc con destilación de conocimiento contra ataques FGSM y PGD en aprendizaje federado."
    },
    year: "2025",
    outcome: { en: "Published at KICS Conference 2025", ko: "KICS Conference 2025 발표", ja: "KICS Conference 2025発表", es: "Publicado en KICS Conference 2025" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Federated Learning", "Adversarial Defense", "Knowledge Distillation"],
  },
  {
    title: { en: "FL Medical Imaging with Logit-based KD", ko: "Logit 기반 KD 의료 영상 연합학습", ja: "Logit基盤KD医療画像連合学習", es: "Imagen médica FL con KD basada en logit" },
    description: {
      en: "Logit-based knowledge distillation for heterogeneous medical image federated learning.",
      ko: "이기종 의료 영상 연합학습을 위한 Logit 기반 Knowledge Distillation 연구.",
      ja: "異種医療画像連合学習のためのLogit基盤Knowledge Distillation研究。",
      es: "Destilación de conocimiento basada en logit para aprendizaje federado heterogéneo de imágenes médicas."
    },
    year: "2025",
    outcome: { en: "Published at KIIT Conference 2025, Outstanding Paper Award", ko: "KIIT Conference 2025 발표, 우수논문상 수상", ja: "KIIT Conference 2025発表、優秀論文賞受賞", es: "Publicado en KIIT Conference 2025, Premio de artículo destacado" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Federated Learning", "Medical AI", "Knowledge Distillation"],
  },
  {
    title: { en: "BB84 Quantum-Secured Communication System", ko: "BB84 양자 보안 통신 시스템", ja: "BB84量子セキュア通信システム", es: "Sistema de comunicación con seguridad cuántica BB84" },
    description: {
      en: "Quantum-secured hybrid communication system for tactical military networks using BB84 protocol implemented with PennyLane.",
      ko: "PennyLane 기반 BB84 프로토콜을 활용한 군사 전술 네트워크용 양자 보안 하이브리드 통신 시스템.",
      ja: "PennyLane基盤BB84プロトコルを活用した軍事戦術ネットワーク向け量子セキュア・ハイブリッド通信システム。",
      es: "Sistema de comunicación híbrido con seguridad cuántica para redes tácticas militares utilizando el protocolo BB84 implementado con PennyLane."
    },
    year: "2025",
    outcome: { en: "Published in JKICS 2026 (Journal)", ko: "JKICS 2026 저널 게재", ja: "JKICS 2026ジャーナル掲載", es: "Publicado en JKICS 2026 (Revista)" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Quantum", "BB84", "Military Network", "PennyLane"],
  },
  {
    title: { en: "Quantum Noise-based Attack on Diffusion Models", ko: "양자 노이즈 기반 Diffusion Model 공격", ja: "量子ノイズによるDiffusion Model攻撃", es: "Ataque basado en ruido cuántico a modelos de difusión" },
    description: {
      en: "Quantum noise-based adversarial attack on diffusion models and analysis of defense mechanisms.",
      ko: "Diffusion Model에 대한 양자 노이즈 기반 적대적 공격 및 방어 메커니즘 분석.",
      ja: "Diffusion Modelに対する量子ノイズ基盤の敵対的攻撃と防御メカニズムの分析。",
      es: "Ataque adversarial basado en ruido cuántico a modelos de difusión y análisis de mecanismos de defensa."
    },
    year: "2025",
    outcome: { en: "Published in KIIT-JICS 2026", ko: "KIIT-JICS 2026 게재", ja: "KIIT-JICS 2026掲載", es: "Publicado en KIIT-JICS 2026" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Quantum", "Adversarial Attack", "Diffusion Model"],
  },
  {
    title: { en: "Adversarial Robustness in Wireless AMC", ko: "무선 통신 AMC 적대적 강건성 분석", ja: "無線通信AMC敵対的頑健性分析", es: "Robustez adversarial en AMC inalámbrica" },
    description: {
      en: "Adversarial robustness analysis of deep learning-based automatic modulation classification in wireless communication.",
      ko: "무선 통신에서 딥러닝 기반 자동 변조 분류(AMC)의 적대적 강건성 분석.",
      ja: "無線通信におけるディープラーニング基盤自動変調分類(AMC)の敵対的頑健性分析。",
      es: "Análisis de robustez adversarial de clasificación automática de modulación basada en aprendizaje profundo en comunicación inalámbrica."
    },
    year: "2025",
    outcome: { en: "Accepted at IEEE ICAIIC 2026", ko: "IEEE ICAIIC 2026 채택", ja: "IEEE ICAIIC 2026採択", es: "Aceptado en IEEE ICAIIC 2026" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png", "assets/logos/Permillion Logos.png"],
    tags: ["Wireless", "AMC", "Adversarial Attack", "IEEE"],
  },
  {
    title: { en: "FPGA-Based Voice Risk Detection System", ko: "FPGA 기반 음성 위험 감지 시스템", ja: "FPGA基盤音声リスク検知システム", es: "Sistema de detección de riesgos por voz basado en FPGA" },
    description: {
      en: "Design and implementation of an FPGA-based real-time voice risk detection system.",
      ko: "FPGA 기반 실시간 음성 위험 감지 시스템 설계 및 구현.",
      ja: "FPGAベースのリアルタイム音声リスク検知システムの設計と実装。",
      es: "Diseño e implementación de un sistema de detección de riesgos por voz en tiempo real basado en FPGA."
    },
    year: "2025",
    outcome: { en: "Accepted at KCS 2026", ko: "KCS 2026 채택", ja: "KCS 2026採択", es: "Aceptado en KCS 2026" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["FPGA", "Voice Detection", "Hardware"],
  },
  {
    title: { en: "DNN Fault Recovery via Logit Calibration", ko: "Logit 캘리브레이션 기반 DNN 오류 복구", ja: "Logitキャリブレーションによるdnn障害回復", es: "Recuperación de fallos DNN mediante calibración logit" },
    description: {
      en: "Functional recovery of deep neural networks via logit-based external calibration after software fault injection.",
      ko: "소프트웨어 오류 주입 후 Logit 기반 외부 캘리브레이션을 통한 DNN 기능 복구.",
      ja: "ソフトウェア障害注入後のLogit基盤外部キャリブレーションによるDNN機能回復。",
      es: "Recuperación funcional de redes neuronales profundas mediante calibración externa basada en logit después de inyección de fallos de software."
    },
    year: "2025",
    outcome: { en: "Accepted at KICS 2026", ko: "KICS 2026 채택", ja: "KICS 2026採択", es: "Aceptado en KICS 2026" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png"],
    tags: ["Fault Injection", "DNN Recovery", "Calibration"],
  },
  {
    title: { en: "AI-Based Aquaponics Monitoring & Growth Prediction", ko: "AI 기반 아쿠아포닉스 모니터링 및 생장 예측", ja: "AI基盤アクアポニクス監視＆成長予測", es: "Monitoreo de acuaponía basado en IA y predicción de crecimiento" },
    description: {
      en: "Camera-based plant growth prediction and real-time AI monitoring of pH, temperature, and other environmental factors in aquaponics systems, with automated adjustment upon anomaly detection. Collaborated with COREX.",
      ko: "아쿠아포닉스 시스템에서 카메라 기반 식물 생장 예측 및 pH, 온도 등 환경 요소의 실시간 AI 모니터링을 통해 이상 발생 시 자동 조절하는 기술 시스템 개발. COREX와 공동 수행.",
      ja: "アクアポニクスシステムにおけるカメラ基盤の植物成長予測およびpH・温度等の環境要素のリアルタイムAI監視。異常検知時の自動調整。COREXと共同実施。",
      es: "Predicción de crecimiento de plantas basada en cámara y monitoreo de IA en tiempo real de pH, temperatura y otros factores ambientales en sistemas de acuaponía, con ajuste automatizado ante detección de anomalías. Colaboración con COREX."
    },
    year: "2025",
    outcome: { en: "Completed (with COREX)", ko: "완료 (COREX 협업)", ja: "完了（COREX協業）", es: "Completado (con COREX)" },
    teamLogos: ["assets/logos/sjjb logos.png", "assets/logos/yonsei logo.png", "assets/logos/Corex logo.png"],
    tags: ["Aquaponics", "Computer Vision", "IoT", "Real-time Monitoring"],
  },
];
