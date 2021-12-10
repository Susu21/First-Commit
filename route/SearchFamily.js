const express = require("express");
const {
  SearchFamily,
  getFamily,
  DeleteFamily,
  insertFamily,
} = require("../controller/SearchFamily");

const router = express.Router();

router.route("/").get(SearchFamily);
router.route("/:ID").get(getFamily);
router.route("/").delete(DeleteFamily);
router.route("/").post(insertFamily);

module.exports = router;
