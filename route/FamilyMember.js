const express = require("express");
const {
  AddFamMember,
  DeleteFamilyMember,
  selectPID,
} = require("../controller/FamilyMember");
const router = express.Router();

router.route("/").post(AddFamMember);
router.route("/:pID").get(selectPID);
router.route("/:bpid").delete(DeleteFamilyMember);
module.exports = router;
