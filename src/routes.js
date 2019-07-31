const express = require("express");
const routes = express.Router();

const RestaurantController = require('./controllers/RestaurantController');
routes.get("/restaurants", RestaurantController.index);
routes.get("/restaurants/:id", RestaurantController.show);
routes.post("/restaurants", RestaurantController.store);
routes.put("/restaurants/:id", RestaurantController.update);
routes.delete("/restaurants/:id", RestaurantController.destroy);

module.exports = routes;