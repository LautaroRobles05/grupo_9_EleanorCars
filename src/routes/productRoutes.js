const express = require("express");
const router = express.Router();
const productControllers = require('../controllers/productControllers')

router.get('/', productControllers.list)

router.get("/detail",productControllers.productDetail);

router.get("/cart",productControllers.productCart);

router.get("/edit",productControllers.productEdit);

module.exports = router;

