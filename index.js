const express = require("express");
const db = require("./models");
const app = express();

const port = 3000;
db.sequelize
  .sync()
  .then((req) => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
