const express = require("express");
const routes = express.Router();
const uploadConfig = require('../config/upload');
const multer = require('multer');
const upload = multer(uploadConfig);

const RestaurantController = require('./controllers/RestaurantController');
routes.get("/restaurants", RestaurantController.index);
routes.get("/restaurants/:id", RestaurantController.show);
routes.post("/restaurants", upload.single('image'), RestaurantController.store);
routes.put("/restaurants/:id", RestaurantController.update);
routes.delete("/restaurants/:id", RestaurantController.destroy);

module.exports = routes;