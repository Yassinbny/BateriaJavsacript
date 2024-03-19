"use strict";
const crash = new Audio("./sonidos/crash.wav");
const hihatClose = new Audio("./sonidos/hihat-close.wav");
const tomLow = new Audio("./sonidos/tom-low.wav");
const snare = new Audio("./sonidos/snare.wav");
const kick = new Audio("./sonidos/kick.wav");
const tomMid = new Audio("./sonidos/tom-mid.wav");
const hihatOpen = new Audio("./sonidos/hihat-open.wav");

// primer crash

const todosLosCrash = document.getElementsByClassName("crashimg");
for (const i of todosLosCrash) {
  i.onclick = () => {
    crash.play();
  };
}

document.addEventListener("keydown", (event) => {
  if (
    event.key === "q" ||
    event.key === "Q" ||
    event.key === "o" ||
    event.key === "O"
  ) {
    crash.play();
  }
});

// hihat close
const todosLosHihat = document.getElementsByClassName("hihatimg");

for (const element of todosLosHihat) {
  element.onclick = () => {
    hihatClose.play();
  };
}
document.addEventListener("keydown", (event) => {
  if (
    event.key === "w" ||
    event.key === "W" ||
    event.key === "i" ||
    event.key === "I"
  ) {
    hihatClose.play();
  }
});

// tomlow

const tomLowTambor = document.querySelector(".tomlowimg");
tomLowTambor.onclick = function () {
  tomLow.play();
};
document.addEventListener("keydown", (element) => {
  if (element.key === "e" || element.key === "E") {
    tomLow.play();
  }
});

// snare and kick
const snareKickTambor = document.querySelector(".snarekick");
snareKickTambor.onclick = function () {
  snare.play();
};
