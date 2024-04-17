class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`hi my name is ${this.name}`);
    }
}

let p1=new person("addam",23);
console.log(p1);