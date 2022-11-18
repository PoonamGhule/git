let fruit=["apple","banana","chikoo","pineapple","grapes"]
for(i=0;i<fruit.length;i++){
    console.log(fruit[i])
    
}

let year=[2000,2001,2002,2003,2004,2005]
ages=[]
for(i=0;i<year.length;i++){
    ag=2022-year[i]
ages.push(ag)
}
console.log(ages)

let num=[12,13,14,15,32,54,35,76,23]
above20=[]
for(i=0;i<num.length;i++){
    if(num[i]>20){
above20.push(num[i])
    }
}
console.log(above20)

let mark=[12,23,34,45,56]
sum=0
for(i=0;i<mark.length;i++){
sum=sum+mark[i]
}
console.log(sum)