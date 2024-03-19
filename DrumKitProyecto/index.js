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
