import * as types from "../constants/order";
import { takeLatest, put, call } from "redux-saga/effects";
import * as restAPI from "../services/order";
import * as actions from "../actions/order";

function* getOrderById(action) {
  try {
    let response = yield call(restAPI.getOrderById, action.id);
    yield put(actions.findOrderByIdSuccess(response.data));
  } catch (error) {
    yield put(actions.findOrderByIdFailed(error));
  }
}

function* getPaymentHistoriesByOrderId(action) {
  try {
    let response = yield call(restAPI.getPaymentHistoriesByOrderId, action.id);
    yield put(actions.findPaymentHistoryByOrderIdSuccess(response.data));
  } catch (error) {
    yield put(actions.findPaymentHistoryByOrderIdFailed(error));
  }
}

export default function* order() {
  yield takeLatest(types.ORDER_DETAIL_REQUEST, getOrderById)
  yield takeLatest(types.PAYMENT_LIST_REQUEST, getPaymentHistoriesByOrderId)
}