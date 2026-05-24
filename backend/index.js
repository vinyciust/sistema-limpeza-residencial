import express from 'express';
import banco from './Banco.js';
import TipoLimpezaController from "./controllers/TipoLimpezaController.js";

import TipoLimpeza from './models/TipoLimpeza.js';
import Agendamento from './models/Agendamento.js';


try {
    await banco.authenticate();
    console.log('Conexão com o banco de dados realizada com sucesso.');
} catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
}

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
app.get('/teste', (req, res) => {
    res.send('Teste ok.');
});

//rotas tiplimpeza
app.get("/tiplimpeza", TipoLimpezaController.listar);
app.get("/tiplimpeza/:id", TipoLimpezaController.selecionar);
app.post("/tiplimpeza", TipoLimpezaController.inserir);
app.put("/tiplimpeza/:id", TipoLimpezaController.alterar);
app.delete("/tiplimpeza/:id", TipoLimpezaController.excluir);


app.listen(4000, () => {
  console.log('Servidor rodando na porta 4000');
});