const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({

   name: {
        type: String,
        required: [true, "Product name is required"],
   },
 typep: {
    type: String,
    required: [true, "Type is required"],
    min: [3, "minimum of Title must be greater than 3"],
    
},
   description: {
    type: String,
    required: [true, "Description is required"],
    min: [10, "minimum of Descrption must be greater than 10"],

},
    image:{
     type: String,
     required: [true, "Image is required"],
    },

    price:{
     type:String,
     required: [true, "Price is required"]


    }


}, { timestamps: true })


module.exports.Product = mongoose.model("Product", productSchema);
