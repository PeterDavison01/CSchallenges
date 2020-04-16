package rpiSide;

import java.util.ArrayList;

public class ObjectDetails {

	//Characteristics of an object
	public String name;
	public int markerNum;
	public ArrayList<String> objCharacs = new ArrayList<String>();
	
	//List of current objects
	public ArrayList<ObjectDetails> totalObjs = new ArrayList<ObjectDetails>();
	
	//Getters and Setters
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getMarkerNum() {
		return markerNum;
	}

	public void setMarkerNum(int markerNum) {
		this.markerNum = markerNum;
	}

	//Default Constructor
	public ObjectDetails() {
		this.name = "Unknown";
		this.markerNum = -1;
		this.objCharacs = null;
		totalObjs.add(this);
	}
	
	//Constructor
	public ObjectDetails(String name, int markerNum, ArrayList<String> objCharacs) {
		this.name = name;
		this.markerNum = markerNum;
		for(int i=0; i<objCharacs.size(); i++) {
			String objCharacStr = this.objCharacs.get(i);
			objCharacStr = objCharacs.get(i);
		}
		totalObjs.add(this);
	}
	
}
