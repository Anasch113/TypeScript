"use strict";
// practices about setter and getter
class BankAccount {
    _balance = 0;
    get balance() {
        return this._balance;
    }
    set balance(newBalance) {
        if (newBalance < 0) {
            throw new Error("Invalid Balance");
        }
        this._balance = newBalance;
    }
}
const account = new BankAccount();
account.balance = 10;
// console.log(account.balance)
// Temperature converter
class Temperature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    get farhenhiet() {
        return (this._celsius * 9) / 5 + 32;
    }
    set farhenhiet(newFah) {
        this._celsius = ((newFah - 32) * 5) / 9;
    }
}
const temp = new Temperature();
temp.celsius = 25;
temp.farhenhiet = 77;
console.log(temp.farhenhiet);
