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
