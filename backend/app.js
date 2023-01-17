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

app.post("/terms", (req, res) => {

  console.log('req.body is', req.body)
  const q =  "INSERT INTO terms (year, user_uuid, dayId, hourId, hour) VALUES ?"
  const bulkValues = req.body.map((values) => [
    values.year,
    values.user_uuid,
    values.dayId,
    values.hourId,
    values.hour,
  ]);

  console.log('req.body is', bulkValues)

  db.query(q, [bulkValues], (err, data) => {
      console.log('data is', data)
      console.log('error is', err)
      if(err) return res.json(err)
      return res.json(data)
  })
  
})

app.listen(8807, () => {
  console.log(`Backend works! Listening on 8807`);
}); 
>>>>>>> a5d7896 (Change get and post methods)
