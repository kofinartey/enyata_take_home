const toggler = document.querySelector(".toggler");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
  mobileMenu.classList.toggle("show");
  overlay.classList.toggle("show");
}

toggler.addEventListener("click", () => {
  toggleMenu();
});

overlay.addEventListener("click", () => {
  toggleMenu();
});
