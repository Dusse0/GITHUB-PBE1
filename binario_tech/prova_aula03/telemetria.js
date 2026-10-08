const express = require('express');
const app = express();
const PORT = 3029;

app.use(express.json());

// ROTA SCANIA
app.get('/api/v1/scania', (req, res) => {
	res.json({ montadora: "Scania", modelo: "8450", status: "OK", conexao: true, velocidade_media: 82});
});

// ROTA MERCEDES-BENZ
app.get('/api/v1/mercedes', (req, res) => {
	res.json({ montadora: "Mercedes-Benz", modelo: "Actros", status: "OK", conexao: true, velocidade_media: 78});
});

// ROTA VOLKSWAGEN
app.get('/api/v1/vw', (req, res) => {
	res.json({ montadora: "Volkswagen", modelo: "Delivery", status: "ALERTA", conexao: false, velocidade_media: 0 });
});

// ROTA VOLVO
app.get('/api/v1/volvo', (req, res) => {
	res.json({ montadora: "Volvo", modelo: "FH 540", status: "OK", conexao: true, velocidade_media: 80 });
});

app.listen(PORT, () => {
	console.log(`[Binário Tech] Servidor de Telemetria rodando em http://localhost:${PORT}`);
});
