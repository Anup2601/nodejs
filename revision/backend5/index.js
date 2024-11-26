const express=require("express");
const app= express();
const {faker}=require('@faker-js/faker');
const mysql=require('mysql2');
const path =require('path');
const {v4: uuidv4}=require("uuid");
const methodOverride=require('method-override');
app.use (methodOverride("__method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.engine("ejs",require('ejs').__express);
app.set("views",path.join(__dirname,"/views"));

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
//connect to database
app.get("/",(req,res)=>{
    let q=`select count(*) from school`;
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let count=result[0]["count(*)"];
            // res.send(result);
            res.render("home.ejs",{count});
        })
    }
    catch(err){
        console.log(err);
        res.send("Some error occure in database");
    }
})
//home routre
app.get("/user",(req,res)=>{
    let q=`select * from school`;
    try{
        connection.query(q,(err,result)=>{
            if (err) throw err;
            let data=result;
            res.render("show.ejs",{data});
        })
    }catch (err){
        res.send("some erroe occure in database");
    }
});

//edit rout
app.get("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let q= `select * from school where userId ='${id}'`;
    try {
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let user=result[0];
            res.render("edit.ejs",{user});
        });
    }catch (err){
        console.log(err);
        res.send("some error in database");
    }
})

// new Router
app.get("/user/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/user",(req,res)=>{
    let {username,email,password,avatar}=req.body;
    let userId=uuidv4();
    let q=`insert into school(userId,username,email,password,avatar) values ('${userId}','${username}','${email}','${password}','${avatar}')`;
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            // console.log("add new user");
            res.redirect("/user");
        })
    }catch (err){
        res.send("Some error occure in database");
    }
})

// UPDATE Router
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let{password: formpass,username:newusername}=req.body;
    let q=`select * from school where userId='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user=result[0];
            if(formpass!=user.password){
                res.send("Wrong password");
            }else {
                let q2=`update School set username='${newusername}' where userId ='${id}' `;
                connection.query(q2,(err,result)=>{
                    if(err)throw err;
                    res.redirect("/user");
                });
            }
        })
    }catch(err){
        console.log(err);
        res.send("Some error occure in database");
    }
})

//delete rout
app.get("/user/:id/delete",(req,res)=>{
    let {id}=req.params;
    let q=`select * from school where userId='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let user=result[0];
            res.render("delete.ejs",{user});
    })
    
    }catch(err){
        res.send("Some error occure in database");
    }
})

app.delete("/user/:id/",(req,res)=>{
    let {id}=req.params;
    let {password}=req.body;
    let q=`select * from school where userId='${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err)throw err;
            let user=result[0];
            if(user.password!=password){
                res.send("Wrong password");
            }else{
                let q2=`delete from school where userId='${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err)throw err;
                    res.redirect("/user");
                })
            }
        })
    }catch(err){
        res.send("some error occur in database");
    }
})

// activate the port
let port =8080;
app.listen(port,()=>{
    console.log("app is listing to port 8080");
})

// console.log(getuser());
// connection.end();
 