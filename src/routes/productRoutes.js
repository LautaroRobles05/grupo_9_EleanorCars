const express = require("express");
const upload = require("../middlewares/multer");
const router = express.Router();
const productControllers = require('../controllers/productControllers')



router.get('/', productControllers.list)

router.get('/create', productControllers.create) //Vista crear producto
router.post('/create',upload.any('img'), productControllers.upload) //Subir a BD

router.get("/detail/:id",productControllers.productDetail);

router.get("/cart",productControllers.productCart);

router.get("/edit/:id",productControllers.productEdit); //Vista editar producto
router.put("/edit/:id",upload.any('img'), productControllers.productUpdate); //subir edicion a BD

router.delete("/:id",productControllers.delete)


module.exports = router;

