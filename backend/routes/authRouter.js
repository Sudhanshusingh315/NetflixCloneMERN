const router = require('express').Router();
const authUser = require("../controller/authController")

router.post('/',authUser.registerUser);
router.post('/register',authUser.loginUser);

exports.router = router;
