/**
 * Sets up config values
 */

const config = {
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
};

module.exports = config;