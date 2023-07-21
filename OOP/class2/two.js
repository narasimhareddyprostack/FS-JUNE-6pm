class Test{
    constructor(){
        console.log("const - is special method execute auto")
    }
    get_Details(){
        console.log("Normal method")
    }
}
let t1= new Test()
t1.get_Details()
t1.get_Details()
t1.get_Details()
t1.get_Details()
t1.get_Details()