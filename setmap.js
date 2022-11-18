let set=new Set()
let a=set.add("poonam")
console.log(a)

let set1=new Set("poonam")
console.log(set1)

let t="fdjgiurgrnjvsuydcviffogjffffgghmvhdcgbscfhsutdd"
let g=new Set(t)
console.log(g.size)

let set2=new Set(["poonam","nikita","rani","poonam"])
console.log(set2)

console.log("=======")
//add
set2.add("rahul")
console.log(set2)

console.log("=======")
//has
let m=set2.has("rani")
console.log(m)

console.log("=======")
//delete
set2.delete("rani")
console.log(set2)

console.log("=======")
//clear
set2.clear()
console.log(set2)
console.log("=======")
//loop for object
let obj={
    fname:"poonam",
    lname:"ghule"
}
for(let key in obj){
console.log(key,obj[key])
}

console.log("=======")
let set3=new Set(["ram","seeta","gopal","krushna"])
for(ind of set3){
console.log(ind)
}
console.log('-----')
 set3.forEach(function(index){
    console.log(index)
 })

 console.log("=======")
 //map
 let map=new Map()
 map.set("fname","poonam")
 map.set("lname","ghule")
 map.set(12,"age")
 map.set("marks",78)
console.log(map)

console.log("=======")
//get
b=map.size
console.log(b)
console.log(map.get(12))
console.log(map.get("lname"))
console.log("=======")
//has
console.log(map.has("marks"))
console.log("=======")
//delete
console.log(map.delete("marks"))
console.log(map)
console.log("=======")
//clear
map.clear()
console.log(map)

map2=new Map([
    ["fname","poonam"],
    ["lname","ghule"],
    [12,"age"],
    [true,"married"]
])
let g6=map2.keys()
console.log(g6)

let g4=map2.values()
console.log(g4)

let g5=map2.entries()
console.log(g5)

console.log("================")
console.log(map2)

console.log("==============")
for(let key of map2.keys()){
    console.log(key)
}
console.log("================")
for(let val of map2.values()){
    console.log(val)
}
console.log("==================")
for(let [key,val] of map2.entries()){
    console.log(key,val)
}
