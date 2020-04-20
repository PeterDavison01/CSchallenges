var allObjs;
allObjs = [{name: "", markerNum: 1, objCharacs: [], assignment: false}, 
	      {name: "", markerNum: 2, objCharacs: [], assignment: false},
	      {name: "", markerNum: 3, objCharacs: [], assignment: false},
	      {name: "", markerNum: 4, objCharacs: [], assignment: false},
	      {name: "", markerNum: 5, objCharacs: [], assignment: false},
	      {name: "", markerNum: 6, objCharacs: [], assignment: false},
	      {name: "", markerNum: 7, objCharacs: [], assignment: false},
	      {name: "", markerNum: 8, objCharacs: [], assignment: false},
	      {name: "", markerNum: 9, objCharacs: [], assignment: false},
	      {name: "", markerNum: 10, objCharacs: [], assignment: false}];
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
		window.alert("Create an object!");
		break;
	}
}

var numOfObjs = 0;
for (checkingNumOfObj of allObjs){
	if (checkingNumOfObj.name != ""){
		numOfObjs++;
	}
}

var object = {
	name: "Unknown",
	markerNum: -1,
	objCharacs: [],
	assignment: false,

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
	
	get assignment(){
		return assignment;
	},

	set name(newName){
		this.name = newName;
	},

	set markerNum(newMarkerNum){
		this.markerNum = newMarkerNum;
	},

	set objCharacs(newObjCharacs){
		this.objCharacs = newObjCharacs;
	},
	
	set unassigned(newAssignment){
		this.unassigned = newAssignment;
	}
};

function ObjectConstructor(consName, consMarkerNum, consObjCharacs){
	console.log(consName);
	console.log(consMarkerNum);
	console.log(consObjCharacs);
	this.name = consName;
	this.markerNum = consMarkerNum;
	this.objCharacs = consObjCharacs;
	this.unassigned = true;
	allObjs[(consMarkerNum-1)] = this;
	console.log(this);
	console.log(allObjs);
	savedAllObjsStr = JSON.stringify(allObjs);
	sessionStorage.setItem("savedAllObjs", savedAllObjsStr);
}
