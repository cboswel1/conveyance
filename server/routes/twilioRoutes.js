const router = require("express").Router();
const twilioController = require("../controllers/twilioController");

router.post("/send", twilioController.send);
router.get("/bulk/create", twilioController.bulk_create);
router.post("/status/:id", twilioController.upsert_status);
router.get("/campaigns", twilioController.get_campaigns);

module.exports = router;
