const express = require("express");
const route = express.Router();
const userController = require("../Controller/CarController");


route.get("/", userController.getCar);

route.get("/:id", userController.getCarId);

route.post("/", userController.postCar);

route.put("/:id", userController.putCar);

route.delete("/:id", userController.deleteCar);

route.post("/signup",userController.signUp);

route.post("/login",userController.login)

module.exports = route;