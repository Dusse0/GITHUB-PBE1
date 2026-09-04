const express = require('express');
const cors = require('cors');
const LoggerMiddleware = require('./logger');
const authMiddleware = require('./auth');
const motoristasRouter = require('./motoristas');
const manutencoesRouter = require('../routes/manutencoes');

const app = express();
const PORT = 3000;

// Middlewares Globais

app.use(cors());
app.use(express.json());
app.use(LoggerMiddleware);

// Rota Publica

app.get('/api/v1/health', (req, res) => {
    res.status(200).json({
        status: "ONLINE",
        aplicacao: "Binario Tech API v2"
    });
});

// Rotas Protegidas por Autenticacao

app.use('/api/v1/motoristas', authMiddleware, motoristasRouter);

app.use('/api/v1/manutencoes', authMiddleware, manutencoesRouter);

// Middleware Global de Tratamento de Erros 404 (Rota nao encontrada)

app.use((req, res) => {
    res.status(404).json({
        erro: "Endpoint nao encontrado no servidor Binario Tech."
    });
});

app.listen(PORT, () => {
    console.log(`[Binario Tech] Servidor de Middlewares ativo na porta ${PORT}`);
});

