module.exports = {
  apps: [{
    name: 'api-telemetria',
    script: './server.js',

    autorestart: true,
    watch: false,
    max_memory_restart: '1G',

    env: {
      NODE_ENV: 'development',
      DB_HOST: 'localhost',
      DB_USER: 'root',
      DB_PASS: 'dev_password'
    },

    env_production: {
      NODE_ENV: 'production',
      DB_HOST: 'production-db-server',
      DB_USER: 'admin',
      DB_PASS: 'prod_secure_passworld_123'
    }
  }]
};
