/*var arr = [1,2,3,4,5]

arr.shift()
console.log(arr)
new_arr = []
//var new_arr = arr.slice(2,4)
//console.log(new_arr)

for(var i=0;i<arr.length;i++){
    if(arr[i]%2===0)
    new_arr.push(arr[i])
}
console.log(new_arr)

var new_arr=arr.filter((element,index)=>{
    if(element % 2===0)
    return true
})
console.log(new_arr)

var new_arr1=arr.filter((element,index)=>{
    if(element > 4)
    return true
})
console.log(new_arr1)*/
var arr1 = [1,2,3,4,5,6,7,8]

arr1.splice(3,3)
console.log(arr1)