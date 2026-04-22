/* ============================================
   TIMELINE DATA
   {en: "English", ko: "한국어"} 형태로 다국어 지원
   ============================================ */

const TIMELINE_EVENTS = [
  {
    date: "2026 Sep – 2027 Apr",
    logo: "assets/logos/schools/ilsc.png",
    title: { en: "Language Study Abroad — ILSC Vancouver, Canada", ko: "어학연수 — ILSC 밴쿠버, 캐나다", ja: "語学研修 — ILSCバンクーバー、カナダ", es: "Estudios de idioma en ILSC Vancouver, Canadá" },
    description: {
      en: "Intensive English language program at ILSC (International Language Schools of Canada), Vancouver campus — focusing on academic English, professional communication, and cross-cultural collaboration for international research engagement.",
      ko: "ILSC(International Language Schools of Canada) 밴쿠버 캠퍼스에서 학술 영어, 전문 커뮤니케이션, 다문화 협업을 중심으로 한 집중 영어 어학연수 과정 참여 예정.",
      ja: "ILSC(International Language Schools of Canada)バンクーバーキャンパスで学術英語、プロフェッショナルコミュニケーション、異文化協業を中心とした集中英語語学研修に参加予定。",
      es: "Programa intensivo de inglés en ILSC (International Language Schools of Canada), campus de Vancouver, enfocado en inglés académico, comunicación profesional y colaboración intercultural."
    },
    tags: ["Education", "Language Study", "ILSC", "Vancouver"],
  },
  {
    date: "2026 Q1",
    title: { en: "3 Papers Accepted: KICS, IEEE ICAIIC, KCS", ko: "KICS, IEEE ICAIIC, KCS 논문 3편 동시 채택", ja: "KICS、IEEE ICAIIC、KCS論文3編同時採択", es: "3 artículos aceptados: KICS, IEEE ICAIIC, KCS" },
    description: {
      en: "DNN Fault Recovery (KICS), Adversarial Robustness in Wireless AMC (IEEE ICAIIC), and FPGA-Based Voice Risk Detection (KCS) accepted simultaneously.",
      ko: "DNN Fault Recovery(KICS), 무선통신 적대적 강건성(IEEE ICAIIC), FPGA 음성 위험 감지 시스템(KCS) 논문 채택.",
      ja: "DNN Fault Recovery(KICS)、無線通信敵対的頑健性(IEEE ICAIIC)、FPGA音声リスク検知システム(KCS)論文採択。",
      es: "DNN Fault Recovery (KICS), robustez adversarial en AMC inalámbrica (IEEE ICAIIC) y detección de riesgos por voz basada en FPGA (KCS) aceptados simultáneamente."
    },
    tags: ["Publication", "Fault Injection", "IEEE", "FPGA"],
  },
  {
    date: "2026 Q1",
    title: { en: "TDA Medical Data Analysis & AD+LLM Projects Launched", ko: "TDA 의료 데이터 분석 & 자율주행+LLM 프로젝트 착수", ja: "TDA医療データ分析 & 自動運転+LLMプロジェクト着手", es: "Lanzamiento de proyectos TDA análisis médico y AD+LLM" },
    description: {
      en: "Started TDA-based medical data analysis (personal project) and Autonomous Driving + LLM research in collaboration with RAISE LAB and ASU MPS LAB.",
      ko: "TDA 기반 의료 데이터 분석(개인 프로젝트) 및 RAISE LAB·ASU MPS LAB 협업 자율주행+LLM 연구 착수.",
      ja: "TDA基盤医療データ分析（個人プロジェクト）およびRAISE LAB・ASU MPS LAB協業自動運転+LLM研究着手。",
      es: "Inicio de análisis de datos médicos basado en TDA (proyecto personal) e investigación de conducción autónoma + LLM en colaboración con RAISE LAB y ASU MPS LAB."
    },
    tags: ["New Project", "TDA", "LLM", "MPS LAB"],
  },
  {
    date: "2026 Feb",
    title: { en: "LG Aimers 8th Cohort Completed (LLM Compression)", ko: "LG Aimers 8기 수료 (LLM Compression)", ja: "LG Aimers第8期修了（LLM Compression）", es: "LG Aimers 8ª cohorte completada (compresión LLM)" },
    description: {
      en: "Completed LG Aimers 8th program (2026.01.02–2026.02.26). Hackathon topic: EXAONE Model Lightweight LLM Compression. Certified by LG AI Research Institute and Ministry of Employment and Labor.",
      ko: "LG Aimers 8기 프로그램 수료 (2026.01.02~2026.02.26). 해커톤 주제: EXAONE 모델 경량화(LLM Compression). LG AI연구원 및 고용노동부 인증.",
      ja: "LG Aimers第8期プログラム修了(2026.01.02〜2026.02.26)。ハッカソンテーマ：EXAONEモデル軽量化LLM Compression。LG AI研究院及び雇用労働部認定。",
      es: "Programa LG Aimers 8ª cohorte completado (2026.01.02–2026.02.26). Tema del hackathon: Compresión LLM ligera del modelo EXAONE. Certificado por LG AI Research y Ministerio de Empleo y Trabajo."
    },
    tags: ["Certificate", "LG Aimers", "LLM Compression"],
  },
  {
    date: "2025 Q4",
    title: { en: "JKICS & KIIT-JICS Journal Papers Accepted", ko: "JKICS & KIIT-JICS 저널 논문 채택", ja: "JKICS & KIIT-JICSジャーナル論文採択", es: "Artículos de revista JKICS y KIIT-JICS aceptados" },
    description: {
      en: "BB84 quantum-secured communication system (JKICS journal) and quantum noise-based adversarial attack on diffusion models (KIIT-JICS) accepted.",
      ko: "BB84 양자 보안 통신 시스템(JKICS 저널)과 양자 노이즈 기반 Diffusion Model 적대적 공격(KIIT-JICS) 논문 채택.",
      ja: "BB84量子セキュア通信システム(JKICSジャーナル)と量子ノイズ基盤Diffusion Model敵対的攻撃(KIIT-JICS)論文採択。",
      es: "Sistema de comunicación con seguridad cuántica BB84 (revista JKICS) y ataque adversarial basado en ruido cuántico a modelos de difusión (KIIT-JICS) aceptados."
    },
    tags: ["Journal", "Quantum", "Publication"],
  },
  {
    date: "2025 Dec",
    title: { en: "KIIT Outstanding Paper Award (2nd)", ko: "KIIT 우수논문상 수상 (2회차)", ja: "KIIT優秀論文賞受賞（2回目）", es: "Premio KIIT artículo destacado (2do)" },
    description: {
      en: "Received Outstanding Paper Award from the Korea Information Technology Society, December 2025.",
      ko: "한국정보기술학회 2025년 12월 우수논문상 수상.",
      ja: "韓国情報技術学会2025年12月優秀論文賞受賞。",
      es: "Premio de artículo destacado de la Sociedad Coreana de Tecnología de la Información, diciembre 2025."
    },
    tags: ["Award", "KIIT"],
  },
  {
    date: "2025 Q4",
    title: { en: "FL Medical Imaging & Post-hoc Defense Papers", ko: "연합학습 의료 영상 & Post-hoc Defense 논문", ja: "連合学習医療画像 & Post-hoc Defense論文", es: "Artículos de imagen médica FL y defensa post-hoc" },
    description: {
      en: "Presented logit-based Knowledge Distillation for FL (KIIT) and empirical study of FGSM/PGD defense in FL (KICS).",
      ko: "Logit 기반 Knowledge Distillation FL(KIIT), FGSM/PGD 공격 방어 실증 연구(KICS) 발표.",
      ja: "Logit基盤Knowledge Distillation FL(KIIT)、FGSM/PGD攻撃防御実証研究(KICS)発表。",
      es: "Presentación de destilación de conocimiento basada en logit para FL (KIIT) y estudio empírico de defensa FGSM/PGD en FL (KICS)."
    },
    tags: ["Conference", "Federated Learning", "Medical AI"],
  },
  {
    date: "2025 Q4",
    title: { en: "Side-Channel Attack Detection & Quantum GNN Studies Completed", ko: "부채널 공격 탐지 & 양자 GNN 연구 완료", ja: "サイドチャネル攻撃検知 & 量子GNN研究完了", es: "Detección de ataques de canal lateral y estudios de GNN cuántico completados" },
    description: {
      en: "Completed comparative analysis of AI models for side-channel attack detection and mathematical analysis of Quantum Graph Neural Networks.",
      ko: "부채널 공격 탐지를 위한 AI 모델 비교 분석 및 양자 그래프 신경망(Quantum GNN) 수학적 분석 연구 완료.",
      ja: "サイドチャネル攻撃検知のためのAIモデル比較分析と量子グラフニューラルネットワークの数学的分析研究完了。",
      es: "Análisis comparativo de modelos de IA para detección de ataques de canal lateral y análisis matemático de redes neuronales de grafos cuánticos completados."
    },
    tags: ["Security", "Quantum", "GNN", "Completed"],
  },
  {
    date: "2025 Q3",
    title: { en: "Quantum Hybrid Network & Seismic Signal Papers", ko: "양자 하이브리드 신경망 & 지진 신호 논문", ja: "量子ハイブリッドネットワーク & 地震信号論文", es: "Artículos de red híbrida cuántica y señal sísmica" },
    description: {
      en: "Presented 3-qubit quantum circuit pneumonia classification (KSII) and comparison of 8 DL models for seismic signal denoising (KIIT).",
      ko: "3-Qubit 양자회로 폐렴 분류(KSII), 지진 신호 디노이징 8개 모델 비교(KIIT) 논문 발표.",
      ja: "3-Qubit量子回路肺炎分類(KSII)、地震信号ノイズ除去8モデル比較(KIIT)論文発表。",
      es: "Presentación de clasificación de neumonía con circuito cuántico de 3 qubits (KSII) y comparación de 8 modelos DL para eliminación de ruido en señales sísmicas (KIIT)."
    },
    tags: ["Conference", "Quantum ML", "Signal Processing"],
  },
  {
    date: "2025 Jul",
    title: { en: "KIIT Outstanding Paper Award (1st)", ko: "KIIT 우수논문상 수상 (1회차)", ja: "KIIT優秀論文賞受賞（1回目）", es: "Premio KIIT artículo destacado (1ro)" },
    description: {
      en: "Received Outstanding Paper Award from the Korea Information Technology Society, July 2025.",
      ko: "한국정보기술학회 2025년 7월 우수논문상 수상.",
      ja: "韓国情報技術学会2025年7月優秀論文賞受賞。",
      es: "Premio de artículo destacado de la Sociedad Coreana de Tecnología de la Información, julio 2025."
    },
    tags: ["Award", "KIIT"],
  },
  {
    date: "2025 Q2",
    title: { en: "ViT Adversarial Attack Study Published", ko: "ViT 적대적 공격 연구 발표", ja: "ViT敵対的攻撃研究発表", es: "Estudio de ataque adversarial ViT publicado" },
    description: {
      en: "Published study on robustness enhancement and multi-adversarial attacks in Vision Transformer-based image classification (KIIT Conference).",
      ko: "Vision Transformer 기반 이미지 분류 모델의 Multi-Adversarial Attack 강건성 연구 논문 발표 (KIIT Conference).",
      ja: "Vision Transformer基盤画像分類モデルのMulti-Adversarial Attack頑健性研究論文発表(KIIT Conference)。",
      es: "Publicación de estudio sobre mejora de robustez y ataques adversariales múltiples en clasificación de imágenes basada en Vision Transformer (KIIT Conference)."
    },
    tags: ["Conference", "Adversarial Attack", "ViT"],
  },
  {
    date: "2025",
    title: { en: "AI Aquaponics Monitoring System Completed (COREX)", ko: "AI 아쿠아포닉스 모니터링 시스템 완료 (COREX)", ja: "AIアクアポニクス監視システム完了（COREX）", es: "Sistema de monitoreo de acuaponía IA completado (COREX)" },
    description: {
      en: "Completed camera-based plant growth prediction and real-time AI monitoring system for aquaponics (pH, temperature, etc.) with automated anomaly adjustment. Collaborated with COREX.",
      ko: "COREX와 협업하여 카메라 기반 식물 생장 예측 및 pH·온도 등 실시간 AI 모니터링 시스템 개발 완료. 이상 감지 시 자동 조절 기능 구현.",
      ja: "COREXと協業してカメラ基盤植物成長予測およびpH・温度等リアルタイムAI監視システム開発完了。異常検知時自動調整機能実装。",
      es: "Completado sistema de predicción de crecimiento de plantas basado en cámara y monitoreo de IA en tiempo real para acuaponía (pH, temperatura, etc.) con ajuste automatizado de anomalías. Colaboración con COREX."
    },
    tags: ["Completed", "Aquaponics", "Computer Vision", "IoT"],
  },
  {
    date: "2025 Q1",
    title: { en: "Autonomous Driving + FL Research Launched", ko: "자율주행 + FL 연구 본격 착수", ja: "自動運転 + FL研究本格着手", es: "Lanzamiento de investigación conducción autónoma + FL" },
    description: {
      en: "Launched federated learning research for autonomous driving at RAISE LAB. Designing experiments with heterogeneous/homogeneous models across diverse environments.",
      ko: "RAISE LAB에서 자율주행 환경의 연합학습 연구 프로젝트 시작. 이기종/동종 모델 및 다양한 환경 실험 설계.",
      ja: "RAISE LABにて自動運転環境の連合学習研究プロジェクト開始。異種・同種モデルと多様な環境での実験設計。",
      es: "Lanzamiento de investigación de aprendizaje federado para conducción autónoma en RAISE LAB. Diseño de experimentos con modelos heterogéneos/homogéneos en diversos entornos."
    },
    tags: ["New Project", "Autonomous Driving", "FL"],
  },
  {
    date: "2024 Q4",
    logo: "assets/logos/RAISE LAB.png",
    title: { en: "Joined RAISE LAB as Undergraduate Researcher", ko: "RAISE LAB 학부연구원 합류", ja: "RAISE LAB学部研究員として参加", es: "Incorporación a RAISE LAB como investigador de pregrado" },
    description: {
      en: "Joined RAISE LAB at Yonsei University as an undergraduate researcher, beginning research in AI security and quantum computing.",
      ko: "연세대학교 RAISE LAB에 학부연구원으로 합류. AI 보안 및 양자컴퓨팅 연구 시작.",
      ja: "延世大学校RAISE LABに学部研究員として参加。AIセキュリティと量子コンピューティング研究を開始。",
      es: "Incorporación a RAISE LAB en la Universidad Yonsei como investigador de pregrado, comenzando investigación en seguridad de IA y computación cuántica."
    },
    tags: ["Milestone", "RAISE LAB"],
  },
  {
    date: "2025",
    title: { en: "Multiple Independent Research Projects", ko: "다수 개인 연구 프로젝트 수행", ja: "複数の個人研究プロジェクト遂行", es: "Múltiples proyectos de investigación independientes" },
    description: {
      en: "Completed electricity usage prediction (weather + consumption data), OCR + LLM medical document automation, voice-based risk prediction, and LLM search query optimization projects.",
      ko: "전력 수요 예측(기상+사용량 데이터), OCR+LLM 의료 문서 자동화, 음성 기반 위험 예측, LLM 검색어 최적화 프로젝트 완료.",
      ja: "電力需要予測(気象+使用量データ)、OCR+LLM医療文書自動化、音声基盤リスク予測、LLM検索クエリ最適化プロジェクト完了。",
      es: "Completados proyectos de predicción de uso de electricidad (clima + datos de consumo), automatización de documentos médicos OCR + LLM, predicción de riesgo basada en voz y optimización de consultas de búsqueda LLM."
    },
    tags: ["Completed", "LLM", "OCR", "Prediction"],
  },
  {
    date: "2025 Feb",
    title: { en: "LG Aimers 6th Cohort Completed (Data Intelligence)", ko: "LG Aimers 6기 수료 (Data Intelligence)", ja: "LG Aimers第6期修了（Data Intelligence）", es: "LG Aimers 6ª cohorte completada (Data Intelligence)" },
    description: {
      en: "Completed LG Aimers 6th program (2025.01.02–2025.02.27). Hackathon topic: Pregnancy success prediction for infertility patients. Certified by LG AI Research Institute and Ministry of Employment and Labor.",
      ko: "LG Aimers 6기 프로그램 수료 (2025.01.02~2025.02.27). 해커톤 주제: 난임 환자 대상 임신 성공 여부 예측. LG AI연구원 및 고용노동부 인증.",
      ja: "LG Aimers第6期プログラム修了(2025.01.02〜2025.02.27)。ハッカソンテーマ：不妊患者対象妊娠成功予測。LG AI研究院及び雇用労働部認定。",
      es: "Programa LG Aimers 6ª cohorte completado (2025.01.02–2025.02.27). Tema del hackathon: Predicción de éxito de embarazo para pacientes con infertilidad. Certificado por LG AI Research y Ministerio de Empleo y Trabajo."
    },
    tags: ["Certificate", "LG Aimers", "Data Intelligence"],
  },
  {
    date: "2022 – 2026",
    logo: "assets/logos/yonsei logo.png",
    title: { en: "Bachelor of Science at Yonsei University", ko: "연세대학교 학사 (Bachelor of Science)", ja: "延世大学校 学士課程", es: "Licenciatura en la Universidad Yonsei" },
    description: {
      en: "Enrolled in the School of Computer Science (with Physics / Quantum Mechanics coursework). Expected graduation: August 2026.",
      ko: "연세대학교 소프트웨어학부(컴퓨터과학) 재학 중, 물리학 및 양자역학 관련 과목 이수. 2026년 8월 졸업 예정.",
      ja: "延世大学校コンピュータサイエンス学部在学中、物理学・量子力学関連科目を履修。2026年8月卒業予定。",
      es: "Facultad de Ciencias de la Computación (con cursos de Física / Mecánica Cuántica). Graduación prevista: agosto de 2026."
    },
    tags: ["Education", "Yonsei University", "BS"],
  },
  {
    date: "2018 – 2021",
    logo: "assets/logos/schools/cheongdam-high.webp",
    title: { en: "Cheongdam High School", ko: "청담고등학교", ja: "清潭高等学校", es: "Cheongdam High School" },
    description: {
      en: "Member and 1st-year Deputy of Computer Club \"Shift\" (2018); elected Club President in 2019. Led programming workshops and software projects with fellow members.",
      ko: "컴퓨터 동아리 'Shift' 부원 및 1학년 차장 (2018), 2019년 동아리 부장 역임. 프로그래밍 워크숍 및 소프트웨어 프로젝트를 주도.",
      ja: "コンピュータ部活動「Shift」部員・1年次副部長(2018)、2019年部長を歴任。プログラミングワークショップとソフトウェアプロジェクトを主導。",
      es: "Miembro y Subjefe de 1er año del Club de Computación \"Shift\" (2018); elegido Presidente del club en 2019. Lideró talleres de programación y proyectos de software."
    },
    tags: ["Education", "High School", "Computer Club"],
  },
  {
    date: "2015 – 2018",
    logo: "assets/logos/schools/bongeun-middle.webp",
    title: { en: "Bongeun Middle School", ko: "봉은중학교", ja: "奉恩中学校", es: "Bongeun Middle School" },
    description: {
      en: "Active member of the Science Club and Robotics Club. Early hands-on exposure to scientific experimentation and robotics, which shaped my interest in computing and engineering.",
      ko: "과학 동아리 및 로봇 동아리 활동. 과학 실험과 로봇 공학에 대한 초기 경험을 통해 컴퓨팅 및 공학에 대한 관심을 형성.",
      ja: "科学クラブとロボットクラブで活動。科学実験とロボット工学の初期体験を通じてコンピューティング・工学への関心を形成。",
      es: "Miembro activo del Club de Ciencias y del Club de Robótica. Primeras experiencias prácticas en experimentación científica y robótica que moldearon mi interés por la computación y la ingeniería."
    },
    tags: ["Education", "Middle School", "Science", "Robotics"],
  },
  {
    date: "2009 – 2015",
    logo: "assets/logos/schools/eonbuk-elementary.webp",
    title: { en: "Eonbuk Elementary School", ko: "언북초등학교", ja: "彦北小学校", es: "Eonbuk Elementary School" },
    description: {
      en: "Completed primary education in Seoul, Republic of Korea.",
      ko: "서울에서 초등 교육을 마침.",
      ja: "ソウルで初等教育を修了。",
      es: "Educación primaria en Seúl, República de Corea."
    },
    tags: ["Education", "Elementary School"],
  },
];
