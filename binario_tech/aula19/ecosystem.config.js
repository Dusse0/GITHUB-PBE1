module.exports = {
  apps : [{
	name: 'aula19-pm2',
    	script: 'server.js',
 
	insances: 1,
	autorestart: true,
	watch: false,
	max_memory_restart: '100M',
	  
 	env: {
		NODE_ENV: 'development',
		DB_HOST: 'localhost',
		DB_USER: 'root',
		DB_PASS: 'dev_password'
		
	},

	env_production: {
		NODE_ENV: 'production',
		DB_PORT: 'production-db-server',
		DB_USER: 'admin',
		DB_PASS: 'prod_secure_passworld_123'
	}
 }]
}
