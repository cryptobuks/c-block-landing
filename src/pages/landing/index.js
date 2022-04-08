const canvasDiv = document.getElementById('bg-nodes');

function drawParticle(theme) {
  canvasDiv.innerHTML = '';
  new ParticleNetwork(canvasDiv, {
    particleColor: '#91FF35',
    background: theme === 'dark' ? '#000' : '#fff',
    interactive: false,
    speed: 'medium',
    density: 'high'
  });
}

function initParticle() {
  const theme = document.body.getAttribute('data-theme');
  if (theme) {
    drawParticle(theme);
  }
}

function theme() {
  const switchers = document.querySelectorAll('[data-theme-switcher]');

  switchers.forEach((switcher) => {
    switcher.checked = document.body.getAttribute('data-theme') === 'dark';

    switcher.addEventListener('change', function(e) {
      if (e.target.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        drawParticle('dark');
      } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        drawParticle('light');
      }
    })
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    document.body.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    localStorage.setItem('theme', e.matches ? 'dark' : 'light');
    drawParticle(e.matches ? 'dark' : 'light');
    switchers.forEach((switcher) => {
      switcher.checked = e.matches;
    });
  });
}

initParticle(); 
theme();
