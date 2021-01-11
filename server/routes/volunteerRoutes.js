const router = require("express").Router();
const volunteersController = require("../controllers/volunteersController");

router.get("/bulk/create", volunteersController.bulk_volunteers);

module.exports = router;
