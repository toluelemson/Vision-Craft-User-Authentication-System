import httpStatusCodes from 'http-status-codes'
import ApiResponse from '@src/functions/apiResponse'
import { signJWT } from '@src/functions/encryptionUtils'
import { IUserLogin, IController } from './user.interface'
import userService from './user.service'

// @desc	Register user
// @route 	POST /auth/register
// @access	Public
const getUsers: IController = async (req, res) => {
  try {
    const user = await userService.getUsers()
    ApiResponse.result(res, user, httpStatusCodes.CREATED)
  } catch (error) {
    ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, error.message)
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
    console.log(e)
    ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message)
  }
}

// @desc	Login user
// @route 	GET /auth/login
// @access	Public
const login: IController = async (req, res) => {
  const { email, password }: IUserLogin = req.body
  try {
    const user = await userService.loginUser(email, password)
    signJWT(user, (error: Error | null, token) => {
      ApiResponse.result(res, user.firstName, httpStatusCodes.CREATED, token)
    })
  } catch (error) {
    ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, error.message ?? error)
  }
}
export default { getUsers, register, login }
