let marks = [11, 22, 33, 44, 55]
let [c0, c1, c2, c3, c4] = marks
console.log(c0)
console.log(c1)
console.log(c2)

// let info={
//     firstname:"pooja",
//     lastname:"ghule",
//   greet:function(word){
//     console.log(`${word}${this.firstname}${this.lastname}`)
// }
// }
// info.greet("hello")

let city = ["mumbai", "pune", "nashik"]
let [b1, b2, b3] = city
console.log(b1)

let cities = [["gao", "delhi", "pune"], ["junnar", "otur", "bhopal"]]
let [h1, h2] = cities
console.log(h1)
console.log(h2)

// let info = {
//     fname: "poonam",
//     lname: "ghule",
// }

// let { fname, lname } = info
// console.log(fname)


let stud = {
    parent: {
        fname: "Baban",
        mname: "Vimal",
    },
    sibling: {
        sis: "akshada",
        bro: "mayur"
    }
}

let{parent:{fname,mname},sibling:{sis,bro}} =stud
console.log(fname+sis)


let student=[
    list={
        name:"rajesh",
        degree:"e&tc"
    },
    list2={
        name2:"chaitanya",
        degree2:"bcom"
    }
]
let[{name,degree},{name2,degree2}]=student
console.log(name+degree2)


let person1={
    nm:"pooja",
    hobby:["cooking","dancing","reading"]
}
let{nm,hobby:[a1,a2,a3]}=person1
console.log(nm + a3)
