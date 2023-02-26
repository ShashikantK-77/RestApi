const mongoose = require("mongoose");

const uri = "mongodb+srv://ShaShi:yh0XRe46qCgtAQOV@shashiapi.xyzaqat.mongodb.net/ShashiApi?retryWrites=true&w=majority"

mongoose.set('strictQuery',true)



const connectDB = (uri) =>{
    console.log("connect db");
return mongoose.connect(uri,{
 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
};

module.exports = connectDB;
