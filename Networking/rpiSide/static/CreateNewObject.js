function debugCreateNewObject(name, markerNum, objCharacs){
	var testObj = new ObjectConstructor(name, markerNum, objCharacs);	
}

function createNewObject() {
	if (numOfObjs == 10){
		window.alert("You have reached the maximum number of objects! Consider deleting some using the menu.");
	}
	else{
		var creatorName = document.getElementById("createName").value;
		var creatorMarkerNum;
		for (existingObj of allObjs){
			if (existingObj.name == ""){
				creatorMarkerNum = existingObj.markerNum;
				break;
			}
		}
		console.log(creatorMarkerNum);
		var obj = new ObjectConstructor(creatorName, creatorMarkerNum, []);
		closeCreateObjForm();
	}
}
