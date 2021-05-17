import config from './config/config'

const ormconfig = {
  name: 'development',
  type: 'mysql',
  host: config.MYSQL.host || '127.0.0.1',
  port: config.MYSQL.port || 8080,
  username: config.MYSQL.user || 'root',
  password: config.MYSQL.pass || '',
  database: config.MYSQL.database || 'uas',
  synchronize: false,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
  connectTimeout: 30000,
  acquireTimeout: 30000,
}

export default ormconfig
