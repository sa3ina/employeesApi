const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
require("./config/db");
var bodyParser = require("body-parser");
const routerr = require("./routers/Router");
app.use(bodyParser.json());
app.use("/", routerr);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
