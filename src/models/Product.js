const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },  
    restaurant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },  
    sale:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sale',
    },            
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});


mongoose.model('Product' , ProductSchema);
