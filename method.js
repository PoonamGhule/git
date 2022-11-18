  let city=["pune","mumbai","nashik"]
  b=city.forEach(function(el,index,arr){
    console.log("welcome "+el)

  })
  console.log("---------------")
let num=[11,22,43,56,44,56,87]
c=num.find(function(el,index,arr){
    return el>20

})
console.log(c)

let num1=[11,22,43,56,44,56,87]
c1=num1.findIndex(function(el,index,arr){
    return el>20

})
console.log(c1)

let n=[11,23,43,565,754,78,45]
bb=n.every(function(el,index,arr){
    return el>50
})
console.log(bb)

let n1=[11,23,43,565,754,78,45]
bb1=n1.some(function(el,index,arr){
    return el>80
})
console.log(bb1)

let fruit=["apple","banana","mango"]
z=fruit.reverse()
console.log(z)

let fru=["banana","chikoo","pear","apple"]
q=fru.sort()
console.log(q)

let city1=["pune","mumbai","nashik"]
  b1=city1.map(function(el,index,arr){
    return "welcome "+el

  })
  console.log(b1)

let city2=["nagpur","pune","amravati","mumbai"]
for(i=0;i<city2.length;i++){
  console.log (city2[i])
}

let year=[1990,1992,1994,1996]
ages=[]
for(i=0;i<year.length;i++){
age=2022-year[i]
ages.push(2022-year[i])
}
console.log(ages)

let year1=[1990,1992,1994,1996]
y=year1.map(function(el,index,arr){
  return 2022-el

})
console.log(y)

let mark=[1,2,3,4,5]
sum=0
 for(i=0;i<mark.length;i++){
 sum=sum+mark[i]
 }
console.log(sum)

let mark1=[1,2,3,4,5]
m=mark1.reduce(function(acc,el,index,arr){
  return acc+el

},0)
console.log(m)

let cty=[1,2,3,4,5,6,7,8]
d=cty.filter(function(el,index,arr){
  return el>=5

})
console.log(d)

let t=["pune","nashik","kalyan","vardha"]
t1=t.forEach(function(el,index,arr){
  console.log("welcome "+el)

})


let numb=[11,22,23,65,22]
e=numb.find(function(el,index,arr){
  return el>20

})
console.log(e)

let numb1=[11,22,23,65,22]
e1=numb1.findIndex(function(el,index,arr){
  return el<20

})
console.log(e1)

let t2=[9,32,67,854,89,35]
t4=t2.every(function(el,index,arr){
  return el>10

})
console.log(t4)
  
let t3=[11,32,67,854,89,35]
tt=t3.some(function(el,index,arr){
  return el>1000

})
console.log(tt)

   let x=[1,56,23,21,33]
   above20=[]
   for(i=0;i<x.length;i++){
   if(x[i]>20){
    above20.push(x[i])
   }
   }
   console.log(above20)

   let d1=["pune","mumbai","nashik","junnar"]
   let r=d1.map(function(el,index,arr){
    return 'welcome '+el

   })
   console.log(r)

   

let marks=[67,87,99,45,12,32,44]
g=marks.fill("pass",2,5)
console.log(g)

let cities=["pune","nashik","kalyan","jaipur"]
k=cities.splice(1,3,"jalna","nagpur","goa")
console.log(k)
console.log(cities)




