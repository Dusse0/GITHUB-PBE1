const mongoose = require('mongoose');

const alertaSchema = new mongoose.Schema({
    equipamentoId: {
        type: String,
        required: [true, 'O ID do equipamento é obrigatório']
    },
    nivelSeveridade: {
        type: String,
        enum: ['BAIXO', 'MEDIO', 'CRITICO'],
        default: 'MEDIO'
    },
    temperaturaMedia: {
        type: Number,
        required: true
    },
    tags: [String], // <-- Adicionado o array de Strings
    metadados: {
        type: Map,
        of: String
    },
    registradoEm: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Alerta', alertaSchema);




























