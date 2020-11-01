class BankAccount:
    def __init__(self, int_rate = 0.01, balance = 0):
        self.int_rate = float(int_rate) / 100
        print(self.int_rate)
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            self.balance -= 5
            print("Insufficient funds: Charging a $5 fee")
        return self
    def display_account_info(self):
        print("Balance: $%d" % (self.balance))
        return self
    def yield_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        return self

# Create 2 accounts
account1 = BankAccount(2, 100)
account2 = BankAccount(2)

# To the first account, make 3 deposits and 1 withdrawal, then yield interest and display the account's info all in one line of code (i.e. chaining)
account1.deposit(10).deposit(60).deposit(120).withdraw(30).yield_interest().display_account_info()

# To the second account, make 2 deposits and 4 withdrawals, then yield interest and display the account's info all in one line of code (i.e. chaining)
account2.deposit(50).deposit(90).withdraw(20).withdraw(40).withdraw(30).withdraw(60).yield_interest().display_account_info()
