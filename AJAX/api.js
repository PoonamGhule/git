function GetUserPagewise(page) {
    return fetch(`https://reqres.in/api/users?page=${page}`) //fetch return promise
        .then(function (res) {
            return res.json()  // json  returns promise
        })
        .then(function (res) {
            return res
        })
}
// let response=GetUserPagewise(2)    // it returns the pending promise
// console.log(response)


function GetSingleUser(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            return res
        })
}
// GetSingleUser(2)

GetUserPagewise(2)
    .then(function (res) {
        let id = res.data[1]['id']
        return id
    })
    .then(function (i) {
        return GetSingleUser(i)
    })
    .then(function (res) {
        console.log(res)
    })


    // .then(function (str) {
    //     console.log(str)
    // }, function () {

    // })

   