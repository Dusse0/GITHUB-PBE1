#!/bin/bash

URL="http://localhost:3029/api/v1/motoristas"
CHAVE="binario-tech-secret-2026"
LOG="audit_seguranca.log"

echo "===== TESTE DE SEGURANCA =====" > "$LOG"
echo "Data: $(date)" >> "$LOG"
echo "" >> "$LOG"

echo "Tentativa 1 - Sem chave:" >> "$LOG"
curl -i -X GET "$URL" >> "$LOG" 2>&1
echo -e "\n" >> "$LOG"

echo "Tentativa 2 - Sem chave:" >> "$LOG"
curl -i -X GET "$URL" >> "$LOG" 2>&1
echo -e "\n" >> "$LOG"

echo "Tentativa 3 - Sem chave:" >> "$LOG"
curl -i -X GET "$URL" >> "$LOG" 2>&1
echo -e "\n" >> "$LOG"

echo "Tentativa 4 - Com chave valida:" >> "$LOG"
curl -i -X GET "$URL" \
-H "X-API-KEY: $CHAVE" >> "$LOG" 2>&1
echo -e "\n" >> "$LOG"

echo "===== TESTE FINALIZADO =====" >> "$LOG"

echo "Testes realizados. Resultados salvos em $LOG"
