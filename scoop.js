let a = 20
{
    console.log(a)//20
    a = 30
    console.log(a)//30
    {
        let a = 60
    }
    console.log(a)//30
}
console.log(a)//20

console.log("=======")

const b = 10
{
    const b = 40
    console.log(b)
}
console.log(b)

console.log("=======")

{
    var c = 50
}
console.log(c)

console.log("=======")

var r = 60
function add() {
    var r = 70
    console.log(r)
}
//console.log(r)          //60
add()                         //70
console.log(r)            //60
// console.log(r)           //60
// add()                     //70
// console.log(r)              //60

console.log("=======")

var j = 30
function sub() {
    var j = 10
    console.log(j)
}
console.log(j)
sub()
console.log(j)


let g=40
{
    console.log(g)
}


// {
//     let t=98
// }
// console.log(t)








