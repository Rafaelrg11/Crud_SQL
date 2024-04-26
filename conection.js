// import mysql from "mysql2/promise";

const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  database: "api_node",
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
});

// export { connection };
module.exports = connection


