
public class Calculator {
	private String operation;
	private int operandOne;
	private int operandTwo;
	private int Results;
	
	public String getOperation() {
		return operation;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	public int getOperandOne() {
		return operandOne;
	}
	public void setOperandOne(int operandOne) {
		this.operandOne = operandOne;
	}
	public int getOperandTwo() {
		return operandTwo;
	}
	public void setOperandTwo(int operandTwo) {
		this.operandTwo = operandTwo;
	}
	public int getResults() {
		return Results;
	}
	public void setResults(int results) {
		Results = results;
	}
	
	public void performOperation(){
		if(operation == "+") {
			setResults(operandOne + operandTwo);
		} else if (operation == "-") {
			setResults(operandOne - operandTwo);
		}
    }
	



}
