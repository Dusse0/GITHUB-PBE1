#!/bin/bash

exec > >(tee crud_result.log) 2>&1

echo "========================================="
echo "       TESTE CRUD - BINARIO TECH         "
echo "       Data/Hora: $(date)"
echo "========================================="

echo -e "\n[1] Cadastrando primeiro veiculo..."
curl -s -X POST "http://127.0.0.1:3029/api/v1/veiculos" \
  -H "Content-Type: application/json" \
  -d '{"placa":"ABC-1010","montadora":"Scania","modelo":"R450"}' | jq .

echo -e "\n[2] Cadastrando segundo veiculo..."
curl -s -X POST "http://127.0.0.1:3029/api/v1/veiculos" \
  -H "Content-Type: application/json" \
  -d '{"placa":"KLL-9090","montadora":"Volvo","modelo":"FH 540"}' | jq .

echo -e "\n[3] Filtrando veiculos com status DISPONIVEL..."
curl -s -X GET "http://127.0.0.1:3029/api/v1/veiculos?status=DISPONIVEL"

echo -e "\n[4] Atualizando status do carro ID 3..."
curl -s -X PATCH "http://127.0.0.1:3029/api/v1/veiculos/3/status" \
	-H "Content-Type: application/json" \
	-d '{"status":"MANUNTENCAO"}' | jq .

echo -e "\n[5] Substituição completa do carro ID 4..."
curl -s -X PUT "http://127.0.0.1:3029/api/v1/veiculos/4" \
	-H "Content-Type: application/json" \
	-d '{"placa":"XYZ-9999","montadora":"Volkswagen","modelo":"GH500","status":"MANUTENCAO"}'

echo -e "\n-----------------------------------------"
echo " Testes finalizados com sucesso!"
