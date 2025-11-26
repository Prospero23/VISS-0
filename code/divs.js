autowatch = 1;

inlets = 3;
outlets = 3;

var times = [];
var central = 2000; // ms
var blueDivisions = [2, 5, 6, 8, 9]; //possible divs of blue

//red, green, blue, white. by default: white
var currentColor;

// weighted probability
function Bernoulli(weight) {
  var roll = Math.floor(Math.random() * 100);
  if (roll <= weight * 100) {
    return 1;
  } else {
    return 0;
  }
}

// Standard Normal variate using Box-Muller transform.
function gaussianRandom(mean, stdev) {
  var u = 1 - Math.random(); // Converting [0,1) to (0,1]
  var v = Math.random();
  var z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  // Transform to the desired mean and standard deviation:
  return z * stdev + mean;
}


//random divisions of space up to 10 from 2 up.
function bang() {
  //reset times array and values up to 360000 ms
  var timez = gaussianRandom(central, 150);

  if (currentColor == 2 || currentColor == 3) {
    var value = blueDivisions[Math.floor(Math.random() * blueDivisions.length)];
  } else {
    var value = Math.floor(Math.random() * 8 + 3);
  }

  //make events array

  outlet(0, value);
  outlet(1, timez);
  outlet(2, currentColor);
}

function msg_int(a) {
  if (inlet == 1) {
    central = a;
  }
    if (inlet == 2) {
      currentColor = a;
      outlet(2, currentColor);
    }
}