/* ============================================
   PROGRESS BAR ANIMATIONS
   Intersection Observer로 뷰포트 진입 시 애니메이션
   ============================================ */

function getProgressColorClass(percent) {
  if (percent <= 25) return 'progress__bar--red';
  if (percent <= 50) return 'progress__bar--orange';
  if (percent <= 75) return 'progress__bar--blue';
  return 'progress__bar--green';
}

function getProgressColor(percent) {
  if (percent <= 25) return 'var(--progress-0-25)';
  if (percent <= 50) return 'var(--progress-26-50)';
  if (percent <= 75) return 'var(--progress-51-75)';
  return 'var(--progress-76-100)';
}

function initProgressBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll('[data-progress]');
        bars.forEach(bar => {
          const value = parseInt(bar.dataset.progress);
          setTimeout(() => {
            bar.style.width = value + '%';
          }, 200);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // 프로그레스 바가 포함된 모든 섹션 관찰
  document.querySelectorAll('#projects, #experiments').forEach(section => {
    if (section) observer.observe(section);
  });
}

function initCountUp() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('[data-count]');
        counters.forEach(counter => {
          const target = parseInt(counter.dataset.count);
          animateCount(counter, target);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('#overview, #hero').forEach(section => {
    if (section) observer.observe(section);
  });
}

function animateCount(element, target) {
  let current = 0;
  const increment = target / 40;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 30);
}
