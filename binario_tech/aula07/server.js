const express = require('express');
const cors = require('cors');

const scaniaRoutes = require('./src/routes/scaniaRoutes');
const mercedesRoutes = require('./src/routes/mercedesRoutes');

const app = express();
const PORT = 3029;

// Middlewares
app.use(cors());
app.use(express.json());

// Logger de Requisições
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} em ${req.url}]`);
    next();
});

// Agrupamento de rotas por montadora
app.use('/api/v1/telemetria/scania', scaniaRoutes);
app.use('/api/v1/telemetria/mercedes', mercedesRoutes);

// Rota 404
app.use((req, res) => {
    res.status(404).json({
        erro: "Modulo ou Rota de Telemetria nao encontrada"
    });
});

app.listen(PORT, () => {
    console.log(`[Binario Tech] Servidor Modularizao Ativo na Porta ${PORT}`);
});
