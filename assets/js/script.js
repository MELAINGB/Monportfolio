/* =========================
   MENU MOBILE (IONICON)
========================= */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    const isOpen = navbar.classList.contains('active');
    // Ionicons: change l'icône
    menuIcon.setAttribute('name', isOpen ? 'close-outline' : 'grid-outline');
  });

  // Fermer le menu quand on clique sur un lien (mobile)
  navbar.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    navbar.classList.remove('active');
    menuIcon.setAttribute('name', 'grid-outline');
  });
}

/* =========================
   DARK MODE (avec mémoire)
========================= */
const darkModeIcon = document.querySelector('#darkMode-icon');

function setDarkMode(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  if (darkModeIcon) darkModeIcon.classList.toggle('bx-sun', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// init depuis localStorage
(() => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') setDarkMode(true);
})();

if (darkModeIcon) {
  darkModeIcon.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setDarkMode(isDark);
  });
}

/* =========================
   STARS (random position + taille)
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  stars.forEach(star => {
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = (-Math.random() * 120) + "vh";
    const size = 6 + Math.random() * 14; // 6px à 20px
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.opacity = (0.2 + Math.random() * 0.6).toString();
    star.style.animationDuration = (6 + Math.random() * 6) + "s";
  });
});

/* =========================
   POPUPS (formations / projets)
   - fermer par overlay + ESC
========================= */
function fermerPopup(id) {
  const popup = document.getElementById(id);
  if (!popup) return;
  popup.style.display = 'none';
}

function afficherPopup(id) {
  const popup = document.getElementById(id);
  if (!popup) return;

  popup.style.display = 'flex';

  // fermer si clic sur l'overlay (fond)
  const onOverlayClick = (e) => {
    if (e.target === popup) fermerPopup(id);
  };
  popup.addEventListener('click', onOverlayClick, { once: true });
}

// rendre global pour les onclick="afficherPopup('popupX')"
window.fermerPopup = fermerPopup;
window.afficherPopup = afficherPopup;

/* =========================
   FULLSCREEN CERTIFS
   - clic overlay + ESC
========================= */
function setupFullscreenImage(buttonId, imageId, closeButtonId) {
  const button = document.getElementById(buttonId);
  const image = document.getElementById(imageId);
  const closeButton = document.getElementById(closeButtonId);

  if (!button || !image || !closeButton) return;

  button.addEventListener('click', () => {
    image.style.display = 'flex';

    // fermer en cliquant sur le fond noir
    const onOverlayClick = (e) => {
      if (e.target === image) image.style.display = 'none';
    };
    image.addEventListener('click', onOverlayClick, { once: true });
  });

  closeButton.addEventListener('click', () => {
    image.style.display = 'none';
  });
}

setupFullscreenImage('showImage1', 'fullscreenImage1', 'closeButton1');
setupFullscreenImage('showImage2', 'fullscreenImage2', 'closeButton2');
setupFullscreenImage('showImage3', 'fullscreenImage3', 'closeButton3');
setupFullscreenImage('showImage4', 'fullscreenImage4', 'closeButton4');
setupFullscreenImage('showImage5', 'fullscreenImage5', 'closeButton5');

/* =========================
   ESC pour fermer popups + fullscreen
========================= */
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;

  document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.fullscreen-image').forEach(p => p.style.display = 'none');

  // fermer menu mobile si ouvert
  if (navbar && navbar.classList.contains('active')) {
    navbar.classList.remove('active');
    if (menuIcon) menuIcon.setAttribute('name', 'grid-outline');
  }
});

/* =========================
   CARROUSEL (x2) robuste
========================= */
function setupCarousel(trackId, prevButtonId, nextButtonId) {
  const track = document.getElementById(trackId);
  if (!track) return;

  const items = track.querySelectorAll('.carousel-item');
  if (!items.length) return;

  const prevButton = document.getElementById(prevButtonId);
  const nextButton = document.getElementById(nextButtonId);

  let currentIndex = 0;

  function itemWidth() {
    return items[0].getBoundingClientRect().width;
  }

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * itemWidth()}px)`;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  }

  if (nextButton) nextButton.addEventListener('click', showNext);
  if (prevButton) prevButton.addEventListener('click', showPrev);

  window.addEventListener('resize', updateCarousel);

  updateCarousel();
  setInterval(showNext, 5000);
}

setupCarousel('carouselTrack1', 'prevButton1', 'nextButton1');
setupCarousel('carouselTrack2', 'prevButton2', 'nextButton2');

/* =========================
   ACCORDION (Savoir faire)
========================= */
const accordions = document.querySelectorAll('.option-card');

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    accordion.classList.toggle('active');
    const panel = accordion.nextElementSibling;
    if (!panel) return;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

/* =========================
   SHOW-MORE (évite bug si absent)
========================= */
const showMoreBtn = document.querySelector('.show-more');
if (showMoreBtn) {
  showMoreBtn.addEventListener('click', () => {
    alert('Fonction "Afficher plus" cliquée (fonctionnalité à développer).');
  });
}
