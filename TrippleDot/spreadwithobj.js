//create new object based on existing object
//merge two object

//extending object

let user={ name:"Rahul", loc:"Wayanad", email:"rahul@gmail.com"}
let details={ email:"Rahul@pm.com", sal:450000}
let user_Detaisl={ ...user, ...details}
console.log(user_Detaisl)