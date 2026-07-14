class BankAccount {
    constructor(owner, balance = 0){
        this.owner = owner;
        this.balance = balance;
        this.transactions = [];
        this.transactions.push({type: "opening", amount: balance, date: new Date()})
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log(" deposite amount must be positive");
            return;
        }
        this.balance += amount;
        this.transactions.push({type: "deposite", amount, date: new Date()});
        console.log(`deposited: ${amount} \n New balance: ${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log(`Withdrawal amount must be positive`);
            return;
        }
        if (amount > this.balance) {
            console.log(`Insufficient balance`);
            return;
        }
        this.balance -= amount;
        this.transactions.push({type: "Withdrawal", amount, date: new Date()});
        console.log(`Withdrawal ${amount}, \n New balance: ${this.balance}`);
    }
}

const account = new BankAccount("John Lion", 1000);
account.deposit(2000);
account.withdraw(100);
