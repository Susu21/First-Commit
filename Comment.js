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

app.post("/Comment", (req, res) => {
  console.log("*************************************");
  const description = req.body.description;
  const created_date = req.body.created_date;
  const updated_date = req.body.updated_date;
  db.query(
    "insert into Comment (description, created_date, updated_date)",
    [description, created_date, updated_date],
    (err, result) => {
      if (err) {
        console.log("", err);
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
