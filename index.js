const express = require("express");
const app = express();
// const { Sequelize } = require("Sequelize");
const mysql = require("mysql");
const cors = require("cors");
const { isEmpty } = require("lodash");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
// mysql://bf2dfd37cb3004:39eeabdb@us-cdbr-east-04.cleardb.com/heroku_9ace730553ea8cc?reconnect=true
// const sequelize = new Sequelize(
//   "heroku_3ee373ed9bd978b",
//   "b8b53739e00f0f",

//   "30eaf774"
// );

// try {
//   sequelize.authenticate();
//   console.log("Holbolt amjilttai.");
// } catch (error) {
//   console.error("holbolt amjiltgui", error);
// }

const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "bf2dfd37cb3004",
  host: "us-cdbr-east-04.cleardb.com",
  password: "39eeabdb",
  database: "heroku_9ace730553ea8cc",
});

app.post("/Login", (req, res) => {
  console.log("*************************************");
  const UserName = req.body.UserName;
  const Password = req.body.Password;
  db.query(
    "SELECT * FROM users WHERE userName = ? AND password = ?",
    [UserName, Password],
    (err, result) => {
      if (err) {
        console.log("Aldaatai BAindaa", err);
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

app.get("/FriendList", (req, res) => {
  console.log("*************************************");
  const UserFriendName = req.body.UserFriendName;
  db.query(
    "SELECT * FROM users WHERE UserFriendName = ? AND UserFriendType = ?",
    [UserFriendName, UserFriendType],
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
        } else {
          const returnResult = {
            status: "failed",
            response: "Найз Биш Байна.",
          };
          res.status(200).send(returnResult);
        }
      }
    }
  );
});

app.post("/createUser", (req, res) => {
  const userName = req.body.userName;
  const RegNumber = req.body.RegNumber;
  const lName = req.body.lName;
  const fName = req.body.fName;
  const eMail = req.body.eMail;
  const PhoneNumber = req.body.PhoneNumber;
  const Password = req.body.Password;

  db.query(
    "INSERT INTO users (RegNumber, lName, fName, eMail, PhoneNumber, Password, userName) VALUES (?,?,?,?,?,?,?)",
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

// app.post("/createTree", (req, res) => {
//   const fName = req.body.fName;
//   const lName = req.body.lName;
//   const Spouse = req.body.Spouse;
//   const DateofBorn = req.body.DateofBorn;
//   const ProfilePicture = req.body.ProfilePicture;
//   const DateOfDeath = req.body.DateOfDeath;
//   const Gender = req.body.Gender;

//   db.query(
//     "INSERT INTO users (DateOfDeath, lName, fName, ProfilePicture, DateofBorn, Spouse, Gender) VALUES (?,?,?,?,?,?,?)",
//     [Spouse, lName, fName, DateofBorn, ProfilePicture, DateOfDeath, Gender],
//     (err, result) => {
//       if (err) {
//         const returnResult = {
//           status: "failed",
//           response: err,
//         };
//         res.status(400).send(returnResult);
//       } else {
//         if (!isEmpty(result)) {
//           const returnResult = {
//             status: "success",
//             response: result,
//           };
//           res.status(200).send(returnResult);
//         }
//       }
//     }
//   );
// });

app.get("/seeTree", (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const date_of_birth = req.body.date_of_birth;
  const place_of_birth = req.body.place_of_birth;
  const other_individual_details = req.body.other_individual_details;
  const gender = req.body.Gender;
  const date_of_death = req.body.date_of_death;

  db.query(
    "SELECT * FROM individuals (date_of_birth, lName, fName, place_of_birth, other_individual_details, gender, date_of_death) VALUES (?,?,?,?,?,?,?)",
    [
      place_of_birth,
      lName,
      fName,
      date_of_birth,
      other_individual_details,
      date_of_birth,
      gender,
      date_of_death,
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

app.delete("/DeleteMember", (req, res) => {
  const userName = req.body.userName;
  db.query(
    "DELETE FROM USERS WHERE  userName = ?",
    [userName],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// app.delete()

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running ${PORT}`);
});
