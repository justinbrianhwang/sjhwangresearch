/* ============================================
   RESEARCH AREAS DATA
   {en: "English", ko: "한국어", ja: "日本語", es: "Español"} 형태로 다국어 지원
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
  },
];
