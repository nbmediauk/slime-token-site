const slimeCursor = document.getElementById('slime-cursor');
document.addEventListener('mousemove', (e) => {
  requestAnimationFrame(() => {
    slimeCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});
