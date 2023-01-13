import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "blabladram4%6",
    database: "kodillameet"
});

app.get("/", (req, res) => {
    res.json("Hello, this is kodillameet backend")
});

app.get("/terms", (req, res) => {
    const q = "SELECT * FROM kodillameet.terms"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
});

app.listen(8801, () => {
    console.log("Connected to kodillameet backend!")
});
