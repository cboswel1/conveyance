const router = require('express').Router();
const todos = require('./todo.routes');
const login = require("./loginRoutes");

// /api/todo
router.use('/api/todo', todos);
router.use("/api/login", login);

module.exports = router;