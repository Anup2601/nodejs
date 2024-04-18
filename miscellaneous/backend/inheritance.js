class person{
    constructor (name,age){
        this.name=name;
        this.age=age;
    };
    talk(){
        console.log(`hi i am ${this.name}`);
    }
}


class student extends  person{
    constructor (name,age,marks){
        super(name,age);
        this.marks=marks;
    }
 
}

class teacher extends  person{
    constructor (name,age,subject){
        super(name,age);
        this.subject=subject;
    }
}

let p1=new student("anup",20,93);
let p2=new teacher("bob",29,"java");
console.log(p1);
console.log(p2);