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

  })
}

