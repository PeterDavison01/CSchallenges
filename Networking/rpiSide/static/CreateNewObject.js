function debugCreateNewObject(name, markerNum, objCharacs){
	var testObj = new ObjectConstructor(name, markerNum, objCharacs);	
}

function createNewObject() {
	var creatorName = document.getElementById("createName");
	var creatorMarkerNum;
	for (existingObj of allObjs){
		if (existingObj.name.length == 0){
			creatorMarkerNum = existingObj.markerNum;
			break;
		}
	}
	console.log(creatorMarkerNum);
	var obj = new ObjectConstructor(creatorName, creatorMarkerNum, []);
}
