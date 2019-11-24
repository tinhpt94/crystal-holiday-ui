import * as types from '../constants/auth'
import {takeLatest, put, call} from 'redux-saga/effects'
import * as restAPI from '../services/auth'
import * as actions from '../actions/auth'

function* login(args) {
  try {
    let response = yield call(restAPI.login, args.payload)
    yield put(actions.loginSuccess(response.headers.authorization))
  } catch (error) {
    yield put(actions.loginError(error))
  }
}

function* getCurrentUser() {
  try {
    let response = yield call(restAPI.getCurrentUser)
    yield put(actions.getCurrentUserSuccess(response.data))
  } catch (error) {
    yield put(actions.getCurrentUserFailed(error))
  }
}

export default function* auth() {
  yield takeLatest(types.AUTH_REQUEST, login)
  yield takeLatest(types.GET_CURRENT_USER_REQUEST, getCurrentUser)
}