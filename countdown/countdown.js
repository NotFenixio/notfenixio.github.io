let counter = 60;
var date = new Date("June 19, 2024 10:00:00").getTime();
let Cdays = document.getElementById('days');
let Chours = document.getElementById('hours');
let Cminutes = document.getElementById('minutes');
let Cseconds = document.getElementById('seconds');

// Global variable to control weekends removal
var removeWeekends = false;

var x = setInterval(function() {

  // get today's time
  var now = new Date().getTime();

  // finding distance
  var distance = date - now;

  // exclude weekends if enabled
  var daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  if (removeWeekends) {
    var totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
    var weekends = 0;
    for (var i = 0; i <= totalDays; i++) {
      var currentDate = new Date(now + (i * 24 * 60 * 60 * 1000));
      var dayOfWeek = currentDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday (0) and Saturday (6)
        weekends++;
      }
    }
    daysLeft -= weekends;
  }

  // maths for the cells
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display result in all the cells
  Cdays.style.setProperty("--value", daysLeft);
  Chours.style.setProperty("--value", hours);
  Cminutes.style.setProperty("--value", minutes);
  Cseconds.style.setProperty("--value", seconds);
  
  // if finished, clear the interval so it doesn't show negative values
  if (distance < 0) {
    clearInterval(x);
  }
}, 1000);
