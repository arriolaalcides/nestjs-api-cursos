/* eslint-disable prettier/prettier */

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      autoLoadModels: true,
      type: process.env.DB_CONNECTION ?? 'postgres',
      host: process.env.DB_HOST ?? '127.0.0.1',
      port: process.env.DB_PORT ?? 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      //schema: process.env.DB_SCHEMA,
      // We are using migrations, synchronize should be set to false.
      synchronize: JSON.parse(process.env.DB_SYNCHRONIZE ?? 'false'),
      // Run migrations automatically,
      // you can disable this if you prefer running migration manually.
      migrationsRun: JSON.parse(process.env.DB_MIGRATIONS ?? 'false') ?? false,
      logging: JSON.parse(process.env.DB_LOGGING ?? 'false') ?? false,
      //logger: 'file',
  
      // allow both start:prod and start:dev to use migrations
      // __dirname is either dist or src folder, meaning either
      // the compiled js in prod or the ts in dev
      migrations: ["src/database/migrations/*.ts"],
      cli: {
        migrationsDir: 'src/database/migrations',
      },
    },
    //nodeEnv: process.env.NODE_ENV,
  });