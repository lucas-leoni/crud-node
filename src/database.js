const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_DIALECT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

sequelize
  .sync()
  .then(() => console.log('Conectado ao banco de dados com sucesso!'))
  .catch((error) =>
    console.log('Não foi possível conectar ao banco de dados!\n', error)
  );

module.exports = sequelize;
