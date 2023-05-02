class BankAccount:
    all_accounts = []

    def __init__(self, balance=0, int_rate=0.01):
        self.balance = balance
        self.int_rate = int_rate
        BankAccount.all_accounts.append(self)

    @classmethod
    def display_all_accounts_info(cls):
        for account in cls.all_accounts:
            account.display_account_info()

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Chargin a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print("Balance: ${:.2f}".format(self.balance))
        return self

    def yield_interest(self):
        if self.balance > 0:
            self.balance = self.balance * (1 + self.int_rate)
        return self

    def getBalance(self):
        return self.balance


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = {}

    def create_account(self, name, int_rate, balance):
        self.accounts[name] = BankAccount(balance, int_rate)
        return self

    def make_deposit(self, amount, acct_name):
        if self.isValidAccount(acct_name):
            self.accounts[acct_name].deposit(amount)
        else:
            print(f"Invalid account number: {acct_name}")
        return self

    def make_withdrawal(self, amount, acct_name):
        if self.isValidAccount(acct_name):
            self.accounts[acct_name].withdraw(amount)
        else:
            print(f"Invalid account number: {acct_name}")
        return self

    def display_user_balance(self):
        print(f"{self.name}({self.email}) Accounts:")
        for acct_name in self.accounts:
            print(
                f"    {acct_name} Balance: ${('{:.2f}'.format(self.accounts[acct_name].getBalance()))}"
            )
        return self

    def transfer_money(self, amount, from_acct_name, otherUser, to_acct_name):
        # TODO: stop transfer if balance is insufficient
        self.make_withdrawal(amount, from_acct_name)
        otherUser.make_deposit(amount, to_acct_name)
        return self

    def isValidAccount(self, acct_name):
        return acct_name in self.accounts


danny = User("Danny", "danny@email.com")
danny.create_account("Checking", 0.02, 1000).create_account(
    "Savings", 0.04, 50000
).make_deposit(5000.76, "Checking").make_withdrawal(
    12000, "Savings"
).display_user_balance()

laura = User("Laura", "laura@email.com")
laura.create_account("Checking", 0.02, 60000).create_account(
    "Savings", 0.04, 125000
).make_deposit(25000, "Savings").display_user_balance()

laura.transfer_money(50000, "Savings", danny, "Checking").display_user_balance()
danny.display_user_balance()
