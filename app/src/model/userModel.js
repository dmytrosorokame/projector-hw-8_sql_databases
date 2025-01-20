const { DataTypes } = require("@sequelize/core");

const { sequelize } = require("../db/index");

const UserModel = sequelize.define("user", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = {
  UserModel,
};
