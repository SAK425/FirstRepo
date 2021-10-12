const fs=require('fs')
/*fs.readFile('./text.txt',(error,data)=>{
    if(error) console.log(error)
    else console.log(data.toString())
})*/
//console.log(fs.readFileSync('./text.txt','utf8'))
//console.log(`I'am a random log`)

fs.writeFile('./text.txt',"New Stuff inside the file",(error)=>{
if(error) 
console.log(error)
})
