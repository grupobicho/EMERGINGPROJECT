module.exports = {
    apps : [
    {
      name   : "EMERGINGPROJECT",
      script : "npm",
      args:"run dev",
      instances: 1, // or 'max'
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      
        ENV_VAR1: 'environment-variable',
      }
    }
   ]
  };