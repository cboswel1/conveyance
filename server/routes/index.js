const router = require('express').Router();
const todos = require('./todo.routes');
const login = require("./loginRoutes");
const twilio = require("./twilioRoutes");
const volunteers = require("./volunteerRoutes");

// /api/todo
router.use('/api/todo', todos);
router.use("/api/login", login);
router.use("/api/twilio", twilio);
router.use("/api/volunteers", volunteers);

module.exports = router;