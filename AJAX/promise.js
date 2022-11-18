//promise

let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 20
    if (a == b) {
        resolve('both are equal')
    }
    else {
        reject('both are not equal')
    }

// }).then(function (atr) {
//     console.log(atr)
// }, function (str) {
//     console.log(str)
// })
