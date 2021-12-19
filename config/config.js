require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: 's109504',
    database: 'final',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: "root",
    password: 's109504',
    database: "final_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  },
};