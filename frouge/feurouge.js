// Sélectionner toutes les lumières
const lights = document.querySelectorAll(".light");

// Définir l'index pour suivre quelle lumière est active
let currentIndex = 0;

// Fonction pour changer la lumière
function changeLight() {
    // Désactiver toutes les lumières
    lights.forEach((light) => light.classList.remove("active"));

    // Activer la lumière courante
    lights[currentIndex].classList.add("active");

    // Déterminer le délai en fonction de la lumière actuelle
    let delay;
    if (currentIndex === 1) { // Jaune
        delay = 1000; // Clignote rapidement
    } else { // Rouge ou vert
        delay = 2000; // Plus long pour rouge et vert
    }

    // Passer à la lumière suivante
    currentIndex = (currentIndex + 1) % lights.length;

    // Rappeler la fonction après le délai
    setTimeout(changeLight, delay);
}

// Lancer la séquence au chargement de la page
changeLight();
