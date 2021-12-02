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

app.post("/insertNode", (req, res) => {
  const ProfilePicture = req.body.ProfilePicture;
  const lName = req.body.lName;
  const fName = req.body.fName;
  const DateOfBirth = req.body.DateOfBirth;
  const DateOfMarriage = req.body.DateOfMarriage;
  const DateOfDeath = req.body.DateOfDeath;
  const Gender = req.body.Gender;
  const Note = req.body.Note;
  const Spouse = req.body.Spouse;

  db.query(
    "INSERT INTO TreeNode (ProfilePicture, lName, fName, DateOfBirth, DateOfMarriage, DateOfDeath, Gender, Note, Spouse) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      ProfilePicture,
      lName,
      fName,
      DateOfBirth,
      DateOfMarriage,
      DateOfDeath,
      Gender,
      Note,
      Spouse,
    ],
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
