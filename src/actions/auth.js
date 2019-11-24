import * as types from '../constants/auth';

export const loginRequest = (payload) => {
  return {
    type: types.AUTH_REQUEST,
    payload
  }
}

export const loginSuccess = (response) => {
  return {
    type: types.AUTH_SUCCESS,
    data: response
  }
}

export const loginError = (response) => {
  return {
    type: types.AUTH_FAILED,
    error: response
  }
}

export const getCurrentUserRequest = () => {
  return {
    type: types.GET_CURRENT_USER_REQUEST
  }
}

export const getCurrentUserSuccess = (response) => {
  return {
    type: types.GET_CURRENT_USER_SUCCESS,
    data: response
  }
}

export const getCurrentUserFailed = (response) => {
  return {
    type: types.GET_CURRENT_USER_FAILED,
    error: response
  }
}