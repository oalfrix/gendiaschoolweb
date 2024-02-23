/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  toggle.addEventListener('click', () => {
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu');

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon');
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
          nav.classList.remove('show-menu');
          toggle.classList.remove('show-icon');
      }
  });
}


showMenu('nav-toggle','nav-menu')

//------------Gallery Script----------

  document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
  });

  document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
  }
