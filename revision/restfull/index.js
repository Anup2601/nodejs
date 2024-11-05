const express=require("express");
const app=express();

const port=8080;
const path=require("path");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        username:"Anup Mishra",
        content:"Mindset is everything"
    },
    {
        username: "Sneha Kapoor",
        content: "Believe in yourself"
    },
    {
        username: "Rahul Mehta",
        content: "Consistency is key to success"
    },
    {
        username: "Priya Sharma",
        content: "Stay positive, work hard, make it happen"
    },
    {
        username: "Vikram Singh",
        content: "Every day is a new opportunity"
    },
    {
        username: "Aditi Verma",
        content: "Never give up on your dreams"
    },
    {
        username: "Rajesh Patil",
        content: "Hard work beats talent when talent doesn’t work hard"
    },
    {
        username: "Nisha Gupta",
        content: "Success doesn’t come from what you do occasionally, but from what you do consistently"
    },
    {
        username: "Amit Kumar",
        content: "You are stronger than you think"
    },
    {
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
    posts.push({username,content});
    res.redirect("/post");
})

app.listen(port,()=>{
    console.log("app is listing to port");
});