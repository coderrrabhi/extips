module.exports = {
  apps: [{
    name: "extispba",
    script: "./server/src/index.js",
    env: {
      NODE_ENV: "production",
      PORT: 3000,
      SESSION_SECRET: "a8f9c73e21b4506d89e1f2a34567890b",
      DATABASE_URL: "postgres://extis_user:SecurePass123!@localhost:5432/extispba_db",
      ZAPUPI_API_KEY: "zap3973bf9db8168476c89dce32b5f93596",
      ZAPUPI_ZAP_KEY: "zap3973bf9db8168476c89dce32b5f93596"
    }
  }]
};
