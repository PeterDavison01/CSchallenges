package rpiSide;

public class ChangeObjectDetails {

	public void changeObjectDetails(ObjectDetails object, String newName, String newObjCharac) {		
		object.setName(newName);
		object.objCharacs.add(newObjCharac);
	}
}
