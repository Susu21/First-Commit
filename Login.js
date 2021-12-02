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

app.post("/Login", (req, res) => {
  console.log("*************************************");
  const UserName = req.body.UserName;
  const Password = req.body.Password;
  db.query(
    "SELECT * FROM base_person WHERE userName = ? AND password = ?",
    [UserName, Password],
    (err, result) => {
      if (err) {
        console.log("Aldaa nuuts ug buruu", err);
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
            response: "Бүртгэлгүй Хэрэглэгч Байна.",
          };
          res.status(200).send(returnResult);
        }
      }
    }
  );
});
