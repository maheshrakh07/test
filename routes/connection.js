var mysql = require("mysql");
var util = require("util");


var conn = mysql.createConnection({
  host: "bx123.clever-cloud.com",
  user: "u123456",
  password: "xxxxxxxx",
  database: "b123456",
  port: 3306
});

conn.connect(function(err) {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Database connected successfully");
  }
});

var exe = util.promisify(conn.query).bind(conn)

module.exports = exe ;