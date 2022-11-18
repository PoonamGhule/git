// using for loop

let x=[10,20,30,30,84,30,30,38,30]
count=0
for(i=0;i<x.length;i++){
    if(x[i]==30){
        count=count+1
    }
}
console.log(count)

// using map() method
let x2=[10,20,47,30,84,37,30,38,30]
let b2=x2.filter(function(el,index,arr){
if(el%2==0){
    return count++
}
})
console.log(b2)



