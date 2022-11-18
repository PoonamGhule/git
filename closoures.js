// let bal = 0
// function bank(amount,type) {
//     let name="icici"

//     let deposit = function (amount) {
//         bal = bal + amount
//     }
//     let widrawls = function (amount) {
//         if (bal > amount) {
//             bal = bal - amount
//         }
//     }
//     let rate=function(){
//         return 0.6*bal
//     }
//     type == "deposit"? deposit(amount):widrawls(amount) 
//     let branch="pune"
//     return [bal,name,rate,branch,]
//     }
// let a = bank(1000,"deposit")
// console.log(a[0])
// console.log(a[1])
// b=a[2]()
// console.log(b)
// console.log(a[3])


//arrow function

// let bal = 0
//  function bank(amount, type) {
//     let name="icici"
//     let deposit =(amount) => 
//         bal = bal + amount
//     let widrawls =(amount)=> {
//         if (bal > amount) {
//             bal = bal - amount
//         }
//     }
//     let rate=()=>{
//         return bal*0.6
//     }
//     type == "deposit"? deposit(amount):widrawls(amount) 

//     return [bal,name,rate]
//     }
// let a = bank(1000,"deposit")
// console.log(a[0])
// console.log(a[1])
// b=a[2]()
// console.log(b)

let bal = 0
function bank(amount, type) {
    let name = "icici"
    let deposit = function (amount) {
       return bal = bal + amount
    }
    let widrawls = function (amount) {
        if (bal > amount) {
           return bal = bal - amount
        }
    }
    let rate = function () {
        return bal * 0.6
    }
    let branch="pune"
    type == "deposit" ? deposit(amount) : widrawls(amount)
    return [bal, name, rate,branch]
}
let a = bank(1000, "deposit")
a = bank(200, "widrawls")
console.log(a[0])
console.log(a[1])
b = a[2]()
console.log(b)
console.log(a[3])




