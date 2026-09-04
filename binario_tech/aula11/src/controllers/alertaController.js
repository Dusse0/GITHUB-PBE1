const Alerta = require('../models/Alerta');

const alertaController = {
  // Salvar novo documento
  criarAlerta: async (req, res) => {
    try {
      const { equipamentoId, nivelSeveridade, temperaturaMedia, tags, metadados } = req.body;

      const novoAlerta = await Alerta.create({
        equipamentoId,
        nivelSeveridade,
        temperaturaMedia,
        tags,
        metadados
      });

      res.status(201).json(novoAlerta);
    } catch (erro) {
      res.status(400).json({ erro: "Erro ao salvar alerta no MongoDB", detalhe: erro.message });
    }
  },

  // Listar todos os alertas
  listarAlertas: async (req, res) => {
    try {
      const alertas = await Alerta.find().sort({ registradoEm: -1 });
      res.status(200).json(alertas);
    } catch (erro) {
      res.status(500).json({ erro: "Erro ao consultar coleção no MongoDB" });
    }
  },

  // Buscar por nível de severidade (Exercício 1)
  buscarPorSeveridade: async (req, res) => {
    try {
      const { nivel } = req.params;
      const alertas = await Alerta.find({ nivelSeveridade: nivel.toUpperCase() }).sort({ registradoEm: -1 });
      res.status(200).json(alertas);
    } catch (erro) {
      res.status(500).json({ erro: "Erro ao filtrar alertas por severidade", detalhe: erro.message });
    }
  }
};

module.exports = alertaController;
