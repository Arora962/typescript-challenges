class BankAccount {
    private balance: number;
    protected accountNumber: string;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}
class BankManager extends BankAccount {
    constructor(accountNumber: string, initialBalance: number) {
        super(accountNumber, initialBalance);
    }

    public flagFraud(): void {
        console.log(`Account ${this.accountNumber} is flagged for review.`);
    }

    public getAccountNumber(): string {
        return this.accountNumber;
    }
}

// Testing
const account = new BankAccount("ACC123", 1000);
const manager = new BankManager("ACC999", 5000);
console.log("Manager flags the account:");
manager.flagFraud();
console.log("Manager gets balance via public method:", manager.getBalance());
console.log("Manager gets account number via protected access:", manager.getAccountNumber());

// Try accessing private and protected fields from outside the class
//console.log(manager.balance); // Error: Property 'balance' is private
//console.log(manager.accountNumber); // Error: Property 'accountNumber' is protected