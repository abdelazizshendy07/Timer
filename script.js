"use strict";

const startButton = document.querySelector(".start");
const pauseButton = document.querySelector(".pause");
const durationInput = document.querySelector(".duration");
const circle = document.querySelector(".circle");

const pramiter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", pramiter);

let duration;
const Timer = new timer(durationInput, startButton, pauseButton, {
  onStart(tottalDruttion) {
    duration = tottalDruttion;
  },
  onTick(timerRolling) {
    circle.setAttribute(
      "stroke-dashoffset",
      (pramiter * timerRolling) / duration - pramiter
    );
  },
  onComplet() {
    console.log("complet");
  },
});
