let employees = [
    {id:101, name:"Rahul", sal:45000},{id:102, name:"Sonia", sal:55000}
]

let createEmployee = (emp)=>{
    return new Promise((resolve,reject)=>{
        
    })
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
createEmployee({id:103, name:"priyanka",sal:65000})
