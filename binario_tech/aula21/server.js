require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3029;

app.use(express.json());

app.get('/api/v1/versao', (req, res) => {
  res.json({
    aplicacao: "API Binario Tech - CI/CD Pipeline",
    versao: "1.0.3",
    ambiente: "Servidor de Homologacao Local",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`[Binario Tech] Aplicacao CI/CD ativa na porta ${PORT}`);
});

