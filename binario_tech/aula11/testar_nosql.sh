#!/bin/bash

echo "=============================================="
echo " AUDITORIA DE DOCUMENTOS NOSQL - BINÁRIO TECH "
echo "=============================================="

echo -e "\n[1] Criando Alerta Crítico no MongoDB..."
curl -s -X POST http://localhost:3029/api/v1/alertas \
        -H "Content-Type: application/json" \
        -d '{
                "equipamentoId": "SCANIA-R500-01",
                "nivelSeveridade": "CRITICO",
                "temperaturaMedia": 102.5,
                "metadados": {
                        "Localizacao": "Rod. Anhanguera - Km 88",
                        "motorista": "Carlos Silva"
                }
        }' | jq .

echo -e "\n[2] Consultando Coleção de Alertas..."
curl -s http://localhost:3029/api/v1/alertas | jq .
