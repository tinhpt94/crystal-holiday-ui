import * as types from '../constants/product'
import {takeLatest, put, call} from 'redux-saga/effects'
import * as restAPI from '../services/product'
import * as actions from '../actions/product'

function* getProducts(args) {
  try {
    let response = yield call(restAPI.getProducts, args.params)
    yield put(actions.fetchProductSuccess(response.data))
  } catch (error) {
    yield put(actions.fetchProductFailed(error))
  }
}

export default function* auth() {
  yield takeLatest(types.PRODUCT_LIST_REQUEST, getProducts)
}