
// const isAuthenticated = require("../config/middleware/isAuthenticated");
const passport = require("../config/passport");
const router = require("express").Router();
const loginController = require("../controllers/loginController");

router.post("/add", loginController.add_users);
router.post("/", passport.authenticate("local"), (req,res) => {
    res.send(req.user);
});
router.get("/success", loginController.login_success);
// router.get("/failed", loginController.login_failed);
// router.get("/logout", (req,res) => {
//     req.logOut();
//     res.redirect("/");
// });

// router.get("/", passport.authenticate("local"), (req,res) => {
//     res.json(req.user);
// });

// router.get("/redirect", passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/api/login/failed"
// }));


module.exports = router;