#!/bin/bash

echo "================================"
echo " AUDITORIA DE PROCESSOS NODE.JS "
echo "================================"

ps aux | grep node > processos.log

echo "Auditoria concluída!"
echo "Resultado salvo em processos.log"
