/* ============================================
   SCROLL ANIMATIONS
   Intersection Observer로 스크롤 시 요소 등장 효과
   ============================================ */

function initTimeline() {
  // 이전 observer 정리
  if (window._scrollObserver) {
    window._scrollObserver.disconnect();
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // staggered delay 적용
        const el = entry.target;
        const delay = el.dataset.delay || 0;
        setTimeout(() => {
          el.classList.add('fade-in--visible');
        }, delay);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  // fade-in 요소에 stagger delay 자동 할당
  document.querySelectorAll('.fade-in').forEach((item, index) => {
    // 같은 부모 안에서의 인덱스 기반으로 딜레이 부여
    const parent = item.parentElement;
    const siblings = Array.from(parent.children).filter(c => c.classList.contains('fade-in'));
    const siblingIndex = siblings.indexOf(item);
    item.dataset.delay = siblingIndex * 80;
    item.classList.remove('fade-in--visible'); // reset for re-observe
    observer.observe(item);
  });

  // 타임라인 아이템 (별도 stagger)
  document.querySelectorAll('.timeline__item').forEach((item, index) => {
    item.dataset.delay = index * 120;
    item.classList.remove('fade-in--visible');
    observer.observe(item);
  });

  // 섹션 헤더 애니메이션
  document.querySelectorAll('.section__header').forEach(header => {
    header.classList.add('section-enter');
    observer.observe(header);
  });

  window._scrollObserver = observer;
}
