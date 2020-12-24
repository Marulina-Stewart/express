const express = require("express");
const path = require("path");
const checktiming = require("./middlewares/checktiming");
const app = express();
const port = 3000;

app.use(checktiming);
app.use(express.json());

app.use(express.static(path.join(__dirname, "Public")));
console.log(path.join(__dirname, "Public"));

app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(
        "The server is running, " +
          "Please, open your browser at http://localhost:%s",
        port
      );
});
