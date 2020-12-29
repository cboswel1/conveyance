const passport = require("passport");
const db = require("../models");

const LoginController = {

    add_users: async (req,res) => {
        const query = await db.users.create(req.body);
        try {
            res.json(query);
        } catch (error) {
            console.log(error);
        }
    },

    login_success: (req,res) => {
        if(req.user) {
            res.json({
                success: true,
                message: "User successfully authenticated",
                user: req.user,
                // cookies: req.cookies
            });
        }
    },

    login_failed: (req,res) => {
        res.status(401).json({
            success: false,
            message: "User failed authentication."
        });
    },
}

module.exports = LoginController;