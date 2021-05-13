import HttpStatus from 'http-status-codes'
import { Request, Response } from 'express'
export const notFoundErrorHandler = (req: Request, res: Response): void => {
  res.status(HttpStatus.NOT_FOUND || 500).json({
    message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND),
    code: HttpStatus.NOT_FOUND,
  })
}
