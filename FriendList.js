const express = require("express");
const app = express();
// const { Sequelize } = require("Sequelize");
const mysql = require("mysql");
const cors = require("cors");
const { isEmpty } = require("lodash");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.get("/FriendList", (req, res) => {
  console.log("*************************************");
  const UserFriendName = req.body.UserFriendName;
  db.query(
    "SELECT * FROM users WHERE UserFriendName = ? AND UserFriendType = ?",
    [UserFriendName, UserFriendType],
    (err, result) => {
      if (err) {
        const returnResult = {
          status: "failed",
          response: err,
        };
        res.status(400).send(returnResult);
      } else {
        if (!isEmpty(result)) {
          const returnResult = {
            status: "success",
            response: result,
          };
          res.status(200).send(returnResult);
        } else {
          const returnResult = {
            status: "failed",
            response: "Найз Биш Байна.",
          };
          res.status(200).send(returnResult);
        }
      }
    }
  );
});
