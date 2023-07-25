class Account{
    constructor(){
        console.log("Account Class const")
    }
}

let min_Bal = 500

let branch_Name="Marathahalli"

function get_Details(){
    console.log("Display detials")
}

export {min_Bal, Account, branch_Name,get_Details}