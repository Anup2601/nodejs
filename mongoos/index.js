const mongoose = require('mongoose');
main()
.then(()=>{
    console.log("connection successful");
}) 
.catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
const user=mongoose.model("user",userSchema);
const user1=new user({name:"anup",email:"anup@gmail.com",age:20});
const user2=new user({name:"ansh",email:"ansh@gmail.com",age:21});
user1.save();
user2.save();
user.insertMany([
    {
        name:"alokh",
        email:"alokh@gmail.com",
        age:78
    },
    {
        name:"aakash",
        email:"aakash@gmail.com",
        age:28
    },
    {
        name:"shivam",
        email:"shivam@gmail.com",
        age:18
    },
    {
        name:"uttam",
        email:"utttam@gmail.com",
        age:48
    }
])

//to find the data
user.find().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
user.findById("663d25d01e22fb71fc16a905")
.then((data)=>{
    console.log(data);
}).catch ((error)=>{
    console.log(error);
})

//to update the database
user.findByIdAndUpdate("663fbce025afe5e3c386965b",{new:true})
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});

//for delete the data
user.deleteMany({age:{$gt:40}},{new:true})
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})