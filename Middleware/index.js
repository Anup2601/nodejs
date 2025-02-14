const express=require("express");
const app=express();
const ExpressError=require("./ExpressError")
app.use("/",(req,res,next)=>{
    req.responseTime=new Date(Date.now()).toISOString();
    console.log(req.method,req.path,req.hostname,req.responseTime);
    next();
})
// middleware
app.use("/api",(req,res,next)=>{
    let {token}=req.query;
    if(token==="giveaccess"){
        next();
    }
    // res.send("ACCESS DENIDE");
    throw new ExpressError(401,"ACCESS DENIED HANDLE BY EXPRESS");
})

// activity
app.use("/admin",(req,res,next)=>{
    let {token}=req.query;
    if(token=="allow"){
        next();
    }
    throw new ExpressError(402,"Admin can only access");
})

// admin route
app.get("/admin",(req,res)=>{
    res.send("This is admin pannel");
})

// Api request 
app.get("/api",(req,res)=>{
    res.send("DATA");
})

app.get("/",(req,res)=>{
    res.send("HI I am root");
})

app.get("/err",(req,res)=>{
    abc=abc;
})

app.use((err,req,res,next)=>{
    console.log("---------ERROR---------");
    let {status=500,message="Some Error Occure"}=err;
    res.status(status).send(message);
})

app.listen(8080,()=>{
    console.log("App is listing to port 8080");
})
