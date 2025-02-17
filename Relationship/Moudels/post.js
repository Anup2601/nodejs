const mongoose=require("mongoose");
const {Schema}=mongoose;

main()
    .then(()=>console.log("connection is sucessfull"))
    .catch((error) => console.log(error));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo');
    
}
// Anup Mishar
const userSchema = new Schema({
    username: String,
    email:String
})

const postSchema=new Schema({
    content : String,
    like :Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

const addData=async()=>{
    let user=await User.findOne({username:"Anup Mishar"});
    let post2=new Post({
        content:"shot",
        like:3213000000,
    })

    post2.user=user;

    await post2.save();
}

addData();