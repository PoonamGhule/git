function Person(fn, ln, ag, rn) {
    this.firstname = fn
    this.lastname = ln
    this.age = ag
    this.rollno = rn
    this.display = function () {
        console.log(this.firstname + " " + this.lastname)
    }
}
let poonam = new Person('poonam', 'ghule', 29, 44)
console.log(poonam)
poonam.display()

class Person1 {
    constructor(fn, ln, ag, rn) {
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollno = rn
        this.display = function () {
            console.log(this.firstname + this.lastname)
        }
    }
}
let monika=new Person1('monika','gosavi',25,66)
console.log(monika)
monika.display()

let info={
    init:function(fn,ln,ag,rn){
        this.firstname = fn
        this.lastname = ln
        this.age = ag
        this.rollno = rn
        this.display = function () {
            console.log(this.firstname + this.lastname)
        }
    }
}
let priti= Object.create(info)
priti.init('priti','raut',30,22)
console.log(priti)
