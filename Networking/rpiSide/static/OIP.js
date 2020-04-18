var testObjCharacs = ["15 pens", "Pads of paper", "A ruler", "Water Bottle", "Test1", "test2", "Test3"];
var testName = "Cupboard";
var testMarkerNum = 1;
debugCreateNewObject(testName, testMarkerNum, testObjCharacs);
var numOfObjs = allObjs.length;

function rtnObjCharacs(obj){
	var rtn = "\n\n";
	if (obj.objCharacs.length == 0){
		rtn += "There are currently no object characteristics.";
	}
	else{
		var i = 0;
		for (var objCharac in obj.objCharacs){
			rtn += obj.objCharacs[i] + "\n";
			i++;
		}
	}
	return rtn;
}

function returnObjInfo(objID){
	console.log("entered func");
	console.log(numOfObjs);
	var rtn = "Error loading Object.";
	var i;
	for (obj of allObjs){
		//console.log(allObjs[i]);
		console.log("waiting");
		if (obj.markerNum == objID){
			console.log("That's ok");
			rtn = obj.name.toUpperCase() +
			"\n" + "Marker Number: " + obj.markerNum +
			"\n" + "Object Characteristics: " +
			rtnObjCharacs(obj);
		}
	}
	return rtn;
}

function showMenu(){
	document.getElementById("menu").classList.toggle("show");
}

function openCreateObjForm() {
 	window.location.href = "createNewObject";
}

function closeCreateObjForm() {
	window.location.href = "/";
}
