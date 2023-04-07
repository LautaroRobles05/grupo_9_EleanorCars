const express = require("express");
const router = express.Router();
const apiProductControllers = require('../../controllers/api/ApiProductControllers')

router.get('/', apiProductControllers.list)

router.get('/index',apiProductControllers.index)


// router.get('/create', apiProductControllers.create)
router.post('/create', apiProductControllers.upload)

router.get("/detail/:id",apiProductControllers.detail);

// router.get("/cart",apiProductControllers.productCart);

// router.get("/edit/:id",apiProductControllers.productEdit);
// router.put("/edit/:id",upload.any('img'), apiProductControllers.productUpdate);

router.delete("/delete/:id",apiProductControllers.delete)


module.exports = router;