const express = require('express');
const router = express.Router();
const telemetriaController = require('../controllers/telemetriaController');
const db = require('../database/connection');

// POST /api/v1/telemetria/veiculos-teste
router.post('/veiculos-teste', async (req, res) => {
    try {
        const { placa, montadora, modelo } = req.body;
        const [id] = await db('veiculos').insert({ placa, montadora, modelo });
        res.status(201).json({ id, placa, montadora, modelo });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao cadastrar veículo de teste." });
    }
});

// POST /api/v1/telemetria
router.post('/', telemetriaController.registrarLeitura);

// GET /api/v1/telemetria/relatorio
router.get('/relatorio', telemetriaController.listarRelatorioCompleto);

// GET /api/v1/telemetria/veiculo/:id
router.get('/veiculo/:id', telemetriaController.buscarPorVeiculo);

module.exports = router;
