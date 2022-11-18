// let randomno=Math.floor(Math.random()*6)+1
// console.log(randomno)
// let userinput=prompt("enter no b/w 1 to 6")
// while(randomno!=userinput){
//  userinput=prompt("enter no b/w 1 to 6")   
// if(randomno==userinput){
//     console.log("your guess is correct")
//     break
// }
// else{
   
//     console.log("your guess is incorrect")
// }

// }


// let random=Math.floor(Math.random()*6)+1
// console.log(random)
// let useri=prompt("enter no")
// if(random==useri){
//     console.log("guess correct")
// }
// else{
//     console.log("guess incorrect")
// }

// let random=Math.floor(Math.random()*6)+1
// console.log(random)
// for(i=0;i<8;i++){
//     let useri=prompt("enter no")
// if(random==useri){
//     console.log("guess correct")
//     break
// }
// else{
//     console.log("guess incorrect")
// }
// }


// let random=Math.floor(Math.random()*6)+1
// console.log(random)
// let useri=prompt("enter no")
// while(random!=useri){
//     let useri=prompt("enter no")
// if(random==useri){
//     console.log("guess correct")
//     break
// }
// else{
//     console.log("guess incorrect")
// }
// }

// let random=Math.floor(Math.random()*6)+1
// console.log(random)
// let useri
// do{
//     let useri=prompt("enter no")
// if(random==useri){
//     console.log("guess correct")
//     break
// }
// else{
//     console.log("guess incorrect")
// }
// }
// while(random!=useri)


let a=[11,23,30,4,30,30,30,30,30]
count=0
for (i=0;i<a.length;i++){
    if(a[i]==30){
        count++
    }
}
console.log(count)

let aa=[11,23,30,4,30,30,30,30,30]
let r=aa.filter(function(el,index,arr){
    return el>20
})
console.log(r)



