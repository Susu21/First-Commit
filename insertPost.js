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

app.post("/insertPost", (req, res) => {
  const updated_date = req.body.updated_date;
  const created_date = req.body.created_date;
  const description = req.body.description;

  db.query(
    "INSERT INTO Posts (updated_date, created_date, description) VALUES (?,?,?)",
    [updated_date, created_date, description],
    (err, result) => {
      if (err) {
        console.log("Zaa bolkueenaaa!!!!!!!!!!!!!!!!!!!!!", err);
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
