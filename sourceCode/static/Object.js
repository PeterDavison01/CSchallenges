//Creating an Object called object to be instantiated
var object = {
	name: "Unknown",
	markerNum: -1,
	objCharacs: [],
	//Used to check if the user has filled in the 
	//details for this object or not:
	//True = yes and False = no
	assignment: false,

	//Getters
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
			//Retrieving each object characteristic to be displayed
			for (i = 0; i < objCharacs.length; i++){
				rtn = "\n" + (i+1) + ". " + objCharacs[i] + "";
			}
		}
		return rtn;
	},
	
	get assignment(){
		return assignment;
	},

	//Setters
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

//Creating the allObjs array for all the user's objects to be held
var allObjs;
//Defining 10 objects for the user to customise
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

//Creating an index variable to be used in 'for loops' throughout the code
var i;
//Loading the objects that are stored in the session storage
var loadedAllObjs = sessionStorage.getItem("savedAllObjs");
//Parsing the objects using JSON
loadedAllObjs = JSON.parse(loadedAllObjs);

//Reassigning allObjs to contain the objects that were stored
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

//Counting the number of Objects
var numOfObjs = 0;
for (checkingNumOfObj of allObjs){
	if (checkingNumOfObj.assignment == true){
		numOfObjs++;
	}
}

//The object's constructor
function ObjectConstructor(consName, consMarkerNum, consObjCharacs, consAssignment){
	this.name = consName;
	this.markerNum = consMarkerNum;
	this.objCharacs = consObjCharacs;
	this.assignment = consAssignment;
	//Assigning the object to allObjs using marker number as the index.
	//It is decremented as the marker numbers start at 1 whereas the allObjs
	//indexes start at 0.
	allObjs[(consMarkerNum-1)] = this;
	//Stringifying allObjs as session storage can only store strings, and as allObjs 
	//is an array, it needs to be converted.
	savedAllObjsStr = JSON.stringify(allObjs);
	//Saving the new allObjs with the new object to the session storage
	sessionStorage.setItem("savedAllObjs", savedAllObjsStr);
}
