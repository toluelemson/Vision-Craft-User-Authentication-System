import HttpStatus from 'http-status-codes'
import { Request, Response } from 'express'

export interface IError {
  status?: number
  code?: number
  message?: string
}

export const notFoundErrorHandler = (req: Request, res: Response): void => {
  res.status(HttpStatus.NOT_FOUND || 500).json({
    message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
    code: HttpStatus.NOT_FOUND,
  })
}

export function internalErrorHandler(err: IError, req: Request, res: Response) {
  res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    error: {
      code: err.code || HttpStatus.INTERNAL_SERVER_ERROR,
      message: err.message || HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
    },
  })
}
