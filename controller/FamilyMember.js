const { isEmpty } = require("lodash");
const db = require("../LocalHost");

exports.AddFamMember = async (req, res, next) => {
  const ID = req.body.ID;
  const personID = req.body.personID;
  const familyID = req.body.personID;

  db.query(
    "INSERT INTO familymember ( ID, personID, familyID) VALUES (?,?,?)",
    [ID, personID, familyID],
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
exports.SelectFamilyMember = async (req, res, next) => {
  const ID = req.body.ID;
  // const family_ID = req.body.family_ID;
  db.query(
    "SELECT familyId, personId FROM familymember WHERE ID = ?",
    [ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
};
