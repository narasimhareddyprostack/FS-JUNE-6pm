let state = {
    product:{
        p_Id:'p101',
        p_Name:"Iphone 18",
        p_Price:36000

    },
    user:{ name:'Rahul', loc:"Wayanand"},
    emp:{ id:101, name:"Rahul Gandhi"}
}

let {product}  = state 
let {p_Name}  = product
console.log(p_Name) 
