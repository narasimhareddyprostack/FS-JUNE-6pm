let employees=[{id:101,name:"Rahul",salary:45000},
               {id:102,name:"Sonia",salary:55000},
               {id:103,name:"Priyanka",salary:65000}]

function display_Data(){
    //alert("GE")
    let rows=""
    for(emp of employees){
        rows = rows+`<tr>
                     <td> ${emp.id} </td> 
                     <td> ${emp.name} </td> 
                     <td> ${emp.salary} </td> 
                     </tr>`
    }
    document.getElementById('abc').innerHTML=rows
    //document.getElementById('abc').innerHTML="GE"
}








       /*   <tr>
                <td>101</td>
                <td>Rahul</td>
                <td>45000</td>
            </tr> */
