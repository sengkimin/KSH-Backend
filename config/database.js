module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '62.72.46.248'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'KSH_NEW_LAST'),
      user: env('DATABASE_USERNAME', 'wmad_students'),
      password: env('DATABASE_PASSWORD', 'WMAD@#students2023'),
      ssl: false,
    },
    debug: false,
  },
});