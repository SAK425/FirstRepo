/*
let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hello")
    },3000)
})
data.then(data=>{
    console.log(data)
})
const table=document.querySelector('table')
console.log(table)

fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then( data=>{data.forEach(user=>{
    let newRow=document.createElement('tr')
   let element=`
   <td>${user.id}</td>
   <td>${user.name}</td>
   <td>${user.email}</td>
   <td>${user.username}</td>`
   console.log(element)
   newRow.innerHTML=element
   table.appendChild(newRow)
})
})
const fetchData = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    console.log(response)
    const data = await response.json()
    console.log(data)
}

fetchData()

const btn = document.querySelector('button')
const search = ()=>{
    const input = document.querySelector('input').value
    console.log(input) 
}


btn.addEventListener('click',search)*/


const button = document.querySelector('button')
const input = document.querySelector('input')

const getData = async (item) => {
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    
    console.log(data.hits)
}

//  add event listener to the button
button.addEventListener('click', (e) => {
    getData(input.value)
})
