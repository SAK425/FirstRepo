/*if(true){
    console.log(Name)
    
    if(true){
        var Name = "ferari"
    }
}
const print=()=>{
    var Name = "Mercedes"
    if(true){
        console.log(Name)
    }
    return Name
}
print()

console.log(this.alert('Hi'))*/

let car = {
    name:"C Class",
    manufacturer:"Mercedes",
    print:()=>{

      console.log(`${car.name} was created by ${car.manufacturer}`)
    }
}
console.log(Object)
console.log(car)
console.log(car.hasOwnProperty('name'))
console.log(Object.keys(car))
console.log(Object.values(car))
