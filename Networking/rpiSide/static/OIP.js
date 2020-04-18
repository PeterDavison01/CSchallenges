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
	var rtn = "Error loading Object.";
	var i;
	for (i = 0; i < numOfObjs; i++){
		//console.log(allObjs[i]);
		console.log("waiting");
		if (allObjs[i].markerNum == objID){
			console.log("That's ok");
			rtn = allObj[i].name.toUpperCase() +
			"\n" + "Marker Number: " + allObj[i].markerNum +
			"\n" + "Object Characteristics: " +
			rtnObjCharacs(allObj[i]);
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
