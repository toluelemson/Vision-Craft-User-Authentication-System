/* eslint-disable no-tabs */
import axios from 'axios';
// import jwt_decode from 'jwt-decode';

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
} from '../constants/user.contants';

export const login = (userData) => async (dispatch) => {
  const { email, password } = userData;

  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/login', { email, password }, config,
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (e) {
    const error = e.response.data.error.message ?? e.response.data.error[0].message;
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const register = (userData) => async (dispatch) => {
  const {
    firstName, lastName, email, password,
  } = userData;

  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        'Conetent-Type': 'application/json',
      },
    };
    const result = await axios.post(
      '/register', {
        firstName, lastName, email, password,
      }, config,
    );

    dispatch({ type: USER_REGISTER_SUCCESS, payload: result });

    localStorage.setItem('userInfo', JSON.stringify(result));
  } catch (e) {
    const error = e.response.data.error.message ?? e.response.data.error[0].message;
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();
    const config = {
      headers: {
        'Conetent-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const result = await axios.post(
      `/dashboard/${id}`, config,
    );

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: result,
    });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: result });
  } catch (e) {
    const { error } = e.response.data;
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: error,
    });
  }
};
