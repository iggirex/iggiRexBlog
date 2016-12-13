// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    database: "iggirexblog"
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
