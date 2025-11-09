// ========== Navigation Menu ==========
function showMenu() {
  navLinks.style.right = "0%";
}

function hideMenu() {
  navLinks.style.right = "-40%";
}


// ========== Toggle Project Descriptions ==========
document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const description = button.previousElementSibling;

    description.classList.toggle('active');
    button.classList.toggle('active');

    // Change button text
    if (description.classList.contains('active')) {
      button.textContent = 'SHOW LESS';
    } else {
      button.textContent = 'LEARN MORE';
    }
  });
});

document.querySelectorAll('.toggle-subtitle').forEach(h3 => {
  h3.addEventListener('click', () => {
    const p = h3.nextElementSibling;
    if (p && p.classList.contains('subtitle-description')) {
      p.classList.toggle('active');
      h3.classList.toggle('open'); // keeps underline while open
    }
  });
});


// ========== Expandable Image Overlay ==========
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.expandable-img');

  // Create the overlay element once
  const overlay = document.createElement('div');
  overlay.classList.add('image-overlay');
  const overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  // Click to open
  images.forEach(img => {
    img.addEventListener('click', () => {
      overlayImg.src = img.src;
      overlay.classList.add('active');
    });
  });

  // Click overlay to close
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
});


// ========== FUNDRAISER SLIDESHOW ==========
document.addEventListener('DOMContentLoaded', () => {
  const mainSlides = document.querySelectorAll(".main-slide");
  if (mainSlides.length === 0) return; // Skip if not on Non-Profit page

  let mainIndex = 1;
  const dots = document.querySelectorAll(".main-dots .dot");
  const prev = document.querySelector(".main-prev");
  const next = document.querySelector(".main-next");

  function showMainSlides(n) {
    if (n > mainSlides.length) mainIndex = 1;
    if (n < 1) mainIndex = mainSlides.length;

    mainSlides.forEach(s => (s.style.display = "none"));
    dots.forEach(d => d.classList.remove("active"));

    mainSlides[mainIndex - 1].style.display = "block";
    dots[mainIndex - 1].classList.add("active");
  }

  function plusMainSlides(n) {
    showMainSlides(mainIndex += n);
  }

  // Controls
  if (prev) prev.onclick = () => plusMainSlides(-1);
  if (next) next.onclick = () => plusMainSlides(1);

  // Dots
  dots.forEach((dot, i) => {
    dot.onclick = () => showMainSlides(mainIndex = i + 1);
  });

  // Initialize
  showMainSlides(mainIndex);

  // Optional auto-play
  setInterval(() => plusMainSlides(1), 5000);
});


// ========== GALLERY SLIDESHOW ==========
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  if (!gallery) return; // Skip if not on Non-Profit page

  const tabs = gallery.querySelectorAll(".tab");
  const slides = gallery.querySelectorAll(".slide");
  const prevBtn = gallery.querySelector(".gallery-prev-btn");
  const nextBtn = gallery.querySelector(".gallery-next-btn");

  let activeCategory = "IC";
  let slideIndex = 1;

  function showSlides(n) {
    const visibleSlides = Array.from(slides).filter(
      (s) => s.dataset.cat === activeCategory
    );
    if (visibleSlides.length === 0) return;

    if (n > visibleSlides.length) slideIndex = 1;
    if (n < 1) slideIndex = visibleSlides.length;

    slides.forEach((s) => (s.style.display = "none"));
    visibleSlides[slideIndex - 1].style.display = "block";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Attach button controls
  if (prevBtn) prevBtn.onclick = () => plusSlides(-1);
  if (nextBtn) nextBtn.onclick = () => plusSlides(1);

  // Tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategory = tab.dataset.cat;
      slideIndex = 1;
      showSlides(slideIndex);
    });
  });

  // Initialize
  showSlides(slideIndex);
});
