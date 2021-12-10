const express = require("express");
const { InsertEventType, SelectEventType } = require("../controller/EventType");

const router = express.Router();

router.route("/").post(InsertEventType);
router.route("/").get(SelectEventType);
module.exports = router;
