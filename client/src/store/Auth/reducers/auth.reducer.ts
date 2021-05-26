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
} from '../auth.contants'

import {
  UserLoginDispatchTypes,
  UserRegisterDispatchTypes,
  UserDetailsDispatchTypes,
  //   UserLogOutDispatchTypes,
} from '../auth.types'

import isEmpty from '../../../utils/isEmpty'

export type State = {
  loading?: boolean
  isAuthenticated: boolean
  error?: Record<string, unknown>
  userInfo?: {
    data: {
      firstName: string
      lastName?: string
      uuid: string
      email: string
    }
    token: string
    success: boolean
  }
}

export const initialState = {
  loading: false,
  isAuthenticated: false,
  userInfo: {
    data: {
      firstName: '',
      lastName: '',
      uuid: '',
      email: '',
    },
    token: '',
    success: false,
  },
}

export const userLoginReducer = (
  state: State = initialState,
  action: UserLoginDispatchTypes,
): any => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        userInfo: action.payload,
      }
    case USER_LOGIN_FAIL:
      return {
        ...state,
        // userInfo: {},
        loading: false,
        error: action.payload,
      }
    case USER_LOGOUT:
      return {
        ...state,
        userInfo: {},
        isAuthenticated: false,
        error: '',
      }
    default:
      return state
  }
}

export const userRegisterReducer = (
  state: State = initialState,
  action: UserRegisterDispatchTypes,
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        loading: false,
        userInfo: {},
        error: '',
      }
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const userDetailsReducer = (
  state: State = initialState,
  action: UserDetailsDispatchTypes,
): State | any => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: !isEmpty(action.payload),
        userInfo: action.payload,
      }
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
