let bal = 0
function Bank(amount, type) {
    if (type == "deposit") {
        let deposit = function (amount) {
            bal = bal + amount
        }
        deposit(amount)
    }
    else {
        let withdrawl = function (amount) {
            if (bal > amount) {
                bal = bal - amount
            }
        }
        withdrawl(amount)
    }
    return bal
}

let q = Bank(1000, "deposit") // 1000
q = Bank(1100, "deposit")// 2500
q= Bank(1000, "withdrawl") // 1000
console.log(q)
