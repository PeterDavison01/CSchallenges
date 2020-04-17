var name = "null";
var markerNum = -1;
var objCharacs = [];

var totalObjs = [];

//Default Constructor
function ObjectConstructor() {
	this.name = "Unknown";
	this.markerNum = -1;
	this.objCharacs = null;
	totalObjs.add(this);
};

//Constructor
function ObjectConstructor(name, markerNum, objCharacs) {
	this.name = name;
	this.markerNum = markerNum;
	for(int i=0; i<objCharacs.size(); i++) {
		String objCharacStr = this.objCharacs.get(i);
		objCharacStr = objCharacs.get(i);
	}
	totalObjs.add(this);
};

//Getters and Setters
Object.prototype.getName = function () {
  return name;
};

Object.prototype.setName = function (name) {
  this.name = name;
};

Object.prototype.getMarkerNum = function(){
  return markerNum;
};

Object.prototype.setMarkerNum = function () {
  this.markerNum = markerNum;
};
