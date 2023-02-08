const express = require("express");
const router = express.Router();
const mainController = require('../controllers/mainControllers')



router.get("/detail",mainController.productDetail);

router.get("/cart",mainController.productCart);

router.get("/edit",mainController.productEdit);

module.exports = router;

