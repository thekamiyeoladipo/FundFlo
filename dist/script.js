document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
  
    // Toggle mobile menu visibility
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent click from propagating to window
      mobileMenu.classList.add('show');
      mobileMenu.classList.remove('hidden');
    });
  
    // Close mobile menu when close button is clicked
    closeBtn.addEventListener('click', function () {
      closeMenu();
    });
  
    // Close menu when clicking outside of it
    window.addEventListener('click', function (e) {
      if (!mobileMenu.contains(e.target) && e.target !== menuBtn) {
        closeMenu();
      }
    });
  
    // Close menu and reset state
    function closeMenu() {
      mobileMenu.classList.remove('show');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 500); // Match the transition duration
    }
  });
  