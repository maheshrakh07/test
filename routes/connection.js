var mysql = require("mysql");
var util = require("util");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "btipauflfbkrtdk3sisp-mysql.services.clever-cloud.com", // correct host
  user: "u8tszmrmmmgfti8k",
  password: "xxxxxxxx",
  database: "u8tszmrmmmgfti8k",
  port: 3306,
  ssl: {
    rejectUnauthorized: false
  }
});

var exe = util.promisify(pool.query).bind(pool);

module.exports = exe;
