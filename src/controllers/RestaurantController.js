const mongoose = require("mongoose");

const Restaurant = mongoose.model('Restaurant');

module.exports = {
    async index(req, res) {
        const restaurants = await Restaurant.find().sort('-createdAt');
        return res.json(restaurants);
    },
    async show(req, res) {
        const restaurants = await Restaurant.findById(req.params.id);
        return res.json(restaurants);
    },   
    async store(req, res) {
        const restaurants = await Restaurant.create(req.body);
        return res.json(restaurants);
    },
    async update(req, res) {
        const restaurants = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(restaurants);
    },  
    async destroy(req, res) {
        const restaurants = await Restaurant.findByIdAndRemove(req.params.id);
        return res.send();
    }    
};