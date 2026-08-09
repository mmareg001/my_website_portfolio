const initSiteScripts = () => {
  const text = "Hello World, I'm Gloria!";
  const typingTarget = document.getElementById('typing-text');
  const cursor = document.querySelector('.cursor');

  if (typingTarget) {
    let index = 0;
    const speed = 80;

    function typeChar() {
      if (index <= text.length) {
        typingTarget.textContent = text.slice(0, index);
        index += 1;
        window.requestAnimationFrame(() => setTimeout(typeChar, speed));
      } else if (cursor) {
        cursor.style.visibility = 'hidden';
      }
    }

    typeChar();
  }

  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('main-navigation');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.toggle('open');
      mainNav.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (navToggle.classList.contains('open')) {
          navToggle.classList.remove('open');
          mainNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteScripts);
} else {
  initSiteScripts();
}
