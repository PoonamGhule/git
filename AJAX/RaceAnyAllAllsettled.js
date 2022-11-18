
// // all 
// //all condition are resolve then op will come
async function info() {
    let a = await Promise.all([
        Promise.resolve("hello"),
        Promise.resolve("hii"),
        Promise.resolve("bye")
    ])
    console.log(a)
}
//info()
//one reject op not shown short circuited
async function info() {
    let a = await Promise.all([
        Promise.resolve("hello"),
        Promise.reject("hii"),
        Promise.resolve("bye")
    ])
    console.log(a)
}
//info()
//all op will come
async function info() {
    let a = await Promise.all([
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("hii")
            }, 3000)
        }),
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("hello")
            }, 2000)
        }),
        new Promise(function (reject) {
            setTimeout(function () {
                reject("bye")
            }, 1000)
        })
    ])
    console.log(a)
}
//info()

//race
//example 1
async function info() {
    let a = await Promise.race([
        Promise.resolve("hello"),
        Promise.resolve("hii"),
        Promise.resolve("bye")
    ])
    console.log(a)
}
//info()

async function info() {
    let a = await Promise.race([
        Promise.resolve("hello"),
        Promise.reject("hii"),
        Promise.resolve("bye")
    ])
    console.log(a)
}
// //info()

// //example 2

async function info() {
    let a = await Promise.race([
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("hii")
            }, 3000)
        }),
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("hello")
            }, 2000)
        }),
        new Promise(function (reject) {
            setTimeout(function () {
                reject("bye")
            }, 1000)
        })
    ])
    console.log(a)
}
//info()


//Allsettled
async function info() {
    let a = await Promise.allSettled([
        Promise.resolve("hello"),
        Promise.reject("hii"),
        Promise.resolve("bye")
    ])
    console.log(a)
}
//info()

async function info() {
    let a = await Promise.allSettled([
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("hii")
            }, 3000)
        }),
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("hello")
            }, 2000)
        }),
        new Promise(function (reject) {
            setTimeout(function () {
                reject("bye")
            }, 1000)
        })
    ])
    console.log(a)
}
//info()

//Any

async function info() {
    let a = await Promise.any([
        Promise.resolve("hello"),
        Promise.reject("hii"),
        Promise.resolve("bye")
    ])
    console.log(a)
}
info()


async function info() {
    let a = await Promise.any([
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("hii")
            }, 3000)
        }),
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve("hello")
            }, 2000)
        }),
        new Promise(function (reject) {
            setTimeout(function () {
                reject("bye")
            }, 1000)
        })
    ])
    console.log(a)
}
//info()



 