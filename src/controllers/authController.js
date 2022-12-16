const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcrypt");

const { Psicologos }  = require("../models/Psicologos");

const AuthController = {
    async login(req, res) {
        const { email, senha } = req.body;
        const psicologo = await Psicologos.findOne({
            where: {
                email: email,
            },
        });

        if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(400).json("E-mail ou senha invalido, verifique e tente novamente.");
        }
        
        const token = jwt.sign({
            id: psicologo.id,
            email: psicologo.email,
            nome: psicologo.nome
        },
            secret.key);

        return res.json(token);
    },
}
module.exports = AuthController;