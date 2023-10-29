inlets = 3;
outlets = 2;
autowatch = 1;

var cardinality = 4;
var scaling = 1;

//update cardinality
function msg_int(a) {
  if (inlet == 1) {
    cardinality = a;
    outlet(1, cardinality);
  }
}

//update new note scaling
function msg_float(a) {
  if (inlet == 2) {
    scaling = a;
  }
}

//check for duplicates
function check(unchecked) {
  var unchecked = unchecked;
  var checked = [];
  var addValue = Math.floor(Math.random() * 1200);

  for (var index = 0; index < unchecked.length; index++) {
    var currentCheck = checked.indexOf(unchecked[index]);
    if (currentCheck === -1) {
      if (unchecked[index] < 5800) {
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
  return checked;
}

function list() {
  var currentChord = arrayfromargs(arguments);

  //pull random note from the chord
  while (currentChord.length > cardinality) {
    var randomIndex = Math.floor(Math.random() * currentChord.length);
    currentChord.splice(randomIndex, 1);
  }
  //add numbers not in the chord to the chord
  while (currentChord.length < cardinality) {
    var newNote = Math.floor(Math.random() * (1200 * scaling) + 5500);
    currentChord.push(newNote);
  }
  var unchecked = currentChord;
  var noDuplicates = check(unchecked);
  outlet(0, noDuplicates);
}


