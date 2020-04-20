function changeObjectDetails() {
	var chosenObjID = document.getElementById("changingObjID").value;
	if (1 > chosenObjID || chosenObjID > 10){
		window.alert("That's not a valid Object Marker Number!");
	}
	else if (allObjs[(chosenObjID-1)].assignment == false){
		window.alert("You must assign values to that marker first!");
	}
	else{
		var chosenObj = searchForObj(chosenObjID);
		var objNewName = document.getElementById("changingName").value;
		if (objNewName==""){
			objNewName = chosenObj.name;
		}
		var chosenObjNewDetailsRaw = document.getElementById("changingDetails").value;
		var chosenObjNewDetails = [];
		var startingIndex = 0;
		var endingIndex = 0;
		var objCharacsIndex = 0;
		if (chosenObjNewDetailsRaw==""){
			chosenObjNewDetails.concat(chosenObj.objCharacs);
		}
		else{
			for(i = 0; i < chosenObjNewDetailsRaw.length; i++){
				if(chosenObjNewDetailsRaw[i] == "."){
					endingIndex = i;
					chosenObjNewDetails[objCharacsIndex] = chosenObjNewDetailsRaw.slice(startingIndex, endingIndex);
					objCharacsIndex++;
					endingIndex += 2;
					startingIndex = endingIndex;
				}
			}
		}
		console.log(chosenObjNewDetails);
		console.log(objNewName);
		var testObj = new ObjectConstructor(objNewName, chosenObjID, chosenObjNewDetails);
		console.log(testObj);
	}
}
