//Import dotenv package - DON'T MOVE THIS - MUST BE ON THE VERY TOP
require("dotenv").config();

// Requiring necessary npm packages
const express = require("express");
// const session = require("express-session");
// const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// // Use sessions to keep track of our user"s login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Requiring routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-host-routes.js")(app);
// require("./routes/api-booking-routes.js")(app);

// Syncing our database and logging a message to the user upon success
//Make sure to take {force: true} out 
db.sequelize.sync({force: true}).then(() => {
// db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
		  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
	  });
});


// const express = require('express');
// const routes = require('./routes');
// const path = require('path');
// const app = express();
// require('./config/db')();

// const PORT = process.env.PORT || 5000;

// // parsing middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(routes);

// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
// }

// app.listen(PORT, () => {
//   console.log('app running on PORT: ' + PORT);
// });
