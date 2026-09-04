const db = require('../database/connection');

const frotaController = {
  listarTudo: async (req, res, next) => {
    try {
      const dados = await db('veiculos')
        // Ajustado: veiculos.id se relaciona com telemetria.veiculo_id
        .leftJoin('telemetria', 'veiculos.id', 'telemetria.veiculo_id')
        .select(
          'veiculos.id as veiculo_id',
          'veiculos.placa',
          'veiculos.modelo',
          'telemetria.velocidade',
          'telemetria.temperatura_motor'
        );

      res.status(200).json(dados);
    } catch (erro) {
      next(erro);
    }
  },

  cadastrarVeiculo: async (req, res, next) => {
    try {
      const { placa, montadora, modelo } = req.body;

      if (!placa || !montadora || !modelo) {
        return res.status(400).json({ 
          erro: "Campos 'placa', 'montadora' e 'modelo' são obrigatórios." 
        });
      }

      // Tratamento para evitar duplicidade de placa
      const veiculoExiste = await db('veiculos').where({ placa }).first();
      if (veiculoExiste) {
        return res.status(409).json({ erro: "Placa já cadastrada no sistema." });
      }

      const [id] = await db('veiculos').insert({ placa, montadora, modelo });
      res.status(201).json({ id, placa, montadora, modelo });
    } catch (erro) {
      next(erro);
    }
  }
};

module.exports = frotaController;
