// console.log(Math.floor(38.2))
// console.log(Math.ceil(87.3))
// console.log(Math.floor(-77.67))
// console.log(Math.ceil(-87.55))
// console.log(Math.round(12.5))
// console.log(Math.abs(-12.4))
// console.log(Math.random()) //0-1
// console.log(Math.random()*6) //0-6
// console.log(Math.floor(Math.random()*6)+1) //1-6
  

// let randomnumber=Math.floor(Math.random()*6)+1
// console.log(randomnumber)
// let userinput=prompt('please enter any value between 1 to 6')

// if(randomnumber==userinput){
//     console.log("your guess is correct")
// }
// else{
//     console.log("your guess is incorrect")
// }

// let randomnum=Math.floor(Math.random()*6)+1
// console.log(randomnum)
// for(let i=0;i<5;i++){
// let userinput=prompt("enter the value b/w 1 to 6")
// if (randomnum==userinput){
//     console.log("your guess is correct")
//     break
// }
// else{
//     console.log("your guess is incorrect")
// }
// }

// let randomno=Math.floor(Math.random()*6)+1
// console.log(randomno)
// let userinput=prompt("enter no b/w 1 to 6")
// while(randomno!=userinput){
// let userinput=prompt("enter no b/w 1 to 6") 
// if(randomno=userinput){
//     console.log("your guess is correct")
//     break
// }
// else{
//     console.log("your guess is incorrect")
// }

// }

let randomnum=Math.floor(Math.random()*6)+1
console.log(randomnum)
let userinput
do {
let userinput=prompt("enter the value b/w 1 to 6")
if (userinput==randomnum){
    console.log("your guess is correct")
    break
}
else{
    console.log("your guess is incorrect")
}
}while(randomnum!=userinput)



console.log(Math.abs(-12.4))
