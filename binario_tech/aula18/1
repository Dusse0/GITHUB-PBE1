require('dotenv').config();
const express = require('express');
const cors = require ('cors');
const provaRoutes = require('./src/routes/provaRoutes');

const app = express();
const PORT = process.env.PORT || 3029

app.use(cors());
app.use(express.json());

app.use('/api/v1/prova', provaRoutes);

app.listen(PORT, () => {
		console.log(`[Binário Tech] Servidor da prova ativo na porta  ${PORT}`);
});
