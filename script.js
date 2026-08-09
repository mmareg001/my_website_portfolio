document.addEventListener('DOMContentLoaded', () => {
  const text = "Hello World, I'm Gloria!";
  const typingTarget = document.getElementById('typing-text');
  if (!typingTarget) return;

  let index = 0;
  const speed = 80;
  const cursor = document.querySelector('.cursor');

  function typeChar() {
    if (index <= text.length) {
      typingTarget.textContent = text.slice(0, index);
      index += 1;
      window.requestAnimationFrame(() => setTimeout(typeChar, speed));
    } else {
      if (cursor) {
        cursor.style.visibility = 'hidden';
      }
    }
  }

  typeChar();
});
