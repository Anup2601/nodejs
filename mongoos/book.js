const mongoose = require('mongoose');//to import mongoose
main()
.then(()=>{
    console.log("connection successful");//to show connection success
}) 
.catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');//to connenct with server
}
// to making the schema 
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        requid:true
    },
    auther:{
        type:String,
    },
    price:{
        type:Number,
        min:[100,"please enter a valid price1"]
    },
    discount:{
        type:Number,
        default:0
    },
    genre:{
        type:String
    },
    category:{
        type:String,
        enum:["friction","non-friction"]
    }
});
//to create new database
const book=mongoose.model("book",bookSchema);
//enter the data 
let book1=new book({
    title:"Life Without Love",
    auther:"Anup Mishra",
    price:500,
    discount:10,
    genre:"nobel"
});
let book2=new book({
    title:"the rise of warrior",
    auther:"Anup Mishra",
    price:699,
    discount:10,
    genre:"nobel",
    catagory:"frictional"
});
// save the data 
book1.save()
book2.save()
// print the data and find the error 
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});
// to find the data and update
book.findByIdAndUpdate("6640fe5710f900c180cadfd6",{discount:20},{runValidators:true})
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});