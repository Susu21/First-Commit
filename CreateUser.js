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

app.post("/createUser", (req, res) => {
  const userName = req.body.userName;
  const RegNumber = req.body.RegNumber;
  const lName = req.body.lName;
  const fName = req.body.fName;
  const eMail = req.body.eMail;
  const PhoneNumber = req.body.PhoneNumber;
  const Password = req.body.Password;

  db.query(
    "INSERT INTO base_person (RegNumber, lName, fName, eMail, PhoneNumber, Password, userName) VALUES (?,?,?,?,?,?,?)",
    [RegNumber, lName, fName, eMail, PhoneNumber, Password, userName],
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
        }
      }
    }
  );
});
