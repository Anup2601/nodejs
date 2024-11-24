const {express}=require('express');
const app=express;
const {faker}=require('@faker-js/faker');
const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"anup",
    password:"Anup#7070"
});
let getuser=()=>{
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
        faker.image.avatar(),
    ]
}
let q="insert into school(userId,username,email,password,avatar)values?";
let  data=[];
for(let i=0;i<100;i++){
    data.push(getuser());
}
try {
    connection.query(q,[data],(error,result)=>{
        if(error)throw error;
        console.log(result);
    })
} catch (error) {
    console.log(error);
}

app.listion()

// console.log(getuser());
connection.end();
 