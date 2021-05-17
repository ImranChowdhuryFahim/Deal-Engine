const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const search = require("./routes/search");

const app = express();

app.use(cors());

app.use(search);

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
});

con.connect(function (err) {
  if (err) throw err;

  app.listen(process.env.PORT || 8000, () => {
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS deal_engine;")
    con.query("use deal_engine;")
  });
});

// if it fails to connect to mysql run these commands.
// mysql > ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
// mysql > FLUSH PRIVILEGES;
// probable reason permission issue
