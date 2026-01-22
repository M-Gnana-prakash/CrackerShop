module.exports = {
  apps: [
    {
      name: 'crackershop-api',
      script: './server.js',
      instances: 'max',  // Use all CPU cores
      exec_mode: 'cluster',  // Cluster mode for multi-core
      env: {
        NODE_ENV: 'development',
        PORT: 5000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      // Memory and CPU limits
      max_memory_restart: '500M',  // Restart if memory exceeds 500MB
      max_restarts: 10,
      min_uptime: '10s',
      // Logging
      output: './logs/pm2-out.log',
      error: './logs/pm2-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
      // Auto restart on file changes (dev)
      watch: process.env.NODE_ENV === 'development' ? ['controllers', 'routes', 'models', 'middleware'] : false,
      ignore_watch: ['node_modules', 'logs'],
      watch_delay: 1000,
      // Health check
      cron_restart: '0 2 * * *',  // Daily restart at 2 AM
      // Monitoring
      max_consecutive_restarts: 5
    }
  ],
  deploy: {
    production: {
      user: 'node',
      host: 'your-production-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-repo/crackershop.git',
      path: '/var/www/crackershop',
      'post-deploy': 'npm install --production && npm run prod'
    }
  }
};
