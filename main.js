"use strict";
// Define a class representing an ATM
class ATM {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    // Method to check balance
    checkBalance() {
        return this.balance;
    }
    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} successfully.`);
        }
        else {
            console.log('Invalid amount. Deposit failed.');
        }
    }
    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} successfully.`);
        }
        else {
            console.log('Insufficient funds. Withdrawal failed.');
        }
    }
}
// Example usage
const atm = new ATM(1000); // Initial balance of 1000
console.log(`Current Balance: ${atm.checkBalance()}`);
atm.deposit(500); // Deposit 500
console.log(`Current Balance after deposit: ${atm.checkBalance()}`);
atm.withdraw(200); // Withdraw 200
console.log(`Current Balance after withdrawal: ${atm.checkBalance()}`);
atm.withdraw(2000); // Attempt to withdraw more than balance
console.log(`Current Balance after failed withdrawal: ${atm.checkBalance()}`);
