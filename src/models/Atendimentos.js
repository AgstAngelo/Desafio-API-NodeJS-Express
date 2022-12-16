const db = require('../database/index');
const { DataTypes } = require('sequelize');

const Pacientes = require('./Pacientes');
const Psicologos = require('./Psicologos');

const Atendimentos = db.define("Atendimentos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    paciente: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: 'id'
      }
    },
    psicologo: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: 'id'
      }
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