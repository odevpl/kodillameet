const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = require("./appIndex");

app.set("port", process.env.PORT || 8082);

app.listen(8082, () => {
  console.log(`Listening on 8081`);
});
