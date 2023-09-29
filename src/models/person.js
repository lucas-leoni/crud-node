const DataTypes = require('sequelize');
const sequelize = require('../database.js');

const Pessoa = sequelize.define(
  'pessoas',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Pessoa;
