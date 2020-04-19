function debugCreateNewObject(name, markerNum, objCharacs){
	var testObj = new ObjectConstructor(name, markerNum, objCharacs);	
}

function createNewObject() {
	console.log(document.getElementById("createName"));
	var creatorName = document.getElementById("createName");
	var creatorMarkerNum;
	for (existingObj of allObjs){
		if (existingObj.name == ""){
			creatorMarkerNum = existingObj.markerNum;
			break;
		}
	}
	console.log(creatorMarkerNum);
	var obj = new ObjectConstructor(creatorName, creatorMarkerNum, []);
}
