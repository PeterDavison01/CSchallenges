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
	if (1 < chosenObjID) or if (chosenObjID > 10){
		window.alert("That's not a valid Object Marker Number!");
	}
	else{
		var chosenObj = searchForObj(chosenObjID);
		var objNewName = document.getElementById("changingName").value;
		console.log(objNewName);
		if (objNewName=""){
			objNewName = chosenObj.name;
		}
		var chosenObjNewDetailsRaw = document.getElementById("changingDetails").value;
		var chosenObjNewDetails = [];
		var startingIndex = 0;
		var endingIndex = 0;
		var objCharacsIndex = 0;
		for(i = 0; i < chosenObjNewDetailsRaw.length; i++){
			if(chosenObjNewDetailsRaw[i] == "."){
				endingIndex = i;
				chosenObjNewDetails[objCharacsIndex] = chosenObjNewDetailsRaw.slice(startingIndex, endingIndex);
				objCharacsIndex++;
				endingIndex += 2;
				startingIndex = endingIndex;
			}
		}
		console.log(chosenObjNewDetails);
		console.log(objNewName);
		var testObj = new ObjectConstructor(objNewName, chosenObjID, chosenObjNewDetails);
		console.log(testObj);
	}
}
