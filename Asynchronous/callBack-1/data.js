let employees = [
    {id:101, name:"Rahul", sal:45000},{id:102, name:"Sonia", sal:55000}
]
//insert data into datasource ie, array -
let createEmployee = (emp,callback)=>{
    setTimeout(()=>{
       employees.push(emp)
       callback()
    },4000)
}
//fetching data from the datasource

let getEmployees=()=>{
    setTimeout(()=>{
         let rows=""
         for( emp of employees){
            rows = rows + ` <tr>
                                <td>${emp.id}</td>
                                <td>${emp.name}</td>
                                <td>${emp.sal}</td>
                          <tr>`
         }
         document.getElementById('tbody_Data').innerHTML =rows
    },1000)
}


createEmployee({id:103, name:"Priyanka", sal:65000},getEmployees)
