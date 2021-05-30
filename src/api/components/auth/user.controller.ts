import httpStatusCodes from 'http-status-codes'
import ApiResponse from '@src/functions/api.response'
import { signJWT } from '@src/functions/encryption.utils'
import { IUserLogin, IController } from './user.interface'
import userService from './user.service'

// @desc	Get user
// @route 	GET /auth/
// @access	Private
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
// @access	Private
const getUserProfileByID: IController = async (req, res) => {
  try {
    const user = await userService.getUserProfileByID(req.params.id)
    ApiResponse.result(res, user, httpStatusCodes.OK)
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
    const { firstName, uuid } = (await userService.loginUser(email, password)) || ''
    signJWT(firstName, (error: Error | null, token) => {
      return ApiResponse.result(res, { firstName, uuid, email }, httpStatusCodes.CREATED, token)
    })
  } catch (e) {
    ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message ?? e)
  }
}
export default { getUsers, register, login, getUserProfileByID }
