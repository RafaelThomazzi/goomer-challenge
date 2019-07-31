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
        required: true,
    },
    openinghours:{
        type: String,
        required: true,
    },    
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model('Restaurant' , RestaurantSchema);
