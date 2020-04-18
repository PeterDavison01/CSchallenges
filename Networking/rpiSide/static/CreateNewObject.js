function createNewObject() {//, ArrayList<String ) {
	var name = document.getElementById("createName");
	var markerNum = allObjs.length + 1;
	console.log(markerNum);
	var obj = new ObjectConstructor(name, markerNum, []);
}
