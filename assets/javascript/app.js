const btn = document.querySelector('button')
const table=document.querySelector('table')
const getusers= async ()=> {
const url = 'https://jsonplaceholder.typicode.com/users'
const res = await fetch(url)
const data=await res.json()
data.forEach(user => {
    let newrow = document.createElement('tr')
let element = `
<td>${user.id}</td>
<td>${user.name}</td>
<td>${user.address.city}</td>

`
newrow.innerHTML = element
table.appendChild(newrow)


});
}










btn.addEventListener('click',getusers)