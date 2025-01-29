const express=require("express");
const app=express();
const mongoose=require("mongoose");
const chat =require("./models/chat.js");
const path=require("path");
const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main()
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        console.log(error);
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/snap");
}

// let chat1=new chat({
//     from:"naha",
//     to:"mona",
//     message:"hi this is neha",
//     createdAt: new Date()
// })

// chat1.save().then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log(error);
// })

app.get("/",(req,res)=>{
    res.send("Working");
})

app.get("/chats",async(req,res)=>{
    let chats=await chat.find();
    // console.log(chat);
    res.render("index.ejs",{chats});
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})

app.post("/chats",(req,res)=>{
    let {from,to,message}=req.body;
    let newchat=new chat({
        from:from,
        to:to,
        message:message,
        createdAt:new Date()
    })
    newchat.save()
        .then((res)=>{
            console.log("chat is save");
        })
        .catch((error)=>{
            console.log(error);
        })
    res.redirect("/chats");
})

app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chats=await chat.findById(id);
    res.render("edit.ejs",{chats});
})

app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {message:newmessage}=req.body;
    let updatechat=await chat.findByIdAndUpdate(id,{message:newmessage},{runValidators:true,new:true})
    res.redirect("/chats");
})

app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let deletechat=await chat.findByIdAndDelete(id);
    res.redirect("/chats");
})

app.listen(8080,()=>{
    console.log("app is listing to port");
})