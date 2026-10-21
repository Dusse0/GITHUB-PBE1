# Aula 05 - Middlewares e Segurança de API

## Objetivo

Compreender o funcionamento de middlewares no Express, utilizando middlewares globais e locais para registrar requisições, autenticar acessos, validar dados e tratar rotas inexistentes.

Nesta aula será desenvolvida uma API da Binário Tech com rotas para gerenciamento de motoristas e manutenções, autenticação por chave de API e validação de CNH.

Porta utilizada: 3029

## Preparação do ambiente

```bash
cd ~/binario_tech
mkdir -p aula05
cd aula05
npm init -y
npm install express cors
```

## Executar o servidor

```bash
node app.js &
```

## Arquivos do projeto

- `app.js` - Configuração do Express, middlewares globais e rotas da API.
- `middlewares/logger.js` - Registra método HTTP, URL, status da resposta e duração da requisição.
- `middlewares/auth.js` - Protege rotas utilizando a chave de API `X-API-KEY`.
- `middlewares/validaCnh.js` - Valida se a CNH contém exatamente 11 dígitos numéricos.
- `routes/motoristas.js` - Consulta e cadastro de motoristas.
- `routes/manutencoes.js` - Consulta e cadastro de manutenções.
- `teste_seguranca.sh` - Executa testes de autenticação.
- `audit_seguranca.log` - Registra os resultados dos testes de segurança.

## Rotas da API

GET `/api/v1/health`

GET `/api/v1/motoristas`

POST `/api/v1/motoristas`

GET `/api/v1/manutencoes`

POST `/api/v1/manutencoes`

As rotas de motoristas e manutenções devem utilizar o middleware de autenticação. A rota de cadastro de motoristas também deve utilizar a validação de CNH.

## Testes básicos

Verificar o status da API:

```bash
curl -i http://localhost:3029/api/v1/health
```

Listar motoristas com autenticação:

```bash
curl -i http://localhost:3029/api/v1/motoristas \
-H "X-API-KEY: binario-tech-secret-2026"
```

Cadastrar motorista:

```bash
curl -i -X POST http://localhost:3029/api/v1/motoristas \
-H "Content-Type: application/json" \
-H "X-API-KEY: binario-tech-secret-2026" \
-d '{"nome":"João Santos","cnh":"12345678901","categoria":"E"}'
```

Listar manutenções:

```bash
curl -i http://localhost:3029/api/v1/manutencoes \
-H "X-API-KEY: binario-tech-secret-2026"
```

## Exercícios

### Exercício 01

Criação da rota de verificação de saúde da API e configuração do middleware de registro de requisições.

```bash
curl -i http://127.0.0.1:3029/api/v1/health
```

### Exercício 02

Criação do módulo de manutenções utilizando `express.Router()`, com operações para consultar e cadastrar registros.

```bash
curl -i http://127.0.0.1:3029/api/v1/manutencoes \
-H "X-API-KEY: binario-tech-secret-2026"
```

### Exercício 03

Proteção das rotas utilizando o middleware de autenticação por chave de API.

```bash
curl -i http://127.0.0.1:3029/api/v1/motoristas
```

A requisição sem chave deve retornar HTTP `401 Unauthorized`.

### Exercício 04

Criação do middleware `validaCnh.js`, que exige exatamente 11 dígitos numéricos no campo `cnh`.

```javascript
/^\d{11}$/
```

### Exercício 05

Teste de cadastro de motorista com CNH inválida.

```bash
curl -i -X POST http://127.0.0.1:3029/api/v1/motoristas \
-H "Content-Type: application/json" \
-H "X-API-KEY: binario-tech-secret-2026" \
-d '{"nome":"Teste","cnh":"123","categoria":"E"}'
```

Quando o middleware de validação estiver aplicado à rota, o resultado esperado é HTTP `400 Bad Request`.

### Exercício 06

Configuração do tratamento global para rotas inexistentes.

```bash
curl -i http://127.0.0.1:3029/api/v1/rota-inexistente
```

O resultado esperado é HTTP `404 Not Found`.

### Exercício 07

Configuração e execução dos testes de segurança para verificar o acesso às rotas protegidas.

O teste deve confirmar que requisições sem chave são bloqueadas e que uma requisição com chave válida é autorizada.

```bash
curl -i http://127.0.0.1:3029/api/v1/motoristas \
-H "X-API-KEY: binario-tech-secret-2026"
```

### Exercício 08

Código do `teste_seguranca.sh`, atualizado para exibir os resultados no terminal e salvar uma cópia no arquivo `audit_seguranca.log`.

```bash
#!/bin/bash

exec > >(tee audit_seguranca.log) 2>&1

CHAVE="binario-tech-secret-2026"

echo "========================================="
echo "    TESTE DE SEGURANCA - BINARIO TECH    "
echo "    Data/Hora: $(date)"
echo "========================================="

echo -e "\n[1] Testando acesso sem chave de API..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas"

echo -e "\n[2] Testando acesso sem chave de API..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas"

echo -e "\n[3] Testando acesso sem chave de API..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas"

echo -e "\n[4] Testando acesso com chave de API valida..."
curl -i -X GET "http://127.0.0.1:3029/api/v1/motoristas" \
  -H "X-API-KEY: $CHAVE"

echo -e "\n-----------------------------------------"
echo " Testes finalizados!"
echo " Resultados salvos em audit_seguranca.log"
echo "-----------------------------------------"
```

## Script de teste

Dar permissão de execução:

```bash
chmod +x teste_seguranca.sh
```

Executar:

```bash
./teste_seguranca.sh
```

O teste foi executado com sucesso. As três requisições sem chave retornaram HTTP `401 Unauthorized`, enquanto a requisição com chave válida retornou HTTP `200 OK`.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Bash
- cURL
- HTTP
- API REST
- Middlewares
- Autenticação por chave de API
