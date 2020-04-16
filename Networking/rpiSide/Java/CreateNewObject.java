package rpiSide;

public class CreateNewObject {
	
	public void createNewObject(String name) {//, ArrayList<String ) {
		ObjectDetails obj = new ObjectDetails();
		obj.setName(name);
		obj.setMarkerNum(obj.totalObjs.size());
	}
}
