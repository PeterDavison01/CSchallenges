var testObjCharacs = ["15 pens", "Pads of paper", "A ruler", "Water Bottle", "Test1", "test2", "Test3"];
var testName = "Cupboard";
var testMarkerNum = 1;
var obj = new ObjectConstructor(testName, testMarkerNum, testObjCharacs);
var numOfObjs = allObjs.length;

function rtnObjCharacs(){
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
	for (obj in allObjs){
		var rtn;
		if (obj.markerNum == objID){
			rtn = obj.name.toUpperCase() +
			"\n" + "Marker Number: " + obj.markerNum +
			"\n" + "Object Characteristics: " +
			rtnObjCharacs();
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
