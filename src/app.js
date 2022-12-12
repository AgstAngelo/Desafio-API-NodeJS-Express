const express = require('express');
const routes = require('./routes/index');
const db = require('./database/index');

const app = express();

db.hasConnection();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));