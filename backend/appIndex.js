const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const path = require("path");

const app = express();

app.use(fileUpload({ createParentPath: true }));
app.use(cors());
app.use("/avatars", express.static(path.join(__dirname, "/uploads/avatars")));

app.use(
  bodyParser.json({ type: "application/x-www-form-urlencoded", limit: "50mb" })
);
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use("/", routes);

module.exports = app;