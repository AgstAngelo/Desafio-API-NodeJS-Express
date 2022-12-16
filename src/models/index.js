const Atendimentos = require('./Atendimentos');
const Pacientes = require('./Pacientes');
const Psicologos = require('./Psicologos');

Atendimentos.belongsTo(Pacientes, {foreignKey: "paciente"});
Atendimentos.belongsTo(Psicologos, {foreignKey: "psicologo"});

Pacientes.hasMany(Atendimentos, {foreignKey: "paciente"});
Psicologos.hasMany(Atendimentos, {foreignKey: "psicologo"});

module.exports = {
  Psicologos,
  Pacientes,
  Atendimentos
};