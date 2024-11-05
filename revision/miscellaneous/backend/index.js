const express=require("express");
const app=express();
let port=8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,password}=req.query;
    res.send(`Stander get response Welcom ${user}`);
})

app.post("/register",(req,res)=>{
    let {user}=req.body;
    res.send(`post stander request welcom ${user}`);
})

app.listen(port,()=>{
    console.log(`app is listing to the ${port}`);
});