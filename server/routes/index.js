const router = require('express').Router();
const login = require("./loginRoutes");
// const twilio = require("./twilioRoutes");
// const volunteers = require("./volunteerRoutes");

router.use("/api/login", login);
// router.use("/api/twilio", twilio);
// router.use("/api/volunteers", volunteers);

module.exports = router;