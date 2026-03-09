/* ============================================
   FUTURE RESEARCH / OPEN PROBLEMS DATA
   {en: "English", ko: "한국어"} 형태로 다국어 지원
   priority: "high" | "medium" | "low"
   ============================================ */

const FUTURE_RESEARCH = [
  {
    icon: "🚗",
    title: { en: "Autonomous Driving + LLM Integration Framework", ko: "자율주행 + LLM 통합 프레임워크" },
    description: {
      en: "Integrating LLM reasoning into autonomous driving decision-making, building systems that understand complex traffic scenarios through natural language.",
      ko: "LLM의 추론 능력을 자율주행 의사결정에 접목하여, 복잡한 교통 시나리오를 자연어로 이해하고 대응하는 시스템 구축."
    },
    priority: "high",
    openQuestions: [
      { en: "Can LLMs be fast enough for real-time driving decisions?", ko: "LLM이 실시간 주행 판단에 충분히 빠를 수 있는가?" },
      { en: "What is the optimal fusion of language-based reasoning and sensor data?", ko: "언어 기반 추론과 센서 데이터의 최적 결합 방법은?" },
      { en: "Deployment strategies for lightweight LLMs on edge devices?", ko: "Edge Device에서의 경량 LLM 배포 전략은?" },
    ],
    estimatedTimeline: "2025 ~ 2026",
  },
  {
    icon: "⚛️",
    title: { en: "Practical Quantum Machine Learning", ko: "양자 머신러닝 실용화" },
    description: {
      en: "Overcoming VQC performance limits on NISQ devices, researching hybrid algorithms that can achieve quantum advantage on real-world problems.",
      ko: "NISQ 디바이스에서의 VQC 성능 한계를 극복하고, 실제 문제에 양자 우위를 달성할 수 있는 하이브리드 알고리즘 연구."
    },
    priority: "high",
    openQuestions: [
      { en: "Can quantum noise be exploited to benefit learning?", ko: "양자 노이즈를 학습에 유리하게 활용할 수 있는가?" },
      { en: "In which problem domains is quantum advantage achievable?", ko: "어떤 문제 도메인에서 양자 우위가 실현 가능한가?" },
      { en: "Scaling strategies as qubit count increases?", ko: "Qubit 수 증가 시 스케일링 전략은?" },
    ],
    estimatedTimeline: "2025 ~ 2027",
  },
  {
    icon: "🛡️",
    title: { en: "AI Safety / Fault Tolerance Integration", ko: "AI 안전성 / Fault Tolerance 통합" },
    description: {
      en: "Building a unified AI system reliability framework that addresses fault injection, adversarial attacks, and Byzantine faults comprehensively.",
      ko: "Fault Injection, Adversarial Attack, Byzantine Fault를 통합적으로 다루는 AI 시스템 신뢰성 프레임워크 구축."
    },
    priority: "medium",
    openQuestions: [
      { en: "A defense system robust against multiple attack/fault types simultaneously?", ko: "다양한 공격/오류 유형에 동시에 강건한 방어 체계는?" },
      { en: "What is the relationship between fault injection and adversarial attacks?", ko: "Fault Injection과 Adversarial Attack의 관계는?" },
      { en: "Optimizing Byzantine Fault Tolerance in federated learning?", ko: "연합학습 환경에서의 Byzantine Fault Tolerance 최적화는?" },
    ],
    estimatedTimeline: "2025 ~ 2027",
  },
  {
    icon: "🔬",
    title: { en: "AI Semiconductors / Neuromorphic Computing", ko: "AI 반도체 / 뉴로모픽 컴퓨팅" },
    description: {
      en: "Efficient inference systems on FPGA and dedicated AI accelerators, low-power AI research using neuromorphic architectures.",
      ko: "FPGA 및 전용 AI 가속기 위에서 동작하는 효율적 추론 시스템, 뉴로모픽 아키텍처를 활용한 저전력 AI 연구."
    },
    priority: "medium",
    openQuestions: [
      { en: "How to improve learning algorithm efficiency on neuromorphic chips?", ko: "뉴로모픽 칩에서의 학습 알고리즘 효율화 방안은?" },
      { en: "Accuracy-latency tradeoffs in FPGA-based real-time inference?", ko: "FPGA 기반 실시간 추론의 정확도-지연시간 트레이드오프는?" },
    ],
    estimatedTimeline: "2026 ~ 2028",
  },
];
