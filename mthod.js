let year=[1991,1992,1993,1994]
a= year.map(function(el,index,arr){
    return 2022-el

})
console.log(a)

let num=[11,23,12,21,34,55,1]
b= num.filter(function(el,index,arr){
    return el>20

})
console.log(b)

let name=["ram","sham","seeta","geetanjali","poonam"]
c=name.filter(function(el,index,arr){
    return el.length>4

})
console.log(c)

let marks=[10,20,30,40,50]
c=marks.reduce(function(acc,el,index,arr){
    return acc+el

},0)
console.log(c)