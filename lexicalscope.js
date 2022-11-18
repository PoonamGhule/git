// //lexical scope

// function add() {
//     let a = 10
//     let b = 20
//     console.log(a + b)
//     function addB() {
//         let c = 2
//         let d = 3
//         console.log(a + b+c)
//         function addC() {
//             let x = 4
//             let y = 5
//             console.log(c + d + x + y+a)
//         }
//         addC()
//     }
//     addB()
// }
// add()

// //closures
function addD(x, y) {
    console.log("hello")
    return x + y
}
let r = addD(12, 6)
console.log(r)


// function addE() {
//     let t = 10
//     let r = 20
//     return function () {
//         console.log(t + r)
//         console.log("hello")
//     }
// }
// let e = addE()
// // console.log(e)
// e()

var firstname="radha"
 age=30

let person={
    firstname:"poonam ghule",
    age:28,
    dob:27,
    display:function(){
        console.log(this.age)
        function dis(){
            console.log(this.firstname)
            console.log(this.age)
        }
        dis()
    }
}
person.display()

// var name="reshma"
// let obj = {
//     myname: "poonam",
//     age: 28,
//     rollno: 12,
//     application: function () {
//         console.log(this.myname)
//         function obj2() {
//             console.log(this.name)
//         }
//         obj2()
//     }
// }
// obj.application()



// function addition(){
//     let t=10
//     let m=20
// return function(){
//     console.log(t+m)
//     console.log("hiii")
// }
// }
// l=addition()
// // console.log(l)
// l()


// let myself={
//     name:"poonam",
//     lastname:"ghule"
// }
//  console.log(myself.name)//retrive
// myself.name="poonamghule"//update
// console.log(myself)
// myself.city="pune"//add
// console.log(myself)
// delete myself.lastname//delete
// console.log(myself)


// myself['city']="junnar"
// console.log(myself)

function addition() {
    h = 10
    m = 20
    console.log(h + m)
}
addition()

function add() {
    j = 2
    k = 4
    return j + k
}
f = add()
console.log(f)


function sum() {
    let o = 2
   let g = 3
    console.log(o + g)
    return function () {
        console.log(o + g)
        console.log(o + 5)
    }
}
p = sum()
p()


let obj = {
    myname: "poonam",
    lastname: "ghule",
    adding: function () {
        console.log(this.myname)
        function dis() {  // in this function this referce to window object
            console.log(this.myname)//and in window object no myname declared so o/p is undefined
        }
        dis()
    }
}
obj.adding()
