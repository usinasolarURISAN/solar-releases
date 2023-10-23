module.exports = {
  apps: [
    {
      name: 'solar-database-sync',
      script: './index.js',
      env_dev: {
        NODE_ENV: 'dev',
      },
      env_prd: {
        NODE_ENV: 'prd',
      },
    },
  ],
};
