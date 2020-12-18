const db = require("../models");

const LoginController = {

    add_users: async (req,res) => {
        const query = await db.users.create(req.body);
        try {
            res.json(query);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = LoginController;