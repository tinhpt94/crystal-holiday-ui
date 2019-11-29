import * as types from "../constants/auth";

export const loginRequest = payload => ({
  type: types.AUTH_REQUEST,
  payload
});

export const loginSuccess = response => ({
  type: types.AUTH_SUCCESS,
  data: response
});

export const loginError = response => ({
  type: types.AUTH_FAILED,
  error: response
});

export const getCurrentUserRequest = () => ({
  type: types.GET_CURRENT_USER_REQUEST
});

export const getCurrentUserSuccess = response => ({
  type: types.GET_CURRENT_USER_SUCCESS,
  data: response
});

export const getCurrentUserFailed = response => ({
  type: types.GET_CURRENT_USER_FAILED,
  error: response
});

export const logout = () => ({ type: types.LOGOUT_REQUEST });
