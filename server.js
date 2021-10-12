
const http = require('http')
const fs = require('fs')
const path = require('path')

//console.log(http)
/*
const server=http.createServer((req,res)=>{
    //console.log(req.url)
    //console.log(req.headers)
    //console.log(req.method)
   // const markup=fs.readFileSync(path.resolve('./index.html'))
    //res.write(markup)
    //res.end()
    
    const{url} = req
    console.log(url)
    if(url=='/login'){
        res.write('<h1>Login</h1>')
         res.end()
    }
    if(url=='/signup'){
        res.write('<h1>Signup</h1>')
        res.end()
    }
})
server.listen(3000,()=>{
    console.log(`Server listening at PORT:${3000}`)
})*/
const data =[
    {name:"Sakshi"},
    {name:"Samiksha"},
    {name:"Sarthak"}
]
const express = require('express')
const app = express()
app.get('/getNames',(req,res)=>{
    console.log(req.url)
    res.send(data)
})
app.get('/signup',(req,res)=>{
    console.log(req.url)
    res.send('This is signup')
})
app.listen(3000,()=>{

    console.log("server listening at port 3000")
})