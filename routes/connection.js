var mysql = require("mysql");
var util = require("util");


var conn = mysql.createConnection({
  host: "your-host",
  user: "your-user",
  password: "your-password",
  database: "your-database",
  port: 3306
});

var exe = util.promisify(conn.query).bind(conn)

module.exports = exe ;