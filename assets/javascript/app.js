const op1 = document.querySelectorAll('input')[0]
const op2 = document.querySelectorAll('input')[1]
const add=document.querySelector("#add")
const multiply = document.querySelector("#multiply")
const subtract = document.querySelector("#subtract")
const resultbox = document.querySelector('.result')
/*
const sum = ()=>{
  const result =parseInt(op1.value) +parseInt( op2.value)
  console.log(result)
  resultbox.innerHTML = result
  //resultbox.textContent = result
}
add.addEventListener('click',sum)
console.log(op1,op2)
const multiplynum = ()=>{
    const result =op1.value * op2.value
    console.log(result)
    resultbox.innerHTML = result
    //resultbox.textContent = result
  }*/
  const calculate = (event,operation)=>{
   /* console.log(event.target)
       if(operation=='add'){
           console.log('adding')
          
       }else if(operation=='multiply'){
           console.log('multiplying')
       }
*/
switch(operation){
    case "add":
        resultbox.innerHTML = parseInt(op1.value) + parseInt(op2.value)
        break
    case "multiply":
        resultbox.innerHTML = parseInt(op1.value) * parseInt(op2.value)
        break
    case "subtract":
        resultbox.innerHTML = parseInt(op1.value) - parseInt(op2.value)
        break
}
  }

add.addEventListener('click',(event)=>calculate(event,'add'))
multiply.addEventListener('click',(event)=>{
calculate(event,'multiply')
})
subtract.addEventListener('click',(event)=>calculate(event,'subtract'))