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

app.get("/seeTree", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const date_of_birth = req.body.date_of_birth;
  const place_of_birth = req.body.place_of_birth;
  const gender = req.body.Gender;
  const date_of_death = req.body.date_of_death;
  const notes = req.body.notes;
  const picture = req.body.picture;

  db.query(
    "SELECT * FROM base_person (date_of_birth, lName, fName, place_of_birth, notes, gender, date_of_death, picture) VALUES (?,?,?,?,?,?,?,?)",
    [
      place_of_birth,
      lName,
      fName,
      date_of_birth,
      gender,
      date_of_death,
      notes,
      picture,
    ],
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
