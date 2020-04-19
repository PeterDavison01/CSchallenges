function debugChangeObjectDetails(newName,  ObjID, newObjCharacs){
	var foundObj = searchForObj(ObjID)
	foundObj.name = newName;
	var i;
	for(i = 0; i < foundObj.objCharacs.length; i++){
		foundObj.objCharacs[i] = newObjCharacs[i];
	}
	
}

function changeObjectDetails() {
	var chosenObjID = document.getElementById("changingObjID").value;
	if (0 < chosenObjID > 10){
		window.alert("That's not a valid Object Marker Number!");
	}
	else{
		var chosenObj = searchForObj(chosenObjID);
		var chosenObjNewDetailsRaw = document.getElementById("changingDetails").value;
		var chosenObjNewDetails = [];
		var startingIndex = 0;
		var endingIndex = 0;
		var objCharacsIndex = 0;
		for(i = 0; i < chosenObjNewDetailsRaw.length; i++){
			if(chosenObjNewDetailsRaw[i] == "."){
				endingIndex = i;
				chosenObjNewDetails[objCharacsIndex] = str.slice(startingIndex, endingIndex);
				objCharacsIndex++;
				endingIndex += 2;
				startingIndex = endingIndex;
			}
		}
		var name = chosenObj.name;
		ObjectConstructor(name, chosenObjID, chosenObjNewDetails);
	}
}
