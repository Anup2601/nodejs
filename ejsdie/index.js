const express=require("express");
const app=express();
const path=require("path");

const port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
// app.set('views', home.ejs(view, 'views')); // Adjust the path as necessary

app.get("/",(req,res)=>{
    res.render("home.ejs");
    // res.send("this is my website");
    
});

app.listen(port,()=>{
    console.log(`listing to the port ${port} .`);
});