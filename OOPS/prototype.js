//template
// function constructor

function Human(fn, ln, rn, ag) {
    this.firstname = fn
    this.lastnsme = ln
    this.rollno = rn
    this.age = ag
    this.display=function(){
        console.log(this.firstname)
    }
}
let monika=new Human("monika","gosavi",23,25)
console.log(monika)
monika.display()

//Es6 class

class Person{
    constructor(fn, ln, rn, ag){
        this.firstname = fn
        this.lastnsme = ln
        this.rollno = rn
        this.age = ag
        this.display=function(){
            console.log(this.firstname)
        }
    }
}
let poonam= new Person("poonam","ghule",33,29)
poonam.display()
console.log(poonam)

//object.create

let obj={
    init:function(fn, ln, rn, ag){
        this.firstname = fn
        this.lastnsme = ln
        this.rollno = rn
        this.age = ag
        this.display=function(){
            console.log(this.firstname)
        }
    }
}
let priti= Object.create(obj)
priti.init("priti",'raut',15,30)
console.log(priti)
priti.display()


//prototype

function Human1(fn, ln, rn, ag) {
    this.firstname = fn
    this.lastnsme = ln
    this.rollno = rn
    this.age = ag
    // this.display=function(){
    //     console.log(this.firstname)
    // }
}
let monika1=new Human1("monika","gosavi",23,25)
console.log(monika1)
//monika1.display()

console.log(monika1.__proto__===Human1.prototype)
Human1.prototype.display=function(){
    console.log(this.firstname)
}
monika1.display()

Human1.prototype.city="sangamner"
console.log(monika1.city)

Human1.prototype.city="pune"
console.log(monika1.city)

Human1.prototype.state="Maharashtra"
console.log(monika1.state)

console.log(monika1.hasOwnProperty('city')) //false

console.log(monika1.hasOwnProperty('firstname')) //true
