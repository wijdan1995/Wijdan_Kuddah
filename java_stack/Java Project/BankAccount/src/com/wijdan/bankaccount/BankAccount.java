package com.wijdan.bankaccount;
import java.util.Random;

public class BankAccount {

	private String accountNum;
	private double checkingBalance = 0;
	private double savingsBalance = 0;
	public static int numOfAccounts = 0;
	public static int totalAmountOfMoney = 0;
	
	
	public BankAccount() {
		accountNum = randomAccountNum();
		numOfAccounts++;
	}
	
	public double getCheckingBalance() {
		System.out.println("Your checking balance is " + checkingBalance);
		return checkingBalance;
	}

	public void setCheckingBalance(double checkingBalance) {
		this.checkingBalance = checkingBalance;
	}

	public double getSavingsBalance() {
		return savingsBalance;
	}

	public void setSavingsBalance(double savingsBalance) {
		System.out.println("Your savings balance is " + savingsBalance);
		this.savingsBalance = savingsBalance;
	}
	
	public void deposit(String balance, double amount) {
		if( balance == "savings" ) {
			savingsBalance += amount;
			totalAmountOfMoney += amount;
			System.out.println("New savings balance is " + savingsBalance);
			
		} else if( balance == "checking") {
			checkingBalance += amount;
			totalAmountOfMoney += amount;
			System.out.println("New checking balance is " + checkingBalance);
		} else {
			System.out.println("Please choose savings or checking");
		}
	}
	
	public void withdraw(String balance, double amount) {
		if( balance == "savings" && amount <= savingsBalance ) {
			savingsBalance -= amount;
			totalAmountOfMoney -= amount;
			System.out.println("New savings balance is " + savingsBalance);
			
		} else if( balance == "checking" && amount <= savingsBalance) {
			checkingBalance -= amount;
			totalAmountOfMoney -= amount;
			System.out.println("New checking balance is " + checkingBalance);
		} else {
			System.out.println("Please choose savings or checking that have enough balance");
		}
	}
	
	public void getTotalBalance() {
		double total = savingsBalance + checkingBalance;
		System.out.println("Your total balance is " + total );
		
	}

	private String randomAccountNum() {
		Random rand = new Random();
		String numbers = "0123456789";
		// create random string builder
	    StringBuilder sb = new StringBuilder();
	    // specify length of random string
	    int length = 10;
	    for(int i = 0; i < length; i++) {

	        // generate random index number
	        int index = rand.nextInt(numbers.length());

	        // get character specified by index
	        // from the string
	        char randomChar = numbers.charAt(index);

	        // append the character to string builder
	        sb.append(randomChar);
	      }

	      String randomString = sb.toString();
	      return randomString;
	}
}
