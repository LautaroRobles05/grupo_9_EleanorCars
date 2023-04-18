const express = require("express");
const upload = require("../middlewares/multer");
const router = express.Router();
const userControllers = require('../controllers/userControllers')
const rules = require('../middlewares/validatorMiddleware');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


router.get("/list", userControllers.list);

router.get("/register", guestMiddleware, userControllers.register);
router.post("/register",rules,userControllers.processRegister);

router.get("/login", guestMiddleware, userControllers.login);
router.post("/login",rules,userControllers.loginProcess);

router.get("/logout",userControllers.logout);
router.get("/profile",authMiddleware, userControllers.profile);

router.get("/profile/edit",authMiddleware,userControllers.editProfile);
router.put("/profile/edit",upload.single('img') ,userControllers.editProcess);

router.delete("/:id",userControllers.delete);





module.exports = router;






