class Account {
    acc_Bal = 0

    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
}

let a1 = new Account()
let a2 = new Account()

console.log(a1)
console.log(a2)
console.log("After Depositing")
a1.deposit_Amount(5000)
console.log(a1)
console.log(a2)