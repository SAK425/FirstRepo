function Appendl(){
    var input = document.querySelector("#Txtinput").value
    var list=document.querySelector("#li_elements")
    
        const element = document.createElement('li')
        
        const textNode = document.createTextNode(input)
        element.appendChild(textNode)
        list.appendChild(element)
        document.getElementById.innerHTML = list
        
    
    }