#!/bin/bash

echo "=== Teste do Servidor ==="
echo "Horário: $(date)"
echo

echo "Testando /status..."
curl http://localhost:3000/status
echo
echo

echo "Horário: $(date)"
echo "Testando /scania/info..."
curl http://localhost:3000/scania/info
echo
echo

echo "Horário: $(date)"
echo "Testando /vw/info..."
curl http://localhost:3000/vw/info
echo
