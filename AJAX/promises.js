// //sync block in nature

function subA() {
    console.log('hello')
}
function subB() {
    console.log("hii")
}
// // subA()
// // subB()

// //async non blocking in nature

function subC() {
    setTimeout(function () {
        console.log('am settime out')
    }, 3000)
}

function subD() {
    console.log('am sub function')
}
// subC()
// subD()

// user defined , get id  , get user info
function multiplication() {
    setTimeout(function () {
        console.log('user defined')
    }, 3000)
    setTimeout(function () {
        console.log('get id')
    }, 2000)
    setTimeout(function () {
        console.log('get user info')
    }, 1000)
}
// multiplication()

//call back hell
function multiplication() {
    setTimeout(function () {
        console.log('user defined')
        setTimeout(function () {
            console.log('get id')
            setTimeout(function () {
                console.log('get user info')
            }, 1000)
        }, 2000)
    }, 3000)
}
// multiplication()

//promises
//then(resolve,reject)
let obje = new Promise(function (resolve, reject) {
    let a = 10
    let b = 20
    if (a == b) {
        resolve('hello')
    }
    else {
        reject('bye')
    }
})
obje.then(function (str) {
    console.log(str)
}, function (str) {
    console.log(str)
})

// reject using catch
let obje1 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 20
    if (a == b) {
        resolve('hello')
    }
    else {
        reject('bye')
    }
})
obje1.then(function (str) {
    console.log(str)
    return [2, 4, 5]
})
    .then(function (a) {
        console.log(a)
        return a[1]
    })
    .then(function (b) {
        console.log(b)
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function () {
        console.log('am final block')
    })



//call back hell using promise
function UserDefine() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('user define')
        }, 3000)
    })
}

function GetId() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('get id')
        }, 2000)
    })
}

function GetUserInfo() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('get user info')
        }, 1000)
    })
}
UserDefine().then(function (str) {
    console.log(str)
    return GetId()
}).then(function (str) {
    console.log(str)
    return GetUserInfo()
}).then(function (str) {
    console.log(str)
})


//async wait

async function UserInformation(){
    let a= await UserDefine()
    console.log(a)
    let b=await GetId()
    console.log(b)
    let c=await GetUserInfo()
    console.log(c)
}
let d=UserInformation()
d.then(function(){
    console.log('am okk')
})
