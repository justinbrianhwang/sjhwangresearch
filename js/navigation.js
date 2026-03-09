/* ============================================
   NAVIGATION
   스크롤 시 네비게이션 효과 및 모바일 메뉴
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
    updateActiveLink();
  });

  // 모바일 메뉴 토글
  if (toggle) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('nav__links--open');
    });
  }

  // 네비 링크 클릭 시 모바일 메뉴 닫기
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('nav__links--open');
    });
  });

  // 현재 섹션에 따라 활성 링크 업데이트
  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('nav__link--active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }
}
