class Person{
    fullname=undefined
    age=undefined
    rollno=undefined
    skill=[]
    city=undefined
}
let poonam=new Person()

//console.log(poonam)
poonam.fullname="poonam ghule"
poonam.age=28
poonam.rollno=12
poonam.skill.push("html")
poonam.city="pune"
poonam.language="marathi"
console.log(poonam)

class Person2{
    constructor(fn,ln,rn,ct,lng,sk){
        this.firstname=fn
        this.lastname=ln
        this.rollno=rn
        this.city=ct
        this.language=lng
        this.skill=sk
    }
}
let poonam2=new Person2("poonam","ghule",12,"pune","marathi",["html","js"])
console.log(poonam2)

class Person3{
    setAge(ag){
        this.age=ag
    }
    setfirstname(fn){
        this.firstname=fn
    }
    setlastname(ln){
        this.lastname=ln
    }
    setcity(cy){
        this.city=cy
    }
    setskills(sk){
        this.skills=sk
    }
}
let pooja=new Person3()
pooja.setAge(28)
pooja.setfirstname("pooja")
pooja.setlastname("mundhe")
pooja.setcity("mumbai")
pooja.setskills(["js","ccc"])
console.log(pooja)


