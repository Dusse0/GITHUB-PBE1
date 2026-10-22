#!/bin/bash

exec > >(tee audit_seguranca.log) 2>&1

CHAVE="binario-tech-secret-2026"

echo "==================================="
echo " TESTE DE SEGURANCA - BINARIO TECH "
echo " Data/Hora: $(date)"
echo "==================================="

echo -e "\n[1] Testando acesso nao autorizado..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas" 

echo -e "\n[2] Testando acesso com chave invalida..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas"
	-H "X-API-KEY: A"	

echo -e "\n[3] Testando erro de validacao da CNH..."
curl -i -X POST "http://127.0.0.1:3029/api/v1/motoristas" \
	-H "Content-Type: application/json" \
	-H "X-API-KEY: $CHAVE" \
	-d '{"nome":"Teste","categoria":"E"}'

echo -e "\n[4] Testando rota inexistente..."
curl -i "http://127.0.0.1:3029/api/v1/rota-inexistente"

echo -e "\n[5] Listando motoristas + testando chave valida..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas" \
	-H "X-API-KEY: $CHAVE"

echo -e "\n[6] Testando consulta das manutencoes..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/manutencoes"
	-H "X-API-KEY: $CHAVE"

echo -e "\n[7] Testando cadastro correto dos motoristas..."
curl -i -X POST "http://127.0.0.1:3029/api/v1/motoristas" \
	-H "Content-Type: application/json" \
	-H "X-API-KEY: binario-tech-secret-2026" \
	-d '{"nome":"João Santos","cnh":"12345678901","categoria":"E"}'

echo -e "\n[8] Testando cadastro correto das manutencoes..."
curl -i -X POST "http://127.0.0.1:3029/api/v1/manutencoes" \
	-H "Content-Type: application/json" \
	-H "X-API-KEY: binario-tech-secret-2026" \	
	-d '{"nome":"Caminhao 03","descricao":"Troca de oleo","valor":"250"}'

echo -e "\n==================================="
echo " Teste finalizados!"
echo " Resultados salvos em audit_seguranca.log"
echo "=================================="
