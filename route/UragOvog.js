const express = require("express");
const { CreateOvog, SelectOvog } = require("../controller/UragOvog");

const router = express.Router();

router.route("/").post(CreateOvog);
router.route("/").get(SelectOvog);
module.exports = router;
