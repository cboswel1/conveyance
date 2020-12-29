//Import dotenv package - DON'T MOVE THIS - MUST BE ON THE VERY TOP
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const path = require('path');
const routes = require('./routes');
// const cors = require("cors");
// const isAuthenticated = require("./config/middleware/isAuthenticated");

const PORT = process.env.PORT || 5000;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true
//   })
// );

// const loginCheck = (req,res,next) => {
//   if(!req.user) {
//     res.status(401).json({
//       authenticated: false,
//       message: "User failed authentication."
//     });
//   } else {
//     next();
//   }
// }

// app.get("/", loginCheck, (req,res) => {
//   res.status(200).json({
//     authenticated: true,
//     message: "User successfully authenticated.",
//     user: req.user,
//     // cookies: req.cookies
//   });
// });

// Syncing our database and logging a message to the user upon success
//Make sure to take {force: true} out 
// db.sequelize.sync({force: true}).then(() => {
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
		  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT);
	  });
});

// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
// }

