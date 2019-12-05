import * as types from '../constants/product'
import {takeLatest, put, call} from 'redux-saga/effects'
import * as restAPI from '../services/product'
import * as actions from '../actions/product'

function* getProducts(action) {
  try {
    let response = yield call(restAPI.getProducts, action.params)
    yield put(actions.fetchProductSuccess(response.data))
  } catch (error) {
    yield put(actions.fetchProductFailed(error))
  }
}

export default function* product() {
  yield takeLatest(types.PRODUCT_LIST_REQUEST, getProducts)
}