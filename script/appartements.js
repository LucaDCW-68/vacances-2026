// Gestion du carrousel d'images
function changerImage(direction, bouton) {
  const carrousel = bouton.closest(".carrousel");
  const images = carrousel.querySelectorAll(".carrousel-image");
  const indicators = carrousel.querySelectorAll(".indicator");

  // Trouver l'image actuellement active
  let indexActuel = -1;
  images.forEach((img, index) => {
    if (img.classList.contains("active")) {
      indexActuel = index;
    }
  });

  // Calculer le nouvel index
  let nouvelIndex = indexActuel + direction;
  if (nouvelIndex >= images.length) {
    nouvelIndex = 0;
  } else if (nouvelIndex < 0) {
    nouvelIndex = images.length - 1;
  }

  // Mettre à jour les classes active
  images[indexActuel].classList.remove("active");
  indicators[indexActuel].classList.remove("active");

  images[nouvelIndex].classList.add("active");
  indicators[nouvelIndex].classList.add("active");
}

function allerAImage(index, indicator) {
  const carrousel = indicator.closest(".carrousel");
  const images = carrousel.querySelectorAll(".carrousel-image");
  const indicators = carrousel.querySelectorAll(".indicator");

  // Retirer toutes les classes active
  images.forEach((img) => img.classList.remove("active"));
  indicators.forEach((ind) => ind.classList.remove("active"));

  // Ajouter la classe active aux éléments sélectionnés
  images[index].classList.add("active");
  indicators[index].classList.add("active");
}

// Défilement automatique du carrousel (optionnel)
function demarrerCarrouselAuto() {
  const carrousels = document.querySelectorAll(".carrousel");

  carrousels.forEach((carrousel) => {
    const boutonNext = carrousel.querySelector(".next");

    setInterval(() => {
      // Vérifier si la souris n'est pas sur le carrousel
      if (!carrousel.matches(":hover")) {
        changerImage(1, boutonNext);
      }
    }, 5000); // Change d'image toutes les 5 secondes
  });
}

// Initialisation du carrousel automatique au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  demarrerCarrouselAuto();
});

// Gestion des touches clavier pour le carrousel
document.addEventListener("keydown", function (event) {
  const carrouselActif = document.querySelector(".carrousel:hover");
  if (carrouselActif) {
    const boutonNext = carrouselActif.querySelector(".next");
    const boutonPrev = carrouselActif.querySelector(".prev");

    if (event.key === "ArrowRight") {
      event.preventDefault();
      changerImage(1, boutonNext);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      changerImage(-1, boutonPrev);
    }
  }
});
