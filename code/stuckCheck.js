autowatch = 1;

inlets = 3;
outlets = 2;

var changeThreshold = 5;

var histogram = []

function msg_int(a) {
    initHistogram(3)
  if (inlet == 0) {
    histogram[a] += 1;
    if (histogram[a] == changeThreshold) {
      outlet(0, "thresh met");
      histogram = [0, 0, 0, 0];
    } else{
        outlet(1, histogram)
    }
  }
  if (inlet == 1){
    changeThreshold = a;
  }
}

function initHistogram(length){
    for (var index = 0; index < length; index++) {
        histogram.push(0);
    }
}

function bang(){
    if (inlet == 2){
        histogram = []
    }
}