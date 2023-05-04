const express = require("express");
const upload = require("../middlewares/multer");
const router = express.Router();
const productControllers = require('../controllers/productControllers');
const adminMiddleware = require ('../middlewares/adminMiddleware');
const productValidatorMiddleware = require ('../middlewares/productValidatorMiddleware')



router.get('/', productControllers.list)

router.get('/create', /*adminMiddleware,*/ productControllers.create) //Vista crear producto
router.post('/create', /*adminMiddleware,*/ upload.any('img'), productValidatorMiddleware, productControllers.upload) //Subir a BD

router.get("/detail/:id", productControllers.productDetail);

router.get("/cart", productControllers.productCart);

router.get("/edit/:id", /*adminMiddleware,*/ productControllers.productEdit); //Vista editar producto
router.put("/edit/:id", /*adminMiddleware,*/ upload.any('img'), productControllers.productUpdate); //subir edicion a BD

router.delete("/:id", /*adminMiddleware,*/ productControllers.delete)


module.exports = router;

