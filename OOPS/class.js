class Person2 {
    set fn(string) {
        this.fullname = string
    }
    get fn() {
        return this.fullname
    }
    set ag(number) {
        this.age = number
    }
    get ag() {
        return this.age
    }
}
let object= new Person2()
// object.fn='poonam'
object.fn='pooja'
object.age=29
console.log(object)
//console.log(object.fn)
console.log(object.getfullname())
// console.log(object.getage())


// class Person{
//     set fn(word){
//         this.fullName = word
//     }
//     get fn(){
//         return this.fullName
//     }
//     set ag(a){
//         this.age = a
//     }
//     get ag(){
//         return this.age
//     }
// }
// let ram = new Person()
// console.log(ram)
// ram.fn = "ram dani"

// console.log(ram)
// console.log(ram.fn)