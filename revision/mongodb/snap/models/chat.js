const mongoose=require("mongoose");

const chatSchema=new mongoose.Schema({
    from:String,
    to:String,
    message:String,
    createdAt:Date
})

const chat=mongoose.model("chat",chatSchema);

module.exports =chat;
