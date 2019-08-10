const mongoose = require("mongoose");

const PromotionSchema = new mongoose.Schema({
    description:{
        type: String,
        //required: true,
    },
    price:{
        type: String,
        //required: true,
    },
    openinghours:{
        type: String,
        //required: true,
    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        //required: true,
    },        
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Promotion' , PromotionSchema);