module.exports = {
    apps : [{
      name   : "EMERGINGPROJECT-app",
      script : "npm",
      args:"run dev",
      instances: 1, // or 'max'
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }]
  };