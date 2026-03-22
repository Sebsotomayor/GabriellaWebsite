// ==========================
// NAV MENU TOGGLE FOR SMALL DISPLAYS
// ==========================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  navLinks.classList.add("active");
  overlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

