class Father {
    constructor(fn, ln) {
        this.firstname = fn
        this.lastname = ln
    }
    displayF() {
        console.log(this.firstname + this.lastname)
    }
}

class Son extends Father {
    constructor(fn, ln, sn) {
        super(fn, ln)
        this.sonname = sn
    }
    displayS() {
        console.log(this.sonname + this.firstname + this.lastname)
    }
}
// all property and method of father are accesible to son
let mayur = new Son("Baban", "Tambe", "Mayur")
console.log(mayur.firstname)
mayur.displayS()

//program 2
class GrandFather {
    constructor(fn, ln) {
        this.firstname = fn
        this.lastname = ln
    }
    displayF() {
        console.log(this.firstname + this.lastname)
    }
}

class Father1 extends GrandFather {
    constructor(fn, ln, fatherna) {
        super(fn, ln)
        this.fathername = fatherna
    }
    displayS() {
        console.log(this.fathername + this.firstname + this.lastname)
    }
}
class Daughter extends Father1 {
    constructor(fn, ln, fatherna, Dn) {
        super(fn, ln, fatherna)
        this.Dname = Dn
    }
    displayD() {
        console.log(this.Dname + this.fathername + this.lastname)
    }
}
//this object having total 3 property and 2 method
let myfather=new  Father1("Shantaram", "Tambe",'Baban')
console.log(myfather.firstname)
myfather.displayS()
//this object having total 4 property and 3 method
let poonam = new Daughter("Shantaram", "Tambe", "Baban", "Poonam")
poonam.displayD()


//program 3 // ONE PARENT TWO CHILD
class Father2 {
    constructor(fn, ln) {
        this.firstname = fn
        this.lastname = ln
    }
    displayF2() {
        console.log(this.firstname + this.lastname)
    }
}
class Daughter1 extends Father2 {
    constructor(fn, ln, Dn) {
        super(fn, ln)
        this.Dname = Dn
    }
    displayD2() {
        console.log(this.Dname + this.firstname + this.lastname)
    }
}
class Son1 extends Father2 {
    constructor(fn, ln, Sn) {
        super(fn, ln)
        this.Sname = Sn
    }
    displayS2() {
        console.log(this.Sname + this.firstname + this.lastname)
    }
}

let sharannya = new Daughter1("keshav", "ghule", "sharannya")
let rudransh = new Son1("keshav", "ghule", "rudransh")
rudransh.displayS2()
sharannya.displayD2()


