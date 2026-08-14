const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav?.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.addEventListener('pointermove', (event) => {
  const glow = document.querySelector('.cursor-glow');
  if (glow) {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

// Smooth parallax for the hero visual on larger screens.
const visual = document.querySelector('.hero-visual');
window.addEventListener('scroll', () => {
  if (!visual || window.innerWidth < 900) return;
  const y = Math.min(window.scrollY * 0.06, 28);
  visual.style.transform = `translateY(${y}px)`;
}, { passive: true });
