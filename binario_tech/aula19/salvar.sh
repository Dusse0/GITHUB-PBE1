#!/bin/bash
echo "============================================="
echo " SALVAMENTO DA LISTA DE PROCESSOS ATIVOS PM2 "
echo "============================================="

echo 'export PATH="$HOME:$PATH"' >> ~/.bashrc

pm2 save
