const exprss=require("express");//express ko import karne ke liye
const app=exprss();

const port=8000;// api chalane ke liye
// views folder ke file ko acess karne ke liye 
const path=require("path");
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
// home rout chalane ke liye 
app.get('/',(req,res)=>{
    res.render("home.ejs");
});
// roll rout chlane ke liye 
app.get('/roll',(req,res)=>{
    let value=[1,2,3,4,5,6];
    let num=Math.floor(Math.random()*6)+1;
    res.render("roll.ejs",{num,value});
});
app.get('/ig/:username',(req,res)=>{
    let {username}=req.params
    res.render("insta.ejs",{username});
});
app.get('/an/:username',(req,res)=>{
    let {username}=req.params;
    const insdata=require("./data.json");
    const data=insdata[username];
    console.log(data);
    res.render("animal.ejs",{data})
})
// server chlane ke liye 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});