const mongoose = require("mongoose");

//mongoose.connect("url").then(()=>{}).catch(()=>{})

    mongoose.connect("mongodb+srv://dennis:dennisas2005@cluster0.islpe.mongodb.net/productdata?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{console.log("connected to be")})
    .catch((err)=>{console.log(err)})