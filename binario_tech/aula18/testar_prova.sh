
#!/bin/bash
echo "=============================="
echo " CADASTRO DO USUÁRIO - AULA18 "
echo "=============================="

echo -e "\n[1] Cadastro de novo usuário..."
curl -s -X POST http://localhost:3029/api/v1/prova/register \
	-H "Content-Type: application/json" \
	-d '{ "email": "teste@binariotech.com.br", "senha": "SenhaSegura123!", "perfil": "Tester" }' | jq .

echo -e "\n[2] Realizando login e obtendo JWT..."
LOGIN_RESP=$(curl -s -X POST http://localhost:3029/api/v1/prova/login \
	-H "Content-Type: application/json" \
	-d '{ "email": "teste@binariotech.com.br", "senha": "SenhaSegura123!"}')

echo $LOGIN_RESP | jq .

TOKEN=$(echo $LOGIN_RESP | jq -r '.token')

echo -e "\n[3] Acessando Rota Protegida COM Token JWT Válido..."
curl -s http://localhost:3029/api/v1/prova/perfil \
	-H "Authorization: Bearer $TOKEN" | jq .
