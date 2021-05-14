import Joi from '@hapi/joi'
import { IController } from '../components/auth/user.interface'

const loginValidation: IController = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().lowercase().required(),
      password: Joi.string().required(),
    })
    await schema.validateAsync(req.body)
    next()
  } catch (e) {
    next(e)
  }
}

const registerationValidation: IController = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().lowercase().required(),
      password: Joi.string().min(2).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    })
    await schema.validateAsync(req.body)
    next()
  } catch (e) {
    next(e)
  }
}

export { loginValidation, registerationValidation }
