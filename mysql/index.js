const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'my_db'
  });

  let getuser=()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
       faker.internet.email(),
       faker.internet.password(),
    ];
  }

  let q="insert into user(id,username,email,password)values ?";
  let user=[];
  for(let i=1;i<=100;i++){
    user.push(getuser());
  }
  try {
    connection.query(q,[user],(err,result)=>{
        if (err)throw err ;
        console.log(result);
    });
  } catch (err) {
    console.log(err);
  }

  connection.end();

console.log(getuser());


 