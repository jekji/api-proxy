module.exports = {
  apps: [
    {
      name: "api-proxy",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      cwd: "/data/www/api-proxy",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      exec_mode: "fork",
      instances: 1,
    },
  ],
};
