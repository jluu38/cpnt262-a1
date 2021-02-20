"use strict";

  function ballToDog() {
  let ball = document.getElementById("ball");
  ball.classList.toggle("ball");
  ball.classList.toggle("toDog");
};

function handToggle() {
  let toss = document.getElementById("throw");
  let hold = document.getElementById("hold");
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
}

button.addEventListener("click", () => {
  ballToDog();
  handToggle();
  buttonTextSwap();
});