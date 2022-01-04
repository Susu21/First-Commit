const express = require("express");
const {
  CreateUser,
  SelectUser,
  UpdateUser,
  LoginUser,
  SelectBpName,
} = require("../controller/users");

const router = express.Router();
console.log("*************************dadada");
router.route("/").post(CreateUser);
// router.route("/").get(SelectUser);
router.route("/").post(UpdateUser);
router.route("/Login").post(LoginUser);
router.route("/:ID").get(SelectBpName);

module.exports = router;
