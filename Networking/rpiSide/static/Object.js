var allObjs = [];

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
		var i;
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
	console.log(this);
	allObjs.push(this);
}
