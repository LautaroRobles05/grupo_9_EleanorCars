const express = require("express");
const router = express.Router();
const cartController = require('../controllers/cartController')

router.get('/', cartController.main);

module.exports = router;