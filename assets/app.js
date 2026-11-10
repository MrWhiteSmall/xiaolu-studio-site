/* 滚动入场：给每个章节块加 .reveal，进入视口后触发一次 */
(function () {
  var targets = document.querySelectorAll('.block .sec-head, .about-grid, .services > li, .steps > li, .claims > .claim, .pull, .contact > *');

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  targets.forEach(function (el) { io.observe(el); });
})();
