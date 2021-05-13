import dotenv from 'dotenv'

dotenv.config()

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost'
const MYSQL_PORT = process.env.MYSQL_PORT || '3306'
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'uas'
const MYSQL_USER = process.env.MYSQL_USER || 'root'
const MYSQL_PASS = process.env.MYSQL_PASSWORD || ''

const MYSQL = {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  pass: MYSQL_PASS,
}

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost'
const SERVER_PORT = process.env.SERVER_PORT || 8080
const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 3600
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'issuer'
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || 'encryptedsecret'

const SERVER = {
  HOSTNAME: SERVER_HOSTNAME,
  PORT: SERVER_PORT,
  TOKEN: {
    expireTime: SERVER_TOKEN_EXPIRETIME,
    issuer: SERVER_TOKEN_ISSUER,
    secret: SERVER_TOKEN_SECRET,
  },
}

const NODE_ENV = process.env.NODE_ENV || 'development'

const config = {
  MYSQL,
  SERVER,
  NODE_ENV,
}

export default config
