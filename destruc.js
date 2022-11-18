let info = {
    parent: {
        mother: "vimal",
        father: "baban"
    },
    siblings: {
        brother: "mayur",
        sister: "akshada"
    }

}

let { parent: { mother, father }, siblings: { brother, sister } } = info
console.log(mother + brother)

let info2 = [
    students = {
        first: "mayur",
        second: "poonam"
    },
    degree = {
        stu1: "bcom",
        stu2: "BE"
    }
]
let [{first,second},{stu1,stu2}]=info2
console.log(first)