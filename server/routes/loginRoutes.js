const router = require("express").Router();
const loginController = require("../controllers/loginController");

router
    .route("/")
    .post(loginController.add_users);


module.exports = router;