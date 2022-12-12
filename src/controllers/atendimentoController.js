const atendimentoController = {
  listaratendimentos: async (req, res) => {
    await res.json(
      [
        {nome: "Augusto", email: "agstpalasios@gmail.com", apresentacao: "sou eu mesmo."},
        {nome: "João", email: "joao@gmail.com", apresentacao: "não sou eu."}
      ]
    )
  },

  atendimentoPorId: (req, res) => {
    res.json("aqui recuperamos um atendimento");
  },

  cadastrarAtendimento: (req, res) => {
    res.json("aqui cadastramos o atendimento");
  },
}

module.exports = atendimentoController;