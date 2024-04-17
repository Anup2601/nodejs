// const express=require("express");
// const app=express();

// let port=8080;

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());

// app.post("/register",(req,res)=>{
//     let {user,password}=req.body;
//     console.log(req.body);
//      res.send(`stander post response welcome @${user}`);
// })

// app.get("/register",(req,res)=>{
//     let {user,password}=req.query;
    
//     res.send(`stander get response of username @${user}`)
// })

// app.listen(port,()=>{
    
//     console.log(`app listion on port ${port}`);
// })

const express = require("express");
const app = express();

let port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// POST request to /register
app.post("/register", (req, res) => {
    let { user, password } = req.body;
    console.log(req.body);
    res.send(`Standard POST response welcome @${user}`);
});

// GET request to /register
app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard GET response of username @${user}`);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
