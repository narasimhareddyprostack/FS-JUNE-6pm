let user = {} //empty object
let emp = { id: 101, name: "Rahul", sal: 45000 }

/* 
console.log(Object.keys(user))
console.log(Object.keys(emp))
console.log(Object.keys(emp).length)
 */

if (Object.keys(emp).length > 0) {
    console.log("Not Empty Object")
}
else {
    console.log("Empty Object")
}