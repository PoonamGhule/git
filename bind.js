// var name="sharannya"
// var lastname="ghule"
// let obj = {
//     firstname: "poonam",
//     lastname: "ghule",
//     rollno: 20,
//     display: function () {
//         console.log(this.firstname + this.lastname)
//         let dis=function() {
//             console.log(this.name + this.lastname)
//         }
//         dis()
//     }
// }
// obj.display()

var firstname = "sharannya"
var lastname = "ghule"
let obj = {
    firstname: "poonam",
    lastname: "ghule",
    rollno: 20,
    display: function () {
        console.log(this.firstname + this.lastname)
        let dis = function () {
            console.log(this.firstname + this.lastname)
        }
        dis()

    }
}
obj.display()

console.log('------------')

let display=function () {
    console.log(this.firstname + this.lastname)
}

let obj2 = {
    firstname: "raghav",
    lastname: "sachar"
}
let obj3 = {
    firstname: "nikita",
    lastname: "tambe"
}

//let g = obj.display
// console.log(g)
//g()
let a =display .bind(obj2)
//console.log(a)
a()
let a2 =display.bind(obj3)
a2()

let dis=function(){
    console.log(this.firstname+this.lastname)
}
let info={
    firstname:"monika",
    lastname:"ghule"
}

let info1={
    firstname:"pooja1",
    lastname:"ghule1"
}

let info2={
    firstname:"sharu",
    lastname:"ghule2"
}
console.log('------------')
d=dis.bind(info)
d()
// dis.bind(info1)()
// dis.bind(info2)()

dis.apply(info)
dis.apply(info1)
dis.apply(info2)

dis.call(info)
dis.call(info1)
dis.call(info2)

let info4={
    firstname:"pooja",
    lastname:"ghule",
  greet:function(word){
    console.log(`${word}${this.firstname}${this.lastname}`)
}
}
info4.greet("hello")
greet.apply(info4,["hello"])
//greet.call(info4,"hii")

// for(var i = 0; i < 5; i++) {
//     console.log(i); // 0,1,2,3,4
// }
// console.log(i); // 5
