import config from '@src/config/config'

const ormconfig = {
  type: 'mysql',
  host: config.MYSQL.host || '127.0.0.1',
  port: config.MYSQL.port || 8080,
  username: config.MYSQL.user || 'root',
  password: config.MYSQL.pass || '',
  database: config.MYSQL.database || 'db',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
  connectTimeout: 30000,
  acquireTimeout: 30000,
}

export default ormconfig
