import HttpStatus from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'

export interface IError {
  status?: number
  code?: number
  message?: string
}

interface IJoiErrorDetail {
  message?: string
  path?: string
}

interface IJoiError extends IError {
  isJoi?: boolean
  details?: Array<IJoiErrorDetail>
}

export const notFoundErrorHandler = (req: Request, res: Response): void => {
  res.status(HttpStatus.NOT_FOUND || 500).json({
    success: false,
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
    },
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

/**
 * Joi error handler middleware
 */
export function joiErrorHandler(err: IJoiError, req: Request, res: Response, next: NextFunction) {
  if (err.isJoi) {
    const error = {
      code: HttpStatus.BAD_REQUEST,
      error:
        err.details &&
        err.details.map(e => ({
          message: e.message,
          param: e.path,
        })),
    }
    return res.status(HttpStatus.BAD_REQUEST).json({ error: { code: error.code, message: err.message } })
  }
  // If this isn't a Joi error, send it to the next error handler
  return next(err)
}
