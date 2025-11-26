autowatch = 1;

inlets = 1;
outlets = 2;
var deviationAmount = 200;
var PIECE_DURATION = 480000;

// sequence of times
var times = [];
// sequence of colors
var events = [];

// weighted random
function Bernoulli(weight) {
  var roll = Math.floor(Math.random() * 100);
  if (roll <= weight * 100) {
    return true;
  } else {
    return false;
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

function bang() {
  times = [];
  events = [];
  timingsFunction();

  outlet(0, events);
  outlet(1, times);
}

// calculate time stuff
function timingsFunction() {
  var previousColor;
  var selectedColor;
  var currentTime = 0;
  var deviation = 0;
  var centralTimeWhite = 3500;
  var centralTimeNonWhite = 6500;
  var eventTime;

  const colors = ["red", "green", "blue"];
  const excludingColor = [
    ["green", "blue"],
    ["red", "blue"],
    ["red", "green"],
  ];
  const standardDeviation = 50;

  while (currentTime < PIECE_DURATION) {
    // NOTE: after 50 events, there are no more white events.
    var notWhiteWeight = 0.02 * events.length;
    var isNotWhite = Bernoulli(notWhiteWeight);

    if (isNotWhite === true) {
      const index = Math.floor(Math.random() * 3);
      selectedColor = colors[index];
      // don't repeat same color
      if (selectedColor === previousColor) {
        events.push(excludingColor[index][Math.floor(Math.random() * 2)]);
      } else {
        events.push(selectedColor);
      }

      if (centralTimeNonWhite > 500) {
        // lose 50ms each time until hits 500ms
        centralTimeNonWhite -= 50;
        eventTime = Math.abs(gaussianRandom(centralTimeNonWhite, standardDeviation));
      } else {
        eventTime = Math.abs(gaussianRandom(centralTimeNonWhite, standardDeviation));
      }
    } else {
      events.push("white");
      eventTime = Math.abs(
        gaussianRandom(centralTimeWhite + deviation, standardDeviation)
      );
    }
  
    times.push(eventTime);

    //incr current Time
    currentTime += eventTime;
    var roll = Bernoulli(0.8);
    var direction = 1;
    if (roll === false) {
      direction = -1;
    }
    deviation -= deviationAmount * direction;
    previousColor = selectedColor;
  }

  // correct for slight inaccuracy
  if (currentTime > PIECE_DURATION) {
    var difference = currentTime - PIECE_DURATION;
    times[times.length - 1] -= difference;
  }
}