#!/bin/bash

LOG_FILE="crud_result.log"

# Limpa o arquivo de log anterior ou cria um novo
> "$LOG_FILE"

echo "=== INICIANDO TESTE AUTOMATIZADO CRUD ===" | tee -a "$LOG_FILE"
echo "Data: $(date)" | tee -a "$LOG_FILE"
echo "-----------------------------------------" | tee -a "$LOG_FILE"

# 1. Cadastrar Veículo 1 (Scania R450 -> Gerará ID 1 após restart da API)
echo -e "\n[1/4] POST - Cadastrando primeiro veículo..." | tee -a "$LOG_FILE"
curl -s -i -X POST "http://127.0.0.1:3029/api/v1/veiculos" \
  -H "Content-Type: application/json" \
  -d '{"placa":"ABC-1010","montadora":"Scania","modelo":"R450"}' >> "$LOG_FILE"

# 2. Cadastrar Veículo 2 (Volvo FH 540)
echo -e "\n[2/4] POST - Cadastrando segundo veículo..." | tee -a "$LOG_FILE"
curl -s -i -X POST "http://127.0.0.1:3029/api/v1/veiculos" \
  -H "Content-Type: application/json" \
  -d '{"placa":"KLL-9090","montadora":"Volvo","modelo":"FH 540"}' >> "$LOG_FILE"

# 3. Atualizar Status do Veículo ID 1 para EM_ROTA (PATCH)
echo -e "\n[3/4] PATCH - Atualizando status do veículo ID 1..." | tee -a "$LOG_FILE"
curl -s -i -X PATCH "http://127.0.0.1:3029/api/v1/veiculos/1/status" \
  -H "Content-Type: application/json" \
  -d '{"status":"EM_ROTA"}' >> "$LOG_FILE"

# 4. Deletar Veículo ID 2 (DELETE)
echo -e "\n[4/4] DELETE - Removendo veículo ID 2..." | tee -a "$LOG_FILE"
curl -s -i -X DELETE "http://127.0.0.1:3029/api/v1/veiculos/2" >> "$LOG_FILE"

echo -e "\n-----------------------------------------" | tee -a "$LOG_FILE"
echo "=== TESTES FINALIZADOS! Resultados salvos em $LOG_FILE ===" | tee -a "$LOG_FILE"
