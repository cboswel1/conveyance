const router = require('express').Router();
const todos = require('./todo.routes');
const login = require("./loginRoutes");
const twilio = require("./twilioRoutes");

// /api/todo
router.use('/api/todo', todos);
router.use("/api/login", login);
// router.use("/api/twilio", twilio);

module.exports = router;