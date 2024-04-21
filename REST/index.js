const express=require("express");//for import express
const app=express();
const methodoverride=require("method-override");//import to change ejs method
const port=8080;
const path =require("path");
const {v4: uuidv4}=require("uuid");//import to create unique id
app.use (methodoverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));//to use public file
app.use(express.urlencoded({extended:true}));// to take respond from post
// post content
let posts=[
    {
        id: uuidv4(),
        name:"anup",
        content:"i love coading",
    },
    { 
        id:uuidv4() ,
        name:"ansh",
        content:"i explore new things",
    },
    {
        id:uuidv4(),
        name:"mansi",
        content:"I got selected for internship",
    },
    {
        id:uuidv4(),
        name:"vishesh",
        content:"hardworking is important to achive success",
    },
]
// send responce to post page request
app.get("/post",(req,res)=>{
    res.render("index.ejs", {posts});
})
// send responce to post new page request
app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
})
//to generate post id page
app.get("/post/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("show.ejs",{post})                           
})
// to generate unique id
app.post("/post",(req,res)=>{
    let {name ,content}=req.body;
    let id=uuidv4();
    posts.push({id,name,content});
    res.redirect("/post");
})
// for eiditing the post
app.patch("/post/:id",(req,res)=>{
    let {id}= req.params;
    let newcontent=req.body.content;
    let post=posts.find((p)=> id===p.id);
    post.content=newcontent;
    console.log(post);
    res.redirect("/post");
})


// to eiditing post page
app.get("/post/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post =posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
})

// for delete the post
app.delete("/post/:id",(req,res)=>{
    let {id}=req.params;
     posts =posts.filter((p)=>id!==p.id);
    res.redirect("/post");
});
// to generater server
app.listen(port,()=>{
    console.log("listen to the port 8080");
})