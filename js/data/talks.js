/* ============================================
   TALKS & PRESENTATIONS DATA
   발표/강연을 추가/수정/삭제하려면 이 파일을 편집하세요

   type: "keynote" | "invited" | "workshop" | "poster" | "tutorial" | "conference"
   ============================================ */

const TALKS = [
  {
    type: "conference",
    title: {
      ko: "딥러닝 기반 자동 변조 분류의 적대적 강건성",
      en: "Adversarial Robustness of Deep Learning-Based AMC",
    },
    event: "ICAIIC 2026 (IEEE Conference)",
    date: "2026-02",
    location: {
      ko: "일본, 도쿄",
      en: "Tokyo, Japan",
    },
    description: {
      ko: "딥러닝 기반 자동 변조 분류(AMC) 시스템의 적대적 공격에 대한 강건성 연구 발표",
      en: "Presentation on adversarial robustness of deep learning-based automatic modulation classification systems",
    },
    links: [
      { label: "Video", url: "https://youtu.be/1fcXbiI4INI" },
    ],
  },
  {
    type: "conference",
    title: {
      ko: "이질적 의료 영상 연합학습을 위한 로짓 기반 지식 증류",
      en: "Logit-Based Knowledge Distillation for Heterogeneous Medical Image Federated Learning",
    },
    event: "KIIT 2025",
    date: "2025-12",
    location: {
      ko: "제주도, 한국",
      en: "Jeju, Korea",
    },
    description: {
      ko: "의료 영상 연합학습 환경에서 이질적 데이터를 다루기 위한 로짓 기반 지식 증류 기법 발표",
      en: "Presentation on logit-based knowledge distillation for handling heterogeneous data in medical image federated learning",
    },
    links: [
      { label: "Video", url: "https://youtu.be/AxJseDD7ISs" },
    ],
  },
  {
    type: "conference",
    title: {
      ko: "Summer Conference 2025 – 학부생 논문 경진대회",
      en: "Summer Conference 2025 – Undergraduate Paper Competition",
    },
    event: "KIIT Summer Conference 2025",
    date: "2025-06",
    location: {
      ko: "제주도, 한국",
      en: "Jeju, Korea",
    },
    description: {
      ko: "KIIT 하계학술대회 학부생 논문 경진대회 발표",
      en: "Undergraduate paper competition presentation at KIIT Summer Conference",
    },
    links: [
      { label: "Video", url: "https://youtu.be/Y7kRW3QIj_w" },
    ],
  },
];
