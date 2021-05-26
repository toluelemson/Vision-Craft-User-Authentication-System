import { Request, Response, NextFunction } from 'express'

export interface IUserRegister {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserData {
  id?: number
  email?: string
  firstName?: string
  lastName?: string
  uuid?: string
  lastLogin?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IController {
  // eslint-disable-next-line no-unused-vars
  (req: Request, res: Response, next: NextFunction): void
}

export interface IUserRegsiter {
  firstName: string
  email: string
  lastName: string
  password: string
}
