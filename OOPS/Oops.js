// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     age:27,
//     skills:["html3","css3","javscript"],
//     display:function(){
//         console.log(this.firstName +" "+ this.lastName)
//     }
// }
// amol.display()

let info = {
    firstname: "poonam",
    lastname: "ghule",
    age: 28,
    display: function () {
        console.log(this.firstname + " " + this.lastname)
    }
}
info.display()

function Person(fn, ln, ag, skills) {
    this.firstname = fn,
        this.lastname = ln,
        this.age = ag,
        this.skills = skills
    this.display = function () {
        console.log(this.firstname + " " + this.lastname)
    }
}

let monika = new Person("monika", "gosavi", 25, ['c++', "html", 'js'])
console.log(monika)
monika.display()

// vehicle  , color, type , modelNo 
// start() , stop()
//bwm , audi

function Vehicle(clr, type, modlno) {
    this.color = clr
    this.type = type
    this.modelno = modlno
    this.start = function () {
        console.log('i am start')
    }
    this.stop = function () {
        console.log('i am stopped')
    }
}
let bmw = new Vehicle("red", "suv", 123)
bmw.start()
console.log(bmw)

class Bank {
    constructor(bankname, username, branch, ifsccode) {
        this.bankname = bankname
        this.username = username
        this.branch = branch
        this.ifsccode = ifsccode
        this.deposit = function () {
            console.log('money deposit')
        }
        this.withdrawls = function () {
            console.log('money withdrawl')
        }
    }
}
let user1 = new Bank("icici", "poonam", "otur", 3456)
user1.deposit()
//console.log(user1)

let Banks = [new Bank("icici", "poonam", "otur", 3456),
new Bank("icici1", "poonam1", "otur1", 34561)]

Banks.forEach(function (el) {
    for (let key in el) {
        console.log(key, el[key])
    }
})

console.log('------------------------------')


let Banks1 = {
    B1: new Bank("icici", "poonam", "otur", 3456),
    B2: new Bank("icici2", "poonam2", "otur2", 34256)
}

for(let values of Object.values(Banks1)){
  for(let key in values){
    console.log(key,values[key])
  }
}

// for(let keys in Banks1){
//     for(let keys in Banks1[key]){
//         console.log(keys, Banks1[key][key])
//     }
// }

