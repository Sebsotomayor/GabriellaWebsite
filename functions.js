        
        
        
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
