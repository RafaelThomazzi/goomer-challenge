const mongoose = require("mongoose");

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find().sort('-createdAt');
        return res.json(products);
    },
    async show(req, res) {
        const products = await Product.findById(req.params.id);
        return res.json(products);
    },   
    async store(req, res) {
        //console.log(req.file);
        //return res.json({ ok: true });
        
        const { name, price, category, restaurant, sale } = req.body;
        const {filename: image} = req.file;
        
        const products = await Product.create({
			name,
            price,
            image,
			category,
            restaurant,      
            sale,   
		});
        return res.json(products);
    },
    async update(req, res) {
        const products = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(products);
    },  
    async destroy(req, res) {
        const products = await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }    
};