const Sequelize = require("sequelize");
const mysql = require("mysql");
const dotenv = require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const conn = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.DB_HOST,
  connectionLimit: 10,
  port: 3306,
});

//test connection
sequelize
  .authenticate()
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => {
    console.log("Unable to connect to database:", err);
  });

module.exports = { sequelize, conn };
