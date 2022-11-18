for(i=0;i<5;i++){
    console.log('hello')
}

console.log('----')

for(let i=1;i<=5;i++){
    console.log(i)
}

console.log('----')

for(let i=1;i<=10;i++){
    console.log(i)
}

console.log('----')

for(let a=3;a<=30;a=a+3){
    console.log(a)
}

console.log('----')

for(let i=0;i<4;i++){ 
    if(i==2){
        break
    }
    console.log(i)  
}
console.log("----")


for(let i=1;i<10;i=i+2){
    console.log(i) 
    if(i==5){
        break
    }
    
     
}

 let num=8
 if(num>=8 && num!==8){

     console.log("no. is in between 7 to 10")
 }
 else if(num<10 && num!=8){
    console.log("less no")
 }
 else{
     console.log("enter no")
 }
 if(num>=8 && num==8){

    console.log("no. is  7 to 10")
}

let n=[1,2,3,4,5,6,7,8,9]
b=n.filter(function(el,index,arr){
    if(el%2==0){
        
    } 
})
console.log(b)

console.log("------")

for(i=0;i<=5;i++){
    console.log(i)
    if(i==3){
        break
    }
    
}
console.log("-----")

for(i=0;i<=5;i++){
 
    
    if(i==3){
        continue
    }
    console.log(i)
    
}




