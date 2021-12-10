const express = require("express");
const { Genelogy, SelectGenelogy } = require("../controller/Genelogy");

const router = express.Router();

router.route("/").post(Genelogy);
router.route("/").get(SelectGenelogy);

module.exports = router;
