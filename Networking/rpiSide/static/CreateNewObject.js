function createNewObject(String name) {//, ArrayList<String ) {
	var name = document.getElementById("createName");
	var obj = new ObjectConstructor();
	obj.setName(name);
	obj.setMarkerNum(obj.totalObjs.size());
}
