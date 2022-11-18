
function getuser(page) {
   return fetch(`https://reqres.in/api/users?page=${page}`)
      .then(function (res) {
         //console.log(res)
         return res.json()
      })
}
//getuser(2)

function getid(id) {
   return fetch(`https://reqres.in/api/users/${id}`)
      .then(function (res) {
         //console.log(res)
         return res.json()
      })
}
//getid(7)

getuser(2).then(function (res) {
   let id = res.data[0].id
   return id
}).then(function (id) {
   return getid(id)
}).then(function (res) {
   console.log(res.data)
   rendorHTML(res.data)
})

// async function getinfo(page) {
//    let res = await getuser(page)
//    let id = res.data[0].id
//    let user = await getid(id)
//    console.log(user)
//    rendorHTML(user.data)
// }
// getinfo(2)

function rendorHTML(obj) {
   document.write(`<h1>${obj.first_name}</h1>`)
   document.write(`<h1>${obj.last_name}</h1>`)
   document.write(`<h1>${obj.email}</h1>`)
   document.write(`<h1>${obj.id}</h1>`)
   document.write(`<img src=${obj.avatar}>`)

}
//get all user on broweser
getuser(2).then(function (res) {
   res.data.forEach(function (el) {
      rendorHTML(el)
   })
})
