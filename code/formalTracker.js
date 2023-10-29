autowatch = 1;

inlets = 2;
outlets = 1;
//keep track and bang

var eventLog = [];


//keep track of event # and the time it took place to be able to reverse


function bang(){
    if (inlet == 1){
        // for (var i = 0; i < eventLog.length - 1; i++){
        //     eventLog[i].duration = eventLog[i+1].timeStamp - eventLog[i].timeStamp
        // }
        outlet(0, eventLog[0].process)

    }
}

function list(a, b){
    if (inlet == 0){
        var event = {process: a, timeStamp: b}
        eventLog.push(event)
    }
}

