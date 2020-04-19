var allObjs;
allObjs = [{name: "", markerNum: 1, objCharacs: []}, 
	      {name: "", markerNum: 2, objCharacs: []},
	      {name: "", markerNum: 3, objCharacs: []},
	      {name: "", markerNum: 4, objCharacs: []},
	      {name: "", markerNum: 5, objCharacs: []},
	      {name: "", markerNum: 6, objCharacs: []},
	      {name: "", markerNum: 7, objCharacs: []},
	      {name: "", markerNum: 8, objCharacs: []},
	      {name: "", markerNum: 9, objCharacs: []},
	      {name: "", markerNum: 10, objCharacs: []}];
//var savedAllObjsStr = JSON.stringify(allObjs);
//console.log(savedAllObjsStr);
//sessionStorage.setItem("savedAllObjs", JSON.stringify(allObjs));

var i;
var loadedAllObjs = sessionStorage.getItem("savedAllObjs");
loadedAllObjs = JSON.parse(loadedAllObjs);
for (i=0; i < 10; i++){
	try{
		var loadedStorageObj = loadedAllObjs[i];
		if (loadedStorageObj != null){
			allObjs[i] = loadedStorageObj;
		}
	}catch(err){
		document.alert("Create an object!");
	}
}

var numOfObjs;
for (checkingNumOfObj of allObjs){
	if (checkingNumOfObj.name == ""){
		numOfObjs++;
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
	allObjs[(consMarkerNum-1)] = this;
	console.log(this);
	console.log(allObjs);
	savedAllObjsStr = JSON.stringify(allObjs);
	sessionStorage.setItem("savedAllObjs", savedAllObjsStr);
}
