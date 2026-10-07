#!/bin/bash

echo "========================================="
echo "     TESTE CRUD - BINARIO TECH"
echo "     Data/Hora: $(date)"
echo "========================================="

echo -e "\n[1] Cadastrando primeiro veiculo..."
curl -s -i -X POST "http://127.0.0.1:3029/api/v1/veiculos" \
  -H "Content-Type: application/json" \
  -d '{"placa":"ABC-1010","montadora":"Scania","modelo":"R450"}'

echo -e "\n[2] Cadastrando segundo veiculo..."
curl -s -i -X POST "http://127.0.0.1:3029/api/v1/veiculos" \
  -H "Content-Type: application/json" \
  -d '{"placa":"KLL-9090","montadora":"Volvo","modelo":"FH 540"}'

echo -e "\n[3] Atualizando status do veiculo ID 1..."
curl -s -i -X PATCH "http://127.0.0.1:3029/api/v1/veiculos/1/status" \
  -H "Content-Type: application/json" \
  -d '{"status":"EM_ROTA"}'

echo -e "\n[4] Removendo veiculo ID 2..."
curl -s -i -X DELETE "http://127.0.0.1:3029/api/v1/veiculos/2"

echo -e "\n-----------------------------------------"
echo "Testes finalizados com sucesso!"
