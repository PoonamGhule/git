let substraction = function (x, y) {
    return x - y
}
function sub(a, b, fn) {

    let s1 = fn(a, b)
    return s1
}
let s2 = sub(11, 5, substraction)
console.log(s2)

console.log("----")



console.log("-------")

let addition1 = function (x, y) {
    return x + y
}
function add(a, b, fn) {
    let s1 = fn(30, 20)
    return s1 + a + a
}
let d5 = add(10, 20, addition1)
console.log(d5)

console.log("-----")

function div(x, y) {
    return x / y
}
function divide(a, b, fun) {
    let c = fun(10, 2)
    return c + a + b

}
let d = divide(12, 4, div)
console.log(d)

let addit = function (x, y) {
    return x + y
}
function add(a, b, fn) {

    let s1 = fn(a, b)
    return a + b + s1
}
let d9 = add(12, 3, addit)
console.log(d9)


let info = {
    firstname: "poonam",
    lastname: "ghule",
    city: "jalna"
}
function addage(obj) {
    obj.tal = "thane"
    obj.city = "pune"
    return obj
    return obj


}
let r = addage(info)
console.log(r)

// string

function greet(a) {
    return a + " poonam"
}
let g = greet("hello")
console.log(g)

// object

let info1 = {
    myname: "poonam",
    fathername: "baban",
    lastname: "tambe"
}
function myself(obj) {
    obj.mothername = "vimal"
    obj.age = 28
    obj.lastname = "ghule"
    return obj

}
let f = myself(info1)
console.log(f)

// array
let h = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function array(num) {
    let f = num.map(function (el, index, arr) {
        return el + 2
    })
    console.log(f)
let g=num.slice(6)
console.log(g)
    return num.slice(5)

}
let ab = array(h)
console.log(ab)

let k = [2, 3, 4, 5, 6, 7, 89, 8]
function gg(arry) {
    let n = arry.filter(function (el, index, arry) {
        return el > 4
    })
    console.log(n)
    return arry.slice(-4)
}
let ddd = gg(k)
console.log(ddd)

//function as return

function add(x,y){
    return function(){
        return x+y
    }
}
let t=add(12,3)
let m=t()
    console.log(m)

    function sub(a,b){
        return function(){
            return a-b
        }
    }
    let n=sub(12,6)
    let e=n()
    console.log(e)

    let x1=10
    console.log(x1)
    let addv=function(x,y){
        return x+y
        // console.log(x,y)
    }
    u=addv(12,13)
    console.log(u)


    function addd(x,y){
        return x+y
    }
    function du(a,b,f){
        let m=f(a,b)
        return m+m+a

    }
    let l=du(12,3,addd)
    console.log(l)



    
   

