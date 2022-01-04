const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.InsertEvent = async (req, res, next) => {
  const Date = req.body.Date;
  const base_person_ID = req.body.base_person_ID;
  const event_type_ID = req.body.event_type_ID;
  const Name = req.body.Name;

  db.query(
    "INSERT INTO event_book (Name, Date, base_person_ID, event_type_ID) VALUES (?,?,?,?)",
    [Name, Date, base_person_ID, event_type_ID],
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
exports.SelectEvent = async (req, res, next) => {
  db.query(
    "SELECT event_type_ID, base_person_ID, Date, Name FROM event_book ",
    (err, result) => {
      if (err) {
        console.log("Zaa bolkueenaaa!!!!!!!!!!!!!!!!!!!!!", err);
        const returnResult = {
          status: "failed",
          response: "event selectlehed aldaa garlaa",
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
// result.forEach((el) => {
//   db.query(
//     "SELECT * FROM base_person where ID = ? ",
//     [el.base_person_ID],
//     (err, result) => {
//       if (err) {
//         console.log("person error", err);
//         const returnResult = {
//           status: "failed",
//           response:
//             "event oruulsan hunii medeelliig avahad aldaa garlaa",
//         };
//         res.send(returnResult);
//       } else {
//         console.log("person result", result);
//         if (!isEmpty(result)) {
//           const returnResult = {
//             status: "success",
//             response: { ...result, ...el },
//           };
//           res.send(returnResult);
//         }
//       }
//     }
//   );
// });
