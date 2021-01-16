const { authJwt } = require("../middleware");
const controller = require("../controllers/volunteersController");

const API = "/api/volunteers";

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(API + "/bulk/create", authJwt.verifyToken, controller.bulk_volunteers);
    // app.get(API + "/bulk/create", controller.bulk_volunteers);
    app.get(API + "/", authJwt.verifyToken, controller.get_volunteers);
    // app.get(API + "/", controller.get_volunteers);
    // app.post(API + "/create", controller.post_volunteer);
    app.post(API + "/create", authJwt.verifyToken, controller.post_volunteer);
};
