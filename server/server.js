//Import dotenv package - DON'T MOVE THIS - MUST BE ON THE VERY TOP
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require('path');
const routes = require('./routes');
const PORT = process.env.PORT || 5000;
const db = require("./models");

var corsOptions = {
  origin: "http://localhost:5001"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  // }
  
  // db.sequelize.sync({force: true}).then(() => {
  db.sequelize.sync().then(() => {
      app.listen(PORT, () => {
        initial();
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT);
      });
  });

  const Role = db.role;

  function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

///////////***OLD DELETE MOST LIKELY***/////////////////

// const session = require("express-session");
// const passport = require("./config/passport");
// const isAuthenticated = require("./config/middleware/isAuthenticated");

// app.use(express.urlencoded({ extended: true }));
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.json());

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

