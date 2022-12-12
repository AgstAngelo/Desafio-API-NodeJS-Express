const Psicologos = require('../models/Psicologos');

const psicologoController = {
  listarPsicologos: (req, res) => {
    res.json(
      [
        {nome: "Augusto", email: "agstpalasios@gmail.com", apresentacao: "sou eu mesmo."},
        {nome: "João", email: "joao@gmail.com", apresentacao: "não sou eu."}
      ]
    )
  },

  psicologoPorId: (req, res) => {
    res.json("aqui recuperamos um psicologo");
  },

  cadastrarPsicologo: (req, res) => {
    res.json("aqui cadastramos o psicologo");
  },

  atualizarPsicologo: (req, res) => {
    res.json("aqui atualizamos o psicologo");
  },

  deletarPsicologo: (req, res) => {
    res.json("aqui deletamos o psicologo");
  }
}

module.exports = psicologoController;