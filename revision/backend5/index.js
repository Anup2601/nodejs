const {faker}=require('@faker-js/faker');
const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"limcee",
    password:"Anup"
})

try {
    connection.query("SHOW TABLE",(error,result)=>{
        if(error)throw error;
        console.log(result);
    })
} catch (error) {
    console.log(error);
}

let getuser=()=>{
    return{
        userId:faker.string.uuid(),
        user:faker.internet.username(),
        email:faker.internet.email(),
        password:faker.internet.password(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    }
}
console.log(getuser());
 