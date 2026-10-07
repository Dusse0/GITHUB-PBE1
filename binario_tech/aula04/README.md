# Aula 04 - API RESTful e CRUD

## Objetivo

Compreender a anatomia das requisições e respostas HTTP, utilizando Headers, Query Params, Body e Status Codes.

Nesta aula será criada uma API RESTful para gerenciamento de veículos da Binario Tech, utilizando os métodos GET, POST, PATCH e DELETE, além da criação de uma rota PUT.

Porta utilizada: 3029

## Preparação do ambiente

cd ~/binario_tech
mkdir -p aula04
cd aula04
npm init -y
npm install express

## Executar o servidor

node frota_api.js &

## Rotas da API

GET /api/v1/veiculos
GET /api/v1/veiculos/:id
POST /api/v1/veiculos
PATCH /api/v1/veiculos/:id/status
DELETE /api/v1/veiculos/:id

## Testes básicos

Listar veículos:

curl -s http://localhost:3029/api/v1/veiculos | jq .

Cadastrar veículo:

curl -s -X POST http://localhost:3029/api/v1/veiculos \
-H "Content-Type: application/json" \
-d '{"placa":"VWX-5555","montadora":"Volkswagen","modelo":"Delivery"}' | jq .

Atualizar status:

curl -s -X PATCH http://localhost:3029/api/v1/veiculos/1/status \
-H "Content-Type: application/json" \
-d '{"status":"MANUTENCAO"}' | jq .

Deletar veículo:

curl -s -X DELETE http://localhost:3029/api/v1/veiculos/2 | jq .

## Exercícios

### Exercício 01

Buscar o veículo de ID 1 utilizando GET e exibir o resultado com jq.

### Exercício 02

Cadastrar um caminhão Volvo FH 540 com a placa KLL-9090 utilizando POST e verificar o status 201.

### Exercício 03

Tentar cadastrar um veículo sem informar a placa e verificar o status 400.

### Exercício 04

Filtrar os veículos pelo status DISPONIVEL utilizando Query Param.

### Exercício 05

Atualizar o status do veículo de ID 3 para EM_ROTA utilizando PATCH.

### Exercício 06

Tentar atualizar ou deletar um veículo inexistente e verificar o status 404.

### Exercício 07

Adicionar uma rota PUT para substituir todos os dados de um veículo.

### Exercício 08

Criar o script teste_crud.sh para automatizar operações de cadastro, atualização e exclusão, registrando os resultados em crud_result.log.

## Script de teste

Dar permissão:

chmod +x teste_crud.sh

Executar:

./teste_crud.sh

## Tecnologias utilizadas

Node.js
Express
Bash
cURL
jq
HTTP
REST API
