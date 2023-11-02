interface Transaction {
    type: string;
    amount: number;
    timestamp: Date;
  }
  
  class BankAccount {
    private accountNumber: string;
    private accountHolder: string;
    private balance: number;
    private transactions: Transaction[] = [];
  
    constructor(accountNumber: string, accountHolder: string, initialBalance: number) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.balance += amount;
        const transaction: Transaction = {
          type: 'deposit',
          amount: amount,
          timestamp: new Date(),
        };
        this.transactions.push(transaction);
        console.log(`Deposited Rs-${amount}. New balance: Rs-${this.balance}`);
      }
    }
  
    withdraw(amount: number): void {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        const transaction: Transaction = {
          type: 'withdraw',
          amount: amount,
          timestamp: new Date(),
        };
        this.transactions.push(transaction);
        console.log(`Withdrawn Rs-${amount}. New balance: $${this.balance}`);
      } else {
        console.log('Insufficient balance or invalid withdrawal amount.');
      }
    }
  
    getBalance(): number {
      return this.balance;
    }
  
    displayTransactions(): void {
      console.log('Transaction History:');
      this.transactions.forEach((transaction, index) => {
        console.log(`Transaction ${index + 1}: ${transaction.type} - Amount: Rs-${transaction.amount} - Date: ${transaction.timestamp}`);
      });
    }
  }
  

  const account = new BankAccount('12345', 'John Doe', 10000);
  
  account.deposit(1500);
  account.withdraw(2000);
  account.deposit(300);
  account.withdraw(150);
  
  console.log('Account Balance: RS-' + account.getBalance());
  
  account.displayTransactions();
  