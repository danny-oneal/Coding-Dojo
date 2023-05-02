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


account_1 = BankAccount(1000, 0.03)
account_2 = BankAccount(10000, 0.04)

account_1.deposit(100).deposit(250).deposit(500).withdraw(
    300
).yield_interest().display_account_info()

account_2.deposit(100).deposit(250).withdraw(300).withdraw(1500).withdraw(500).withdraw(
    250
).yield_interest().display_account_info()

BankAccount.display_all_accounts_info()
