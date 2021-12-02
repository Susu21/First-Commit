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

app.put("/update", (req, res) => {
  const Password = req.body.Password;
  const eMail = req.body.eMail;
  const PhoneNumber = req.body.PhoneNumber;
  const Users_Intro = req.body.Users_Intro;
  db.query(
    "UPDATE SET users Password = ?, eMail = ?, PhoneNumber = ?, Users_Intro = ? WHERE id =?",
    [Password, eMail, PhoneNumber, Users_Intro],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
