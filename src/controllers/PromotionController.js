const mongoose = require("mongoose");

const Promotion = mongoose.model('Promotion');

module.exports = {
    async index(req, res) {
        const promotions = await Promotion.find().sort('-createdAt');
        return res.json(promotions);
    },
    async show(req, res) {
        const promotions = await Promotion.findById(req.params.id);
        return res.json(promotions);
    },   
    async store(req, res) {
        //console.log(req.file);
        //return res.json({ ok: true });
        
        const { description, price, openinghours, product } = req.body;
        
        const promotions = await Promotion.create({
			description,
            price,
            openinghours,
			product,  
		});
        return res.json(promotions);
    },
    async update(req, res) {
        const promotions = await Promotion.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(promotions);
    },  
    async destroy(req, res) {
        const promotions = await Promotion.findByIdAndRemove(req.params.id);
        return res.send();
    }    
};