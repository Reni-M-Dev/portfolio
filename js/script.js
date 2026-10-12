(function () {
  'use strict';
  var nav = document.getElementById('nav');
  function onScroll() { nav.classList.toggle('scrolled', window.scrollY > 40); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  // Fade-up reveal
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll('.reveal').forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); });

  // Close mobile menu after tap
  document.querySelectorAll('#menu .nav-link').forEach(function (a) {
    a.addEventListener('click', function () {
      var m = document.getElementById('menu');
      if (m.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(m).hide();
    });
  });

  // Video modal
  var vm = document.getElementById('vm'), mv = document.getElementById('mv');
  var modal = bootstrap.Modal.getOrCreateInstance(vm);
  document.querySelectorAll('.card-work').forEach(function (c) {
    c.addEventListener('click', function () {
      document.getElementById('vt').textContent = c.dataset.title;
      document.getElementById('vd').textContent = c.dataset.desc;
      mv.poster = c.dataset.poster; mv.src = c.dataset.video;
      modal.show();
    });
  });
  vm.addEventListener('hidden.bs.modal', function () { mv.pause(); mv.removeAttribute('src'); mv.load(); });

  document.getElementById('yr').textContent = new Date().getFullYear();
})();
