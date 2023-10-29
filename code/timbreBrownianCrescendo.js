inlets = 1;
outlets = 2;
autowatch = 1;

function list(a, b) {
  const valuesArray = [a, b];
  const results = [];

  if (a <= 9 && a >= 2) {
    results[0] = multiChoiceDown(valuesArray[0]);
  } else {
    results[0] = Math.floor(Math.random() * 3 + 3);
  }
  if (b <= 9 && b >= 2) {
    results[1] = multiChoiceUp(valuesArray[1]);
  } else {
    results[1] = Math.floor(Math.random() * 3 + 3);
  }

  if (results[0] == results[1]) {
    results[1] = results[1] + 1;
  }
  //decline
  outlet(0, results[0]);
  //incline
  outlet(1, results[1]);
}

function multiChoiceUp(a) {
  //-1, 0, 1
  const probArray = [20, 10, 70];
  const values = [-1, 0, 1];
  var total = 0;
  var i = 0;

  const roll = Math.floor(Math.random() * 100);

  for (i = 0; total < roll; i++) {
    total += probArray[i];
  }
  return a + values[i - 1];
}

function multiChoiceDown(a) {
  //-1, 0, 1
  const probArray = [20, 10, 70];
  const values = [1, 0, -1];
  var total = 0;
  var i = 0;

  const roll = Math.floor(Math.random() * 100);

  for (i = 0; total < roll; i++) {
    total += probArray[i];
  }
  return a + values[i - 1];
}
