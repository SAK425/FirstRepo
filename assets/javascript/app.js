var inputvalue = document.querySelector('input');
var button = document.querySelector('#addbtn');
var list = document.querySelector('ul');
/*
const callback = ()=>{
    const inputvalue = input.value;
    const element = document.createElement('li')
    const textnode=document.createTextNode(inputvalue)
    element.appendChild(textnode)
    list.appendChild(element)
}
button.addEventListener('click',callback)
*/



var body=document.querySelector('body')
var button = document.querySelector('.switch')
const callback = ()=>{
body.classList.toggle('dark')
}
button.addEventListener('checked',callback)