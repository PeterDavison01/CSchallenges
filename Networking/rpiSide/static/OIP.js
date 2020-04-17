var objCharacs = [];
objCharacs.add("Has 15 Pens");
objCharacs.add("Has 6 Pads of Paper");
var obj = new ObjectConstructor("Cupboard", 1, objCharacs);
console.log(obj.getName());
console.log(obj.getMarkerNum());
for (String objCharac : obj.objCharacs) {
	console.log(objCharac);
}
