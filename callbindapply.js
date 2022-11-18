let info={
    firstname:"poonam",
    lastname:"ghule",
    display:function(){
        console.log(this.firstname+this.lastname)
    }
}
info.display()

let b= info.display
//console.log(b)
let info2={
    firstname:"sharu",
    lastname:"ghule",
    age:29
}
let d=info.display
let a=d.bind(info2)
a()

d.apply(info2)
d.call(info2)

let add=function(greet){
    console.log(greet)
    console.log(this.firstname+this.lastname)
    console.log(this.age)
}
add.call(info2,"hello")
add.apply(info2,["hiii"])

let t=add.bind(info)
t("how are u")
