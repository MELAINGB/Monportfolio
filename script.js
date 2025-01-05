const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let darkMondeIcon = document.querySelector('#darkMode-icon');

darkMondeIcon.onclick = () => {
    darkMondeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    stars.forEach(star => {
      star.style.left = Math.random() * 100 + "vw";
      star.style.top = Math.random() * -100 + "vh"; /* Commencer en dehors de la vue pour l'effet de chute */
    });
  });



  /* Les pop-up*/

  function fermerPopup(id) {
    document.getElementById(id).style.display = 'none';
}

function afficherPopup(id) {
    document.getElementById(id).style.display = 'flex';
}

window.onload = function() {
    // Code initial pour afficher les pop-ups au chargement de la page est supprimé
}



function setupCarousel(trackId, prevButtonId, nextButtonId) {
    const track = document.getElementById(trackId);
    const items = track.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById(prevButtonId);
    const nextButton = document.getElementById(nextButtonId);
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    }

    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    setInterval(showNext, 5000);
}

setupCarousel('carouselTrack1', 'prevButton1', 'nextButton1');
setupCarousel('carouselTrack2', 'prevButton2', 'nextButton2');


/* En savoir plus*/

function setupFullscreenImage(buttonId, fullscreenImageId, closeButtonId) {
    const button = document.getElementById(buttonId);
    const fullscreenImage = document.getElementById(fullscreenImageId);
    const closeButton = document.getElementById(closeButtonId);

    button.addEventListener('click', () => {
        fullscreenImage.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        fullscreenImage.style.display = 'none';
    });

    fullscreenImage.addEventListener('click', (event) => {
        if (event.target === fullscreenImage) {
            fullscreenImage.style.display = 'none';
        }
    });
}

setupFullscreenImage('showImage1', 'fullscreenImage1', 'closeButton1');
setupFullscreenImage('showImage2', 'fullscreenImage2', 'closeButton2');
setupFullscreenImage('showImage3', 'fullscreenImage3', 'closeButton3');