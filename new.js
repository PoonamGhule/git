let bal = 0
function bank(amount, type) {
    if (type == "deposit") {
        let deposit = function (amount) {
            bal = bal + amount
        }
        deposit(amount)
    }
    else {
        let widrawls = function (amount) {
            if (bal > amount) {
                bal = bal - amount
            }
        }
        widrawls(amount)
    }
    return bal
}
let a = bank(2000, "deposit")
a=bank(500,"widrawls")
console.log(a)



