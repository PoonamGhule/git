
function add(x, y) {
    console.log(x + y) // 25
    return "hello"
}
let r = add(12, 13)
//console.log(r[0])

let marks = [99, 98, 23, 22, 33, 12, 10, 33]
let ttt = marks.fill(true, 2, 5)
console.log(ttt)

let adda = function () {
    a = 2
    b = 3
    console.log(a + b)
    function add1() {
        c = 3
        d = 4
        console.log(c + d + a)
        function add2() {
            e = 3
            f = 4
            console.log(e + f)
        }
        add2()
    }
    add1()
}
adda()

var h = 60
function add() {
    var h = 70
    console.log(h)
}
console.log(h)          //60
add()                         //70
console.log(h)

let t = "poonam"
console.log(t.split("").reverse('').join(''))

let num = [11, 23, 2, 3, 4, 5, 6, 7]
function addfive(a, b, c, d, e) {
    console.log(a + b + c + d + e)
}
addfive(...num)

let h11 = {
    firstname: "poonam",
    lastname: "ghule"
}

// let h1={
//     firstname:"keshav",
//     lastname:"ghule"
// }
let h2 = h11
h2.firstname = "sharu"
console.log(h2)
console.log(h11)

let a1 = [1, 2, 3, 4]
let b1 = [...a1]

a1[0] = 5
console.log(a1)
console.log(b1)

let info3 = {
    firstname: "poonam",
    lastname: "ghule"
}
let d1 = { ...info3 }

d1.firstname = "sharu"
console.log(info3)
console.log(d1)

let names = ['amit', 'amol', 'ajay', 'poonam', 'priya', 'amitabh']

let b4 = names.filter(function (el) {
    return el.startsWith('a') && el.length == 4
})
console.log(b4)

names.forEach(function (el, index) {
    //console.log(`welcome${index+1}:${el}`)
    console.log(`welcome${index + 1}:` + el)
})

//adding array elements
let mark = [1, 2, 3, 4, 5, 6]
let sum = 0
for (i = 0; i < mark.length; i++) {
    sum = sum + mark[i]
}
console.log(sum)

//filterout array element
let a5 = [11, 22, 3, 444, 56, 5, 33, 24, 3, 4, 5]
let above10 = []
for (i = 0; i < a5.length; i++) {
    if (a5[i] > 10) {
        above10.push(a5[i])
    }
}
console.log(above10)

//multiply by 2 every element
let a6 = [1, 2, 3, 4, 5, 6]
let mul2 = []
for (i = 0; i < a6.length; i++) {
    mul2.push(a6[i] * 2)
}
console.log(mul2)

//calculating age
let year = [1992, 1993, 1994, 1995]
let ages = []
for (i = 0; i < year.length; i++) {
    ages.push(2022 - year[i])
}
console.log(ages)
