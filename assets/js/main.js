// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", function () {
  console.log('hi');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
});