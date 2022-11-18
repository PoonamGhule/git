//polymorphism--------overloading
// same class , same method name , diffrent signature

// class Multiplication {
//     mul(x, y) {
//         console.log(x * y)
//     }
//     mul(x, y, z) {
//         console.log(x * y * z)
//     }
//     mul(x, y, z, p) {
//         console.log(x * y * z * p)
//     }
// }
// let multi=new Multiplication()
// multi.mul(1,2,3,4)

class Multiplication {
    mul(x, y, z, p) {
        if (x != undefined && y != undefined && z != undefined && p != undefined) {
            console.log(x * y * z * p)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x * y * z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x * y)
        }
    }
}
let multi = new Multiplication()
multi.mul(2, 3)
multi.mul(2, 3, 1, 4)
multi.mul(2, 3, 2)

//overriding
// diff class , same method name , same signature

class Fruit {
    eat() {
        console.log('i am eating fruit')
    }
}

class Apple extends Fruit {
    eat() {
        super.eat()
        console.log('i am eating apple')
    }
}

class Mango extends Fruit {
    eat() {
        super.eat()
        console.log('i am eating mango')
    }
}
let food = new Fruit()
food.eat()
food = new Apple()
food.eat()
food = new Mango()
food.eat()