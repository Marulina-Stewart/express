const path = require("path");
const checktiming = (req, res, next) => {
  let now = new Date();
  let day = now.getDay();
  console.log(day);
  let hour = now.getHours();
  console.log(hour);
  if (hour > 17 || hour < 9 || day === 0 || day === 6) {
    var parentDir = path.normalize(__dirname + "/..");
    res.sendFile(path.join(parentDir + "/Public/happy.html"));
    console.log("dir", parentDir + "/Public/happy.html");
  } else next();
  console.log(path.join(__dirname + "/Public/happy.html"));
};

module.exports = checktiming;
