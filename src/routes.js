const express = require("express");
const routes = express.Router();
const uploadConfig = require('../config/upload');
const multer = require('multer');
const upload = multer(uploadConfig);

const RestaurantController = require('./controllers/RestaurantController');
routes.get("/restaurants", RestaurantController.index);
routes.get("/restaurants/:id", RestaurantController.show);
routes.post("/restaurants", upload.single('image'), RestaurantController.store);
routes.put("/restaurants/:id", upload.single('image'), RestaurantController.update);
routes.delete("/restaurants/:id", RestaurantController.destroy);

const ProductController = require('./controllers/ProductController');
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", upload.single('image'), ProductController.store);
routes.put("/products/:id", upload.single('image'), ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

const PromotionController = require('./controllers/PromotionController');
routes.get("/promotions", PromotionController.index);
routes.get("/promotions/:id", PromotionController.show);
routes.post("/promotions", upload.single('image'), PromotionController.store);
routes.put("/promotions/:id", upload.single('image'), PromotionController.update);
routes.delete("/promotions/:id", PromotionController.destroy);

module.exports = routes;