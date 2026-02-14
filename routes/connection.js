var mysql = require("mysql");
var util = require("util");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "bx123456-xxx.services.clever-cloud.com", // correct host
  user: "u123456",
  password: "xxxxxxxx",
  database: "b123456",
  port: 3306,
  ssl: {
    rejectUnauthorized: false
  }
});

var exe = util.promisify(pool.query).bind(pool);

module.exports = exe;
