let emp = {
    id: 101,
    name: "Rahul",
    sal: 45000
}

for (prop in emp) {
    //console.log(emp.prop)
    console.log(emp[prop])
}