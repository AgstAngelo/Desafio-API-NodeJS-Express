const express = require('express');

//Controladores
const psicologoController = require('../controllers/psicologoController');
const pacienteController = require('../controllers/pacientesController');
const atendimentoController = require('../controllers/atendimentoController');
const dashboardController = require('../controllers/dashboardController');
const authController = require('../controllers/authController');

//Login e Middlewares
const authLoginValidation = require('../validations/auth/login');
const requestLog = require('../middlewares/requestLog');
const auth = require('../middlewares/auth');

const routes = express.Router();

//Rota para Login
routes.post('/login', authLoginValidation, authController.login);

//Rotas psicologos
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.get("/psicologos/:id", psicologoController.psicologoPorId);
routes.post("/psicologos", psicologoController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologo);
routes.delete("/psicologos/:id", psicologoController.deletarPsicologo);

//Rotas pacientes
routes.get("/pacientes", pacienteController.listarPacientes);
routes.get("/pacientes/:id", pacienteController.pacientePorId);
routes.post("/pacientes", pacienteController.cadastrarPaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", pacienteController.deletarPaciente);

//Rotas atendimentos
routes.get("/atendimentos", atendimentoController.listaratendimentos);
routes.get("/atendimentos/:id", atendimentoController.atendimentoPorId);
routes.post("/atendimentos", atendimentoController.cadastrarAtendimento);

//Rotas opcionais (dashboard)
routes.get("/dashboard/total_pacientes", dashboardController.totalDePacientes);
routes.get("/dashboard/total_atendimentos", dashboardController.totalDeAtendimentos);
routes.get("/dashboard/total_psicologos", dashboardController.totalDePsicologos);
routes.post("/dashboard/media_atendimentos", dashboardController.mediaDeAtendimentos);

module.exports = routes;