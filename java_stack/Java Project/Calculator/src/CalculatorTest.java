
public class CalculatorTest {

	public static void main(String[] args) {
		Calculator cal12 = new Calculator();
		cal12.setOperandOne(1);
		cal12.setOperandTwo(2);
		cal12.setOperation("+");
		cal12.performOperation();
		System.out.println(cal12.getResults());
		
		
		cal12.setOperation("-");
		cal12.performOperation();
		System.out.println(cal12.getResults());

	}

}
