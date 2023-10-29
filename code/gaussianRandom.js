autowatch = 1;

inlets = 3;
outlets = 1;

var center = 1000;
var spread = 150;

// Standard Normal variate using Box-Muller transform.
function gaussianRandom(mean, stdev) {
  var u = 1 - Math.random(); // Converting [0,1) to (0,1]
  var v = Math.random();
  var z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  // Transform to the desired mean and standard deviation:
  return z * stdev + mean;
}

function msg_int(a) {
  if (inlet == 1) {
    center = a;
  }
  if (inlet == 2) {
    spread = a;
  }
}

function bang() {
  var output = gaussianRandom(center, spread);
  outlet(0, output);
}
