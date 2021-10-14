const express=require('express')
const port = 3000
const app = express()
app.use()
app.post('/signup',express.json(),(req,res)=>{
    console.log(req.body)
 res.send('dadaaa')
})

/*
const isAdmin =(req,res,next)=>{
    if(req.headers.admin==='true')next()
    else res.send("unauthorized")
}




app.get('/public',(req,res)=>{
    console.log(req.headers)
    res.send('I am a public route')
})
app.get('/private',isAdmin,(req,res)=>{
    res.send('I am a admin route')
})*/
/*
const verify =(req,res,next)=>{
    if(req.headers['user-agent']=="Thunder Client (https://www.thunderclient.io)")next()
  
    else res.send("BLOCKED")
}

app.get('/',verify,(req,res)=>{
    res.send('verified')
    console.log(req)
  
    
})*/


app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})