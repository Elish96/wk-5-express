const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide the product name"]
    },
    price: {
        type: Number,
        required: [true, "Please provide price"]
    },
    quantity: {
        type: Number,
        default: 0,
    },
    description: String,
},
    {
        timestamps:true
    
    }
);

module.exports = mongoose.model('Product', productSchema);