//Creates a new object using the input from the CreateNewObject form.
function createNewObject() {
	if (numOfObjs == 10){
		window.alert("You have reached the maximum number of objects! Consider deleting some using the menu.");
	}
	else{
		var creatorName = document.getElementById("createName").value;
		var creatorMarkerNum;
		for (existingObj of allObjs){
			if (existingObj.assignment == false){
				creatorMarkerNum = existingObj.markerNum;
				break;
			}
		}
		var obj = new ObjectConstructor(creatorName, creatorMarkerNum, [], true);
	}
}
