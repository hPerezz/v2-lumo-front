document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
  
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
          submenu.style.display = 'flex';
        }
      });
  
      item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.submenu');
        if (submenu) {
          submenu.style.display = 'none';
        }
      });
    });
  });

  