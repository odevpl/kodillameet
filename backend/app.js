const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = require("./appIndex");

app.set("port", process.env.PORT || 8081);

app.listen(8081, () => {
  console.log(`Listening on 8081`);
});