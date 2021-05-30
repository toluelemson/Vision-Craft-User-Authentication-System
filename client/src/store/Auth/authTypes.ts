import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from './authContants'

export type ILogin = {
  email: string
  password: string
}

export type IRegister = {
  name: string
  email: string
  password: string
  profilePicUrl?: string
}

export interface UserLoginRequest {
  type: typeof USER_LOGIN_REQUEST
}

export interface UserLoginSuccess {
  type: typeof USER_LOGIN_SUCCESS
  payload: {
    data: {
      firstName: string
      uuid: string
      email: string
    }
    token: string
    success: boolean
  }
}

export interface UserLoginFail {
  type: typeof USER_LOGIN_FAIL
  payload: {
    error: {
      message: string
    }
    success: boolean
  }
}

export interface UserRegisterRequest {
  type: typeof USER_REGISTER_REQUEST
}

export interface UserRegisterSuccess {
  type: typeof USER_REGISTER_SUCCESS
  payload: {
    data: {
      firstName: string
      lastName: string
      uuid: string
      email: string
      createdAt: string
      updateAt: string
      id: string
      lastLogin: string
    }
    success: boolean
  }
}

export interface UserRegisterFail {
  type: typeof USER_REGISTER_FAIL
  payload: {
    error: {
      message: string
    }
    success: boolean
  }
}

export interface UserDetailsRequest {
  type: typeof USER_DETAILS_REQUEST
}

export interface UserDetailsSuccess {
  type: typeof USER_DETAILS_SUCCESS
  payload: {
    data: {
      firstName: string
      uuid: string
      email: string
    }
    token: string
    success: boolean
  }
}

export interface UserDetailsFail {
  type: typeof USER_DETAILS_FAIL
  payload: {
    success: boolean
    error: {
      code: number
      message: string
    }
  }
}

export interface UserLogout {
  type: typeof USER_LOGOUT
}

export type UserLoginDispatchTypes =
  | UserLoginRequest
  | UserLoginSuccess
  | UserLoginFail
  | UserLogout
export type UserRegisterDispatchTypes =
  | UserRegisterRequest
  | UserRegisterSuccess
  | UserDetailsSuccess
  | UserRegisterFail
  | UserLogout
export type UserDetailsDispatchTypes =
  | UserDetailsRequest
  | UserDetailsSuccess
  | UserDetailsFail
  | UserLogout
export type UserLogOutDispatchTypes = UserLogout
