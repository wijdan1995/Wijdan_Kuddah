
public class PhoneTester {

	public static void main(String[] args) {
		Galaxy s9 = new Galaxy("S9", 99, "STC", "Ring Ring ring");
		IPhone iphonex = new IPhone("X", 100, "Zain", "Zing");
		
		s9.displayInfo();
		System.out.println(s9.ring());
		System.out.println(s9.unlock());
		
		iphonex.displayInfo();
		System.out.println(iphonex.ring());
		System.out.println(iphonex.unlock());

	}

}
