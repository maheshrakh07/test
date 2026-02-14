var mysql = require("mysql");
var util = require("util");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "bx123.clever-cloud.com",
  user: "u123456",
  password: "xxxxxxxx",
  database: "b123456",
  port: 3306,

  ssl: {
    rejectUnauthorized: false
  }
});

// test connection
pool.getConnection(function(err, connection) {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Database connected successfully");
    connection.release();
  }
});

var exe = util.promisify(pool.query).bind(pool);

module.exports = exe;
