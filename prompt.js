//console.log(Math.floor(-34.56))

// let randomn=Math.floor(Math.random()*6)+1
// console.log(randomn)
// let useri=prompt('enter no between 1 to 6')
// if(randomn==useri){
//     console.log('guess is correct')
// }
// else{
//     console.log('ur guess is incorrect')
// }

// let randomn = Math.floor(Math.random() * 6) + 1
// console.log(randomn)
// let useri = prompt('enter no between 1 to 6')
// for (i = 0; i < 5; i++) {
// let useri = prompt('enter no between 1 to 6')
//     if (randomn == useri) {
//         console.log('guess is correct')
//         break
//     }
//     else{
//         console.log('ur guess is incorrect')
//     }
// }

// let randomn = Math.floor(Math.random() * 6) + 1
// console.log(randomn)
// let useri = prompt('enter no between 1 to 6')
// while (randomn != useri) {
//     let useri = prompt('enter no between 1 to 6')
//     if (randomn == useri) {
//         console.log('guess is correct')
//         break
//     }
//     else {
//         console.log('ur guess is incorrect')
//     }

// }


// let randomn = Math.floor(Math.random() * 6) + 1
// console.log(randomn)
// let useri
// do{
//     let useri = prompt('enter no between 1 to 6')
//     if (randomn == useri) {
//         console.log('guess is correct')
//         break
//     }
//     else {
//         console.log('ur guess is incorrect')
//     }
// } while (randomn != useri)

let substraction = function (x, y) {
    return x - y
}
function sub(a, b, fn) {

    s1 = fn(a, b)
    return s1 + a

}
let s2 = sub(11, 5, substraction)
console.log(s2)


// array
let h = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function array(num) {
    let f = num.map(function (el, index, arr) {
        return el + 2
    })
    console.log(f)
    let g = num.slice(6)
    console.log(g)
    return num.slice(5)

}
let ab = array(h)
console.log(ab)

