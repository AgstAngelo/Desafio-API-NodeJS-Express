const Psicologos = require('../models/Psicologos');
const Pacientes = require('../models/Pacientes');
const Atendimentos = require('../models/Atendimentos');

const atendimentoController = {
  totalDePacientes: async (req, res) => {
    try {
      const total_pacientes = await Pacientes.count();
      
      res.status(200).json(total_pacientes);
      
    } catch (error) {
      console.log(error);  
    }
  },

  totalDeAtendimentos: async (req, res) => {
    try {

      const total_atendimentos = await Atendimentos.count();
  
      res.status(200).json(total_atendimentos);
      
    } catch (error) {
      console.log(error);  
    }
  },

  totalDePsicologos: async (req, res) => {
    try {
      const total_psicologos = await Psicologos.count();
  
      res.status(200).json(total_psicologos);
    
    } catch (error) {
      console.log(error);
    }
  },

  mediaDeAtendimentos: async(req, res) => {
    try {
      
    
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = atendimentoController;