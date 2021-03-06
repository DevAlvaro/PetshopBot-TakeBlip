// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "petshopp",
      user: "postgres",
      password: "1997verdade"
    },
    migrations:{
      directory: `${__dirname}/src/databaseKnex/migrations`
    
  },
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
