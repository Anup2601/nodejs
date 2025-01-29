const mongoose=require("mongoose");
const chat =require("./models/chat.js");

main()
    .then((res)=>{
        console.log("connection sucessfull");
    })
    .catch((error)=>{
        console.log(error);
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/snap");
}

let allChat=[
    {
        from:"Anup",
        to:"Prince",
        message:"Hi how are you",
        createdAt:new Date()
    },
        {
            from: "Anup",
            to: "Prince",
            message: "Hi, how are you?",
            createdAt: new Date()
        },
        {
            from: "Harsh",
            to: "Ayush",
            message: "What's the plan for tonight?",
            createdAt: new Date()
        },
        {
            from: "Prashant",
            to: "Riya",
            message: "Did you finish the project report?",
            createdAt: new Date()
        },
        {
            from: "Anjali",
            to: "Neha",
            message: "Let’s meet tomorrow at the café.",
            createdAt: new Date()
        },
        {
            from: "Vikram",
            to: "Arjun",
            message: "Can you share the notes from class?",
            createdAt: new Date()
        },
        {
            from: "Sneha",
            to: "Raj",
            message: "Happy Birthday! Have an amazing day!",
            createdAt: new Date()
        },
        {
            from: "Amit",
            to: "Kunal",
            message: "Did you check the mail I sent?",
            createdAt: new Date()
        },
        {
            from: "Rohit",
            to: "Pooja",
            message: "Are you joining the hackathon this weekend?",
            createdAt: new Date()
        },
        {
            from: "Tanya",
            to: "Simran",
            message: "Thanks for helping with the assignment!",
            createdAt: new Date()
        },
        {
            from: "Karan",
            to: "Siddharth",
            message: "Are we still on for the meeting at 3 PM?",
            createdAt: new Date()
        },
        {
            from: "Nisha",
            to: "Divya",
            message: "Can you send me the recipe you mentioned?",
            createdAt: new Date()
        },
        {
            from: "Arnav",
            to: "Rakesh",
            message: "What’s your opinion on the latest AI update?",
            createdAt: new Date()
        },
        {
            from: "Ritika",
            to: "Meena",
            message: "Let’s catch up over a call soon.",
            createdAt: new Date()
        },
        {
            from: "Sameer",
            to: "Aditya",
            message: "Don’t forget to submit your feedback form.",
            createdAt: new Date()
        },
        {
            from: "Anshika",
            to: "Ishaan",
            message: "Can we reschedule our meeting to Thursday?",
            createdAt: new Date()
        },
        {
            from: "Varun",
            to: "Pritam",
            message: "Thanks for the quick response on the task.",
            createdAt: new Date()
        },
        {
            from: "Manisha",
            to: "Komal",
            message: "How was your weekend trip?",
            createdAt: new Date()
        },
        {
            from: "Shivam",
            to: "Abhinav",
            message: "Can you confirm your availability for the event?",
            createdAt: new Date()
        },
        {
            from: "Dhruv",
            to: "Gautam",
            message: "The code you shared worked perfectly. Thanks!",
            createdAt: new Date()
        },
        {
            from: "Meera",
            to: "Tanvi",
            message: "Did you finish reading the book I recommended?",
            createdAt: new Date()
        }
]
chat.insertMany(allChat);