module.exports = {
  apps: [
    {
      name: "api-proxy",
      script: "./node_modules/next/dist/bin/next",
      args: "start -p 3030",
      cwd: "/data/www/api-proxy",
      env: {
        NODE_ENV: "production",
        PORT: 3030,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3030,
      },
      exec_mode: "fork",
      instances: 1,
    },
  ],
};
