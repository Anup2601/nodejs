const mongoose=require("mongoose");
const {Schema}=mongoose;

main()
    .then(()=>console.log("connection is sucessfull"))
    .catch((error) => console.log(error));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/demo');
    
}



const orderSchema = new Schema({
    item: String,
    price:Number
})

const consumerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order",
        }
    ],
})

consumerSchema.post("findOneAndDelete", async(consumer)=>{
    if(consumer.orders.length){
        let result=await Order.deleteMany({_id:{$in:consumer.orders}})
        console.log(result);
    }
})

const Order=mongoose.model("Order",orderSchema);
const Consumer=mongoose.model("Consumer",consumerSchema);

const addConsumer=async()=>{
    let cos1=new Consumer({
        name:"Mona Mishra",
    });
    let newOrder=new Order({
        item: "Car",
        price:1009999,
    })

    cos1.orders.push(newOrder);
    await newOrder.save();
    let result=await cos1.save();
    // console.log(result);
}

// addConsumer();

const delcos=async()=>{
    let data=await Consumer.findByIdAndDelete('67b36006998d11ed9379c9c2');
    console.log(data);
}

delcos();

// const addOrder=async()=>{
//     let result=await Order.insertMany([
//         {item:"Somosa",price:10},
//         {item:"Chips",price:10},
//         {item:"cholocate",price:100},
//         {item:"Cold-Drink",price:50},
//     ]);
//     console.log(result);
// };

// addOrder();