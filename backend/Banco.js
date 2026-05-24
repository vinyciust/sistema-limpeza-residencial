// src/models/banco.js   ← continua na mesma pasta dos models
import 'dotenv/config';
import { Sequelize } from 'sequelize';

const banco = new Sequelize(
  process.env.DB_NAME,     // postgres
  process.env.DB_USER,     // postgres
  process.env.DB_PASSWORD, // postgres
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,        // mude para console.log p/ ver SQL no console
  }
);

// Teste de conexão
try {
  await banco.authenticate();
  console.log('✅  Sequelize conectado ao PostgreSQL');
} catch (err) {
  console.error('❌  Erro na conexão Sequelize:', err);
}

export default banco;      // agora banco.define() existe!
