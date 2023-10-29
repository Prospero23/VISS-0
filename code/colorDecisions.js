autowatch = 1;

inlets = 2;
outlets = 3;
var deviationAmount = 200;

var times = [];
var events = [];

//non white events longer?

//is white or none-white
function Bernoulli(weight) {
  var roll = Math.floor(Math.random() * 100);
  if (roll <= weight * 100) {
    return 1;
  } else {
    return 0;
  }
}
//at first, mostly white -> start adding in others
//Gaussian timings? works for me

function bang() {
  //reset times array and values up to 360000 ms
  times = [];
  events = [];
  timingsFunction();

  outlet(0, events);
  outlet(1, times);
}

// Standard Normal variate using Box-Muller transform.
function gaussianRandom(mean, stdev) {
  var u = 1 - Math.random(); // Converting [0,1) to (0,1]
  var v = Math.random();
  var z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  // Transform to the desired mean and standard deviation:
  return z * stdev + mean;
}

//calculate time stuff
function timingsFunction() {
  var previousColor;
  var currentTime = 0;
  var deviation = 0;
  var centralTimeWhite = 2000;
  var centralTimeNone = 6000;
  var eventTime;

  var colors = ["red", "green", "blue"];
  var noColor = [
    ["green", "blue"],
    ["red", "blue"],
    ["red", "green"],
  ];
  var blahBlah = 50;

  //See if events are interuptions
  //start long increasingly get shorter
  //create terminal condition

  while (currentTime < 480000) {
    //odds event is not white
    var weight = 0.02 * events.length;
    //calculate event type
    var isNotWhite = Bernoulli(weight);
    if (isNotWhite == 1) {
      var other = Math.floor(Math.random() * 3);
      //check for duplicate random draw
      if (colors[other] === events[events.length - 1]) {
        events.push(noColor[other][Math.floor(Math.random() * 2)]);
      } else {
        //if no duplicate, add to events
        events.push(colors[other]);
      }
      //if central time larger than 500ms, calc thing
      if (centralTimeNone > 500) {
        //calculate CENTRAL VALUE CHANGE
        centralTimeNone = 6500 - events.length * 50;
        eventTime = Math.abs(gaussianRandom(centralTimeNone, blahBlah));
      } else {
        centralTimeNone = 500;
        eventTime = Math.abs(gaussianRandom(500, blahBlah));
        //post('WORKING?')
      }
    } else {
      events.push("white");
      centralTimeWhite = 3500;
      eventTime = Math.abs(
        gaussianRandom(centralTimeWhite + deviation, blahBlah)
      );
    }
    //post(centralTimeNone);

    times.push(eventTime);

    //incr current Time
    currentTime += eventTime;
    var roll = Bernoulli(0.8);
    var direction = 1;
    if (roll == 0) {
      direction = -1;
    }
    deviation -= deviationAmount * direction;
    outlet(2, centralTimeNone);

    previousColor = colors[other];
  }
  if (currentTime > 480000) {
    var difference = currentTime - 480000;
    times[times.length - 1] -= difference;
  }
}

function msg_int(a) {
  if (inlet == 1) {
    deviationAmount = a;
  }
}
