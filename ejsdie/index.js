const express=require("express");
const app=express();
const path=require("path");

const port=8080;

app.use(express.static(path.join(__dirname,"/public/js")))
app.use(express.static(path.join(__dirname,"/public/css")))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
// app.set('views', home.ejs(view, 'views')); // Adjust the path as necessary

app.get("/",(req,res)=>{
    res.render("home.ejs");
    // res.send("this is my website");
    
});

app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rolldice",{diceval: diceval});
    res.send("low internet connection");
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    let  instadata=require("./data.json");
    let data=instadata[username];
    if (data) {
        res.render("insta.ejs",{data});
    }else{
        res.render("error.ejs",{username});
    }
    
    // console.log(data);
})

app.listen(port,()=>{
    console.log(`listing to the port ${port} `);
});