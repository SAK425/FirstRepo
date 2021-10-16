const express = require('express')
const app = express()
const PORT = 3000
const token = "TOP_SECRET"
app.use(express.json())
let products = [{ name: 'iPhone12 Case', price: '999' }, { name: 'iPhone13 Case', price: '1199' }, { name: 'iPhone13 Pro Case', price: '1499' }]
const validator =(req,res,next)=>{
    const{name,price} = req.body
    if(!name || !price) res.json({error:"Validation Failed"})
    else next()
}
const isAuthorized =(req,res,next)=>{
    if(req.headers.authorization===token) next()
    else  res.send({error:"Unauthorized"})
}
app.get('/products',(req,res)=>{
    res.json({products})
})
app.post('/products/add',isAuthorized,validator,(req,res)=>{
    const{name,price} = req.body
    products.push({
         name,
         price,
    })

    res.send({products})
})
//Authentication
app.post('/auth',(req,res)=>{
   const {email,password} =req.body
   if(email ==='admin@gmail.com' && password==='password'){
    res.send({token})
   }else{
       res.send({message:"Unauthorized"})
   }
})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
    
})
