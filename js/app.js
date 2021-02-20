"use strict";

function nightMode() {
  const background = document.querySelector(".bg");
  background.classList.toggle("nite");
};

// position of the ball
  function ballToDog() {
  const ball = document.getElementById("ball");
  ball.classList.toggle("ball");
  ball.classList.toggle("toDog");
};

// hand when thrown/caught
function handToggle() {
  const toss = document.getElementById("throw");
  const hold = document.getElementById("hold");
  hold.classList.toggle("hidden");
  toss.classList.toggle("hidden");
  // document.querySelector("button").innerText = "Catch";
  // decided against the above so as to not clutter with more classes
};

function buttonTextSwap() {
  const button = document.getElementById("button");
  if (button.getAttribute("data-text-swap") == button.innerHTML) {
    button.innerHTML = button.getAttribute("data-text-original");
  } else {
    button.setAttribute("data-text-original", button.innerHTML);
    button.innerHTML = button.getAttribute("data-text-swap");
  }
};

button.addEventListener("click", () => {
  nightMode();
  ballToDog();
  handToggle();
  buttonTextSwap();
});
// kept breaking when i tried to condense functions -- unsure if this seems excessive