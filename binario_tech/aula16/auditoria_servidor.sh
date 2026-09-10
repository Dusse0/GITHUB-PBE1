echo "======================="
echo " AUDITORIA DE SERVIDOR "
echo "======================="

echo " LISTANDO OS STATUS DE EXECUCAÇÃO DOS PROCESSOS NODE.JS NO SERVIDOR "

ps aux | grep node >> ./processos.log

echo "Resultados da Lista:"
cat processos.log
