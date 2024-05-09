const express=require("express");//for import express
const app=express();
const { faker } = require('@faker-js/faker');//for import faker to make fack database
const mysql=require("mysql2");//for import mysql
const path=require("path");
app.set('view engine','ejs'); //to import ejs file
app.engine('ejs', require('ejs').__express);
app.set("views",path.join(__dirname,"/views"));
// to import method override
const methodOverride=require("method-override");
// const { ifError } = require("assert");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
//for listing of port
let port =8080;//for making static port
app.listen(port,()=>{
    console.log("App is listing to the port 8080");
});

//to connect with mysql file
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'my_db'
  });

//to get the information from database
  let getuser=()=> {
    return [
      faker.string.uuid(),
      faker.internet.userName(),
    faker.internet.email(),
       faker.internet.password(),
    ];
  }
//to make the home router
app.get("/",(req,res)=>{
    let q=`select count(*) from user`
    try {
        connection.query(q,(err,result)=>{
            if (err) throw err;
            let count=result[0]["count(*)"];
            res.render("home1.ejs",{count});
        })
    } catch (err) {
        console.log(err);
        res.send("some error occur in data base");
    }
    
})
// to make user detail router
app.get("/show",(req,res)=>{
  let q=`select * from user`
  try {
    connection.query(q,(err,users)=>{
      if (err) throw err;
        res.render("show.ejs",{users});
    }) 
  } catch (err) {
      console.log(err);
      res.send("some error occur in data base");
}

}) 

// to make edite router 
app.get("/show/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`select * from user where id='${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if (err) throw err;
      let user=result[0];
      console.log(result)
        res.render("edit.ejs",{user});
    }) 
  } catch (err) {
      console.log(err);
      res.send("some error occur in data base");
}
})
// make router to edite databade 
app.patch("/show/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formpassword, username:newusername}=req.body;
  let q=`select * from user where id='${id}'`;
  try {
    connection.query(q,(err,result)=>{
      if (err) throw err;
      let user=result[0];
      if (formpassword!=user.password) {
        res.send("WRONG PASSWORD");
      }
      else
      {
        q2=`update user set username='${newusername}' where id='${id}'`;
        connection.query(q2,(err,result)=>{
          if (err) throw err;
          res.redirect("/show");
        })
      }
    }) 
  } catch (err) {
      console.log(err);
      res.send("some error occur in data base");
}
})

// abhi issme add user and delete user wala concept add karna baki hai 