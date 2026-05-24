import Agendamento from "../models/Agendamento.js";
import TipoLimpeza from "../models/TipoLimpeza.js";

async function listar(req, res) {
    const respostaBanco = await Agendamento.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await Agendamento.findByPk(id);
    res.json(respostaBanco);
}

async function inserir(req, res) {
    const nomeCliente = req.body.nomeCliente;
    const endereco = req.body.endereco;
    const dataInicio = req.body.dataInicio;
    const dataFim = req.body.dataFim;
    const TipoLimpezaId = req.body.TipoLimpezaId;

    const tipoLimpezaBanco = await TipoLimpeza.findByPk(TipoLimpezaId);

    if (!tipoLimpezaBanco) {
        res.status(404).send('Tipo de limpeza não encontrado.');
        return;
    }

    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);

    const diferencaMilissegundos = fim - inicio;
    const tempoTotal = diferencaMilissegundos / (1000 * 60 * 60);

    const valorFinal = tempoTotal * tipoLimpezaBanco.valorHora;

    const respostaBanco = await Agendamento.create({
        nomeCliente,
        endereco,
        dataInicio,
        dataFim,
        tempoTotal,
        valorFinal,
        TipoLimpezaId
    });

    res.json(respostaBanco);
}

async function alterar(req, res) {
    const nomeCliente = req.body.nomeCliente;
    const endereco = req.body.endereco;
    const dataInicio = req.body.dataInicio;
    const dataFim = req.body.dataFim;
    const TipoLimpezaId = req.body.TipoLimpezaId;

    const id = req.params.id;

    const tipoLimpezaBanco = await TipoLimpeza.findByPk(TipoLimpezaId);

    if (!tipoLimpezaBanco) {
        res.status(404).send('Tipo de limpeza não encontrado.');
        return;
    }

    const inicio = new Date(dataInicio);
    const fim = new Date(dataFim);

    const diferencaMilissegundos = fim - inicio;
    const tempoTotal = diferencaMilissegundos / (1000 * 60 * 60);

    const valorFinal = tempoTotal * tipoLimpezaBanco.valorHora;

    const respostaBanco = await Agendamento.update(
        {
            nomeCliente,
            endereco,
            dataInicio,
            dataFim,
            tempoTotal,
            valorFinal,
            TipoLimpezaId
        },
        { where: { id } }
    );

    res.json(respostaBanco);
}

async function excluir(req, res) {
    const id = req.params.id;
    const respostaBanco = await Agendamento.destroy({ where: { id } });
    res.json(respostaBanco);
}

export default { listar, selecionar, inserir, alterar, excluir };