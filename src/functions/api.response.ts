import { Response } from 'express'
import httpStatusCodes from 'http-status-codes'
import { userData } from '@src/api/components/auth/user.interface'

class ApiResponse extends Error {
  static result = (res: Response, data: userData, status = 200, token?: string | null): void => {
    res.status(status)
    if (token) {
      res.json({
        data,
        token,
        success: true,
      })
    }
    res.json({
      data,
      success: true,
    })
  }

  static error = (res: Response, status = 400, error: string = httpStatusCodes.getStatusText(status)): void => {
    res.status(status).json({
      error: {
        message: error,
      },
      success: false,
    })
  }
}

export default ApiResponse
