
module.exports = {
  "development": {
    "storage": "states.db",
    "dialect": "sqlite"
  },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  "production": {
    "username": "niman",
    "password": process.env.DB_PASSWORD,
    "database": "fifty-states-visited-database",
    "host": "fifty-state-database-server.database.windows.net",
    "dialect": "mssql"
  }
}

