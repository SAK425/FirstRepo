
/*function greet(name='John',age=19){
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


/*var add=(a=0,b=0)=>{
    var sum = a+b
    return sum
}
var add=(a=0,b=0)=>a+b
console.log(add(10,20))

const greet =(name)=>{
    return 'hi '+name
}
console.log(greet("Sakshi"))*/

//var arr=['Go to the GYM','Eat Food','Clean House']
/*for (var i=0;i<arr.length;i++){
    console.log(arr[i])
}*/
/*var callbackFunction = (element,index) =>{
    console.log(element,index)
}
arr.forEach(callbackFunction)*/
/*arr.forEach((element,index)=>{
    console.log(element,index)
})*/
var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')
const callback = (e)=>{
    const inputvalue = input.value
    const element = document.createElement('li')
    const textNode = document.createTextNode(inputvalue)
    element.appendChild(textNode)
    list.appendChild(element)
    console.log('sdf',e.target)
    console.log(input.value)
}
button.addEventListener('click',callback)