function theme() {
  const switchers = document.querySelectorAll('[data-theme-switcher]');

  switchers.forEach((switcher) => {
    switcher.checked = document.body.getAttribute('data-theme') === 'dark';

    switcher.addEventListener('change', function(e) {
      if (e.target.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        // drawParticle('dark');
      } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        // drawParticle('light');
      }
    })
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    localStorage.setItem('theme', e.matches ? 'dark' : 'light');
    // drawParticle(e.matches ? 'dark' : 'light');
    switchers.forEach((switcher) => {
      switcher.checked = e.matches;
    });
  });
}

theme();
