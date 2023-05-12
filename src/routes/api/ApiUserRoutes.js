const express = require("express");
const router = express.Router();
const ApiUserController = require('../../controllers/api/ApiUserControllers')

//consulta

//consulta cantidad total de usuarios creados
router.get('/count', ApiUserController.count)

//consulta ulitmo usuario creado
router.get('/last', ApiUserController.last)




module.exports = router

