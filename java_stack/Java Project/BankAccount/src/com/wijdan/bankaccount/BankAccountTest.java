package com.wijdan.bankaccount;

public class BankAccountTest {

	public static void main(String[] args) {
		BankAccount user1 = new BankAccount();
		user1.getCheckingBalance();
		user1.getSavingsBalance();
		user1.deposit("checking", 10);
		user1.deposit("savings", 50);
		user1.withdraw("savings", 10);
		user1.withdraw("savings", 40);
		user1.getTotalBalance();
		System.out.println(BankAccount.totalAmountOfMoney);
		
		
		
    }

}
