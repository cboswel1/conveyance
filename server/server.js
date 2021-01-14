//Import dotenv package - DON'T MOVE THIS - MUST BE ON THE VERY TOP
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require('path');
const routes = require('./routes');
const ngrok = require('ngrok');
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
require('./routes/twilioRoutes')(app);
require('./routes/volunteerRoutes')(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
}

// db.sequelize.sync({force: true}).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    // initial();
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT);
  });
});

// ngrok.connect({
//   proto : 'http',
//   addr : PORT,
//   // auth : `${process.env.NGROK_USER}:${process.env.NGROK_PASSWORD}`
// }, (err, url) => {
//   if (err) {
//       console.error('Error while connecting Ngrok',err);
//       return new Error('Ngrok Failed');
//   } else {
//       console.log('Tunnel Created -> ', url);
//       console.log('Tunnel Inspector ->  http://127.0.0.1:4040');
//   }
// });

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