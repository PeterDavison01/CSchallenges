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

function searchForObj(objID){
	for (obj of allObjs){
		if (obj.markerNum == objID){
			return obj;
			break;
		}
	}
}

function returnObjInfo(objID){
	var rtn = "Error loading Object.";
	var obj = searchForObj(objID);
	rtn = obj.name.toUpperCase() +
	"\n" + "Marker Number: " + obj.markerNum +
	"\n" + "Object Characteristics: " +
	rtnObjCharacs(obj);
	return rtn;
}

function showMenu(){
	document.getElementById("menu").classList.toggle("show");
}

function closeForm() {
	window.location.href = "/";
}

function openCreateObjForm() {
 	window.location.href = "createNewObject";
}

function openChangeObjForm(){
	window.location.href = "changeObjectDetails";
}

function openDeleteObjForm(){
	window.location.href = "deleteObject";
}
