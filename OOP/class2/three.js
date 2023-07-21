class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
}

class SA extends Account{
    min_Bal=500
}

class CA extends Account{
    min_Bal=25000
}

let a1=new SA()
let a2=new CA()
console.log(a1)
console.log(a2)