/* Oryginalny backend

const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = require("./appIndex");

app.set("port", process.env.PORT || 8081);

app.listen(8081, () => {
  console.log(`Listening on 8081`);
});

*/

const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "blabladram4%6#",
  database: "meetapp"
}) 

<<<<<<< HEAD
app.set("port", process.env.PORT || 8080);

app.listen(8080, () => {
  console.log(`Listening on 8080`);
});
=======
app.use(express.json())
app.use(cors())

app.get("/", (req, res) =>{
  res.json("hello this is the backend")
})

app.get("/terms", (req, res) => {
  const q = "SELECT * FROM terms"
  db.query(q, (err,data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.listen(8081, () => {
  console.log(`Backend works! Listening on 8081`);
}); 
>>>>>>> a5d7896 (Change get and post methods)
