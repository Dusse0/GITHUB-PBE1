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

curl -s http://localhost:3029/api/1v/veiculos/1 | jq .

### Exercício 02

curl -i http://127.0.0.1:3029/api/v1/veiculos -H "Content-Type: application/json" -d '{"montadora":"Volvo","modelo":"FH 540","placa":"KLL-9090"}'

### Exercício 03

curl -i http://127.0.0.1:3029/api/v1/veiculos -H "Content-Type: application/json" -d '{"montadora":"Volvo","modelo":"FH 540"}'

### Exercício 04

curl -i "http://127.0.0.1:3029/api/v1/veiculos?status=DISPONIVEL"

### Exercício 05

curl -i -X PATCH "http://127.0.0.1:3029/api/v1/veiculos/3/status" \
  -H "Content-Type: application/json" \
  -d '{"status":"EM_ROTA"}'

### Exercício 06

- Atualizar

curl -i -X PATCH "http://127.0.0.1:3029/api/v1/veiculos/99/status" \ 
    -H "Content-Type: application/json" \
    -d '{"status":"EM_ROTA"}'

- Deletar

curl -i -X DELETE "http://127.0.0.1:3029/api/v1/veiculos/99"

### Exercício 07

- Codigo PUT

// 4. PUT /api/v1/veiculos/:id - Substituir veículo completo
app.put('/api/v1/veiculos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { placa, montadora, modelo, status } = req.body;

    // No PUT, todos os campos do recurso são obrigatórios
    if (!placa || !montadora || !modelo || !status) {
        return res.status(400).json({
            erro: "Campos 'placa', 'montadora', 'modelo' e 'status' são obrigatórios para PUT."
        });
    }

    const index = veiculos.findIndex(v => v.id === id);

    if (index === -1) {
        return res.status(404).json({
            erro: "Veículo não encontrado."
        });
    }

    // Substitui o objeto mantendo o mesmo ID
    veiculos[index] = {
        id,
        placa,
        montadora,
        modelo,
        status: status.toUpperCase()
    };

    res.status(200).json({
        mensagem: "Veículo totalmente atualizado com sucesso!",
        veiculo: veiculos[index]
    });
});

- Comando do PUT (substitua informações se necessário)

curl -i -X PUT "http://127.0.0.1:3029/api/v1/veiculos/1" \
  -H "Content-Type: application/json" \
  -d '{"placa":"XYZ-9999","montadora":"Volvo","modelo":"FH 540","status":"MANUTENCAO"}'

### Exercício 08

- Código do teste_crud.sh (atualizei no dia 14/10/2026 pra padronizar com os códigos mais recentes daBinário Tech. Seu funcionamento está dando certo!)

#!/bin/bash

exec > >(tee crud_result.log) 2>&1

echo "========================================="
echo "       TESTE CRUD - BINARIO TECH         "
echo "       Data/Hora: $(date)"
echo "========================================="

echo -e "\n[1] Cadastrando primeiro veiculo..."
curl -s -X POST "http://127.0.0.1:3029/api/v1/veiculos" \
  -H "Content-Type: application/json" \
  -d '{"placa":"ABC-1010","montadora":"Scania","modelo":"R450"}' | jq .

echo -e "\n[2] Cadastrando segundo veiculo..."
curl -s -X POST "http://127.0.0.1:3029/api/v1/veiculos" \
  -H "Content-Type: application/json" \
  -d '{"placa":"KLL-9090","montadora":"Volvo","modelo":"FH 540"}' | jq .

echo -e "\n[3] Atualizando status do veiculo ID 1..."
curl -s -X PATCH "http://127.0.0.1:3029/api/v1/veiculos/3/status" \
  -H "Content-Type: application/json" \
  -d '{"status":"EM_ROTA"}' | jq .

echo -e "\n[4] Removendo veiculo ID 2..."
curl -s -X DELETE "http://127.0.0.1:3029/api/v1/veiculos/4" | jq .

echo -e "\n-----------------------------------------"
echo " Testes finalizados com sucesso!"

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
