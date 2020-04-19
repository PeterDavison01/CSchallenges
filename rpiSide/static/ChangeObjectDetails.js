function debugChangeObjectDetails(newName,  ObjID, newObjCharacs){
	var foundObj = searchForObj(ObjID)
	foundObj.name = newName;
	var i;
	for(i = 0; i < foundObj.objCharacs.length; i++){
		foundObj.objCharacs[i] = newObjCharacs[i];
	}
	
}

function changeObjectDetails() {
	object.setName(newName);
	object.objCharacs.push(newObjCharac);
}
