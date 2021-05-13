import jwt from 'jsonwebtoken'
import { IController } from '@src/api/components/auth/user.interface'
import config from '@src/config/config'

const extractJWT: IController = async (req, res, next): Promise<void> => {
  const token = req.headers.authorization?.split(' ')[1] || ''

  if (token == null) res.sendStatus(401)

  jwt.verify(token, config.SERVER.TOKEN.secret, (error, decoded) => {
    if (error) res.status(404)
    res.locals.jwt = decoded
    next()
  })
}

export default extractJWT
