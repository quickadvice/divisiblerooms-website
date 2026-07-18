(function () {
  var toggle = document.getElementById('nav-toggle');
  var panel = document.getElementById('nav-mobile-panel');

  if (!toggle || !panel) return;

  toggle.addEventListener('click', function () {
    var isOpen = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
})();
