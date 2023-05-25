import { startConfetti } from "https://notfenixio.github.io/utils/confetti.js";

let counter = 60;
var date = new Date("June 21, 2023 13:00:00").getTime();
let container = document.getElementById("container");
let Cdays = document.getElementById('days');
let Chours = document.getElementById('hours');
let Cminutes = document.getElementById('minutes');
let Cseconds = document.getElementById('seconds');
var x = setInterval(function() {

  // get today's time
  var now = new Date().getTime();

  // finding distance
  var distance = date - now;

  // maths for the cells
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display result in all the cells
  Cdays.style.setProperty("--value", days);
	Chours.style.setProperty("--value", hours);
	Cminutes.style.setProperty("--value", minutes);
	Cseconds.style.setProperty("--value", seconds);
  // If finished, do smth
  if (distance < 0) {
    container.innerHTML = "";
    clearInterval(x);
    startConfetti;
  }
}, 1000);
