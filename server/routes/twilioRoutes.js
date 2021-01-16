const { authJwt } = require("../middleware");
const controller = require("../controllers/twilioController");

const API = "/api/twilio";

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    
    app.post(API + "/send", authJwt.verifyToken, controller.send);
    // app.post(API + "/send", controller.send);
    app.get(API + "/bulk/sms", authJwt.verifyToken, controller.bulk_sms);
    // app.get(API + "/bulk/sms", controller.bulk_sms);
    // app.get(API + "/bulk/campaigns", controller.bulk_campaigns);
    app.get(API + "/bulk/campaigns", authJwt.verifyToken, controller.bulk_campaigns);
    app.post(API + "/status/:volunteerId/:campaignId", authJwt.verifyToken, controller.update_status);
    // app.post(API + "/status/:volunteerId/:campaignId", controller.update_status);
    app.get(API + "/campaigns", authJwt.verifyToken, controller.get_campaigns);
    app.get(API + "/campaign/stats", authJwt.verifyToken, controller.get_stats);
    // app.get(API + "/campaign/stats", controller.get_stats);
};