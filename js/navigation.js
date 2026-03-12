/* ============================================
   NAVIGATION
   멀티페이지 네비게이션 및 모바일 메뉴
   ============================================ */

function initNavigation() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  const navLinks = document.querySelectorAll('.nav__link');

  // 스크롤 시 네비게이션 스타일 변경
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  });

  // 모바일 메뉴 토글
  if (toggle) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('nav__links--open');
      toggle.classList.toggle('nav__toggle--active');
    });
  }

  // 네비 링크 클릭 시 모바일 메뉴 닫기
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('nav__links--open');
      if (toggle) toggle.classList.remove('nav__toggle--active');
    });
  });

  // 현재 페이지에 해당하는 네비 링크 활성화
  highlightCurrentPage(navLinks);
}

function highlightCurrentPage(navLinks) {
  const path = window.location.pathname;
  const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.classList.remove('nav__link--active');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });
}
