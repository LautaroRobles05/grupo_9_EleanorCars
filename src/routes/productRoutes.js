const express = require("express");
const upload = require("../middlewares/multer");
const router = express.Router();
const productControllers = require('../controllers/productControllers');
const adminMiddleware = require ('../middlewares/adminMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const productValidatorMiddleware = require ('../middlewares/productValidatorMiddleware')



router.get('/', productControllers.list)

router.post('/search', productControllers.findProduct)
router.get('/searchBrand', productControllers.findBrand)


router.get('/create', /*adminMiddleware,*/ productControllers.create) //Vista crear producto
router.post('/create', /*adminMiddleware,*/ upload.any('img'),productValidatorMiddleware,  productControllers.upload) //Subir a BD



// router.get("/cart", authMiddleware, productControllers.productCart);

//Segundo paso para reserva de producto
router.get("/reserveConfirm", authMiddleware, productControllers.reserveConfirm);

//Primer paso para reserva de producto
router.get("/reserve/:id", authMiddleware, productControllers.reserve);


router.get("/detail/:id", productControllers.productDetail);


router.get("/edit/:id", /*adminMiddleware,*/ productControllers.productEdit); //Vista editar producto

router.put("/edit/:id", /*adminMiddleware,*/ upload.any('img'),productValidatorMiddleware, productControllers.productUpdate); //subir edicion a BD

router.delete("/:id", /*adminMiddleware,*/ productControllers.delete)


module.exports = router;

