#!/bin/bash

exec > >(tee audit_seguranca.log) 2>&1

CHAVE="binario-tech-secret-2026"

echo "========================================="
echo "    TESTE DE SEGURANCA - BINARIO TECH    "
echo "    Data/Hora: $(date)"
echo "========================================="

echo -e "\n[1] Testando acesso sem chave de API..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas"

echo -e "\n[2] Testando acesso sem chave de API..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas"

echo -e "\n[3] Testando acesso sem chave de API..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas"

echo -e "\n[4] Testando acesso com chave de API valida..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas" \
  -H "X-API-KEY: $CHAVE"

echo -e "\n-----------------------------------------"
echo " Testes finalizados!"
echo " Resultados salvos em audit_seguranca.log"
echo "-----------------------------------------"
