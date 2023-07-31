let employees = []
//insert data into datasource ie, array -
let createEmployee = (emp)=>{
    setTimeout(()=>{
        console.log("Request 1")
    },4000)
}
//fetching data from the datasource

let getEmployees=()=>{
    setTimeout(()=>{
         console.log("Request 2")
    },1000)
}


createEmployee({id:103, name:"Priyanka", sal:65000})
getEmployees()