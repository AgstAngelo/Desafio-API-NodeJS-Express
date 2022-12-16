const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");

const { Atendimentos, Pacientes } = require('../models');


const atendimentoController = {
  listaratendimentos: async (req, res) => {
    try {
      const listarAtendimentos = await Atendimentos.findAll();
      
      res.status(200).json(listarAtendimentos);
      
    } catch (error) {
      console.log(error);  
    }
  },

  atendimentoPorId: async (req, res) => {
    try {
      const { id } = req.params;

      const atendimento = await Atendimentos.findByPk(id);
  
      res.status(200).json(atendimento);
      
    } catch (error) {
      console.log(error);  
    }
  },

  cadastrarAtendimento: async (req, res) => {
    try {
      const { token, paciente, data_atendimento, observacao } = req.body;
      
      const decoded = jwt.verify(token, secret.key);
      const { dataValues } = await Pacientes.findByPk(paciente);

      if(decoded && dataValues){
        const novoAtendimento = await Atendimentos.create({
          paciente: dataValues.id,
          psicologo: decoded.id,
          data_atendimento,
          observacao
        });
        
        res.status(201).json(novoAtendimento);
      }
    
    } catch (error) {
      console.log(error);
    }
  },
}

module.exports = atendimentoController;