const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'my_db'
  });

  let q="insert into user(id,username,email,password)values(?,?,?,?)";
  let user=["12345","@anupmishra","anupm123@gmail.com","esrdx"];
  try {
    connection.query(q,user,(err,result)=>{
        if (err)throw err ;
        console.log(result);
    });
  } catch (err) {
    console.log(err);
  }

  connection.end();
let getuser=()=> {
  return {
     id:faker.string.uuid(),
     username:faker.internet.userName(),
     email:faker.internet.email(),
     password:faker.internet.password(),
};
}
console.log(getuser());


 