const express = require("express");
const router = express.Router();
const apiProductControllers = require('../../controllers/api/ApiProductControllers');

router.get('/', apiProductControllers.list);



//consulta ultimo producto creado
router.get('/last', apiProductControllers.last);

// router.get('/create', apiProductControllers.create)
router.post('/create', apiProductControllers.upload);

//ruta para ver el total de productos 
router.get('/count', apiProductControllers.count);

router.get('/categories1', apiProductControllers.categories1);


//ruta para ver cantidad de productos en base a tipo de vehículo, cantidad de productos totales y detalle de productos
router.get('/count/types', apiProductControllers.countTypes);

//ruta para ver el total de categorias de producto
router.get('/categories', apiProductControllers.categories);

//ruta de filtros
router.get('/tipo_marca', apiProductControllers.getBrandsWithProducts);
router.get('/tipo_marca/:id', apiProductControllers.getBrandByTypeId);

router.get('/marca_modelo/:id', apiProductControllers.getModelByBrandId);
router.get('/marca_modelo_producto/:id', apiProductControllers.getModelByBrandIdWithProducts);


router.get("/detail/:id",apiProductControllers.detail);

router.put("/edit/:id",apiProductControllers.productEdit);
// router.put("/edit/:id",upload.any('img'), apiProductControllers.productUpdate);

router.delete("/delete/:id",apiProductControllers.delete);


module.exports = router;