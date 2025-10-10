        
        
        
var navLinks = document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.left = "0";
    }

    function hideMenu(){
        navLinks.style.left = "100%"
    }

// ===== Toggle project descriptions =====
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
