const express=require("express");
const app=express();

const port=8080;
const path =require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));

let posts=[
    {
        id:"1a",
        name:"anup",
        content:"i love coading",
    },
    { 
        id:"2b",
        name:"ansh",
        content:"i explore new things",
    },
    {
        id:"3c",
        name:"mansi",
        content:"I got selected for internship",
    },
    {
        id:"4d",
        name:"vishesh",
        content:"hardworking is important to achive success",
    },
]

app.get("/post",(req,res)=>{
    res.render("index.ejs", {posts});
})

app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
})

app.get("/post/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("show.ejs",{post})
    // res.send("id is woeking")
})

app.post("/post",(req,res)=>{
    let {name ,content}=req.body;
    posts.push({name ,content});
    res.redirect("/post");
})

app.listen(port,()=>{
    console.log("listen to the port 8080");
})