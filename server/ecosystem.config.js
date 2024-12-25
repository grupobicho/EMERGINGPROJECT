module.exports = {
    apps: [{
      name: "EMERGINGPROJECT",
      script: "npm",
      args: "run dev",  // replace with your main file path
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }]
  }