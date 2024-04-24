const { faker } = require('@faker-js/faker');
const mysql=require("mysql");
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Anup#7070',
    database : 'my_db'
  });

  try {
    connection.query("show table",(err,result)=>{
        if (err)throw err ;
        console.log(result);
    });
  } catch (error) {
    console.log(err);
  }
let getuser=()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}
 