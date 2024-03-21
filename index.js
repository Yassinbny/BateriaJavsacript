"use strict";

const crash = new Audio("./sonidos/crash.wav");
const hihatClose = new Audio("./sonidos/hihat-close.wav");
const tomLow = new Audio("./sonidos/tom-low.wav");
const snare = new Audio("./sonidos/snare.wav");
const kick = new Audio("./sonidos/kick.wav");
const tomMid = new Audio("./sonidos/tom-mid.wav");
const hihatOpen = new Audio("./sonidos/hihat-open.wav");

// Variables para manejar la grabación y la reproducción
let secuenciaGrabada = [];
let grabacionActiva = false;

// Función para activar/desactivar la grabación
function toggleGrabacion() {
  grabacionActiva = !grabacionActiva;
  if (grabacionActiva) {
    console.log("grabando...");
    secuenciaGrabada = []; // Reiniciar la secuencia cuando se detiene la grabación
  }
}

// Función para reproducir la secuencia grabada
function reproducirSecuencia() {
  secuenciaGrabada.forEach((sonido, index) => {
    setTimeout(() => {
      sonido.play();
    }, index * 500); // Reproducir cada sonido con un retraso de 500 milisegundos
  });
}

// Asignar manejo de clic al botón de grabación
const botonGrabar = document.getElementById("botonGrabar");
botonGrabar.addEventListener("click", toggleGrabacion);

// Asignar manejo de clic al botón de detener
const botonDetener = document.getElementById("botonDetener");
botonDetener.addEventListener("click", toggleGrabacion);

// Asignar manejo de clic al botón de reproducción
const botonReproducir = document.getElementById("botonReproducir");
botonReproducir.addEventListener("click", reproducirSecuencia);

// Funciones para manejar los clics en los elementos de la interfaz
// CRash
const losCrash = document.querySelector(".crashimg");
losCrash.onclick = () => {
  if (grabacionActiva) {
    crash.play();
    secuenciaGrabada.push(crash);
  } else {
    crash.play();
  }
};
document.addEventListener("keydown", (event) => {
  if (event.key === "q" || event.key === "Q") {
    crash.play();
  }
});
// tomlow
const elTomlow = document.querySelector(".TomLowimg");
elTomlow.onclick = () => {
  tomLow.play();
  if (grabacionActiva) {
    secuenciaGrabada.push(tomLow);
  } else {
    tomLow.play();
  }
};
document.addEventListener("keydown", (event) => {
  if (event.key === "w" || event.key === "W") {
    tomLow.play();
  }
});
// tomhigh
const eltomHigh = document.querySelector(".tomHighimg");
eltomHigh.onclick = () => {
  snare.play();
  if (grabacionActiva) {
    secuenciaGrabada.push(snare);
  } else {
    snare.play();
  }
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
  if (grabacionActiva) {
    secuenciaGrabada.push(kick);
  } else {
    kick.play();
  }
};
document.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    kick.play();
  }
});
// tommid
const eltommid = document.querySelector(".tommidimg");
eltommid.onclick = () => {
  if (grabacionActiva) {
    tomMid.play();
    secuenciaGrabada.push(tomMid);
  } else {
    tomMid.play();
  }
};
document.addEventListener("keydown", (event) => {
  if (event.key === "t" || event.key === "T") {
    tomMid.play();
  }
});
// hihat
const elhihat = document.querySelector(".hiHatimg");
elhihat.onclick = () => {
  if (grabacionActiva) {
    hihatClose.play();
    secuenciaGrabada.push(hihatClose);
  } else {
    hihatClose.play();
  }
};
document.addEventListener("keydown", (event) => {
  if (event.key === "y" || event.key === "Y") {
    hihatClose.play();
  }
});

// Manejar eventos de teclado para grabar sonidos
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
