class Account{
        acc_Id;
        acc_Name;
        acc_Bal=0;
        constructor(id, name, amount){
            this.acc_Id  = id;
            this.acc_Name = name; 
            this.acc_Bal  = amount
        }
        deposit_Amount(amount){
            this.acc_Bal  = this.acc_Bal + amount;
        }
        get_Bal(){
            return this.acc_Bal
        }
}

let a1=new Account(101, "Rahul", 5000)
let a2=new Account(102, "Priyanka", 50000)
console.log(a1)
console.log(a2)

a1.deposit_Amount(501)
a1.deposit_Amount(501)

console.log(a1)

console.log("*********************")

console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a2.get_Bal())