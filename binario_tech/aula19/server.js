require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3011;

app.use(express.json());

// Rota de Status do Servico

app.get('/api/v1/telemetria/status', (req, res) => {
	res.json({
		servico: "Servico de Telemetria Binario Tech",
		status: "OPERACIONAL",
		uptime: process.uptime(),
		pid: process.pid,
		timestamp: new Date()
	});
});

// Rota pra simular falha critica / Crash na aplicacao

app.get('/api/v1/telemetria/crash', (req, res) => {
	console.error (`[ALERTA] Falha critica simulada pelo PID ${process.pid}`);
	res.status(500).json({ mensagem: "Simulado falha grave no processo!" });
	setTimeout(() => {
		process.exit(1); // Encerra o processo forcadamente
	}, 1000);
});

app.listen(PORT, () => {
	console.log(`Binario tech] Microservico ativo na porta ${PORT} (PID: ${process.pid})`);
});
