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

const Order=mongoose.model("Order",orderSchema);
const Consumer=mongoose.model("Consumer",consumerSchema);

const addConsumer=async()=>{
    let cos1=new Consumer({
        name:"Anup Mishra",
    });
    let order1=await Order.findOne({item:"Chips"});
    let order2=await Order.findOne({item:"cholocate"});

    cos1.orders.push(order1);
    cos1.orders.push(order2);

    let result=await cos1.save();
    console.log(result);
}

addConsumer();

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