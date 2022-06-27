const express = require("express");
const router = express.Router();
const conn = require("../dbseed");

//inserting users to RDS
router.post("/", (req, res) => {
  if (req.query.username && req.query.email && req.query.age) {
    console.log("Request received");
    conn.connect(function (err) {
      conn.query(
        `INSERT INTO main.users (username, email, age) VALUES ('${req.query.username}', '${req.query.email}', '${req.query.age}')`,
        function (err, result, fields) {
          if (err) res.send(err);
          if (result)
            res.send({
              username: req.query.username,
              email: req.query.email,
              age: req.query.age,
            });
          if (fields) console.log(fields);
        }
      );
    });
  } else {
    console.log("Missing a parameter");
  }
});

//getting data
router.get("/users", (req, res) => {
  conn.connect(function (err) {
    conn.query(`SELECT * FROM main.users`, function (err, result, fields) {
      if (err) res.send(err);
      if (result) res.send(result);
    });
  });
});

module.exports = router;
