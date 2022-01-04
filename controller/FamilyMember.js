const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.AddFamMember = async (req, res, next) => {
  const personID = req.body.personId;
  const familyID = req.body.familyId;
  const Status = 0;

  db.query(
    "INSERT INTO familymember ( personID, familyID, Status) VALUES (?,?,?)",
    [personID, familyID, Status],
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

exports.DeleteFamilyMember = async (req, res, next) => {
  const bpid = req.params.bpid;

  db.query(
    "DELETE FROM familymember WHERE  personID = ?",
    [bpid],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};
exports.selectPID = async (req, res, next) => {
  const pID = req.params.pID;
  db.query(
    "select personId from familymember where familyId = ?",
    [pID],
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
