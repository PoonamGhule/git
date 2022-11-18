//encapsulation
//encapsulation means hiding the data for maintaining the privacy

//program 1
class Person {
    constructor(fn, ln) {
        let firstName = fn;
        let lastName = ln;
        this.display = function () {
            console.log(firstName + lastName)
        }
    }
}
let poonam = new Person("poonam", "ghule")
console.log(poonam.firstName)//can not acess bcoz let keyword has block scope
poonam.display()


//program2
//acess value of a,b using closures
function add() {
    let a = 2
    let b = 3
    return [a, b]
}
let x = add()
console.log(x)
console.log(x[0])
console.log(x[1])


//program 3
//static method
// if same name many method available then it consider last one
class Fruit {
    static color = 'red'
    static taste = 'sweet'
    static eat = function () {
        console.log('fruit is very sweet1')
    }
    static eat = function () {
        console.log('fruit is very sweet2')
    }
    static eat = function () {
        console.log('fruit is very sweet3')
    }
}
console.log(Fruit.color)
Fruit.eat()

//program 4
class Fruit1 {
    static color = 'red'
    static taste = 'sweet'
    static eat = function () {
        console.log(Fruit1.color + " " + "apple is very " + Fruit1.taste)
    }
}
console.log(Fruit1.color)
Fruit1.eat()

//count the object number

class vehicle {
    static NoOfObject = 0;
    constructor(color, type) {
        this.color = color
        this.type = type
        vehicle.NoOfObject=NoOfObject+1
    }
}
let swift=new vehicle('grey','dzire')
let honda=new vehicle('black','hero')
let audi=new vehicle('red','suv')
console.log(vehicle)
console.log(vehicle.NoOfObject)