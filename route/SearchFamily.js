const express = require("express");
const {
  getFamily,
  DeleteFamily,
  insertFamily,
  getUrgiinOvog,
  getAllFamily,
} = require("../controller/SearchFamily");

const router = express.Router();

router.route("/").get(getAllFamily);
router.route("/:ID").get(getFamily);
router.route("/").delete(DeleteFamily);
router.route("/").post(insertFamily);
router.route("/").post(getUrgiinOvog);

module.exports = router;
