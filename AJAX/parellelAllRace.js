function singeluser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
}
//singeluser(2)
function rendorHTML(obj) {
    document.write(`<h1>firstname:${obj.first_name}</h1>`)
    document.write(`<h1>lastname:${obj.last_name}</h1>`)
    document.write(`<h1>email:${obj.email}</h1>`)
    document.write(`<h1>id:${obj.id}</h1>`)
    document.write(`<img src=${obj.avatar}>`)

}

async function info(id1, id2, id3, id4) {
    let user = await Promise.all([
        singeluser(id1),
        singeluser(id2),
        singeluser(id3),
        singeluser(id4)
    ])
    console.log(user)
    user.forEach(function (el) {
        rendorHTML(el.data)
    })

}
//info(1, 2, 3, 4)

//in Promise.all all condition are resolve then output comes
async function data() {
    let a = await Promise.all([
        Promise.resolve('hello'),
        Promise.reject('hii'),
        Promise.resolve('hello')
    ])
    console.log(a)
}
//data()

async function data() {
    let a = await Promise.race([
        // Promise.reject('hii hello'),
        // Promise.resolve('hello'),
        // Promise.reject('hii')
        new Promise(function (resolve) {
            setTimeout(function () {
                resolve('hello')
            }, 1000)
        }),
        new Promise(function (reject) {
            setTimeout(function () {
                reject('am fine')
            }, 2000)
        })

    ])
    console.log(a)
}
data()