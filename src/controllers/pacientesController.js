const pacienteController = {
  listarPacientes: (req, res) => {
    res.json(
      [
        {nome: "Augusto", email: "agstpalasios@gmail.com", apresentacao: "sou eu mesmo."},
        {nome: "João", email: "joao@gmail.com", apresentacao: "não sou eu."}
      ]
    )
  },

  pacientePorId: (req, res) => {
    res.json("aqui recuperamos um paciente");
  },

  cadastrarPaciente: (req, res) => {
    res.json("aqui cadastramos o paciente");
  },

  atualizarPaciente: (req, res) => {
    res.json("aqui atualizamos o paciente");
  },

  deletarPaciente: (req, res) => {
    res.json("aqui deletamos o paciente");
  }
}

module.exports = pacienteController;