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
  database: "family",
});

// const db = mysql.createConnection({
//   user: "root",
//   host: "127.0.0.1",
//   password: "Mongolia9939",
//   database: "family",
// });

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

// app.delete()

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running ${PORT}`);
});
