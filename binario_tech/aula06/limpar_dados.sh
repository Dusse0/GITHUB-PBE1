#!/bin/bash

echo "==================================================="
echo "   RESETANDO AMBIENTE DE TESTES - BINARIO TECH"
echo "==================================================="

# 1. Encerra qualquer processo do Node.js rodando na máquina
echo -e "\n[1] Encerrando o servidor Node.js..."
pkill -f "node"

if [ $? -eq 0 ]; then
    echo " -> Processo do Node.js finalizado com sucesso."
else
    echo " -> Nenhum processo do Node.js estava em execução."
fi

# 2. Exclui o arquivo de dados JSON
echo -e "\n[2] Removendo o arquivo ocorrencias.json..."
if [ -f "ocorrencias.json" ]; then
    rm -f ocorrencias.json
    echo " -> Arquivo ocorrencias.json removido com sucesso."
else
    echo " -> O arquivo ocorrencias.json não existe no diretório atual."
fi

echo -e "\n==================================================="
echo " Ambiente resetado! Inicie o servidor (node app.js)"
echo "==================================================="
