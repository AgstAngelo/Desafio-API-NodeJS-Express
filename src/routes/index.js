const express = require('express');
const psicologoController = require('../controllers/psicologoController');
const pacienteController = require('../controllers/pacientesController');
const atendimentoController = require('../controllers/atendimentoController');

const routes = express.Router();

//Rotas psicologos
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.get("/psicologos/:id", psicologoController.psicologoPorId);
routes.post("/psicologos/novo", psicologoController.cadastrarPsicologo);
routes.put("/psicologos/atualizar/:id", psicologoController.atualizarPsicologo);
routes.delete("/psicologos/deletar/:id", psicologoController.deletarPsicologo);

//Rotas pacientes
routes.get("/pacientes", pacienteController.listarPacientes);
routes.get("/pacientes/:id", pacienteController.pacientePorId);
routes.post("/pacientes/novo", pacienteController.cadastrarPaciente);
routes.put("/pacientes/atualizar/:id", pacienteController.atualizarPaciente);
routes.delete("/pacientes/deletar/:id", pacienteController.deletarPaciente);

//Rotas atendimentos
routes.get("/atendimentos", atendimentoController.listaratendimentos);
routes.get("/atendimentos/:id", atendimentoController.atendimentoPorId);
routes.post("/atendimentos/novo", atendimentoController.cadastrarAtendimento);

module.exports = routes;