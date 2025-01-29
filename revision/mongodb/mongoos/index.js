const mongoose=require("mongoose");

main() 
    .then(()=>{
        console.log("connection succesfull");
    })
    .catch((error)=>console.log(error));
    async function main(){
        await mongoose.connect("mongodb://127.0.0.1:27017/test")
    }

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const User=mongoose.model("User",userSchema);

const user1=new User({name:"Anup",email:"Anup123@gmail.com",age:21});
user1.save()
    .then((res)=>{
        // console.log(res);
    })
    .catch((error)=>{
        console.log(error);
    })

User.findById("67994d434b4adc0c211a8ce9")
    .then((data)=>{
        // console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })

User.findByIdAndUpdate("67994d434b4adc0c211a8ce9",{age:51},{new:true})
    .then((data)=>{
        // console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })

User.findOneAndDelete()
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        console.log(error);
    })
