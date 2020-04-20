//Reurns the objects characsteristic in the form of a string.
function rtnObjCharacs(obj){
	//Initialising the string that will be returned
	var rtn = "\n\n";
	if (obj.objCharacs.length == 0){
		//Used for when the user has not yet given the object characteristics
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

//Returns the object assigned to that ObjID a.k.a their MarkerNum (as the
//marker number is unique to each object)
function searchForObj(objID){
	for (obj of allObjs){
		if (obj.markerNum == objID){
			return obj;
			break;
		}
	}
}

//Uses searchForObj to return all the information about the given object
//in the form of a string.
function returnObjInfo(objID){
	var rtn = "Error loading Object.";
	var obj = searchForObj(objID);
	rtn = obj.name.toUpperCase() +
	"\n" + "Marker Number: " + obj.markerNum +
	"\n" + "Object Characteristics: " +
	rtnObjCharacs(obj);
	return rtn;
}

//Used to show the menu on the AR page.
function showMenu(){
	document.getElementById("menu").classList.toggle("show");
}

//Used to return to the AR page.
function closeForm() {
	window.location.href = "/";
}

//Used to open the Create new object form
function openCreateObjForm() {
 	window.location.href = "createNewObject";
}

//Used to open the Change object details form
function openChangeObjForm(){
	window.location.href = "changeObjectDetails";
}

//Used to open the delete object form
function openDeleteObjForm(){
	window.location.href = "deleteObject";
}
