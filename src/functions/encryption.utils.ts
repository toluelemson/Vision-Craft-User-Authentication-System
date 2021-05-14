import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '@src/config/config'

const generateHash = async (password: string, saltRounds: number): Promise<string> =>
  new Promise((resolve, reject) => {
    bcryptjs.hash(password, saltRounds, (err: Error, hash: string) => {
      if (!err) {
        resolve(hash)
      }
      reject(err)
    })
  })

// eslint-disable-next-line no-unused-vars
const signJWT = (user: string, callback: (error: Error | null, token: string | null) => void): void => {
  const timeSinceEpoch = new Date().getTime()
  const expirationTime = timeSinceEpoch + Number(config.SERVER.TOKEN.expireTime) * 100000
  const expirationTimeInSeconds = Math.floor(expirationTime / 1000)

  try {
    jwt.sign(
      {
        username: user,
      },
      config.SERVER.TOKEN.secret,
      {
        issuer: config.SERVER.TOKEN.issuer,
        algorithm: 'HS256',
        expiresIn: expirationTimeInSeconds,
      },
      (error, token) => {
        if (error) {
          callback(error, null)
        } else if (token) {
          callback(null, token)
        }
      }
    )
  } catch (error) {
    callback(error, null)
  }
}

const verifyHash = async (password: string, hash: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcryptjs.compare(password, hash, (err, result) => {
      if (result) resolve(result)
      reject(new Error(`Password is Mismatched`))
    })
  })
}

export { generateHash, signJWT, verifyHash }
