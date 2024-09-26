module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'local'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'ksh_local'),
      password: env('DATABASE_PASSWORD', 'this123ksh'),
      ssl: false,
    },
    debug: false,
  },
});