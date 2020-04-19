function deleteObject(){
        var chosenObjID = document.getElementById("deleteObjID").value;
	if (1 < chosenObjID || chosenObjID > 10){
		window.alert("That's not a valid Object Marker Number!");
	}
	else{
                var newObj = new ObjectConstructor("", chosenObjID, []);
        }
}
