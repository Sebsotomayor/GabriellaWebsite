// ==========================
// NAVIGATION: MOBILE MENU TOGGLE
// ==========================

// Element References
const menuToggle = document.getElementById("menuToggle");
const navLinks   = document.getElementById("navLinks");
const closeMenu  = document.getElementById("closeMenu");
const overlay    = document.getElementById("overlay");

// Open Menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.add("active");
  overlay.classList.add("active");
});

// Close Menu (X Button)
closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});

// Close Menu (Overlay Click)
overlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
});