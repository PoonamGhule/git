let year=[1990,1991,1992,1993,1994]
let a=year.map(function(el,index,arr){
    return 2022-el

})
console.log(a)

let name=["ram","sham","keshav","poonam","puja"]
let b=name.filter(function(el,index,arr){
    return el.length>4

})
console.log(b)

let num=[1,2,3,4,5,6,7,8,9,10]
let c=num.map(function(el,index,arr){
    return el+2

})
console.log(c)

let num1=[1,2,3,4,5,6,7,8,9,10]
let c1=num.filter(function(el,index,arr){
    return el>7

})
console.log(c1)

let mark=[10,20,30,40]
let d=mark.reduce(function(acc,el,index,arr){
    return acc+el

},0)
console.log(d)

let name1=["ram","sham","keshav","poonam","puja"]
let b1=name1.filter(function(el,index,arr){
    return el

})
console.log(b1)