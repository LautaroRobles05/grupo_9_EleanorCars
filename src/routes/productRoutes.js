const express = require("express");
const upload = require("../middlewares/multer");
const router = express.Router();
const productControllers = require('../controllers/productControllers')



router.get('/', productControllers.list)

router.get('/create', productControllers.create)
router.post('/create',upload.any('img'), productControllers.upload)

router.get("/detail/:id",productControllers.productDetail);

router.get("/cart",productControllers.productCart);

router.get("/edit/:id",productControllers.productEdit);
router.put("/edit/:id",upload.any('img'),productControllers.productUpdate);

router.delete("/:id",productControllers.delete)


module.exports = router;

