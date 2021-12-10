const express = require("express");
const {
  SelectFriendRequest,
  SendFriendRequest,
} = require("../controller/FriendRequest");

const router = express.Router();

router.route("/").post(SendFriendRequest);
router.route("/").get(SelectFriendRequest);

module.exports = router;
