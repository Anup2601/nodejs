const mongoose=require("mongoose");
const {Schema}=mongoose;

main()
    .then(()=>console.log("connection is sucessfull"))
    .catch((error) => console.log(error));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo');
    
}

const userSchema = new Schema({
    username: String,
    address: [
        {
            location:String,
            city: String
        },
    ],
})

const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
    let user1=new User({
        username: "Anup Mishar",
        address:[
            {
                location: "Samastipur",
                city: "Samastipur"
            }
        ]
    })
    user1.address.push({location:"dhurlakh rudauli",city:"samastipur"});
    let result=await user1.save();
    console.log(result)
};

addUsers();