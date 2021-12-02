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

app.get("/SearchFamily", (req, res) => {
  const Name = req.body.Name;
  const Description = req.body.Description;
  const Created_Date = req.body.created_Date;
  db.query(
    "SELECT * FROM Family_Name (Name, Description, Created_Date) VALUES (?,?,?)",
    [Name, Description, Created_Date],
    (err, result) => {
      if (err) {
        console.log("Za Iim Ovog algaa bro");
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
