/* ============================================
   MAIN APPLICATION
   섹션 로딩 및 데이터 렌더링 총괄
   ============================================ */

/* ── 에셋 경로 프리픽스 (서브폴더 페이지 지원) ── */
const BASE_PATH = document.getElementById('main-content')?.dataset.base || '.';

document.addEventListener('DOMContentLoaded', async () => {
  // 1. HTML 섹션 로드
  await loadSections();

  // 2. 데이터 기반 동적 렌더링
  renderAll();

  // 3. 인터랙션 초기화
  initNavigation();
  initLanguageToggle();
  initProgressBars();
  initCountUp();
  initTimeline();
});

/* ── 전체 재렌더링 (언어 전환 시 호출) ── */
function renderAll() {
  renderHero();
  renderOverview();
  renderResearchMap();
  renderAreas();
  renderProjects();
  renderExperiments();
  renderPublications();
  renderTalks();
  renderTimeline();
  renderFuture();
  renderCollaborations();
  renderFooter();

  // 재렌더링 후 애니메이션 재적용
  setTimeout(() => {
    initTimeline();
    initProgressBars();
  }, 100);
}

/* ── 섹션 HTML 로드 (페이지별 data-sections 기반) ── */
async function loadSections() {
  const main = document.getElementById('main-content');
  const pageSections = main.dataset.sections;

  // data-sections 속성이 없으면 전체 로드 (폴백)
  const sectionOrder = pageSections
    ? pageSections.split(',').map(s => s.trim())
    : ['hero', 'overview', 'areas', 'projects', 'experiments',
       'publications', 'talks', 'timeline', 'future', 'collaborations'];

  for (const name of sectionOrder) {
    try {
      const basePath = main.dataset.base || '.';
      const response = await fetch(`${basePath}/sections/${name}.html`);
      if (response.ok) {
        let html = await response.text();
        // 서브폴더 페이지에서 에셋 경로 보정
        if (BASE_PATH !== '.') {
          html = html.replace(/src="assets\//g, `src="${BASE_PATH}/assets/`);
        }
        main.insertAdjacentHTML('beforeend', html);
      }
    } catch (e) {
      console.warn(`Failed to load section: ${name}`, e);
    }
  }
}

/* ── Hero 렌더링 ── */
function renderHero() {
  const badge = document.getElementById('hero-badge');
  const nameEl = document.getElementById('hero-name');
  const desc = document.getElementById('hero-description');
  const affiliation = document.getElementById('hero-affiliation');
  const role = document.getElementById('hero-role');
  const btnPrimary = document.getElementById('hero-btn-primary');
  const btnSecondary = document.getElementById('hero-btn-secondary');
  const scholarLink = document.getElementById('hero-link-scholar');
  const cvLink = document.getElementById('hero-link-cv');
  const githubLink = document.getElementById('hero-link-github');

  if (badge) badge.textContent = PROFILE.badge;
  if (nameEl) nameEl.textContent = PROFILE.name;
  if (desc) desc.textContent = t(PROFILE.description);
  if (affiliation) affiliation.textContent = t(PROFILE.affiliation);
  if (role) role.textContent = t(PROFILE.title);
  if (btnPrimary) btnPrimary.textContent = ui('heroViewProjects');
  if (btnSecondary) btnSecondary.textContent = ui('heroViewPubs');
  if (scholarLink) scholarLink.href = PROFILE.links.scholar;
  if (cvLink) cvLink.href = PROFILE.links.cv;
  if (githubLink) githubLink.href = PROFILE.links.github;
}

/* ── Overview 렌더링 ── */
function renderOverview() {
  const title = document.querySelector('#overview .section__title');
  const subtitle = document.querySelector('#overview .section__subtitle');
  const visionTitle = document.getElementById('overview-vision-title');
  const visionP1 = document.getElementById('overview-vision-p1');
  const visionP2 = document.getElementById('overview-vision-p2');

  if (title) title.textContent = ui('overviewTitle');
  if (subtitle) subtitle.textContent = ui('overviewSubtitle');
  if (visionTitle) visionTitle.textContent = ui('overviewVision');
  if (visionP1) visionP1.textContent = ui('overviewVisionP1');
  if (visionP2) visionP2.textContent = ui('overviewVisionP2');

  // Highlights
  const highlights = document.querySelectorAll('.overview__highlight-text');
  if (highlights.length >= 3) {
    highlights[0].querySelector('h4').textContent = ui('highlightGoalTitle');
    highlights[0].querySelector('p').textContent = ui('highlightGoalDesc');
    highlights[1].querySelector('h4').textContent = ui('highlightMethodTitle');
    highlights[1].querySelector('p').textContent = ui('highlightMethodDesc');
    highlights[2].querySelector('h4').textContent = ui('highlightImpactTitle');
    highlights[2].querySelector('p').textContent = ui('highlightImpactDesc');
  }

  // Stats: 데이터 배열과 동적 연동
  const statCards = document.querySelectorAll('.overview__stat-card .stat__number');
  if (statCards.length >= 4) {
    statCards[0].setAttribute('data-count', PROJECTS.length);
    statCards[1].setAttribute('data-count', PUBLICATIONS.length);
    statCards[3].setAttribute('data-count', RESEARCH_AREAS.length);
  }
}

/* ── Research Map 렌더링 ── */
function renderResearchMap() {
  const title = document.querySelector('#research-map .section__title');
  const subtitle = document.querySelector('#research-map .section__subtitle');
  const centerLabel = document.getElementById('rmap-center-label');
  const nodesContainer = document.getElementById('rmap-nodes');
  const svg = document.getElementById('rmap-svg');
  const legend = document.getElementById('rmap-legend');
  const detailPanel = document.getElementById('rmap-detail');
  const tooltip = document.getElementById('rmap-tooltip');

  if (title) title.textContent = ui('rmapTitle');
  if (subtitle) subtitle.textContent = ui('rmapSubtitle');
  if (centerLabel) centerLabel.textContent = ui('rmapCenter');
  if (!nodesContainer || !svg) return;

  // Node positions (%) — 9 nodes evenly spaced on a circle (r=45, center=50,50)
  // Starting from top (270°), going clockwise at 40° intervals
  const R = 45, CX = 50, CY = 50;
  const nodeOrder = [4, 0, 1, 6, 3, 2, 8, 5, 7];
  // 4:Medical(top) → 0:AISec(upper-right) → 1:AutoDriv(right) → 6:CV(lower-right)
  // → 3:AISemi(bottom) → 2:Quantum(lower-left) → 8:LLM(left) → 5:NetSec(upper-left) → 7:Robotics(top-left)
  const allPos = nodeOrder.map((_, i) => {
    const angle = (270 + i * 40) * Math.PI / 180;
    return { x: Math.round(CX + R * Math.cos(angle)), y: Math.round(CY + R * Math.sin(angle)) };
  });
  // Map back: positions[areaIndex] = coordinate
  const positions = new Array(9);
  nodeOrder.forEach((areaIdx, i) => { positions[areaIdx] = allPos[i]; });

  // Connections between areas: [fromIndex, toIndex, label, tooltip description]
  const connections = [
    [0, 1, "FL",        { en: "Federated Learning bridges AI Security and Autonomous Driving", ko: "연합학습이 AI 보안과 자율주행을 연결", ja: "連合学習がAIセキュリティと自動運転を接続", es: "El aprendizaje federado conecta seguridad IA y conducción autónoma" }],
    [0, 4, "Privacy",   { en: "Privacy-preserving techniques for Medical AI", ko: "의료 AI를 위한 프라이버시 보존 기술", ja: "医療AIのためのプライバシー保護技術", es: "Técnicas de preservación de privacidad para IA médica" }],
    [0, 5, "Adversarial", { en: "Adversarial robustness in network communications", ko: "네트워크 통신에서의 적대적 강건성", ja: "ネットワーク通信における敵対的頑健性", es: "Robustez adversarial en comunicaciones de red" }],
    [1, 3, "Real-time", { en: "Real-time AI processing on hardware accelerators", ko: "하드웨어 가속기에서의 실시간 AI 처리", ja: "ハードウェアアクセラレータでのリアルタイムAI処理", es: "Procesamiento de IA en tiempo real en aceleradores de hardware" }],
    [2, 4, "Hybrid QC", { en: "Quantum-classical hybrid models for medical classification", ko: "의료 분류를 위한 양자-고전 하이브리드 모델", ja: "医療分類のための量子古典ハイブリッドモデル", es: "Modelos híbridos cuántico-clásicos para clasificación médica" }],
    [2, 5, "QKD",       { en: "Quantum Key Distribution for secure communications", ko: "보안 통신을 위한 양자 키 분배", ja: "セキュア通信のための量子鍵配送", es: "Distribución de claves cuánticas para comunicaciones seguras" }],
    [3, 2, "Hardware",  { en: "Hardware acceleration for quantum computing", ko: "양자 컴퓨팅을 위한 하드웨어 가속", ja: "量子コンピューティングのためのハードウェア加速", es: "Aceleración de hardware para computación cuántica" }],
    [6, 1, "Perception", { en: "Computer vision enables perception for autonomous driving", ko: "컴퓨터 비전이 자율주행의 인지 기능을 담당", ja: "コンピュータビジョンが自動運転の認知機能を実現", es: "La visión por computadora habilita la percepción para conducción autónoma" }],
    [6, 4, "Imaging",   { en: "Visual analysis techniques for medical image diagnosis", ko: "의료 영상 진단을 위한 시각 분석 기술", ja: "医療画像診断のための視覚分析技術", es: "Técnicas de análisis visual para diagnóstico por imagen médica" }],
    [7, 1, "Control",   { en: "Robotic control systems applied to autonomous vehicles", ko: "자율주행 차량에 적용되는 로봇 제어 시스템", ja: "自動運転車両に適用されるロボット制御システム", es: "Sistemas de control robótico aplicados a vehículos autónomos" }],
    [7, 3, "Embedded",  { en: "Embedded AI hardware for real-time robotic inference", ko: "실시간 로봇 추론을 위한 임베디드 AI 하드웨어", ja: "リアルタイムロボット推論のための組込みAIハードウェア", es: "Hardware de IA embebido para inferencia robótica en tiempo real" }],
    [6, 7, "Vision-Robot", { en: "Vision-guided robotic manipulation and navigation", ko: "비전 기반 로봇 조작 및 내비게이션", ja: "ビジョンガイドロボット操作とナビゲーション", es: "Manipulación y navegación robótica guiada por visión" }],
    [8, 1, "OpenEMMA", { en: "LLM-driven reasoning for autonomous driving decisions", ko: "자율주행 의사결정을 위한 LLM 기반 추론", ja: "自動運転判断のためのLLM駆動推論", es: "Razonamiento impulsado por LLM para decisiones de conducción autónoma" }],
    [8, 4, "Med-NLP", { en: "LLM-based medical text analysis and clinical decision support", ko: "LLM 기반 의료 텍스트 분석 및 임상 의사결정 지원", ja: "LLMベースの医療テキスト分析と臨床意思決定支援", es: "Análisis de texto médico basado en LLM y soporte de decisiones clínicas" }],
    [8, 6, "VLM", { en: "Vision-language models combining visual and textual understanding", ko: "시각과 텍스트 이해를 결합한 비전-언어 모델", ja: "視覚とテキスト理解を統合するビジョン言語モデル", es: "Modelos de visión-lenguaje que combinan comprensión visual y textual" }],
    [8, 0, "Alignment", { en: "LLM safety and alignment for trustworthy AI systems", ko: "신뢰할 수 있는 AI 시스템을 위한 LLM 안전성 및 정렬", ja: "信頼性の高いAIシステムのためのLLM安全性とアラインメント", es: "Seguridad y alineación de LLM para sistemas de IA confiables" }],
  ];

  // Track active (clicked) node
  let activeNodeId = null;

  // Render area nodes
  nodesContainer.innerHTML = RESEARCH_AREAS.map((area, i) => `
    <div class="rmap__node" data-node="${i}"
         style="left: ${positions[i].x}%; top: ${positions[i].y}%;">
      <div class="rmap__node-inner">
        <img class="rmap__node-icon" src="${BASE_PATH}/${area.icon}" alt="${area.title.en}" />
        <span class="rmap__node-label">${t(area.title)}</span>
        <div class="rmap__node-tags">
          ${area.tags.slice(0, 2).map(tag => `<span class="rmap__node-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Draw SVG lines — all using % coordinates for perfect alignment with HTML nodes
  const cx = 50, cy = 50;
  const defs = svg.querySelector('defs');
  const defsHTML = defs ? defs.outerHTML : '';
  let svgContent = defsHTML;

  // Center-to-area lines (always visible)
  positions.forEach((pos, i) => {
    svgContent += `<line class="rmap__line-bg rmap__line" data-from="center" data-to="${i}"
      x1="${cx}%" y1="${cy}%" x2="${pos.x}%" y2="${pos.y}%" />`;
    svgContent += `<line class="rmap__line" data-from="center" data-to="${i}"
      x1="${cx}%" y1="${cy}%" x2="${pos.x}%" y2="${pos.y}%" />`;
  });

  // Inter-area connections — hidden by default, shown on hover/click
  connections.forEach(([from, to, label], ci) => {
    const p1 = positions[from], p2 = positions[to];
    const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;

    // Background track
    svgContent += `<line class="rmap__line-bg rmap__line rmap__line--hidden" data-from="${from}" data-to="${to}"
      x1="${p1.x}%" y1="${p1.y}%" x2="${p2.x}%" y2="${p2.y}%" />`;
    // Animated foreground
    svgContent += `<line class="rmap__line rmap__line--inter rmap__line--hidden" data-from="${from}" data-to="${to}"
      x1="${p1.x}%" y1="${p1.y}%" x2="${p2.x}%" y2="${p2.y}%" />`;
    // Invisible hover target
    svgContent += `<line class="rmap__line-hover" data-conn-index="${ci}"
      x1="${p1.x}%" y1="${p1.y}%" x2="${p2.x}%" y2="${p2.y}%" />`;
    // Label
    svgContent += `<text class="rmap__line-label rmap__line-label--hidden" data-from="${from}" data-to="${to}"
      x="${mx}%" y="${my}%" dy="-4">${label}</text>`;
  });

  svg.innerHTML = svgContent;

  // Legend
  if (legend) {
    legend.innerHTML = `
      <div class="rmap__legend-item">
        <span class="rmap__legend-dot rmap__legend-dot--center"></span>
        ${ui('rmapLegendCore')}
      </div>
      <div class="rmap__legend-item">
        <span class="rmap__legend-dot"></span>
        ${ui('rmapLegendArea')}
      </div>
      <div class="rmap__legend-item">
        <span class="rmap__legend-line rmap__legend-line--animated"></span>
        ${ui('rmapLegendConnection')}
      </div>
      <div class="rmap__legend-item rmap__legend-hint">
        ${ui('rmapLegendClick')}
      </div>
    `;
  }

  // Gather interactive elements
  const allNodes = nodesContainer.querySelectorAll('.rmap__node');
  const centerNode = document.querySelector('.rmap__node--center');
  const allLines = svg.querySelectorAll('.rmap__line');
  const allLabels = svg.querySelectorAll('.rmap__line-label');
  const hoverLines = svg.querySelectorAll('.rmap__line-hover');

  function getConnected(nodeId) {
    const connected = new Set();
    connected.add(nodeId);
    if (nodeId === 'center') {
      positions.forEach((_, i) => connected.add(String(i)));
    } else {
      connected.add('center');
      connections.forEach(([from, to]) => {
        if (String(from) === nodeId) connected.add(String(to));
        if (String(to) === nodeId) connected.add(String(from));
      });
    }
    return connected;
  }

  function highlightNode(nodeId) {
    const connected = getConnected(nodeId);

    allNodes.forEach(n => {
      const id = n.dataset.node;
      n.classList.toggle('rmap__node--highlight', connected.has(id));
      n.classList.toggle('rmap__node--dim', !connected.has(id));
    });

    if (centerNode) {
      centerNode.classList.toggle('rmap__node--highlight', connected.has('center'));
      centerNode.classList.toggle('rmap__node--dim', !connected.has('center'));
    }

    // Center-to-node lines: highlight/dim as before
    // Inter-area lines: reveal only the ones connected to this node
    allLines.forEach(line => {
      const f = line.dataset.from, tt = line.dataset.to;
      if (f === undefined || tt === undefined) return;
      const isConnected = connected.has(f) && connected.has(tt);
      const isInterArea = line.classList.contains('rmap__line--inter') || (f !== 'center' && tt !== 'center');

      if (isInterArea) {
        // Show/hide inter-area lines based on connection to active node
        line.classList.toggle('rmap__line--hidden', !isConnected);
        line.classList.toggle('rmap__line--highlight', isConnected);
        line.classList.remove('rmap__line--dim');
      } else {
        // Center lines: highlight/dim
        line.classList.toggle('rmap__line--highlight', isConnected);
        line.classList.toggle('rmap__line--dim', !isConnected);
      }
    });

    allLabels.forEach(label => {
      const f = label.dataset.from, tt = label.dataset.to;
      if (f !== undefined && tt !== undefined) {
        // Inter-area labels — show only relevant ones
        const isConnected = connected.has(f) && connected.has(tt);
        label.classList.toggle('rmap__line-label--hidden', !isConnected);
        label.classList.toggle('rmap__line-label--highlight', isConnected);
        label.classList.remove('rmap__line-label--dim');
      }
    });
  }

  function clearHighlight() {
    if (activeNodeId !== null) return;
    allNodes.forEach(n => {
      n.classList.remove('rmap__node--highlight', 'rmap__node--dim');
    });
    if (centerNode) {
      centerNode.classList.remove('rmap__node--highlight', 'rmap__node--dim');
    }
    allLines.forEach(l => {
      l.classList.remove('rmap__line--highlight', 'rmap__line--dim');
      // Re-hide inter-area lines
      if (l.classList.contains('rmap__line--inter') || (l.dataset.from !== 'center' && l.dataset.to !== 'center')) {
        l.classList.add('rmap__line--hidden');
      }
    });
    allLabels.forEach(l => {
      l.classList.remove('rmap__line-label--highlight', 'rmap__line-label--dim');
      if (l.dataset.from !== undefined) {
        l.classList.add('rmap__line-label--hidden');
      }
    });
  }

  // ── Detail Panel logic ──
  function showDetail(nodeIndex) {
    if (!detailPanel) return;
    const area = RESEARCH_AREAS[nodeIndex];
    if (!area) return;

    activeNodeId = String(nodeIndex);

    // Populate detail panel
    const icon = document.getElementById('rmap-detail-icon');
    const titleEl = document.getElementById('rmap-detail-title');
    const desc = document.getElementById('rmap-detail-desc');
    const tagsEl = document.getElementById('rmap-detail-tags');
    const connTitle = document.getElementById('rmap-detail-conn-title');
    const connList = document.getElementById('rmap-detail-conn-list');

    if (icon) { icon.src = `${BASE_PATH}/${area.icon}`; icon.alt = area.title.en; }
    if (titleEl) titleEl.textContent = t(area.title);
    if (desc) desc.textContent = t(area.detailDescription || area.description);
    if (tagsEl) tagsEl.innerHTML = area.tags.map(tag =>
      `<span class="rmap__detail-tag">${tag}</span>`
    ).join('');

    // Find connected areas
    if (connTitle) connTitle.textContent = ui('rmapDetailConnections');
    if (connList) {
      const connectedAreas = [];
      connections.forEach(([from, to, label]) => {
        if (from === nodeIndex) connectedAreas.push({ area: RESEARCH_AREAS[to], label });
        if (to === nodeIndex) connectedAreas.push({ area: RESEARCH_AREAS[from], label });
      });
      connList.innerHTML = connectedAreas.map(c =>
        `<li class="rmap__detail-conn-item">${t(c.area.title)} <strong>(${c.label})</strong></li>`
      ).join('');
    }

    // Mark active node
    allNodes.forEach(n => n.classList.remove('rmap__node--active'));
    const activeEl = nodesContainer.querySelector(`[data-node="${nodeIndex}"]`);
    if (activeEl) activeEl.classList.add('rmap__node--active');

    // Keep highlight locked
    highlightNode(String(nodeIndex));

    // Show panel
    detailPanel.classList.add('rmap__detail--open');
  }

  function hideDetail() {
    if (!detailPanel) return;
    activeNodeId = null;
    detailPanel.classList.remove('rmap__detail--open');
    allNodes.forEach(n => n.classList.remove('rmap__node--active'));
    clearHighlight();
  }

  // Close button
  const closeBtn = document.getElementById('rmap-detail-close');
  if (closeBtn) closeBtn.addEventListener('click', hideDetail);

  // ── Connection Tooltip logic ──
  function showTooltip(e, connIndex) {
    if (!tooltip) return;
    const conn = connections[connIndex];
    if (!conn) return;
    const fromName = t(RESEARCH_AREAS[conn[0]].title);
    const toName = t(RESEARCH_AREAS[conn[1]].title);
    const desc = t(conn[3]);
    tooltip.innerHTML = `<strong>${fromName} &harr; ${toName}</strong><br>${desc}`;
    tooltip.classList.add('rmap__tooltip--visible');
    moveTooltip(e);
  }

  function moveTooltip(e) {
    if (!tooltip) return;
    tooltip.style.left = (e.clientX + 12) + 'px';
    tooltip.style.top = (e.clientY - 8) + 'px';
  }

  function hideTooltip() {
    if (!tooltip) return;
    tooltip.classList.remove('rmap__tooltip--visible');
  }

  // ── Bind events ──
  // Hover: highlight connected nodes
  allNodes.forEach(n => {
    n.addEventListener('mouseenter', () => {
      if (activeNodeId === null) highlightNode(n.dataset.node);
    });
    n.addEventListener('mouseleave', () => {
      if (activeNodeId === null) clearHighlight();
    });
    // Click: show detail panel
    n.addEventListener('click', () => {
      const idx = parseInt(n.dataset.node, 10);
      if (activeNodeId === String(idx)) {
        hideDetail();
      } else {
        showDetail(idx);
      }
    });
  });

  if (centerNode) {
    centerNode.addEventListener('mouseenter', () => {
      if (activeNodeId === null) highlightNode('center');
    });
    centerNode.addEventListener('mouseleave', () => {
      if (activeNodeId === null) clearHighlight();
    });
    centerNode.addEventListener('click', hideDetail);
  }

  // Connection hover tooltips
  hoverLines.forEach(line => {
    const ci = parseInt(line.dataset.connIndex, 10);
    line.addEventListener('mouseenter', (e) => showTooltip(e, ci));
    line.addEventListener('mousemove', moveTooltip);
    line.addEventListener('mouseleave', hideTooltip);
  });
}

/* ── Research Areas 렌더링 ── */
function renderAreas() {
  const grid = document.getElementById('areas-grid');
  const title = document.querySelector('#areas .section__title');
  const subtitle = document.querySelector('#areas .section__subtitle');
  if (title) title.textContent = ui('areasTitle');
  if (subtitle) subtitle.textContent = ui('areasSubtitle');
  if (!grid) return;

  // Thematic visual HTML for each area
  const visuals = [
    // 0: AI Security — Bit-flip grid + scanner
    `<div class="area-card__visual area-visual--security">
      <div class="av__grid">${Array.from({length: 48}, (_, j) => {
        const flips = [6, 14, 22, 33, 40];
        const isFlip = flips.includes(j);
        return `<span class="av__bit${isFlip ? ' av__bit--flip' : ''}">${Math.random() > 0.5 ? '1' : '0'}</span>`;
      }).join('')}</div>
      <div class="av__scanner"></div>
    </div>`,
    // 1: Autonomous Driving — Road + car + signals
    `<div class="area-card__visual area-visual--driving">
      <div class="av__road"><div class="av__lane"></div></div>
      <div class="av__car"></div>
      <div class="av__signal"></div>
      <div class="av__signal"></div>
      <div class="av__signal"></div>
    </div>`,
    // 2: Quantum Computing — Qubits + entanglement
    `<div class="area-card__visual area-visual--quantum">
      <div class="av__qubit"></div>
      <div class="av__qubit"></div>
      <div class="av__qubit"></div>
      <div class="av__entangle"></div>
      <span class="av__state-label">|0⟩+|1⟩</span>
      <span class="av__state-label">|ψ⟩</span>
      <span class="av__state-label">|Φ+⟩</span>
    </div>`,
    // 3: AI Semiconductors — Circuit traces + signals + gates
    `<div class="area-card__visual area-visual--semiconductor">
      <div class="av__traces">
        <div class="av__trace"></div>
        <div class="av__trace"></div>
        <div class="av__trace"></div>
        <div class="av__trace"></div>
        <div class="av__trace av__trace--v"></div>
        <div class="av__trace av__trace--v"></div>
        <div class="av__signal-pulse"></div>
        <div class="av__signal-pulse"></div>
        <div class="av__signal-pulse"></div>
        <div class="av__signal-pulse"></div>
        <div class="av__gate"></div>
        <div class="av__gate"></div>
        <div class="av__gate"></div>
      </div>
    </div>`,
    // 4: Medical AI — ECG heartbeat + scan
    `<div class="area-card__visual area-visual--medical">
      <div class="av__ecg-container">
        <svg class="av__ecg-line" viewBox="0 0 600 60" preserveAspectRatio="none">
          <polyline points="0,30 30,30 40,30 50,28 55,35 60,10 65,50 70,25 75,30 90,30 120,30 130,30 140,28 145,35 150,10 155,50 160,25 165,30 180,30 210,30 220,30 230,28 235,35 240,10 245,50 250,25 255,30 270,30 300,30 310,30 320,28 325,35 330,10 335,50 340,25 345,30 360,30 390,30 400,30 410,28 415,35 420,10 425,50 430,25 435,30 450,30 480,30 490,30 500,28 505,35 510,10 515,50 520,25 525,30 540,30 570,30 600,30" />
        </svg>
      </div>
      <div class="av__scan"></div>
    </div>`,
    // 5: Network Security — Waves + lock + packets
    `<div class="area-card__visual area-visual--network">
      <svg class="av__wave" viewBox="0 0 200 100" preserveAspectRatio="none">
        <path d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50" />
      </svg>
      <svg class="av__wave" viewBox="0 0 200 100" preserveAspectRatio="none">
        <path d="M0,55 Q25,70 50,55 T100,55 T150,55 T200,55" />
      </svg>
      <div class="av__lock"></div>
      <div class="av__packet"></div>
      <div class="av__packet"></div>
      <div class="av__packet"></div>
    </div>`,
    // 6: Computer Vision — Bounding boxes + scanning frame
    `<div class="area-card__visual area-visual--vision">
      <div class="av__bbox av__bbox--1"></div>
      <div class="av__bbox av__bbox--2"></div>
      <div class="av__bbox av__bbox--3"></div>
      <div class="av__scan-frame"></div>
      <div class="av__detect-dot"></div>
      <div class="av__detect-dot"></div>
      <div class="av__detect-dot"></div>
    </div>`,
    // 7: Robotics — Robot arm + joint nodes
    `<div class="area-card__visual area-visual--robotics">
      <div class="av__arm-base"></div>
      <div class="av__arm-segment av__arm-segment--1"></div>
      <div class="av__arm-segment av__arm-segment--2"></div>
      <div class="av__joint av__joint--1"></div>
      <div class="av__joint av__joint--2"></div>
      <div class="av__joint av__joint--3"></div>
      <div class="av__gripper"></div>
    </div>`,
    // 8: LLM — Token stream + attention
    `<div class="area-card__visual area-visual--llm">
      <div class="av__token-stream">
        <span class="av__token">How</span>
        <span class="av__token">can</span>
        <span class="av__token">I</span>
        <span class="av__token av__token--highlight">help</span>
        <span class="av__token">you</span>
        <span class="av__token av__token--highlight">today</span>
        <span class="av__token">?</span>
      </div>
      <div class="av__attention-lines">
        <div class="av__attn-line"></div>
        <div class="av__attn-line"></div>
        <div class="av__attn-line"></div>
      </div>
    </div>`,
  ];

  grid.innerHTML = RESEARCH_AREAS.map((area, i) => `
    <div class="area-card fade-in" data-area="${i}">
      <button class="area-card__close" aria-label="Close">&times;</button>
      ${visuals[i] || ''}
      <div class="area-card__header">
        <div class="area-card__icon"><img src="${BASE_PATH}/${area.icon}" alt="${area.title.en}" /></div>
        <h3 class="area-card__title">${t(area.title)}</h3>
      </div>
      <p class="area-card__description">${t(area.description)}</p>
      <div class="area-card__tags">
        ${area.tags.map(tag => `<span class="tag tag--primary">${tag}</span>`).join('')}
      </div>
      <div class="area-card__expand-hint">
        <span class="area-card__expand-arrow"></span>
        ${ui('areasClickHint')}
      </div>
      <div class="area-card__detail">
        <div class="area-card__detail-divider"></div>
        <h4 class="area-card__detail-title">${ui('areasDetailTitle')}</h4>
        <div class="area-card__directions">
          ${area.tags.map((tag, ti) => `
            <div class="area-card__direction" data-tag="${tag}">
              <div class="area-card__direction-row">
                <span class="area-card__direction-tag">${tag}</span>
                <p class="area-card__direction-desc">${area.directions && area.directions[ti] ? t(area.directions[ti]) : ''}</p>
              </div>
              <div class="area-card__dir-anim"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');

  // Click-to-expand interaction
  const cards = grid.querySelectorAll('.area-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Ignore if clicking close button
      if (e.target.closest('.area-card__close')) return;
      // If already expanded, do nothing (use close button)
      if (card.classList.contains('area-card--expanded')) return;

      // Collapse any other expanded card
      cards.forEach(c => c.classList.remove('area-card--expanded'));
      // Expand this card
      card.classList.add('area-card--expanded');
      grid.classList.add('areas__grid--has-expanded');

      // Smooth scroll to expanded card
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    });

    // Close button
    const closeBtn = card.querySelector('.area-card__close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('area-card--expanded');
        grid.classList.remove('areas__grid--has-expanded');
      });
    }
  });

  // Direction mini-animation: tag → animation type mapping
  const tagAnimMap = {
    // bitflip: bit corruption & detection
    'Adversarial Attack': 'bitflip', 'Fault Injection': 'bitflip',
    // shield: defense & protection
    'FL Security': 'shield', 'Trust': 'shield', 'Privacy': 'shield', 'Wireless Security': 'shield',
    // circuit: hardware & quantum circuits
    'VQC': 'circuit', 'FPGA': 'circuit', 'CUDA': 'circuit', 'AI Accelerator': 'circuit',
    // wave: signals & modulation
    'AMC': 'wave', 'Quantum Security': 'wave', 'PennyLane': 'wave', 'Qiskit': 'wave',
    // car: driving & simulation
    'Autonomous Driving': 'car', 'Simulation': 'car',
    // brain: neural & language models
    'LLM': 'brain', 'Neuromorphic': 'brain', 'Federated Learning': 'brain',
    'Prompt Engineering': 'brain', 'Fine-tuning': 'brain', 'RAG': 'brain', 'Multi-modal': 'brain',
    // heartbeat: medical
    'Medical Imaging': 'heartbeat', 'Chest X-ray': 'heartbeat',
    // lock: cryptography & security protocols
    'BB84': 'lock', 'Tactical Network': 'lock',
    // qubit: quantum states
    'Quantum ML': 'qubit',
  };

  // Generate mini-animation HTML for each type
  function getMiniAnimHTML(type) {
    switch (type) {
      case 'bitflip': {
        const bits = Array.from({length: 32}, () => Math.random() > 0.5 ? '1' : '0');
        const bads = [3, 11, 19, 27];
        return `<div class="area-card__dir-anim-inner dir-anim--bitflip">
          <div class="da__row">${bits.slice(0,16).map((b,i) => `<span class="da__cell${bads.includes(i)?' da__cell--bad':''}">${b}</span>`).join('')}</div>
          <div class="da__row">${bits.slice(16).map((b,i) => `<span class="da__cell${bads.includes(i+16)?' da__cell--bad':''}">${b}</span>`).join('')}</div>
        </div>`;
      }
      case 'shield':
        return `<div class="area-card__dir-anim-inner dir-anim--shield">
          <div class="da__shield"></div>
          <div class="da__attack"></div><div class="da__attack"></div><div class="da__attack"></div>
        </div>`;
      case 'circuit':
        return `<div class="area-card__dir-anim-inner dir-anim--circuit">
          <div class="da__wire"></div><div class="da__gate-node"></div>
          <div class="da__wire"></div><div class="da__gate-node"></div>
          <div class="da__wire"></div>
        </div>`;
      case 'wave':
        return `<div class="area-card__dir-anim-inner dir-anim--wave">
          <svg viewBox="0 0 200 50" preserveAspectRatio="none">
            <path class="da__wave-path da__wave-path--a" d="M0,25 Q12,5 25,25 T50,25 T75,25 T100,25 T125,25 T150,25 T175,25 T200,25" />
            <path class="da__wave-path da__wave-path--b" d="M0,30 Q12,45 25,30 T50,30 T75,30 T100,30 T125,30 T150,30 T175,30 T200,30" />
          </svg>
        </div>`;
      case 'car':
        return `<div class="area-card__dir-anim-inner dir-anim--car">
          <div class="da__road"></div><div class="da__mini-car"></div>
        </div>`;
      case 'brain':
        return `<div class="area-card__dir-anim-inner dir-anim--brain">
          <div class="da__neuron"></div><div class="da__synapse"></div>
          <div class="da__neuron"></div><div class="da__synapse"></div>
          <div class="da__neuron"></div><div class="da__synapse"></div>
          <div class="da__neuron"></div><div class="da__synapse"></div>
          <div class="da__neuron"></div>
        </div>`;
      case 'heartbeat':
        return `<div class="area-card__dir-anim-inner dir-anim--heartbeat">
          <svg viewBox="0 0 400 50" preserveAspectRatio="none">
            <polyline class="da__ecg-path" points="0,25 20,25 30,25 35,22 38,30 42,8 46,42 50,20 54,25 70,25 100,25 110,25 115,22 118,30 122,8 126,42 130,20 134,25 150,25 180,25 190,25 195,22 198,30 202,8 206,42 210,20 214,25 230,25 260,25 270,25 275,22 278,30 282,8 286,42 290,20 294,25 310,25 340,25 350,25 355,22 358,30 362,8 366,42 370,20 374,25 400,25" />
          </svg>
        </div>`;
      case 'lock':
        return `<div class="area-card__dir-anim-inner dir-anim--lock">
          <div class="da__key-particle"></div><div class="da__key-particle"></div><div class="da__key-particle"></div>
          <div class="da__lock-icon"></div>
        </div>`;
      case 'qubit':
        return `<div class="area-card__dir-anim-inner dir-anim--qubit">
          <div class="da__q"></div><div class="da__q"></div>
        </div>`;
      default:
        return `<div class="area-card__dir-anim-inner dir-anim--wave">
          <svg viewBox="0 0 200 50" preserveAspectRatio="none">
            <path class="da__wave-path da__wave-path--a" d="M0,25 Q12,5 25,25 T50,25 T75,25 T100,25 T125,25 T150,25 T175,25 T200,25" />
          </svg>
        </div>`;
    }
  }

  // Bind direction click handlers
  grid.querySelectorAll('.area-card__direction').forEach(dir => {
    dir.addEventListener('click', (e) => {
      e.stopPropagation();
      const tag = dir.dataset.tag;
      const animContainer = dir.querySelector('.area-card__dir-anim');
      const isActive = dir.classList.contains('area-card__direction--active');

      // Close all other active directions in the same card
      dir.closest('.area-card__directions').querySelectorAll('.area-card__direction--active').forEach(d => {
        d.classList.remove('area-card__direction--active');
        d.querySelector('.area-card__dir-anim').innerHTML = '';
      });

      if (!isActive) {
        const animType = tagAnimMap[tag] || 'wave';
        animContainer.innerHTML = getMiniAnimHTML(animType);
        dir.classList.add('area-card__direction--active');
      }
    });
  });
}

/* ── Projects 렌더링 ── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const title = document.querySelector('#projects .section__title');
  const subtitle = document.querySelector('#projects .section__subtitle');
  if (title) title.textContent = ui('projectsTitle');
  if (subtitle) subtitle.textContent = ui('projectsSubtitle');
  if (!grid) return;

  const sorted = [...PROJECTS].sort((a, b) => b.progress - a.progress);
  grid.innerHTML = sorted.map(project => {
    const colorClass = getProgressColorClass(project.progress);
    const statusTag = getStatusTag(project.status);

    return `
      <div class="project-card fade-in">
        <div class="project-card__header">
          <h3 class="project-card__title">${t(project.title)}</h3>
          <span class="project-card__status">${statusTag}</span>
        </div>
        <p class="project-card__description">${t(project.description)}</p>
        <div class="project-card__meta">
          <span class="project-card__meta-item">📅 ${project.startDate}</span>
          <span class="project-card__meta-item project-card__team-logos">${project.teamLogos.map(logo => `<img src="${BASE_PATH}/${logo}" alt="team logo" class="project-card__team-logo${logo.endsWith('.webp') ? ' project-card__team-logo--invert' : ''}" />`).join('')}</span>
        </div>
        <div class="progress">
          <div class="progress__header">
            <span class="progress__label">${ui('progressLabel')}</span>
            <span class="progress__value">${project.progress}%</span>
          </div>
          <div class="progress__track">
            <div class="progress__bar ${colorClass}" data-progress="${project.progress}"></div>
          </div>
        </div>
        <div class="project-card__tags">
          ${project.tags.map(tag => `<span class="tag tag--primary">${tag}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ── Past Research 렌더링 ── */
function renderExperiments() {
  const list = document.getElementById('experiments-list');
  const title = document.querySelector('#experiments .section__title');
  const subtitle = document.querySelector('#experiments .section__subtitle');
  if (title) title.textContent = ui('experimentsTitle');
  if (subtitle) subtitle.textContent = ui('experimentsSubtitle');
  if (!list) return;

  list.innerHTML = PAST_PROJECTS.map((project, i) => {
    return `
      <div class="experiment-card fade-in">
        <div class="experiment-card__number">${String(i + 1).padStart(2, '0')}</div>
        <div class="experiment-card__content">
          <h3 class="experiment-card__title">${t(project.title)}</h3>
          <p class="experiment-card__description">${t(project.description)}</p>
          <div class="experiment-card__tags">
            ${project.tags.map(tag => `<span class="tag tag--primary">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="experiment-card__outcome">
          <span class="experiment-card__year">${project.year}</span>
          <span class="experiment-card__outcome-text">${t(project.outcome)}</span>
          ${project.teamLogos ? `<span class="experiment-card__team-logos">${project.teamLogos.map(logo => `<img src="${BASE_PATH}/${logo}" alt="team logo" class="project-card__team-logo${logo.endsWith('.webp') ? ' project-card__team-logo--invert' : ''}" />`).join('')}</span>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

/* ── Publications 렌더링 ── */
function renderPublications() {
  const list = document.getElementById('publications-list');
  const title = document.querySelector('#publications .section__title');
  const subtitle = document.querySelector('#publications .section__subtitle');
  if (title) title.textContent = ui('pubsTitle');
  if (subtitle) subtitle.textContent = ui('pubsSubtitle');
  if (!list) return;

  const typeBadge = (type) => {
    if (!type) return '';
    const cls = type === 'Journal' ? 'pub-type--journal' : 'pub-type--conf';
    const icon = type === 'Journal' ? 'fa-book' : 'fa-microphone-lines';
    return `<span class="pub-type ${cls}"><i class="fa-solid ${icon}"></i>${type}</span>`;
  };

  list.innerHTML = PUBLICATIONS.map(pub => `
    <div class="publication-item fade-in">
      <span class="publication-item__year">${pub.year}</span>
      <div class="publication-item__content">
        <h4 class="publication-item__title">${typeBadge(pub.type)}${pub.title}</h4>
        <p class="publication-item__authors">${pub.authors}</p>
        <p class="publication-item__venue">${pub.venue} ${pub.status ? `<span class="tag tag--success" style="font-style: normal; margin-left: 8px;">${pub.status}</span>` : ''}</p>
        <div class="publication-item__links">
          ${pub.links.map(link => `
            <a href="${link.url}" class="publication-item__link" target="_blank">${link.label}</a>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Talks 렌더링 ── */
function renderTalks() {
  const grid = document.getElementById('talks-grid');
  const title = document.querySelector('#talks .section__title');
  const subtitle = document.querySelector('#talks .section__subtitle');
  if (title) title.textContent = ui('talksTitle');
  if (subtitle) subtitle.textContent = ui('talksSubtitle');
  if (!grid) return;

  if (TALKS.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: var(--space-12); color: var(--text-muted);">
        <p style="font-size: var(--text-lg); margin-bottom: var(--space-2);">📋 ${ui('talksEmptyTitle')}</p>
        <p style="font-size: var(--text-sm);">${ui('talksEmptyDesc')}</p>
      </div>
    `;
    return;
  }

  const getYouTubeId = (url) => {
    const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : null;
  };

  grid.innerHTML = TALKS.map(talk => {
    const typeTag = getTalkTypeTag(talk.type);
    const videoLink = talk.links.find(l => /video|youtu/i.test(l.label) || /youtu/i.test(l.url));
    const ytId = videoLink ? getYouTubeId(videoLink.url) : null;
    return `
      <div class="talk-card fade-in">
        <div class="talk-card__type">${typeTag}</div>
        <h3 class="talk-card__title">${t(talk.title)}</h3>
        <p class="talk-card__event">${t(talk.event)}</p>
        <div class="talk-card__meta">
          <span>📅 ${talk.date}</span>
          <span>📍 ${t(talk.location)}</span>
        </div>
        <p class="talk-card__description">${t(talk.description)}</p>
        <div class="talk-card__links">
          ${talk.links.filter(l => l !== videoLink).map(link => `
            <a href="${link.url}" class="btn btn--outline" target="_blank">${link.label}</a>
          `).join('')}
          ${ytId ? `<a href="${videoLink.url}" class="talk-card__video-link" target="_blank">Go to video <span aria-hidden="true">→</span></a>` : ''}
        </div>
        ${ytId ? `
          <div class="talk-card__video-embed">
            <iframe
              src="https://www.youtube.com/embed/${ytId}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
              loading="lazy">
            </iframe>
          </div>
        ` : ''}
      </div>
    `;
  }).join('');
}

/* ── Timeline 렌더링 ── */
function renderTimeline() {
  const container = document.getElementById('timeline-container');
  const title = document.querySelector('#timeline .section__title');
  const subtitle = document.querySelector('#timeline .section__subtitle');
  if (title) title.textContent = ui('timelineTitle');
  if (subtitle) subtitle.textContent = ui('timelineSubtitle');
  if (!container) return;

  container.innerHTML = TIMELINE_EVENTS.map(event => `
    <div class="timeline__item fade-in">
      <div class="timeline__dot"></div>
      <div class="timeline__content">
        <span class="timeline__date">${event.date}</span>
        <h3 class="timeline__title">${event.logo ? `<img src="${BASE_PATH}/${event.logo}" alt="" class="timeline__logo">` : ''}${t(event.title)}</h3>
        <p class="timeline__description">${t(event.description)}</p>
        <div class="timeline__tags">
          ${event.tags.map(tag => `<span class="tag tag--accent">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ── Future Research 렌더링 ── */
function renderFuture() {
  const grid = document.getElementById('future-grid');
  const title = document.querySelector('#future .section__title');
  const subtitle = document.querySelector('#future .section__subtitle');
  if (title) title.textContent = ui('futureTitle');
  if (subtitle) subtitle.textContent = ui('futureSubtitle');
  if (!grid) return;

  grid.innerHTML = FUTURE_RESEARCH.map(item => {
    const priorityTag = getPriorityTag(item.priority);
    return `
      <div class="future-card fade-in">
        <div class="future-card__priority">${priorityTag}</div>
        <div class="future-card__icon"><img src="${BASE_PATH}/${item.icon}" alt="${item.title.en}" /></div>
        <h3 class="future-card__title">${t(item.title)}</h3>
        <p class="future-card__description">${t(item.description)}</p>
        <ul class="future-card__questions">
          ${item.openQuestions.map(q => `<li>${t(q)}</li>`).join('')}
        </ul>
        <div class="future-card__timeline">
          ⏱️ ${ui('futureTimeline')}: ${item.estimatedTimeline}
        </div>
      </div>
    `;
  }).join('');
}

/* ── Collaborations 렌더링 ── */
function renderCollaborations() {
  const grid = document.getElementById('collabs-grid');
  const title = document.querySelector('#collaborations .section__title');
  const subtitle = document.querySelector('#collaborations .section__subtitle');
  if (title) title.textContent = ui('collabsTitle');
  if (subtitle) subtitle.textContent = ui('collabsSubtitle');
  if (!grid) return;

  const current = COLLABORATIONS.filter(c => c.status === 'current');
  const past = COLLABORATIONS.filter(c => c.status === 'past');

  const renderCard = (collab) => `
    <div class="collab-card fade-in">
      <div class="collab-card__info">
        <div class="collab-card__logo">${
          collab.logo && (collab.logo.endsWith('.png') || collab.logo.endsWith('.jpg') || collab.logo.endsWith('.svg') || collab.logo.endsWith('.webp'))
            ? `<img src="${BASE_PATH}/${collab.logo}" alt="${collab.name}" class="collab-card__logo-img${collab.logo.endsWith('.webp') ? ' collab-card__logo-img--invert' : ''}${collab.darkBg ? ' collab-card__logo-img--dark-bg' : ''}" onerror="this.style.display='none';this.parentElement.textContent='🔬'">`
            : '🏢'
        }</div>
        <h3 class="collab-card__name">${collab.name}</h3>
        <p class="collab-card__type">${collab.type}</p>
      </div>
      <div class="collab-card__body">
        <p class="collab-card__description">${t(collab.description)}</p>
        <div class="collab-card__topics">
          ${collab.topics.map(topic => `<span class="tag tag--primary">${topic}</span>`).join('')}
        </div>
      </div>
      ${collab.members ? `
        <div class="collab-card__members">
          <p class="collab-card__members-title">${currentLang === 'ko' ? '연구 구성원' : 'Members'}</p>
          ${collab.members.map(m => `
            <div class="collab-card__member">
              <span class="collab-card__member-name">${t(m.name)}</span>
              <span class="collab-card__member-role">${t(m.role)}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;

  const currentLabel = currentLang === 'ko' ? '현재 협업' : currentLang === 'ja' ? '現在のコラボレーション' : currentLang === 'es' ? 'Colaboraciones actuales' : 'Current Collaborations';
  const pastLabel = currentLang === 'ko' ? '과거 협업' : currentLang === 'ja' ? '過去のコラボレーション' : currentLang === 'es' ? 'Colaboraciones pasadas' : 'Past Collaborations';

  grid.innerHTML = `
    <h3 class="collab-section-label collab-section-label--current">${currentLabel}</h3>
    ${current.map(renderCard).join('')}
    <h3 class="collab-section-label collab-section-label--past">${pastLabel}</h3>
    ${past.map(renderCard).join('')}
  `;
}

/* ── Footer 렌더링 ── */
function renderFooter() {
  const footer = document.getElementById('footer');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container">
      <div class="footer__content">
        <div class="footer__logo">${PROFILE.name} <span style="color: var(--color-accent);">Research</span></div>
        <div class="footer__links">
          <a href="${PROFILE.links.github}" class="footer__link" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="${PROFILE.links.scholar}" class="footer__link" target="_blank" title="Google Scholar"><i class="fa-brands fa-google-scholar"></i></a>
          <a href="${PROFILE.links.email}" class="footer__link" title="Email"><i class="fa-solid fa-envelope"></i></a>
          <a href="${PROFILE.links.linkedin}" class="footer__link" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          ${PROFILE.links.orcid ? `<a href="${PROFILE.links.orcid}" class="footer__link" target="_blank" title="ORCID"><i class="fa-brands fa-orcid"></i></a>` : ''}
          ${PROFILE.links.cv ? `<a href="${PROFILE.links.cv}" class="footer__link" target="_blank" title="CV"><i class="fa-solid fa-file-lines"></i></a>` : ''}
          ${PROFILE.links.website ? `<a href="${PROFILE.links.website}" class="footer__link" target="_blank" title="Website"><i class="fa-solid fa-globe"></i></a>` : ''}
          ${PROFILE.links.youtube ? `<a href="${PROFILE.links.youtube}" class="footer__link" target="_blank" title="YouTube"><i class="fa-brands fa-youtube"></i></a>` : ''}
          ${PROFILE.links.instagram ? `<a href="${PROFILE.links.instagram}" class="footer__link" target="_blank" title="Instagram"><i class="fa-brands fa-instagram"></i></a>` : ''}
          ${PROFILE.links.paperReview ? `<a href="${PROFILE.links.paperReview}" class="footer__link" target="_blank" title="Paper Review"><i class="fa-solid fa-book-open"></i></a>` : ''}
        </div>
      </div>
      <div class="footer__bottom">
        &copy; ${new Date().getFullYear()} ${PROFILE.name}. ${ui('footerRights')} | Open Research Portal
      </div>
    </div>
  `;
}

/* ── 유틸리티 함수 ── */
function getStatusTag(status) {
  const map = {
    active: '<span class="tag tag--success">Active</span>',
    planning: '<span class="tag tag--accent">Planning</span>',
    completed: '<span class="tag tag--primary">Completed</span>',
    paused: '<span class="tag tag--danger">Paused</span>',
  };
  return map[status] || '';
}

function getTalkTypeTag(type) {
  const map = {
    keynote: '<span class="tag tag--accent">Keynote</span>',
    invited: '<span class="tag tag--primary">Invited Talk</span>',
    workshop: '<span class="tag tag--success">Workshop</span>',
    poster: '<span class="tag tag--primary">Poster</span>',
    tutorial: '<span class="tag tag--accent">Tutorial</span>',
    conference: '<span class="tag tag--primary">Conference</span>',
  };
  return map[type] || '';
}

function getPriorityTag(priority) {
  const map = {
    high: '<span class="tag tag--danger">High Priority</span>',
    medium: '<span class="tag tag--accent">Medium</span>',
    low: '<span class="tag tag--primary">Low</span>',
  };
  return map[priority] || '';
}
