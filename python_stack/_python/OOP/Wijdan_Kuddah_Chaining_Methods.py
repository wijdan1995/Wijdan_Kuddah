class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    def make_deposit(self, amount):	
        self.account_balance += amount
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print("User: %s, Balance: $%d" % (self.name,self.account_balance))
        # print(f"User: {self.name}, Balance: $ {self.account_balance}")
    def transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.make_deposit(amount)

# Create 3 instances of the User class
wijdan = User('wijdan', 'wijdan.w.k@outlook.sa')
yara = User('yara', 'yara@email.com')
phil = User('phil', 'phil@email.com')

# Have the first user make 3 deposits and 1 withdrawal and then display their balance
wijdan.make_deposit(200)
wijdan.make_deposit(100)
wijdan.make_deposit(50)
wijdan.make_withdrawal(90)
wijdan.display_user_balance()

# Have the second user make 2 deposits and 2 withdrawals and then display their balance
yara.make_deposit(300)
yara.make_deposit(200)
yara.make_withdrawal(20)
yara.make_withdrawal(30)
yara.display_user_balance()

# Have the third user make 1 deposits and 3 withdrawals and then display their balance
phil.make_deposit(500)
phil.make_withdrawal(20)
phil.make_withdrawal(30)
phil.make_withdrawal(10)
phil.display_user_balance()

# BONUS: Add a transfer_money method; have the first user transfer money to the third user and then print both users' balances
wijdan.transfer_money(yara, 10)
yara.display_user_balance()
wijdan.display_user_balance()

