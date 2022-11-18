//Sumitt75***


//sync
function addA() {
    console.log("hii")
}

function addB() {
    console.log('hello')
}

// addA()
// addB()


//async
function addC() {
    setTimeout(function () {
        console.log("am fine")
    }, 2000)
}
function addD() {
    console.log('are u ok')
}
// addC()
// addD()


//async to sync
function mul() {
    setTimeout(() => {
        console.log('create user')
    }, 3000)
    setTimeout(() => {
        console.log('get id')
    }, 2000)
    setTimeout(() => {
        console.log('user info')
    }, 1000)
}
// mul()

//call back hell
function mul() {
    setTimeout(() => {
        console.log('create user')
        setTimeout(() => {
            console.log('get id')
            setTimeout(() => {
                console.log('user info')
                setTimeout(() => {
                    console.log('welcome to our page')
                })
            }, 1000)
        }, 2000)
    }, 3000)
}
//mul()


//promises

let info = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve('both are equal')
    }
    else {
        reject('both are not equal')
    }
})
info.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})



//program

let obj = new Promise(function (resolve, reject) {
    let p = 12
    let q = 12
    if (p == q) {
        resolve([11, 22, 33, 44])
    }
    else {
        reject([-88, -55, -66, -77])
    }
})
obj.then(function(arr1){
    console.log(arr1[2])
},function(arr2){
    console.log(arr2[0])
})

//catch for reject

let obj1 = new Promise(function (resolve, reject) {
    let p = 12
    let q = 16
    if (p == q) {
        resolve([11, 22, 33, 44])
    }
    else {
        reject([-88, -55, -66, -77])
    }
})
obj1.then(function(arr1){
    console.log(arr1[2])
})
.catch(function(arr2){
console.log(arr2[3])
})
.finally(function(a){
console.log('am every where')
})