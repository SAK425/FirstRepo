/*let value = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Hello')
    },1000)
})

console.log(value)
setTimeout(()=>{
    console.log(value)
},3000)*/

let response = fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()
).then(data=>{
    console.log(data)
})
