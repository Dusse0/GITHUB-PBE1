#!/bin/bash

echo "====================================================="
echo " LIMPEZA DO AMBIENTE DOCKER - BINÁRIO TECH - AULA 22 "
echo "====================================================="

echo "[1/2] Removendo containers parados..."
docker container prune -f

echo "[2/2] Removendo imagens não utilizadas..."
docker image prune -f

echo "====================="
echo "  LIMPEZA CONCLUÍDA  "
echo "====================="
