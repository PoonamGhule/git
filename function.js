function add(x, y) {
    return x + y
}
let a = add(3, 4)
console.log(a + a)

//function declaration
function mul(x, y) {
    return x * y
}
let aa = mul(2, 3)
console.log(aa)

//function expression
let div = function (x, y) {
    return x / y
}
let bb = div(12, 3)
console.log(bb)

let mul1 = function (x, y) {
    return x * y
}
let c = mul1(3, 4)
console.log(c)

//arrow function
let sum = (x, y) => {
    return x + y
}
let cc = sum(10, 20)
console.log(cc)

//number as a parameter to function and number
// as areturn type

function mul2(x, y) {
    return x * y
}
let aa2 = mul2(25, 3)
console.log(aa2)

//string as a parameter to function and string 
//is return type
function greeting(p) {
    return p + " poonam"
}
let d = greeting("hello")
console.log(d)

function welcome(b) {
    return b + " poonam"
}
let dd = welcome("how are u")
console.log(dd)

//array as a parameter to function array 
//is return type

let k=[2,3,4,5,6,7,89,8]
function g(arry){
   let n=arry.filter(function(el,index,arry){
        return el>4
    })
    console.log(n)
    return arry.slice(-4)
}
let ddd=g(k)
console.log(ddd)



//object as a parameter to function object
//is return type

let info = {
    firstname: "poonam",
    lastname: "ghule",
    city: "jalna"
}
function addage(obj) {
    obj.tal="thane"
    obj.city = "pune"
    return obj
    return obj


}
let r = addage(info)
console.log(r)




function greet(p) {
    return p + " poonam" + "!"
}
let tt = greet("hw are u")
console.log(tt)

function multi(x, y) {
    return x * y

}
let e = multi(4, 5)
console.log(e)


let k1 = ["poonam", "nikita", "pooja", "rahul"]
function g(arry) {
    let n = arry.forEach(function (el, index, arry) {
        console.log("hello " + el)
    })
    arry.splice(1, 2, "raj", "ram")
    return arry
}
let ddd1 = g(k1)
console.log(ddd1)

let num = [11, 12, 13, 14, 15, 16]
function arr(obj) {
    let f = obj.reduce(function (acc, el, index, arr) {
        return acc + el
    }, 0)
    console.log(f)

    return obj.slice(3)

}
let t = arr(num)
console.log(t)

// function as a parameter to another function

let substraction = function (x, y) {
    return x - y
}
function sub(a, b, fn) {

    let s1 = fn(a, b)
    return s1
}
let s2 = sub(11, 5, substraction)
console.log(s2)




let division = function (x, y) {
    return x * y
}
function di(a, b, fn) {

    return fn(a, b)

}
let d4 = di(12, 3, division)
console.log(d4)






// let addition = function (x, y) {
//     return x + y
// }
// function add(a, b, fn) {

//     let s1 = fn(a, b)
//     return s1
// }
// let d9 = add(12, 3, addition)
// console.log(d9)
