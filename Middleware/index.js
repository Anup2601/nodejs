const express=require("express");
const app=express();

app.use("/",(req,res,next)=>{
    req.responseTime=new Date(Date.now()).toISOString();

    console.log(req.method,req.path,req.hostname,req.responseTime);
    
    next();
})


app.get("/",(req,res)=>{
    res.send("HI I am root");
})

app.listen(8080,()=>{
    console.log("App is listing to port 8080");
})
