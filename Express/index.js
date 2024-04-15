const express=require("express");
const app=express();

let port=8080;

app.listen(port,()=>{
    console.log(`app listion on port ${port}`);
})

// app.use((req,res)=>{
//     console.log(req);
//     res.send("happy new API"),
//     console.log("request recive")
// });

// app.get("/",(req,res)=>{
//     console.log("you acces root path"),
//     res.send("you request root path")
// });

// app.get("/help",(req,res)=>{
//     console.log("you request help path")
//     res.send("you request help path")
// });

// app.get("/search",(req,res)=>{
//     console.log("you request search path")
//     res.send("you request search path")
// });

// app.get("*",(req,res)=>{
//     console.log("you request wrong path")
//     res.send("you request wrong path")
// });

app.post("/",(req,res)=>{
    console.log("you request post path"),
    res.send("you request post path")
});

app.get("/:username/:id/:password",(req,res)=>{
    console.log(req.params);
    let {username,id,password}=req.params;
    res.send(`this account belongs to @${username} your id ${id} and password ${password}`);
});