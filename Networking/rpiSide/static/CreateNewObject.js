function createNewObject() {//, ArrayList<String ) {
	var name = document.getElementById("createName");
	var obj = new ObjectConstructor();
	obj.setName(name);
	numOfObjs++;
	obj.setMarkerNum(numOfObjs++;);
}
