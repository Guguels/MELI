// ---- Texto con efecto máquina de escribir ----
const texto = `🌼💛 Feliz cumpleaños, mi amor 💛🌼

Mi vida, hoy quiero desearte un feliz cumpleaños lleno de alegría, sonrisas y amor.
Eres mi niña, mi bebé, mi esposa de corazón, la razón por la que cada día quiero ser mejor.

Este 21 de septiembre, día de flores amarillas, quiero regalarte no solo esas flores que significan esperanza y amor, sino también mi corazón entero, porque eres lo más hermoso que tengo. 🌼✨

Mi amor, deseo que este nuevo año de vida te traiga todo lo que sueñas, que cada meta que te propongas la alcances, y que nunca te falte la felicidad.
Yo siempre estaré aquí para apoyarte, cuidarte y amarte con todo lo que soy.

Sé que hemos pasado momentos difíciles, pero también sé que lo nuestro es fuerte y verdadero.
Espero que cada día podamos mejorar, que nuestra historia siga creciendo, y que el futuro nos encuentre juntos, cumpliendo nuestros sueños.

Mi niña hermosa, gracias por existir y por ser parte de mi vida.
Feliz cumpleaños, mi bebé, te amo con todo mi corazón. 💛🌹`;

const velocidad = 40;
let i = 0;
const poemaDiv = document.getElementById("poema");
const imagenes = document.querySelectorAll("#imagenes img");

function escribir() {
  if (i < texto.length) {
    poemaDiv.textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, velocidad);
  } else {
    // Mostrar imágenes una a una
    imagenes.forEach((img, index) => {
      setTimeout(() => {
        img.style.opacity = "1";
      }, index * 1000);
    });
  }
}
escribir();

// ---- Fondo de estrellas ----
const canvas = document.getElementById("estrellas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let estrellas = [];
const numEstrellas = 120;

for (let i = 0; i < numEstrellas; i++) {
  estrellas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radio: Math.random() * 1.5,
    velocidad: Math.random() * 0.5
  });
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  estrellas.forEach(e => {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.radio, 0, Math.PI * 2);
    ctx.fill();
    e.y += e.velocidad;
    if (e.y > canvas.height) e.y = 0;
  });

  requestAnimationFrame(animar);
}
animar();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ---- Control de música ----
const musica = document.getElementById("musica");
const btnMusica = document.getElementById("btn-musica");

if (musica && btnMusica) {
  musica.volume = 0.5; // volumen inicial
  btnMusica.addEventListener("click", () => {
    musica.play();
    btnMusica.style.display = "none"; // ocultar botón tras iniciar
  });
}
