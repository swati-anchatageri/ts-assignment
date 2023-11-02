var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, accountHolder, initialBalance) {
        this.transactions = [];
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            var transaction = {
                type: 'deposit',
                amount: amount,
                timestamp: new Date(),
            };
            this.transactions.push(transaction);
            console.log("Deposited Rs-".concat(amount, ". New balance: Rs-").concat(this.balance));
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            var transaction = {
                type: 'withdraw',
                amount: amount,
                timestamp: new Date(),
            };
            this.transactions.push(transaction);
            console.log("Withdrawn Rs-".concat(amount, ". New balance: $").concat(this.balance));
        }
        else {
            console.log('Insufficient balance or invalid withdrawal amount.');
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.displayTransactions = function () {
        console.log('Transaction History:');
        this.transactions.forEach(function (transaction, index) {
            console.log("Transaction ".concat(index + 1, ": ").concat(transaction.type, " - Amount: Rs-").concat(transaction.amount, " - Date: ").concat(transaction.timestamp));
        });
    };
    return BankAccount;
}());
var account = new BankAccount('12345', 'John Doe', 10000);
account.deposit(1500);
account.withdraw(2000);
account.deposit(300);
account.withdraw(150);
console.log('Account Balance: RS-' + account.getBalance());
account.displayTransactions();
