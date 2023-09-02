module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "db_newsletter",
    "port": "3307",
    "host": "127.0.0.1",
    "dialect": "mysql",
    dialectModule: require("mysql2"),
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "db_newsletter",
    "host": "127.0.0.1",
    "dialect": "mysql",
    dialectModule: require("mysql2"),
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "db_newsletter",
    "host": "127.0.0.1",
    "dialect": "mysql",
    dialectModule: require("mysql2"),
  }
}
