require ("dotenv").config();
const express = require("express");

const app = express();

const connectDB = require("./DB/connect")

const port = process.env.Port || 4000;

const products_routes = require("./routes/products")

app.get("/",(req,res)=>{
res.send("Hi, I am Live");
});

//middleware or set router
app.use("/api/products",products_routes);

const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URL);
        // await connectDB();
        app.listen(port,()=>{
            console.log(`${port} yes i am connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
