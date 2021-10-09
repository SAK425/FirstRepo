var chores = []
var mylist = document.getElementsByTagName("li")

function Appendl(){
    var input = document.querySelector("#Txtinput").value
    chores.push(input)
    var list=document.querySelector("#li_elements")
    
        const element = document.createElement('li')
        const countofele = document.getElementById('count')
        const textNode = document.createTextNode(input)
        const minus = document.createElement('button')
    
        countofele.innerHTML = chores.length
        minus.setAttribute('class','minusbtn')
        element.appendChild(textNode)
        element.appendChild(minus)
        list.appendChild(element)
        document.getElementById.innerHTML = list
        
         minus.addEventListener('click',(e)=>{
             chores = chores.filter(item => item!= input)
             element.remove()
             
         })
    
    }