import * as types from '../constants/customer'
import {takeLatest, put, call} from 'redux-saga/effects'
import * as restAPI from '../services/customer'
import * as actions from '../actions/customer'

function* getCustomers(action) {
  try {
    let response = yield call(restAPI.getCustomers, action.params)
    yield put(actions.getCustomersSuccess(response.data))
  } catch (error) {
    yield put(actions.getCustomersFailed(error))
  }
}

function* getCustomer(action) {
    try {
      let response = yield call(restAPI.getCustomer, action.id)
      yield put(actions.getCustomerSuccess(response.data))
    } catch (error) {
      yield put(actions.getCustomerFailed(error))
    }
}

function* getCustomerOrders(action) {
  try {
    let response = yield call(restAPI.getCustomerOrders, action.id)
    yield put(actions.getCustomerOrdersSuccess(response.data))
  } catch (error) {
    yield put(actions.getCustomerOrdersFailed(error))
  }
}

export default function* customer() {
  yield takeLatest(types.CUSTOMER_LIST_REQUEST, getCustomers)
  yield takeLatest(types.CUSTOMER_DETAIL_REQUEST, getCustomer)
  yield takeLatest(types.CUSTOMER_ORDER_LIST_REQUEST, getCustomerOrders)
}