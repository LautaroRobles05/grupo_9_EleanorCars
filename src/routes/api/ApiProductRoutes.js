const express = require("express");
const router = express.Router();
const productController = require('../../controllers/api/ApiProductControllers')

router.get('/', productController.list)

// router.get('/create', productControllers.create)
//router.post('/create',upload.any('img'), productControllers.upload)

// router.get("/detail/:id",productControllers.productDetail);

// router.get("/cart",productControllers.productCart);

// router.get("/edit/:id",productControllers.productEdit);
// router.put("/edit/:id",upload.any('img'), productControllers.productUpdate);

// router.delete("/:id",productControllers.delete)


module.exports = router;