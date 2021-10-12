/*const {add,subtract,multiply,divide,message}=require('./utility')

add()
subtract()
multiply()
divide()
console.log(message)

*/


const button=document.querySelector('button')
const input=document.querySelector('input')
const div = document.querySelector('div')
const arr=[10,11,12,13,14]
//localStorage.setItem('val',arr)
//console.log(localStorage.getItem('val'))
console.log(arr)
//console.log(JSON.stringify(arr))
localStorage.setItem('val',JSON.stringify(arr))
console.log(localStorage.getItem('val'))
console.log(typeof(localStorage.getItem('val')))
console.log(JSON.parse(localStorage.getItem('val')))
//const arr=localStorage.getItem('InputValue')
//console.log(typeof(arr))
/*
button.addEventListener('click',(req,res)=>{
    localStorage.setItem("InputValue",[1,2,4,5])
    div.innerHTML = input.value;
})
*/
