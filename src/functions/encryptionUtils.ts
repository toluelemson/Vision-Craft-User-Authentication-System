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

const verifyHash = async (password: string, hash: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcryptjs.compare(password, hash, (err, result) => {
      if (result) resolve(result)
      reject(new Error(`Password is Mismatched`))
    })
  })
}

