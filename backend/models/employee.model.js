const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Employee = sequelize.define("Employee", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  department: {
    type: DataTypes.STRING,
    allowNull: false
  },

  isActive: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },

  isDeleted: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = Employee;