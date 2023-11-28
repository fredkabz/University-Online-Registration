const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define("application_user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  names: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    // valdate: {
    //   isEmail: true,
    // },
    set(value) {
      this.setValue("email", value.toLowerCase());
    },
  },
  phone_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
  hashedPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    // validate: {
    //   is: /^[0-9a-f]{64}$/i,
    // },
  },
  verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaltValue: false,
  },
});

module.exports = User;
