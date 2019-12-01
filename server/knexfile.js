module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './oneroster.db',
    },
    pool: {
      afterCreate: (conn, cb) => {
        conn.run('PRAGMA foreign_keys = ON', cb);
      }
    },
    migrations: {
      directory: './config/migrations'
    },
    seeds: {
      directory: './config/seeds'
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'oneroster'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
