let info={
    owner:"poonam ghule"
}
info.username=info.owner.split(' ').map(function(word){
return word[0]
}).join("")
console.log(info)

function add(a,b){
    console.log(a+b)
    return function(){
       console.log("hello")
       
    }
}
let h=add(8,2)
h()

