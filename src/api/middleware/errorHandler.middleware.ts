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
    return res.status(HttpStatus.BAD_REQUEST).json(error)
  }
  // If this isn't a Joi error, send it to the next error handler
  return next(err)
}
