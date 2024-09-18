document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
      if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
      }
    });
  } else {
    console.error("Error");
  }
});
