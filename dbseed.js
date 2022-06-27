require("dotenv").config();
const mysql = require("mysql");
const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.DATABASE_PASSWORD,
});

module.exports = con;
