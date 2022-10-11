const {Router} = require('express');

const router = Router();
const LoginController = require("../controller/LoginController");

router.get("/login", LoginController.login);

module.exports = router;