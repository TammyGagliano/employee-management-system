const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "admin",
  // Your password
  password: "admin",
  database: "company"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;