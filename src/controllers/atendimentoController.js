const Atendimentos = require('../models/Atendimentos');

const atendimentoController = {
  listaratendimentos: async (req, res) => {
    try {
      const listarAtendimentos = await Atendimentos.findAll();
      
      res.json(listarAtendimentos);
      
    } catch (error) {
      console.log(error);  
    }
  },

  atendimentoPorId: async (req, res) => {
    try {
      const { id } = req.params;

      const atendimento = await Atendimentos.findByPk(id);
  
      res.json(atendimento);
      
    } catch (error) {
      console.log(error);  
    }
  },

  cadastrarAtendimento: async (req, res) => {
    try {
      const { token, paciente, data_atendimento, observacao } = req.body;
      
      //recuperar o id do psicologo com o token

      const novoAtendimento = await Atendimentos.create({
      paciente,
      psicologo,
      data_atendimento,
      observacao
     });

     res.json(novoAtendimento);
    
    } catch (error) {
      console.log(error);
    }
  },
}

module.exports = atendimentoController;