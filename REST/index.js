const express=require("express");
const app=express();

const port=8080;
const path =require("path");

app.set("views engine",ejs);
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("server is working");
})

app.listen(port,()=>{
    console.log("listen to the port 8080");
})