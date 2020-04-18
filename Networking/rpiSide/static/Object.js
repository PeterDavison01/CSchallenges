var allObjs = [""];
var i;
for (i = 1; i < 11; i++){
	var cookieName = "Object" + i;
	//try{
	var savedObjJsonString = getCookie(cookieName);
	if (savedObjJsonString.length > 0){
		var savedObj = JSON.parse(savedObjJsonString);
		allObjs.push(savedObj);
	}
}


var object = {
	name: "Unknown",
	markerNum: -1,
	objCharacs: [],

	get name(){
		return this.name;
	},

	get markerNum(){
		return this.markerNum;
	},

	get objCharacs(){
		var rtn = "";
		if (objCharacs.length = 0) {
			rtn = "There are currently no object characteristics.";
		}
		else{
			for (i = 0; i < objCharacs.length; i++){
				rtn = "\n" + (i+1) + ". " + objCharacs[i] + "";
			}
		}
		return rtn;
	},

	set name(newName){
		this.name = newName;
	},

	set markerNum(newMarkerNum){
		this.markerNum = newMarkerNum;
	},

	set objCharacs(newObjCharacs){
		this.objCharacs = newObjCharacs;
	}
};

function ObjectConstructor(consName, consMarkerNum, consObjCharacs){
	this.name = consName;
	this.markerNum = consMarkerNum;
	this.objCharacs = consObjCharacs;
	if (allObjs[0] == ""){
		allObjs[0] = (this);
	}
	else{
		allObjs.push(this);
	}
	var objJsonString = JSON.stringify(this);
	cookieName = "Object" + this.markerNum;
	setCookie(cookieName, objJsonString, 7);
}
