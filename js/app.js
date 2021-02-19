"use strict";

  function ballToDog() {
  let ball = document.getElementById("ball");
  ball.classList.toggle("ball");
  ball.classList.toggle("toDog");
};

function tossToDog() {
  let toss = document.getElementById("throw");
  let hold = document.getElementById("hold");
  hold.classList.toggle("hidden");
  toss.classList.toggle("hidden");
};

document.addEventListener("click", () => {
  ballToDog();
  tossToDog();
});
