const express = require('express');
const cors = require('cors');
const loggerMiddleware = require('./middlewares/logger');
const authMiddleware = require('./middlewares/auth');
const motoristasRouter = require('./routes/motoristas');
const manutencoesRouter = require('./routes/manutencoes');

const app = express();
const PORT = 3029;

// Middlewares Globais
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// ROTA PÚBLICA
app.get('/api/v1/health', (req, res) => {
	res.status(200).json({ status: "ONLINE", aplicacao: "Binario Tech API v2" });
});

// ROTAS PROTEGIDAS POR AUTENTICACAO
app.use ('/api/v1/motoristas', authMiddleware, motoristasRouter);
app.use('/api/v1/manutencoes', authMiddleware, manutencoesRouter);

// MIDDLEWARE GLOBAL DE TRATAMENTO DE ERROS 404 (Rota nao encontrada)
app.use((req, res) => {
	res.status(404).json({ ERRO: "Endpoint nao encontrado no servidor Binario Tech." });
});

app.listen(PORT, () => {
	console.log(`[Binario Tech] Servidor de Middlewares ativo na porta ${PORT}`);
});
