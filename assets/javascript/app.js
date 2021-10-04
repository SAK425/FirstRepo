function Appendl(){
var input = document.querySelector("input")
var list=document.querySelector("#li_elements")

    const element = document.createElement('li')
    const inputvalue = input.value
    const textNode = document.createTextNode(inputvalue)
    element.appendChild(textNode)
    list.appendChild(element)
    document.getElementById.innerHTML = list
    

}

