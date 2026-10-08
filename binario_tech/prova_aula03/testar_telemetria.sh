#!/bin/bash

echo "===================================="
echo " AUDITORIA DE TELEMETRIA - PROVA 03"
echo "===================================="

echo -e "\n(1) Testando Rota Scania!..."
sleep 1
curl -s http://localhost:3029/api/v1/scania | jq .

echo -e "\n(20 Testando Rota Mercedes-Benz!..."
sleep 1
curl -s http://localhost:3029/api/v1/mercedes | jq .

echo -e "\n(3) Testando Rota Volvo!..."
sleep 1
curl -s http://localhost:3029/api/v1/volvo | jq .

echo -e "\n(4) Testando Rota Volkswagen!..."
sleep 1
curl -s http://localhost:3029/api/v1/vw | jq .

echo "===================================="
echo "        AUDITORIA COMPLETA!         "
echo "===================================="
