const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => mobileNav.classList.remove('active'));
});
