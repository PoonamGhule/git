let info={
    firstname:"poonam",
    lastname:"ghule",
    height:162,
    age:28
}

//retrive using dot notation
console.log(info.firstname)
console.log(info.age)

//add using dot notation
info.weight=50
console.log(info)
info.color="fair"
console.log(info)

//update using dot notation
info.lastname="ghuletambe"
console.log(info)
info.age=29
console.log(info)

//delete using dot notation
delete info.color
console.log(info)

let info2={
    student:"raghav",
    marks:45,
    grade:"b"
}

//retrive using bracket notation
console.log(info2['student'])
console.log(info2['marks'])

//update using bracket notation
info2['marks']=50
console.log(info2)
info2['grade']="a"
console.log(info2)

//add using bracket notation
info2['behaviour']="good"
console.log(info2)

//delete using bracket notation
delete info2['grade']
console.log(info2)