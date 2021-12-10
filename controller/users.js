const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.CreateUser = async (req, res, next) => {
  const userName = req.body.userName;
  const RegNumber = req.body.RegNumber;
  const lName = req.body.lName;
  const fName = req.body.fName;
  const eMail = req.body.eMail;
  const PhoneNumber = req.body.PhoneNumber;
  const Password = req.body.Password;
  const place_of_birth = req.body.place_of_birth;
  const date_of_death = req.body.date_of_death;
  const date_of_birth = req.body.date_of_birth;
  const Gender_ID = req.body.Gender_ID;
  const Nationality_ID = req.body.Nationality_ID;
  const Person_Intro = req.body.Users_Intro;

  db.query(
    "INSERT INTO base_person (RegNumber, lName, fName, eMail, PhoneNumber, Password, userName, date_of_birth, date_of_death, place_of_birth, Person_Intro, Gender_ID, Nationality_ID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      RegNumber,
      lName,
      fName,
      eMail,
      PhoneNumber,
      Password,
      userName,
      date_of_birth,
      date_of_death,
      place_of_birth,
      Person_Intro,
      Gender_ID,
      Nationality_ID,
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
};
exports.SelectUser = async (req, res, next) => {
  const userName = req.body.userName;
  console.log("Helloooooo********************************");
  db.query(
    "SELECT lName, fName, PhoneNumber, date_of_birth, place_of_birth FROM base_person WHERE userName = ?",
    [userName],
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
};
exports.UpdateUser = async (req, res, next) => {
  db.query(
    "UPDATE SET base_person Password = ?, eMail = ?, PhoneNumber = ?, Users_Intro = ? WHERE id =?",
    [Password, eMail, PhoneNumber, Users_Intro],
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
};
