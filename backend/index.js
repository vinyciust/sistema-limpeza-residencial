import express from 'express';
import banco from './Banco.js';

import TipoLimpeza from './models/TipoLimpeza.js';
import Agendamento from './models/Agendamento.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API do Sistema de Limpeza Residencial funcionando!');
});

try {
  await banco.sync();
  console.log('Tabelas sincronizadas com sucesso.');
} catch (erro) {
  console.log('Erro ao sincronizar tabelas:', erro);
}

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});