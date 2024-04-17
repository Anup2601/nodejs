function person(name,age) {
    this.name=name;
    this.age=age;
}
person.prototype.talk=function () {
    console.log(`hi my name is ${this.name}`);
};

let p1 =new person("anup","20");
let p2 =new person("bob","26");
console.log(p1);
console.log(p2);