const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    productName:String,
    productcat:String,
    productprice:Number,
    productQuantity:Number
    
});

const productModel = mongoose.model("product",productSchema);
module.exports = productModel;