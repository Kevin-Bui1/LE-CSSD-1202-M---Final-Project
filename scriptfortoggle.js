// Selectors
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility
mobileMenuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the event from propagating to the document
  mobileMenu.classList.toggle('active');
});

// Close the menu when clicking outside or on menu items
document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && e.target !== mobileMenuToggle) {
    mobileMenu.classList.remove('active');
  }
});

// Close the menu when clicking on a menu item
mobileMenu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    mobileMenu.classList.remove('active');
  }
});
