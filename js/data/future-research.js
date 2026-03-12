/* ============================================
   FUTURE RESEARCH / OPEN PROBLEMS DATA
   {en: "English", ko: "한국어"} 형태로 다국어 지원
   priority: "high" | "medium" | "low"
   ============================================ */

const FUTURE_RESEARCH = [
  {
    icon: "assets/icons/Practical Quantum Machine Learning.png",
    title: { en: "Practical Quantum Machine Learning", ko: "양자 머신러닝 실용화", ja: "量子機械学習の実用化", es: "Aprendizaje automático cuántico práctico" },
    description: {
      en: "Overcoming VQC performance limits on NISQ devices, researching hybrid algorithms that can achieve quantum advantage on real-world problems.",
      ko: "NISQ 디바이스에서의 VQC 성능 한계를 극복하고, 실제 문제에 양자 우위를 달성할 수 있는 하이브리드 알고리즘 연구.",
      ja: "NISQデバイスでのVQC性能限界を克服し、実際の問題に量子優位を達成できるハイブリッドアルゴリズムの研究。",
      es: "Superar los límites de rendimiento de VQC en dispositivos NISQ, investigando algoritmos híbridos que puedan lograr ventaja cuántica en problemas del mundo real."
    },
    priority: "high",
    openQuestions: [
      { en: "Can quantum noise be exploited to benefit learning?", ko: "양자 노이즈를 학습에 유리하게 활용할 수 있는가?", ja: "量子ノイズを学習に有利に活用できるか？", es: "¿Se puede explotar el ruido cuántico para beneficiar el aprendizaje?" },
      { en: "In which problem domains is quantum advantage achievable?", ko: "어떤 문제 도메인에서 양자 우위가 실현 가능한가?", ja: "どの問題ドメインで量子優位が実現可能か？", es: "¿En qué dominios de problemas es alcanzable la ventaja cuántica?" },
      { en: "Scaling strategies as qubit count increases?", ko: "Qubit 수 증가 시 스케일링 전략은?", ja: "Qubit数増加時のスケーリング戦略は？", es: "¿Estrategias de escalamiento a medida que aumenta el número de qubits?" },
    ],
    estimatedTimeline: "2025 ~ 2027",
  },
  {
    icon: "assets/icons/AI Safety  Fault Tolerance Integration.png",
    title: { en: "AI Safety / Fault Tolerance Integration", ko: "AI 안전성 / Fault Tolerance 통합", ja: "AI安全性 / フォールトトレランス統合", es: "Integración de seguridad de IA / tolerancia a fallos" },
    description: {
      en: "Building a unified AI system reliability framework that addresses fault injection, adversarial attacks, and Byzantine faults comprehensively.",
      ko: "Fault Injection, Adversarial Attack, Byzantine Fault를 통합적으로 다루는 AI 시스템 신뢰성 프레임워크 구축.",
      ja: "Fault Injection、Adversarial Attack、Byzantine Faultを統合的に扱うAIシステム信頼性フレームワークの構築。",
      es: "Construcción de un marco unificado de fiabilidad de sistemas de IA que aborde la inyección de fallos, los ataques adversariales y los fallos bizantinos de manera integral."
    },
    priority: "medium",
    openQuestions: [
      { en: "A defense system robust against multiple attack/fault types simultaneously?", ko: "다양한 공격/오류 유형에 동시에 강건한 방어 체계는?", ja: "多様な攻撃・障害タイプに同時に頑健な防御体系とは？", es: "¿Un sistema de defensa robusto contra múltiples tipos de ataque/fallo simultáneamente?" },
      { en: "What is the relationship between fault injection and adversarial attacks?", ko: "Fault Injection과 Adversarial Attack의 관계는?", ja: "Fault InjectionとAdversarial Attackの関係は？", es: "¿Cuál es la relación entre la inyección de fallos y los ataques adversariales?" },
      { en: "Optimizing Byzantine Fault Tolerance in federated learning?", ko: "연합학습 환경에서의 Byzantine Fault Tolerance 최적화는?", ja: "連合学習環境でのByzantine Fault Tolerance最適化は？", es: "¿Optimización de tolerancia a fallos bizantinos en aprendizaje federado?" },
    ],
    estimatedTimeline: "2025 ~ 2027",
  },
  {
    icon: "assets/icons/AI Semiconductors  Neuromorphic Computing.png",
    title: { en: "AI Semiconductors / Neuromorphic Computing", ko: "AI 반도체 / 뉴로모픽 컴퓨팅", ja: "AI半導体 / ニューロモーフィック・コンピューティング", es: "Semiconductores de IA / computación neuromórfica" },
    description: {
      en: "Efficient inference systems on FPGA and dedicated AI accelerators, low-power AI research using neuromorphic architectures.",
      ko: "FPGA 및 전용 AI 가속기 위에서 동작하는 효율적 추론 시스템, 뉴로모픽 아키텍처를 활용한 저전력 AI 연구.",
      ja: "FPGAおよび専用AIアクセラレータ上で動作する効率的推論システム、ニューロモーフィックアーキテクチャを活用した低電力AI研究。",
      es: "Sistemas de inferencia eficientes en FPGA y aceleradores de IA dedicados, investigación de IA de bajo consumo usando arquitecturas neuromórficas."
    },
    priority: "medium",
    openQuestions: [
      { en: "How to improve learning algorithm efficiency on neuromorphic chips?", ko: "뉴로모픽 칩에서의 학습 알고리즘 효율화 방안은?", ja: "ニューロモーフィックチップでの学習アルゴリズム効率化方案は？", es: "¿Cómo mejorar la eficiencia de los algoritmos de aprendizaje en chips neuromórficos?" },
      { en: "Accuracy-latency tradeoffs in FPGA-based real-time inference?", ko: "FPGA 기반 실시간 추론의 정확도-지연시간 트레이드오프는?", ja: "FPGAベースのリアルタイム推論の精度・レイテンシ トレードオフは？", es: "¿Compensaciones de precisión-latencia en inferencia en tiempo real basada en FPGA?" },
    ],
    estimatedTimeline: "2026 ~ 2028",
  },
];
