const express = require('express');
const userController = require('../controllers/userController')
const {userValidatorRules, validate} = require('../middlewares/validator')
const isLoggedIn = require('../middlewares/auth')
const doctorController = require('../controllers/doctorController')


const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "أهلًا بالعالم!"})
})


// User Routes
router.post("/account/signup", userValidatorRules(), validate,  userController.register)
router.post("/account/login", userController.login)
router.get("/account/me", isLoggedIn, userController.me)
router.get("/account/profile", isLoggedIn, userController.getProfile)
router.put('/account/update-profile', isLoggedIn, userController.updateProfile);
router.delete('/account/delete-profile', isLoggedIn, userController.deleteProfile);


// Doctros Routes
router.get("/doctors", doctorController.index)


module.exports = router;