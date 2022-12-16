const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

const DB_NAME = "lavie_db";
const DB_USER = "root";
const DB_PASS = "mysql";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.log(error);
}

async function hasConnection(){
  try {
    await db.authenticate();
    console.log("Banco conectado.");
  } catch (error) {
    console.log(error);
  }
}

Object.assign(db, {
  hasConnection
});

module.exports = db;