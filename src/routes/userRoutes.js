const express = require("express");
const upload = require("../middlewares/multer");
const router = express.Router();
const userControllers = require('../controllers/userControllers')
const rules = require('../middlewares/validatorMiddleware');


router.get("/register",userControllers.register);
router.post("/register",rules,userControllers.processRegister);

router.get("/login",userControllers.login);
router.post("/login",rules,userControllers.loginProcess);

module.exports = router;






