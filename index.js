var express = require("express");
require("./productdb")
var productModel = require("./modal/product")
var app = express();
app.use(express.json())
var PORT = 8000;
app.post("/",(req,res)=>{
    try {
        productModel(req.body).save();
        res.send("data added sucessfully!!");
       } catch (error){
        res.send(error);
       }
    });

    app.delete('/remove/:id',async(req,res)=>{
        try {
        await productModal.findByIdAndDelete(req.params.id);
        res.send("delete successfully!!");
        } catch (error) {
            res.send(error);
        }
        
    })

app.listen(PORT,(req,res) =>{
    console.log(`server is listening in port ${PORT}`);
});