const mysql = require('mysql2/promise');

const connectionPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_ID,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: 1000,
  connectTimeout: 600000,
});
connectionPool.getConnection((err, con) => {
  if (err) {
    console.log('Database connect failed');
  }
});

module.exports = connectionPool;
