import axios from 'axios'
// import jwt_decode from 'jwt-decode';
import { Dispatch } from 'redux'
import setAuthToken from '../../utils/setAuthToken'

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_LOGOUT,
} from './auth.contants'

import {
  UserLoginDispatchTypes,
  UserRegisterDispatchTypes,
  UserDetailsDispatchTypes,
} from './auth.types'

export type ILogin = {
  email: string
  password: string
}

export type IRegister = {
  firstName: string
  lastName: string
  password: string
  email: string
}

export const login = (userData: ILogin, history: any, location: any) => async (dispatch:
 Dispatch<UserLoginDispatchTypes>):
 Promise<void> => {
  const { email, password } = userData

  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post('/login', { email, password }, config)

    const redirect = location.search ? location.search.split('=')[1] : '/dashboard'

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    localStorage.setItem('userInfo', JSON.stringify(data))
    history.push(redirect)
  } catch (e) {
    const error = e.response.data.error.message ?? e.response.data.error[0].message
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    })
  }
}

export const register = (userData: IRegister, history: any, location: any) => async (dispatch:
 Dispatch<UserRegisterDispatchTypes>):
 Promise<void> => {
  const {
    firstName, lastName, email, password,
  } = userData

  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })
    const config = {
      headers: {
        'Conetent-Type': 'application/json',
      },
    }
    const response = await axios.post(
      '/register',
      {
        firstName,
        lastName,
        email,
        password,
      },
      config,
    )

    dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data })
    // await localStorage.setItem('userInfo', JSON.stringify(response))

    const redirect = location.search ? location.search.split('=')[1] : '/'
    history.push(redirect)
  } catch (e) {
    const error = e.response.data.error.message ?? e.response.data.error[0].message
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error,
    })
  }
}

export const getUserDetails = (id: string) => async (
  dispatch: Dispatch<UserDetailsDispatchTypes>,
  getState: any,
): Promise<void> => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()
    // set token
    const config = setAuthToken(userInfo.token)

    const { data } = await axios.get(`/${id}`, config)

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (e) {
    const { error } = e

    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error,
    })
  }
}

export const logout = (history: any, location: any) => async (dispatch:
Dispatch<UserLoginDispatchTypes>)
: Promise<void> => {
  const redirect = location.search ? location.search.split('=')[1] : '/'
  localStorage.removeItem('userInfo')
  history.push(redirect)
  dispatch({ type: USER_LOGOUT })
}
