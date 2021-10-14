const express=require('express')
const port = 3000
const app = express()
const verify =(req,res,next)=>{
    if(req.headers['user-agent']=="Thunder Client (https://www.thunderclient.io)")next()
  
    else res.send("BLOCKED")
}

app.get('/',verify,(req,res)=>{
    res.send('verified')
    console.log(req)
  
    
})


app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})