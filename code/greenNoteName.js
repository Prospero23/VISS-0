autowatch = 1;

inlets = 1;
outlets = 1;


var previousNote;


var noteNames = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];


function bang(){
	var result = Math.floor(Math.random() * noteNames.length);
	var checkedValue = checkDuplicate(result);
	previousNote = checkedValue;
	outlet(0, noteNames[checkedValue]);
	}
	
	
function checkDuplicate(result) {
	if (result != previousNote){
		return result;
		} else {
			var checkResult = Math.floor(Math.random() * noteNames.length);
			checkDuplicate(checkResult)
			}
	}