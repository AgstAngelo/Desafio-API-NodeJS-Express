const db = require('../database/index');
const { DataTypes } = require('sequelize');

const Pacientes = db.define("Pacientes", 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    idade: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "pacientes"
  }
);

module.exports = Pacientes;