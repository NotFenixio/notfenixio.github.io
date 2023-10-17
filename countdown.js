let counter = 60;
var date = new Date("November 22, 2023 13:00:00").getTime();
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
  // If finished, clear the interval so it doesn't show negative values
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);
