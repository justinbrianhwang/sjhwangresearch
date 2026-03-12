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

  if (badge) badge.textContent = PROFILE.badge;
  if (nameEl) nameEl.textContent = PROFILE.name;
  if (desc) desc.textContent = t(PROFILE.description);
  if (affiliation) affiliation.textContent = t(PROFILE.affiliation);
  if (role) role.textContent = t(PROFILE.title);
  if (btnPrimary) btnPrimary.textContent = ui('heroViewProjects');
  if (btnSecondary) btnSecondary.textContent = ui('heroViewPubs');
  if (scholarLink) scholarLink.href = PROFILE.links.scholar;
  if (cvLink) cvLink.href = PROFILE.links.cv;
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

/* ── Research Areas 렌더링 ── */
function renderAreas() {
  const grid = document.getElementById('areas-grid');
  const title = document.querySelector('#areas .section__title');
  const subtitle = document.querySelector('#areas .section__subtitle');
  if (title) title.textContent = ui('areasTitle');
  if (subtitle) subtitle.textContent = ui('areasSubtitle');
  if (!grid) return;

  grid.innerHTML = RESEARCH_AREAS.map(area => `
    <div class="area-card fade-in">
      <div class="area-card__icon"><img src="${BASE_PATH}/${area.icon}" alt="${area.title.en}" /></div>
      <h3 class="area-card__title">${t(area.title)}</h3>
      <p class="area-card__description">${t(area.description)}</p>
      <div class="area-card__tags">
        ${area.tags.map(tag => `<span class="tag tag--primary">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ── Projects 렌더링 ── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const title = document.querySelector('#projects .section__title');
  const subtitle = document.querySelector('#projects .section__subtitle');
  if (title) title.textContent = ui('projectsTitle');
  if (subtitle) subtitle.textContent = ui('projectsSubtitle');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(project => {
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

  list.innerHTML = PUBLICATIONS.map(pub => `
    <div class="publication-item fade-in">
      <span class="publication-item__year">${pub.year}</span>
      <div class="publication-item__content">
        <h4 class="publication-item__title">${pub.title}</h4>
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

  grid.innerHTML = TALKS.map(talk => {
    const typeTag = getTalkTypeTag(talk.type);
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
          ${talk.links.map(link => `
            <a href="${link.url}" class="btn btn--outline" target="_blank">${link.label}</a>
          `).join('')}
        </div>
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
        <h3 class="timeline__title">${t(event.title)}</h3>
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

  grid.innerHTML = COLLABORATIONS.map(collab => `
    <div class="collab-card fade-in">
      <div class="collab-card__info">
        <div class="collab-card__logo">${
          collab.logo.endsWith('.png') || collab.logo.endsWith('.jpg') || collab.logo.endsWith('.svg') || collab.logo.endsWith('.webp')
            ? `<img src="${BASE_PATH}/${collab.logo}" alt="${collab.name}" class="collab-card__logo-img${collab.logo.endsWith('.webp') ? ' collab-card__logo-img--invert' : ''}${collab.darkBg ? ' collab-card__logo-img--dark-bg' : ''}" onerror="this.style.display='none';this.parentElement.textContent='🔬'">`
            : collab.logo
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
  `).join('');
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
          <a href="${PROFILE.links.github}" class="footer__link" target="_blank">GitHub</a>
          <a href="${PROFILE.links.scholar}" class="footer__link" target="_blank">Google Scholar</a>
          <a href="${PROFILE.links.email}" class="footer__link">Email</a>
          <a href="${PROFILE.links.linkedin}" class="footer__link" target="_blank">LinkedIn</a>
          ${PROFILE.links.cv ? `<a href="${PROFILE.links.cv}" class="footer__link" target="_blank">CV</a>` : ''}
          ${PROFILE.links.website ? `<a href="${PROFILE.links.website}" class="footer__link" target="_blank">Website</a>` : ''}
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
