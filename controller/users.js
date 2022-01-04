const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.CreateUser = async (req, res, next) => {
  const RegNumber = req.body.RegNumber;
  const lName = req.body.lName;
  const fName = req.body.fName;
  const eMail = req.body.eMail;
  const PhoneNumber = req.body.PhoneNumber;
  const Password = req.body.Password;
  const userName = req.body.userName;
  const place_of_birth = req.body.place_of_birth;
  const date_of_death = req.body.date_of_death;
  const date_of_birth = req.body.date_of_birth;
  const Gender_ID = req.body.Gender_ID;
  const Person_Intro = req.body.Person_Intro;
  const Profile_Picture = req.body.Profile_Picture;
  const Marriage_Status = req.body.Marriage_Status;
  const Marriage_Date = req.body.Marriage_Date;
  const urgiin_ovog_ID = req.body.urgiin_ovog_ID;

  db.query(
    "INSERT INTO base_person (RegNumber, lName, fName, eMail, PhoneNumber, Password, userName, Person_Intro, Profile_Picture, Marriage_Status, Marriage_Date, date_of_birth, date_of_death, Gender_ID) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      RegNumber,
      lName,
      fName,
      eMail,
      PhoneNumber,
      Password,
      userName,
      Person_Intro,
      Profile_Picture,
      Marriage_Status,
      Marriage_Date,
      date_of_birth,
      date_of_death,
      Gender_ID,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
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
  console.log(`err`, Error);
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
  const Password = req.body.Password;
  const eMail = req.body.eMail;
  const PhoneNumber = req.body.PhoneNumber;
  const Users_Intro = req.body.Users_Intro;
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

exports.LoginUser = async (req, res, next) => {
  const userName = req.body.userName;
  const Password = req.body.Password;
  db.query(
    "Select * from base_person where userName = ? AND Password = ?",
    [userName, Password],
    (err, result) => {
      if (err) {
        console.log("Zaa bolkueenaaa!!!!!!!!!!!!!!!!!!!!!", err);
        const returnResult = {
          status: "failed",
          response: "nevtreh ner nuuts ug buruu bn",
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

exports.SelectBpName = async (req, res, next) => {
  const ID = req.params.ID;
  db.query("Select * from base_person where ID = ?", [ID], (err, result) => {
    if (err) {
      console.log("Zaa bolkueenaaa!!!!!!!!!!!!!!!!!!!!!", err);
      const returnResult = {
        status: "failed",
        response: "nevtreh ner nuuts ug buruu bn",
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
  });
};
