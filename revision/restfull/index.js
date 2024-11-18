const express=require("express");
const app=express();
const methodOverride=require("method-override");
 
const {v4: uuidv4}=require("uuid");

const port=8080;
const path=require("path");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"Anup Mishra",
        content:"Mindset is everything"
    },
    {
        id:uuidv4(),
        username: "Sneha Kapoor",
        content: "Believe in yourself"
    },
    {
        id:uuidv4(),
        username: "Rahul Mehta",
        content: "Consistency is key to success"
    },
    {
        id:uuidv4(),
        username: "Priya Sharma",
        content: "Stay positive, work hard, make it happen"
    },
    {
        id:uuidv4(),
        username: "Vikram Singh",
        content: "Every day is a new opportunity"
    },
    {
        id:uuidv4(),
        username: "Aditi Verma",
        content: "Never give up on your dreams"
    },
    {
        id:uuidv4(),
        username: "Rajesh Patil",
        content: "Hard work beats talent when talent doesn’t work hard"
    },
    {
        id:uuidv4(),
        username: "Nisha Gupta",
        content: "Success doesn’t come from what you do occasionally, but from what you do consistently"
    },
    {
        id:uuidv4(),
        username: "Amit Kumar",
        content: "You are stronger than you think"
    },
    {
        id:uuidv4(),
        username: "Pooja Rao",
        content: "Small steps in the right direction can turn out to be the biggest steps of your life"
    }
    
]

app.get("/post",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/post/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/post",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/post");
})

app.get("/post/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);
    res.render("show.ejs",{post})
})

app.patch("/post/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=> id===p.id);
    post.content=newContent;
    res.redirect("/post");
})

app.get("/post/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id===p.id);   
    res.render("edit.ejs",{post});
})
app.delete("/post/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> id!==p.id);
    // post.delete();
    res.redirect("/post");
})

app.listen(port,()=>{
    console.log("app is listing to port");
});