// Import packages and modules 

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

//Set up passport Local Stragey (use pasport LocalStrategy) and login with host's email and password 

passport.use(new LocalStrategy(
    //host sign in with an email rather than with a username
    {
        usernameField: "email"
    },
    ((email, password, done) => {
        //when a host click LOGIN button, this code runs
        db.Users.findOne({
            where: {
                email
            }
        }).then((user) => {
            //If there is no host in the database with given email
            if (!user) {
                return done(null, false, {message: "Incorrect email."});
            }
            //if there is matching email but no matching password in the database
            if (!user.validPassword(password)) {
                return done(null, false, {message: "Incorrect password."});
            } 
            //If find matching email and password, return the host to the route handler
            return done(null, user);
        });

    })
));

//Sequelize serialize and deserialize host in order to help keep authentication state across HTTP requests 
//Boiler plate needed to make it all work 
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});

//Export the configured passport 
module.exports = passport; 