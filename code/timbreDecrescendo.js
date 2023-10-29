inlets = 1;
outlets = 2;
autowatch = 1;

function list(a, b) {
  const valuesArray = [a, b];
  const results = [];

  results[0] = multiChoiceUp(valuesArray[0]);
  results[1] = multiChoiceDown(valuesArray[1]);

  if (results[0] <= 1) {
    results[0] = 1;
  }
  if (results[1] >= 9) {
    results[1] === 10;
  }

  var dif = results[1] - results[0]
  if (dif == 0 || results[1] < results[0]) {
    results[0] = Math.floor(Math.random() * 3 + 1);
    results[1] = Math.floor(Math.random() * 3 + 8);
  }

  //incline
  outlet(0, results[0]);
  //decline
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
