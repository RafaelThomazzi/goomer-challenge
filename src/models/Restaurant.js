const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    adress:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    openinghours:{
        type:String,
    },  
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }],       
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Restaurant' , RestaurantSchema);
