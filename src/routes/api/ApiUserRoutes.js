const express = require("express");
const router = express.Router();
const ApiUserController = require('../../controllers/api/ApiUserControllers')

//consulta
router.get("/session",ApiUserController.session);
//consulta cantidad total de usuarios creados
router.get('/count', ApiUserController.count)

//consulta ulitmo usuario creado
router.get('/last', ApiUserController.last)

//consulta por detalle de usuario
router.get('/detail/:id', ApiUserController.userDetail)

router.delete('/delete/:id', ApiUserController.userDelete)






module.exports = router

