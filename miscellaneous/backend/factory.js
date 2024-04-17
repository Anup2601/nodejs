function makeperson(name,age) {
    const person={
        name: name,
        age: age,
    
    talk(){
        console.log(`hi my self ${name}`);
    }
    };
    return person;
}

let p1=makeperson("anup",20);
console.log(p1);
console.log(p1.talk());