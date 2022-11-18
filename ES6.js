// rest operator
function add(...arr) {
    let a = arr.reduce(function (acc, el) {
        return acc + el
    }, 0)
    return a
}
let sum = add(1, 2, 3, 4, 5, 6, 7)
console.log(sum)

// spread operator
let marks = [11, 22, 33, 44, 55, 66, 7, 7, 7, 6, 54, 4]
function add1(a, b, c, d, e) {
    console.log(a + b + c + d + e)
}
add1(...marks)

// short circuting in js 
//truthy  -  2,-3,44, true , {} , [] , 8 === 8 , 'chinmay' , 'c' , "true"
// falsy value  - 0 , null , undefined , false , 6 !== 6 , '' , NaN 
// AND OR NOT

//let a = 'poonam' || 'pooja' || 'shivansh'
//console.log(a)//output=poonam


let b = 'poonam' && 'pooja' && 'shivansh'
console.log(b) //output=shivansh

let c = 'poonam' && 0 && 'shivansh'
console.log(c) //output=0

let firstname = "poonam"
let age = 28
let b1 = firstname || ++age
console.log(b1)//output=poonam

console.log('-------------------')

let firstname1 = 0
let age1 = 28
let b11 = firstname1 || ++age1
console.log(b11)//output=29

console.log('-------------------')

let firstname11 = "poonam"
let age11 = 0
let b111 = firstname11 && ++age11
console.log(b111)//output=1

let firstname111 = 0
let age111 = 28
let b1111 = firstname111 && ++age111
console.log(b1111)//output=0

// nullish coalesing operator  ??
// undefined or null

let info = {
    firstname: undefined,
    lastname: "ghule"
}
let d = info.firstname ?? 'john'
console.log(d)

let data = {
    fullname: {
        firstname: "poonam",
        lastname: "ghule"
    },
    parents: {
        mother: "vimal",
        father: "baban"
    }
}
console.log(data.fullnam?.firstname)
console.log(data.parents?.mother)

// let a = '' || 0 || false
// console.log(a)//output=false

let a = "poonam" && 0 && false
console.log(a)//output=false

function sub(a, ...arr) {
    let r = arr.filter(function (el) {
        return el > a
    })
    return r
}
let d1 = sub(50, 88, 56, 55, 23, 11, 134, 13, 17, 55)
let d2 = sub(80, 88, 56, 55, 23, 11, 134, 13, 17, 55)
console.log(d1)
console.log(d2)

let a1 = [11, 22, 33]
let a3 = [44, 55, 66]
let a4 = [2, ...a1, ...a3, 3]
console.log(a4)

