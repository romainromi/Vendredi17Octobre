const  menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");


menuBtn.addEventListener("click", (event) => {
    event.stopPropagation(); 
    sidebar.classList.toggle("active")
})

document.addEventListener("click", (event) => {
    const isClickInSidebar = sidebar.contains(event.target);
    const isClickOnbutton = menuBtn.contains (event.target);

    if(!isClickInSidebar && !isClickOnbutton) {
        sidebar.classList.remove("active")
    }
})



// test pluie de fleurs avec chatgpt


// 🌸 Génération de petites fleurs qui tombent doucement
const fleurs = ["🌸", "🌼", "🌺", "🌻", "🌷", "💮"];

// Fonction qui crée une fleur
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("fleur");
  flower.textContent = fleurs[Math.floor(Math.random() * fleurs.length)];

  // Position aléatoire sur l'écran
  flower.style.left = Math.random() * 100 + "vw";

  // Taille aléatoire
  const size = Math.random() * 56 + 8; // entre 8px et 64px
  flower.style.fontSize = size + "px";

  // Rotation de départ aléatoire
  flower.style.transform = `rotate(${Math.random() * 360}deg)`;

  document.body.appendChild(flower);

  // Animation de chute
  const fallDuration = Math.random() * 5 + 5; // entre 5 et 10 secondes
  flower.style.animation = `fall ${fallDuration}s linear forwards`;

  // Supprime la fleur une fois tombée
  setTimeout(() => {
    flower.remove();
  }, fallDuration * 1000);
}

// 🌼 Lancer une fleur aléatoirement toutes les 3 à 7 secondes
setInterval(() => {
  if (Math.random() < 0.5) createFlower(); // environ 1 fleur sur 2 cycles
}, 3000);
