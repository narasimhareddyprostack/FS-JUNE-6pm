class Account {
    min_Bal = 500
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount() {
        console.log("Deposited Successfully")
    }
    get_Bal() {
        console.log("Server Busy")
    }
    withdrawl_Amount() {
        console.log("Insuffient Bal")
    }
    close_Account() {
        console.log("amount is - minus bal, pls pay")
    }
}

let a1 = new Account();
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount()
a1.get_Bal()
a1.withdrawl_Amount()

a1.close_Account()