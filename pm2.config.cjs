module.exports = {
  apps: [
    {
      cwd: './packages/main',
      name: 'hyperse-srv-main',
      namespace: 'Hyperse',
      script: 'npm',
      args: 'run pm2:start:server',
      watch: false,
      instances: 1,
      exec_mode: 'cluster',
      env: {},
    },
    {
      cwd: './packages/main',
      name: 'hyperse-srv-worker',
      namespace: 'Hyperse',
      script: 'npm',
      args: 'run pm2:start:worker',
      watch: false,
      env: {},
    },
  ],
};
