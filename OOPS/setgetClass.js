//in that case method is attach to every object

class Bank {
    constructor(accholder, branch, ifsc) {
        this.firstname = accholder
        this.branch = branch
        this.ifsc = ifsc
        this.deposit = function () {
            console.log('money deposit')
        }
    }
}
let acc1 = new Bank('poonam', 'otur', 73647)
console.log(acc1)
acc1.deposit()

//to avoid the above problem we write method outside the constructor

class Bank1 {
    constructor(accholder, branch, ifsc) {
        this.firstname = accholder
        this.branch = branch
        this.ifsc = ifsc
    }
    deposit() {
        console.log('money deposit')
    }
}
let acc = new Bank1('poonam', 'otur', 73647)
console.log(acc)
acc.deposit()

// setting the value using method

class Person {
    setfullname(fn) {
        this.fullname = fn
    }
    getfullname() {
        return this.fullname
    }
    setage(ag) {
        this.age = ag
    }
    getage() {
        return this.age
    }
}

let poonam = new Person()
poonam.fullname = 'poonam ghule'
poonam.age = 29
//poonam.fullname = 'ghule'
console.log(poonam)
console.log(poonam.getfullname())
console.log(poonam.getage())

// class Person2 {
//     set fn(string) {
//         this.fullname = string
//     }
//     get fn() {
//         return this.fullname
//     }
//     set ag(number) {
//         this.age = number
//     }
//     get ag() {
//         return this.age
//     }
// }
// let object= new Person2()
// object.fn='poonam'
// object.age=29
// console.log(object)
// console.log(object.fn)
// //object.setfn('poonam')
// //console.log(object.getfn())
// // console.log(object.getage())
