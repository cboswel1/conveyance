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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

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