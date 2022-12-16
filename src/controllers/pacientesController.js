const { Pacientes } = require('../models');

const pacienteController = {
  listarPacientes: async (req, res) => {
    try {
      const listarPacientes = await Pacientes.findAll();
      
      res.status(200).json(listarPacientes);
      
    } catch (error) {
      console.log(error);  
    }
  },

  pacientePorId: async (req, res) => {
    try {
      const { id } = req.params;

      const paciente = await Pacientes.findByPk(id);
  
      res.status(200).json(paciente);
      
    } catch (error) {
      console.log(error);  
    }
  },

  cadastrarPaciente: async (req, res) => {
    try {
      const { nome, email, idade } = req.body;

      const novoPaciente = await Pacientes.create({
      nome,
      email,
      idade
     });

     res.status(201).json(novoPaciente);
    
    } catch (error) {
      console.log(error);
    }
  },

  atualizarPaciente: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, idade } = req.body;
  
      const paciente = await Pacientes.findByPk(id);

      paciente.set({
        nome,
        email,
        idade
      });

      await paciente.save();

      res.status(200).json(paciente);

    } catch (error) {
      console.log(error);
    }
  },

  deletarPaciente: async (req, res) => {
    try {
      const { id } = req.params;

      const paciente = await Pacientes.findByPk(id);

      await paciente.destroy();

      res.status(204);

    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = pacienteController;