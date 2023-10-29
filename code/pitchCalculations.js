inlets = 1;
outlets = 1;
autowatch = 1;

function Bernoulli(prob) {
  var role = Math.random() * 100;
  if (role <= prob) {
    return 1;
  }
  return 0;
}

function list() {
  var unchecked = arrayfromargs(arguments);
  var checked = [];
  var addValue = Math.floor(Math.random() * 1200);

  for (var index = 0; index < unchecked.length; index++) {
    var currentCheck = checked.indexOf(unchecked[index]);
    if (currentCheck === -1) {
      if (unchecked[index] < 5500) {
        checked.push(unchecked[index] + 1200);
      } else if (unchecked[index] > 9400) {
        checked.push(unchecked[index] - 1200);
      } else {
        checked.push(unchecked[index]);
      }
    } else {
      checked.push(unchecked[index] + addValue);
    }
  }
  outlet(0, checked);
}

//if i have a list, 1.) check to see if there are duplicates and add set value outlet(0,a[index]);
//make sure range is above 5800 and below 9400
