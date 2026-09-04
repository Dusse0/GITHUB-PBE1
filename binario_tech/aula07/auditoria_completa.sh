#!/bin/bash

URL="http://localhost:3000"
LOG="auditoria.log"

echo "========================================" >> "$LOG"
echo "AUDITORIA COMPLETA DO SERVIDOR" >> "$LOG"
echo "Data: $(date)" >> "$LOG"
echo "========================================" >> "$LOG"

echo "" >> "$LOG"
echo "Consultando: /api/v1/telemetria/scania" >> "$LOG"

curl -s -o /dev/null -w "Status HTTP: %{http_code}\n" \
"$URL/api/v1/telemetria/scania" >> "$LOG"

echo "" >> "$LOG"
echo "Consultando: /api/v1/telemetria/mercedes" >> "$LOG"

curl -s -o /dev/null -w "Status HTTP: %{http_code}\n" \
"$URL/api/v1/telemetria/mercedes" >> "$LOG"

echo "" >> "$LOG"
echo "Auditoria finalizada." >> "$LOG"
echo "========================================" >> "$LOG"
