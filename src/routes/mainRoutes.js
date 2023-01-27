const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainControllers')

router.get("/", mainController.home);

router.get("/productDetail",mainController.productDetail);

router.get("/productCart",mainController.productCart);

router.get("/register",mainController.register);

router.get("/login",mainController.login);



module.exports = router;