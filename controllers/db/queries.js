const { Pool } = require("pg");
require('dotenv').config();

module.exports = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASSWORD,
  port: process.env.PORT
});
