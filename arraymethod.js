//reverse
let name3=["ram","sham","amol","poonam"]
let dd=name3.reverse()
console.log(dd)
//concat
let a=[11,22,33]
let b=[44,55,66]
r=a.concat(b)
r2=b.concat(a)
console.log(r)
console.log(r2)
//flat
let num=[[11,22,33],[44,55,66],[77,88,99]]
let c= num.flat()
console.log(c)

let num2=[[11,22,33],[44,55,66],[77,88,99]]
console.log(num2.flat())


//join
let myself=["poonam","keshav","ghule"]
d=myself.join(' ')
f=myself.join('*')
g=myself.join('@')
console.log(d)
console.log(f)
console.log(g)


let myself1=["poonam","keshav","ghule"]
console.log(myself1.join(' '))

//slice
let friend=["pooja","poonam","nikita","pragati","varsha"]
console.log(friend.slice(1,3))
console.log(friend.slice(3))
console.log(friend.slice(-4,4))
console.log(friend.slice(2,3))
console.log(friend.slice(-5,3))