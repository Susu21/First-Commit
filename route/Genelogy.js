const express = require("express");
const { SelectGenelogy, insertGenelogy } = require("../controller/Genelogy");

const router = express.Router();

router.route("/").post(insertGenelogy);
router.route("/:ID").get(SelectGenelogy);

module.exports = router;
