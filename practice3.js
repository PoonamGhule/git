const account1 = {
    owner: 'Jonas Schmedtmann',  // js
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};
const account2 = {
    owner: 'Jessica Davis',  // jd
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};
const account3 = {
    owner: 'Steven Thomas Williams', // stw
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    //                           -5     -4  -3 -2     -1
    interestRate: 0.7,
    pin: 3333,
};
const account4 = {
    owner: 'Sarah Smith', // ss
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
const accounts = [account1, account2, account3, account4];

// accounts.forEach(function (el) {
//     let a = el.owner.split(' ')
//     let a1 = a.map(function (string) {
//         return string[0]
//     })
//     //console.log(a1)
//     el.username = a1.join('')
// })
// console.log(accounts)

// accounts.forEach(function (el) {
//     let b = el.movements.filter(function (el) {
//         return el > 0
//     })
//     let deposit = b.reduce(function (acc, el) {
//         return acc + el
//     }, 0)
//     el.deposit = deposit

//     let b1 = el.movements.filter(function (el) {
//         return el < 0
//     })
//     let widrawls = b1.reduce(function (acc, el) {
//         return acc + el
//     }, 0)
//     el.widrawls = Math.abs(widrawls)
// })
// console.log(accounts)

accounts.forEach(function (el) {
    console.log(`${el.owner} ${el.movements.length}`)
})

console.log('+++++++++++++++++++++++++++')

let c = accounts.find(function (el) {
    return el.movements.find(function (el) {
        return el > 5000
    })
})
console.log(c.owner)

console.log('+++++++++++++++++++++++++++')

accounts.forEach(function (el) {
    console.log(el.movements.slice(-5))
})

accounts.forEach(function (el) {
    console.log(el.movements.slice(0, 5))
})

console.log('+++++++++++++++++++++++++++')

accounts.forEach(function (el) {
    let a = el.movements.filter(function (el) {
        return el > 0
    })
    let deposit = a.reduce(function (acc, el) {
        return acc + el
    }, 0)
    el.deposit = deposit
    let b = el.movements.filter(function (el) {
        return el < 0
    })
    let widrawls = b.reduce(function (acc, el) {
        return  acc+el
    }, 0)
    el.widrawls = Math.abs(widrawls)
})
console.log(accounts)

console.log('+++++++++++++++++++++++++++')

accounts.forEach(function(el){
    console.log(`${el.interestRate} ${el.owner}`)
})