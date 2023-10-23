// Customer class
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, gender, age, mobileNum, bankAccount) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.mobileNum = mobileNum;
        this.bankAccount = bankAccount;
    }
    return Customer;
}());
// BankAccount class implementing BankAccount interface
var MyBankAccount = /** @class */ (function () {
    function MyBankAccount(balance) {
        this.balance = balance;
    }
    MyBankAccount.prototype.credit = function (amount) {
        if (amount > 100) {
            amount -= 1; // Deduct 1$ if more than 100$ is credited
        }
        this.balance += amount;
    };
    MyBankAccount.prototype.debit = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Transaction cancelled: Insufficient funds");
        }
    };
    MyBankAccount.prototype.checkBalance = function () {
        return this.balance;
    };
    return MyBankAccount;
}());
// Unit test for the bank app
var testBankAccount = new MyBankAccount(1000); // starting balance of 1000$
testBankAccount.credit(150); // credited 150$
console.log("Current balance:", testBankAccount.checkBalance()); // should be 1149
testBankAccount.debit(200); // debited 200$
console.log("Current balance:", testBankAccount.checkBalance()); // should be 949
testBankAccount.debit(1000); // trying to debit 1000$
console.log("Current balance:", testBankAccount.checkBalance()); // should remain 949
var testCustomer = new Customer("Shahzaib", "Samo", "Male", 18, "1234567890", testBankAccount);
