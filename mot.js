// Textes à afficher
const texts = ["Bienvenue sur mon Portfolio", "Je suis developpeur web et application"];
let index = 0;
let charIndex = 0; 

function typeText() {
    if (charIndex < texts[index].length) {
        document.getElementById('typed-text').textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Vitesse de frappe
    } else {
        setTimeout(deleteText, 3000); // Attente avant suppression
    }
}

function deleteText() {
    if (charIndex >= 0) {
        document.getElementById('typed-text').textContent = texts[index].substring(0, charIndex);
        charIndex--;
        setTimeout(deleteText, 50); // Vitesse de suppression
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeText, 500); // Attente avant d'écrire le prochain texte
    }
}

// Initialiser le processus
document.addEventListener("DOMContentLoaded", typeText);

// dynamic element pour div ou p

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.dynamic-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});


// dynamic element pour gauche ou droite
document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    });

    let elements = document.querySelectorAll('.animate-me');
    elements.forEach(element => observer.observe(element));
});


// Dynamic mot pour titre


document.addEventListener('DOMContentLoaded', function() {
    let observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    });
  
    let elements = document.querySelectorAll('.animate-me');
    elements.forEach(element => observer.observe(element));
  });














  const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

        serviceCardWithModals.forEach((serviceCardWithModal) => {
            const serviceCard =serviceCardWithModal.querySelector(".service-card");
            const serviceBackDrop =serviceCardWithModal.querySelector(".service-modal-backdrop");
            const serviceModal =serviceCardWithModal.querySelector(".service-modal");
            const modalCloseBtn =serviceCardWithModal.querySelector(".modal-close-btn");
            

            serviceCard.addEventListener("click",() =>{
                serviceBackDrop.style.display = "flex";
                setTimeout(() =>{
                    serviceBackDrop.classList.add("active");
                },100 );

                setTimeout(() =>{
                    serviceModal.classList.add("active")
                },300 );
                
            });
           modalCloseBtn.addEventListener("click", ()=>{
            serviceBackDrop.style.display = "none";
            serviceBackDrop.classList.remove("active");
            serviceModal.classList.remove("active");
           });
        });
  