const express = require('express');
const cors = require('cors');
const frotaRoutes = require('./src/routes/frotaRoutes');
const tratarErros = require('./src/middlerwares/tratarErros');

const app = express();
const PORT = 3029;

app.use(cors());
app.use(express.json());

// 1. Rotas da Aplicação (alterado para telemetria ou ambas, conforme sua API)
app.use('/api/v1/telemetria', frotaRoutes); 
app.use('/api/v1/frota', frotaRoutes);

// 2. Middleware Rota Não Encontrada (404)
// DEVE usar next() se quiser que erros passem adiante ou ser posicionado após tratamento
app.use((req, res, next) => {
    res.status(404).json({ erro: "Rota não encontrada no servidor." });
});

// 3. Registrar Middleware Global de Erro (4 parâmetros obrigatórios)
app.use(tratarErros);

app.listen(PORT, () => {
    console.log(`[Binário Tech] Servidor ativo na porta ${PORT}`);
});
