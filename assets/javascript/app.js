
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
var chores = []
var deleteItem = (value) =>{
    const index = chores.indexOf(value)
   chores.splice(index,1)
   console.log(chores)
}


const callback = (e)=>{
    const inputvalue = input.value
    if(chores.includes(inputvalue)){
        console.log('already exists')
    }
    else{
    chores.push(inputvalue)
    const element = document.createElement('li')
    const textNode = document.createTextNode(inputvalue)
    element.appendChild(textNode)
    list.appendChild(element)
    element.addEventListener('click',(e)=>{
             e.target.remove()
    })
}
}
button.addEventListener('click',callback)
/*
var body=document.querySelector('body')
var button = document.querySelector('button')
const callback = (event)=>{
body.classList.toggle('dark')
}
button.addEventListener('click',callback)*/