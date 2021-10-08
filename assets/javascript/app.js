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
const list = document.querySelector('ul')
const parent=document.querySelector('.grid')
const getData = async (item) => {
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    const receipies=data.hits
    receipies.forEach(item => {
        const {recipe} = item
        
        const {label,image,source,calories} = recipe
        
        const template=`
        <img class="card__image" src="${image}" />
        <div class="card__data">
            <div class="card__info">
                <h2>${label}</h2>
                <p>From ${source}</p>
            </div>
            <h3 class="card__price">${calories.toFixed(2)}</h3>
            <button class="card__add">+</button>
        </div>
    `
    const newcard=document.createElement('article')
    newcard.setAttribute('class','card')
    newcard.setAttribute('style','margin-bottom:50px')
    newcard.innerHTML = template
 console.log(newcard)
       parent.appendChild(newcard)
    });
   
    
}



//  add event listener to the button
button.addEventListener('click', (e) => {
    getData(input.value)
    parent.innerHTML=""
})

/*
let greet = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello")
    },5000)
})
greet.then((value)=>{
      console.log(value)
      return "Welcome again"
}).then(newValue=>{
    console.log(newValue)
})
let response = fetch('https://jsonplaceholder.typicode.com/todos/10')

console.log(response)

response.then(data=>{
 return data.json()
}).then(content =>{
    console.log(content)
})
*/