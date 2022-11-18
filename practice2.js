
//string as parameter

function greet(name){
return 'hello '+name
}
let a=greet('poonam')
console.log(a)

//obj a parameter
let info={
    firstname:"poonam",
    lastname:"ghule",
    age:29
}
function objparam(obj){
obj.city="pune"
obj.firstname="pinu"
return obj
}
let b=objparam(info)
console.log(b)

//array as parameter
let a1=[11,32,34,55,78,55,77,55,43]
function array(arr){
    let a2=arr.filter(function(el){
        return el>40
    })
    console.log(a2)
    return arr.slice(1,5)
}
let a3=array(a1)
console.log(a3)

//function as parameter
let add=function(x,y){
return x+y
}
function sum(a,b,fn){
    let g=fn(a,b)
    return g+a
}
let b1=sum(12,13,add)
console.log(b1)