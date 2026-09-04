const express = require('express');
const router = express.Router();

let manutencoes = [
    {
        id: 1,
        caminhao: "Caminhao 01",
        descricao: "Troca de oleo e filtros",
        valor: 850,
        status: "Pendente"
    },
    {
        id: 2,
        caminhao: "Caminhao 02",
        descricao: "Troca de pastilhas de freio",
        valor: 1200,
        status: "Aprovado"
    }
];

// GET /api/v1/manutencoes
// Lista todas as manutencoes

router.get('/', (req, res) => {
    res.status(200).json(manutencoes);
});

// POST /api/v1/manutencoes
// Cadastra uma nova manutencao

router.post('/', (req, res) => {
    const { caminhao, descricao, valor, status } = req.body;

    if (!caminhao || !descricao || !valor || !status) {
        return res.status(400).json({
            erro: "Campos 'caminhao', 'descricao', 'valor' e 'status' sao obrigatorios."
        });
    }

    const novaManutencao = {
        id: manutencoes.length + 1,
        caminhao,
        descricao,
        valor,
        status
    };

    manutencoes.push(novaManutencao);

    res.status(201).json(novaManutencao);
});

module.exports = router;
