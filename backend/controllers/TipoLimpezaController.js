import TipoLimpeza from "../models/TipoLimpeza.js";

async function listar(req, res) {
    const respostaBanco = await TipoLimpeza.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await TipoLimpeza.findByPk(id);
    res.json(respostaBanco);
}

async function inserir(req, res) {
    const respostaBanco = await TipoLimpeza.create(req.body);
    res.json(respostaBanco);
}

async function alterar(req, res) {
    const nome = req.body.nome;
    const valorHora = req.body.valorHora;

    const id = req.params.id;

    const respostaBanco = await TipoLimpeza.update(
        { nome, valorHora },
        { where: { id } }
    );

    res.json(respostaBanco);
}

async function excluir(req, res) {
    const id = req.params.id;

    const respostaBanco = await TipoLimpeza.destroy({ where: { id } });
    res.json(respostaBanco);
}

export default { listar, selecionar, inserir, alterar, excluir };