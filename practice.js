
// for(var i = 0; i < 5; i++) {
//     console.log(i); // 0,1,2,3,4
// }
// console.log(i); // 5
let a=new Map()
 a.set(1,2)
 a.set(2,4)
 a.set(3,6)
 a.set(4,7)
 a.set(5,8)
 a.set(6,9)

// for(let values of map){
//     let a=values+2
//     console.log(a)
//      }
//      console.log(map)

//  let obj={
//     fname:"poonam",
//     lname:"ghule"
// }
// for(let key in obj){
// console.log(obj[key])
// }

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// u=fruits.shift();
// console.log(fruits)

// let fruit = ["Banana", "Orange", "Apple", "Mango"];
// b=fruit.splice(2, 1, "Lemon");
// console.log(fruit)

let students=[
    {
        firstname:"poonam ghule",
        age:29,
        skills:["js","html","cypress"],
        city:"pune"
    },
    {
        firstname:"pooja ghule",
        age:25,
        skills:["js","html","cypress","react"],
        city:"sangamner"
    },
    {
        firstname:"monika gosavi",
        age:24,
        skills:["js","html","cypress","c++"],
        city:"pune"
    },
    {
        firstname:"pratiksha kharade",
        age:25,
        skills:["js","cypress","python"],
        city:"sangamner"
    },
    {
        firstname:"priti raut",
        age:30,
        skills:["html","cypress","python"],
        city:"nagpur"
    }
]


students.forEach(function(el){
    // console.log(el.firstname)
    console.log (el.language="marathi")
})
console.log(students)

let a1=students.reduce(function(acc,el){
return acc+el.age
},0)
console.log(a1/5)
console.log('--------------')

students.forEach(function(el){
    if(el.skills.includes("js")){
        console.log(el.firstname)
    }
})
students.forEach(function(el){
    if(el.city=="pune"){
        console.log(el.firstname)
    }
})
students.forEach(function(el){
    console.log(el)
})
students.forEach(function(el){
    let a1=el.firstname.split(" ")
    console.log(a1)
    let b1=a1.map(function(string){
         return string[0]
    })
    console.log(b1)
    let b2=b1.join("")
    console.log(b2)
    el.username=b2
})
console.log(students)




