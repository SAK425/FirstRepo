
function greet(name='John',age=19){
    console.log(age,name)
}
var greet = function(name='John',age=19){
    console.log(age,name)
}
greet();
//console.log(add(10,20))
//function add(a = 0, b = 0) {
  // var sum = a + b
   //return sum
//}

/*var add = function (a = 0, b = 0) {
    var sum = a + b
    return sum
}*/


var add=(a=0,b=0)=>{
    var sum = a+b
    return sum
}
console.log(add(10,20))