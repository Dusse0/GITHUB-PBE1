function tratarErros(err, req, res, next) {
    console.error(`[ERRO LOG]: ${err.message}`);

    // Captura erros de sintaxe no JSON enviando 400 Bad Request
    if (err instanceof SyntaxError || err.type === 'entity.parse.failed') {
        return res.status(400).json({ 
            erro: "Sintaxe do JSON inválida. Verifique a formatação do corpo da requisição (vírgulas, aspas, etc)." 
        });
    }

    if (err.message && err.message.includes('UNIQUE constraint failed')) {
        return res.status(409).json({ 
            erro: "Conflito de dados: Registro já existe com este valor único (ex: Placa)." 
        });
    }

    if (err.message && err.message.includes('FOREIGN KEY constraint failed')) {
        return res.status(400).json({ 
            erro: "Erro de relacionamento: O registro pai fornecido não existe." 
        });
    }

    return res.status(500).json({ 
        erro: "Erro interno no servidor da Binário Tech." 
    });
}

module.exports = tratarErros;
