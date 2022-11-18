i=0
while(i<=5){
    console.log(i)
    i++
}
console.log("-------")

i1=5
while(i1>1){
    console.log(i1)
    i1--
}
console.log("-------")


i2=0
while(i2<=5){
    if(i2==4){
        break
    }
    console.log(i2)
    i2++
}

console.log("-------")
a=10
while(a>=0){
    if(a==3){
        a--
        continue
    }
    console.log(a)
    a--
}

console.log(Math.abs(-12.4))