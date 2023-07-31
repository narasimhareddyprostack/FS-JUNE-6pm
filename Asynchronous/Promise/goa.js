let goToGoa = (success,failure)=>{
    let bal = 5000

    bal > 10000 ? success("Enjoy in Titos") 
                 : failure("Open Laptop practise Asysn Progr")
}

goToGoa((msg)=>{
    console.log(msg)
},(error)=>{
    console.log(error)
})