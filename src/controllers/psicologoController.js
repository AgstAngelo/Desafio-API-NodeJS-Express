const Psicologos = require('../models/Psicologos');
const bcrypt = require('bcrypt');

const psicologoController = {

  listarPsicologos: async (req, res) => {
    try {
      const listaPsicologos = await Psicologos.findAll();
      
      res.status(200).json(listaPsicologos);
      
    } catch (error) {
      console.log(error);  
    }
  },

  psicologoPorId: async (req, res) => {
    try {
      const { id } = req.params;

      const psicologo = await Psicologos.findByPk(id);
      delete psicologo.senha;
  
      res.status(200).json(psicologo);
      
    } catch (error) {
      console.log(error);  
    }
  },

  cadastrarPsicologo: async (req, res) => {
    try {
      const { nome, email, senha, apresentacao } = req.body;
      
      const senhaHash = await bcrypt.hash(senha, 10);

      const novoPsicologo = await Psicologos.create({
      nome,
      email,
      senha: senhaHash,
      apresentacao
     });
     
     res.status(201).json(novoPsicologo);
    
    } catch (error) {
      console.log(error);
    }
  },

  atualizarPsicologo: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, senha, apresentacao } = req.body;
  
      const psicologo = await Psicologos.findByPk(id);
      const novaSenha = await bcrypt.hash(senha, 10);

      psicologo.set({
        nome,
        email,
        senha: novaSenha,
        apresentacao
      });

      await psicologo.save();

      res.status(200).json(psicologo);

    } catch (error) {
      console.log(error);
    }
  },

  deletarPsicologo: async (req, res) => {
    try {
      const { id } = req.params;

      const psicologo = await Psicologos.findByPk(id);

      await psicologo.destroy();

      res.status(204);

    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = psicologoController;