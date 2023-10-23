// BankAccount interface
interface BankAccount {
    balance: number;
    credit(amount: number): void;
    debit(amount: number): void;
    checkBalance(): number;
}

// Customer class
class Customer {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    mobileNum: string;
    bankAccount: BankAccount;

    constructor(
        firstName: string,
        lastName: string,
        gender: string,
        age: number,
        mobileNum: string,
        bankAccount: BankAccount
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNum = mobileNum;
        this.bankAccount = bankAccount;
    }
}

// BankAccount class implementing BankAccount interface
class MyBankAccount implements BankAccount {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    credit(amount: number): void {
        if (amount > 100) {
            amount -= 1; // Deduct 1$ if more than 100$ is credited
        }
        this.balance += amount;
    }

    debit(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log("Transaction cancelled: Insufficient funds");
        }
    }

    checkBalance(): number {
        return this.balance;
    }
}

// Unit test for the bank app
const testBankAccount = new MyBankAccount(1000); // starting balance of 1000$
testBankAccount.credit(150); // credited 150$
console.log("Current balance:", testBankAccount.checkBalance()); // should be 1149

testBankAccount.debit(200); // debited 200$
console.log("Current balance:", testBankAccount.checkBalance()); // should be 949

testBankAccount.debit(1000); // trying to debit 1000$
console.log("Current balance:", testBankAccount.checkBalance()); // should remain 949

const testCustomer = new Customer(
    "Shahzaib",
    "Samo",
    "Male",
    18,
    "1234567890",
    testBankAccount
);
