async function info() {
    let a = await Promise.any([
        Promise.resolve("hello"),
        Promise.reject("hii"),
        Promise.resolve("bye")
    ])
    console.log(a)
}
//info()


let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 20
    if (a == b) {
        resolve('equal')
    }
    else {
        reject('not equal')
    }
})
pro.then(function (res) {
    console.log(res)
}, function (res) {
    console.log(res)
})