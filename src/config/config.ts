interface Config {
  PORT: number
  NODE_ENV: string
}

export const config: Config = {
  PORT: 8080,
  NODE_ENV: 'development',
}

export const dbConfig = {
  HOST: '',
  USER: '',
  PASSWORD: '',
  DB: '',
  dialect: '',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
