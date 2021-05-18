import httpStatusCodes from 'http-status-codes'
import ApiResponse from '@src/functions/api.response'
import { signJWT } from '@src/functions/encryption.utils'
import { IUserLogin, IController } from './user.interface'
import userService from './user.service'

// @desc	Get user
// @route 	GET /auth/
// @access	Public
const getUsers: IController = async (req, res) => {
  try {
    const user = await userService.getUsers()
    ApiResponse.result(res, user, httpStatusCodes.CREATED)
  } catch (e) {
    ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message)
  }
}

// @desc	Register user
// @route 	POST /auth/register
// @access	Public
const register: IController = async (req, res) => {
  try {
    const user = await userService.createUser(req.body)
    ApiResponse.result(res, user, httpStatusCodes.CREATED)
  } catch (e) {
    ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message)
  }
}

// @desc	Login user
// @route 	GET /auth/login
// @access	Public
const login: IController = async (req, res) => {
  const { email, password }: IUserLogin = req.body
  try {
    const user = (await userService.loginUser(email, password)) || ''
    signJWT(user, (error: Error | null, token) => {
      ApiResponse.result(res, user, httpStatusCodes.CREATED, token)
    })
  } catch (e) {
    ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message ?? e)
  }
}
export default { getUsers, register, login }
