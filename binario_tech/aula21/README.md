### AULA 21 - PBE1
### UNIDADE 6 - DEVOPS, DEPLOY E AUTOMAÇÃO DE INFRAESTRUTURA
### SUBTÓPICOS: Automação de Deploy Contínuo (CI/CD Local), Scripts de Hook e Verificação de Sanidade da API no Servidor

### pm2 start server.js --name "api-cicd"

- Comando no qual se usa para ligar o server.

### git pull origin main

- Atualização do código fonte do repositório, trazendo as últimas mudanças.

### cd $REPO_DIR/aula21 npm install --production

- Atualização do código fonte do repositório.

### pm2 restart server.js

- Reinicialização da aplicação do PM2.

### pm2 list

- Lista todas as aplicações do PM2 ligadas.

### 

### ./deploy.sh
- Comando usado para a criação do um log chamado  "deploy_history.log", gravando a data, hora e o hash do último commit;
- Atualização do código fonte do repositório;
- Verificação e instalação das novas dependências; 
- Reinicialização da aplicação do PM2;
- Verificação final do Deploy.

### 
