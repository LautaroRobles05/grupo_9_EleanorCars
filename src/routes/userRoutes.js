const express = require("express");
const upload = require("../middlewares/multer");
const router = express.Router();
const userControllers = require('../controllers/userControllers')
const rules = require('../middlewares/validatorMiddleware');
const guestMiddleware = require ('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const profileAccessMiddleware = require('../middlewares/profileAccessMiddleware')





router.get("/list", adminMiddleware, userControllers.list);

router.get("/register", guestMiddleware, userControllers.register);
router.post("/register", rules,userControllers.processRegister);

router.get("/login", guestMiddleware, userControllers.login);
router.post("/login", rules,userControllers.loginProcess);

router.get("/logout",userControllers.logout);
router.get("/profile/:id", authMiddleware, profileAccessMiddleware, userControllers.profile);

router.get("/profile/edit/:id", authMiddleware, profileAccessMiddleware, userControllers.editProfile);
router.put("/profile/edit/:id", upload.single('img'), profileAccessMiddleware, userControllers.editProcess);

router.delete("/:id", profileAccessMiddleware, userControllers.delete);





module.exports = router;






