const db = require('../database/index');
const { DataTypes } = require('sequelize');

const Atendimentos = db.define("Atendimentos", 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    paciente_id: {
      type: DataTypes.INTEGER
    },
    data_atendimento: {
      type: DataTypes.DATE
    },
    observacao: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  {
    tableName: "atendimentos"
  }
);

module.exports = Atendimentos;