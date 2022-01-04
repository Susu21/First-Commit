const express = require("express");
const db = require("./LocalHost");
const cors = require("cors");
const { isEmpty } = require("lodash");
const userRoute = require("./route/users");
const userFriendRoute = require("./route/UserFriend");
const uragOvogRoute = require("./route/UragOvog");
const familyMemberRoute = require("./route/FamilyMember");
const genelogyRoute = require("./route/Genelogy");
const workExperienceRoute = require("./route/WorkExperience");
const postsRoute = require("./route/Posts");
const basePersonEducation = require("./route/BasePersonEdu");
const commentRoute = require("./route/Comment");
const searchFamilyRoute = require("./route/SearchFamily");
const universityRoute = require("./route/University");
const eventBookRoute = require("./route/EventBook");
const eventTypeRoute = require("./route/EventType");
const nationalityRoute = require("./route/Nationality");
const friendRequestRoute = require("./route/FriendRequest");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//   user: "bf2dfd37cb3004",
//   host: "us-cdbr-east-04.cleardb.com",
//   password: "39eeabdb",
//   database: "family",
// });

// const db = mysql.createConnection({
//   user: "root",
//   host: "127.0.0.1",
//   password: "Mongolia9939",
//   database: "diplomatest",
// });
app.use("/users", userRoute);
app.use("/UragOvog", uragOvogRoute);
app.use("/FamilyMember", familyMemberRoute);
app.use("/Genelogy", genelogyRoute);
app.use("/Posts", postsRoute);
app.use("/BasePersonEdu", basePersonEducation);
app.use("/Comment", commentRoute);
app.use("/WorkExperience", workExperienceRoute);
app.use("/SearchFamily", searchFamilyRoute);
app.use("/University", universityRoute);
app.use("/UserFriend", userFriendRoute);
app.use("/EventBook", eventBookRoute);
app.use("/EventType", eventTypeRoute);
app.use("/Nationality", nationalityRoute);
app.use("/FriendRequest", friendRequestRoute);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

// Error.stackTraceLimit = Infinity;
