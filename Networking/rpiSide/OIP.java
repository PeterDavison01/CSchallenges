package rpiSide;

import java.util.ArrayList;

public class OIP {

	public static void main(String[] args) {
		ArrayList<String> objCharacs = new ArrayList<String>();
		objCharacs.add("Has 15 Pens");
		objCharacs.add("Has 6 Pads of Paper");
		ObjectDetails obj = new ObjectDetails("Cupboard", 1, objCharacs);
		System.out.println(obj.getName());
		System.out.println(obj.getMarkerNum());
		for (String objCharac : obj.objCharacs) {
			System.out.println(objCharac);
		}
	}
}
