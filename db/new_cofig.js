const {
  DB_PASSWORD,
  DB_USER,
  DB_DATABASE,
  DB_HOST,
} = require("../config.json");

/**
 * Sets up config values
 */

const config = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
};

module.exports = config;
