inlets = 1;
outlets = 1;
autowatch = 1;

var lowerLimit = 5800; // value of lowest note possible in midi cents
var higherLimit = 9400; // value of highest note possible in midi cents

function Bernoulli(prob) {
  var role = Math.random() * 100;
  if (role <= prob) {
    return 1;
  }
  return 0;
}
// 1.) check to see if there are duplicates and add set value outlet(0,a[index]);
//make sure range is above 5800 and below 9400
function list() {
  var unchecked = arrayfromargs(arguments);
  var noDuplicates = fixDuplicates(unchecked)
  var checked = wrapRange(noDuplicates)
  outlet(0, checked);
}

function wrapRange(unchecked){
  var checked = []
  for (var index = 0; index < unchecked.length; index++){
    if (unchecked[index] < lowerLimit) {
      checked.push(unchecked[index] + 1200);
    } else if (unchecked[index] > higherLimit) {
      checked.push(unchecked[index] - 1200);
    } else {
      checked.push(unchecked[index]);
    }
  }
  return checked;
}

function fixDuplicates(input) {
  var result = [];

  // Keep track of which values we've already used
  var used = {};

  function isUsed(x) {
    return used[x] === true;
  }

  function markUsed(x) {
    used[x] = true;
  }

  for (var i = 0; i < input.length; i++) {
    var base = input[i];
    var candidate = base;

    if (isUsed(candidate)) {
      var tries = 0;

      while (tries < 128 && isUsed(candidate)) {
        // random offset between 1 and 1200
        var offset = Math.floor(Math.random() * 1200) + 1;
        candidate = base + offset;
        tries++;
      }

      // If still collided after 128 tries,
      // do a simple linear search upwards
      if (isUsed(candidate)) {
        candidate = base;
        while (isUsed(candidate)) {
          candidate++;
        }
      }
    }

    result.push(candidate);
    markUsed(candidate);
  }

  return result;
}
