# Aula 03 - Servidor de Telemetria

## Objetivo

Criar um servidor de telemetria utilizando Node.js e Express, simulando informações de veículos das montadoras Scania, Mercedes-Benz e Volkswagen.

Nesta aula também serão utilizados cURL, HTTPie, jq e Bash para realizar requisições, filtrar respostas JSON e automatizar testes.

Porta utilizada foi 3029

## Preparação do ambiente

cd ~/binario_tech
mkdir -p aula03
cd aula03
npm init -y
npm install express
sudo apt-get update && sudo apt-get install -y jq httpie

## Executar o servidor

node telemetria.js &

## Rotas da API

GET /api/v1/scania
GET /api/v1/mercedes
GET /api/v1/vw
GET /api/v1/volvo

## Executar a auditoria

chmod +x testar_telemetria.sh
./testar_telemetria.sh

## Exercícios

### Exercício 01

curl -s http://localhost:3029/api/v1/scania | jq '.modelo'

### Exercício 02

http GET http://localhost:3029/api/v1/mercedes > mercedes.json

### Exercício 03

jq '.status' mercedes.json

### Exercício 04

Adicionar a rota /api/v1/volvo no arquivo telemetria.js, retornando os dados do modelo FH 540.

### Exercício 05

Adicionar o script "start": "node telemetria.js" no package.json.

Executar:

npm start

### Exercício 06

./testar_telemetria.sh > relatorio.log

### Exercício 07

curl -s http://localhost:3029/api/v1/vw | jq '{montadora, status}'

### Exercício 08

ps aux | grep node

kill -9 <PID>
