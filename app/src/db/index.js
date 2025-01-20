const { Sequelize } = require("@sequelize/core");
const { MySqlDialect } = require("@sequelize/mysql");

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: "app",
  user: "root",
  password: "root",
  host: "db",
  port: 3306,
});

module.exports = {
  sequelize,
};
