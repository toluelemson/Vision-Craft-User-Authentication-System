import { Request, Response } from 'express'

const validateToken = (req: Request, res: Response): unknown => {
  return res.status(200).json({
    message: 'Authorized',
  })
}

// @desc	Register user
// @route 	GET /auth/register
// @access	Public
const register = (req: Request, res: Response): unknown => {
  return res.status(200).json({
    message: 'Register works',
  })
}

// @desc	Login user
// @route 	GET /auth/login
// @access	Public
const login = (req: Request, res: Response): unknown => {
  return res.status(200).json({
    message: 'Login works',
  })
}

// @desc	GetAll user
// @route 	GET /auth/users
// @access	Public
const getAllUsers = (req: Request, res: Response): unknown => {
  return res.status(200).json({
    message: 'GetAllUsers works',
  })
}

export default { validateToken, register, login, getAllUsers }
