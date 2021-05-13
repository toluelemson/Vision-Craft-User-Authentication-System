import httpStatusCodes from 'http-status-codes'
import ApiResponse from '@src/functions/apiResponse'
import { signJWT } from '@src/functions/encryptionUtils'
import { IUserLogin, IController } from './user.interface'
import userService from './user.service'

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

export default { getUsers, register, login }
