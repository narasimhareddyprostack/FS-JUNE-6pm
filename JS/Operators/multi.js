var a = 10
var b = 20
var c = 30.5
var d = '40'

var e = "Rahul"
var f = true
var g = false
var h;
console.log(a * b)  //200
console.log(a * c)  //305
console.log(a * d) //400  - 10 * '40'  ie 10 * 40
console.log(a * e)  //NaN 

console.log(a * f)  //10  -  10 * 1
console.log(a * g) //0   -  10 * 0
console.log(a * h) //NAN

console.log(h * "Rajni Kanth") //NaN