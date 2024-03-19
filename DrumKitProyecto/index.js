"use strict";
const crash = new Audio("./sonidos/crash.wav");
const hihatClose = new Audio("./sonidos/hihat-close.wav");
const tomLow = new Audio("./sonidos/tom-low.wav");
const snare = new Audio("./sonidos/snare.wav");
const kick = new Audio("./sonidos/kick.wav");
const tomMid = new Audio("./sonidos/tom-mid.wav");
const hihatOpen = new Audio("./sonidos/hihat-open.wav");

// primer crash

const losCrash = document.querySelector(".crashimg");
losCrash.onclick = () => {
  crash.play();
};

document.addEventListener("keydown", (event) => {
  if (event.key === "q" || event.key === "Q") {
    crash.play();
  }
});
//  Tomlow
const elTomlow = document.querySelector(".TomLowimg");
elTomlow.onclick = () => {
  tomLow.play();
};
document.addEventListener("keydown", (event) => {
  if (event.key === "w" || event.key === "W") {
    tomLow.play();
  }
});

// tomHigh

const eltomHigh = document.querySelector(".tomHighimg");
eltomHigh.onclick = () => {
  snare.play();
};
document.addEventListener("keydown", (event) => {
  if (event.key === "e" || event.key === "E") {
    snare.play();
  }
});

// kick
const elKick = document.querySelector(".kickimg");
elKick.onclick = () => {
  kick.play();
};
document.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    kick.play();
  }
});

// tommid

const eltommid = document.querySelector(".tommidimg");
eltommid.onclick = () => {
  tomMid.play();
};
document.addEventListener("keydown", (event) => {
  if (event.key === "t" || event.key === "T") {
    tomMid.play();
  }
});

// hihat

const elhihat = document.querySelector(".hiHatimg");
elhihat.onclick = () => {
  hihatClose.play();
};
document.addEventListener("keydown", (event) => {
  if (event.key === "y" || event.key === "Y") {
    hihatClose.play();
  }
});

// pruebas

// Array para almacenar la secuencia de sonidos grabados
let secuenciaGrabada = [];

// Variable para indicar si la grabación está activa
let grabacionActiva = false;

// Función para manejar el clic en el botón de grabación
function toggleGrabacion() {
  grabacionActiva = !grabacionActiva; // Invertir el estado de la grabación
  if (grabacionActiva) {
    secuenciaGrabada = []; // Reiniciar la secuencia de sonidos grabados al comenzar la grabación
  }
}

// Función para manejar el clic en el botón de reproducción
// Función para reproducir los sonidos grabados en el orden en que fueron presionados
function reproducirSonidosGrabados() {
  secuenciaGrabada.forEach((sonido, index) => {
    setTimeout(() => {
      sonido.play();
    }, index * 250); // Reproducir cada sonido con un retraso de 1 segundo (ajusta según sea necesario)
  });
}

// Asignar manejo de clic a los botones de grabación y reproducción
const botonGrabar = document.getElementById("botonGrabar");
botonGrabar.addEventListener("click", toggleGrabacion);

const botonReproducir = document.getElementById("botonReproducir");
botonReproducir.addEventListener("click", reproducirSonidosGrabados);

// Manejar eventos de teclado para la grabación
document.addEventListener("keydown", (event) => {
  if (grabacionActiva) {
    switch (event.key.toUpperCase()) {
      case "Q":
        secuenciaGrabada.push(crash);
        break;
      case "W":
        secuenciaGrabada.push(tomLow);
        break;
      case "E":
        secuenciaGrabada.push(snare);
        break;
      case "R":
        secuenciaGrabada.push(kick);
        break;
      case "T":
        secuenciaGrabada.push(tomMid);
        break;
      case "Y":
        secuenciaGrabada.push(hihatClose);
        break;
      default:
        break;
    }
  }
});
