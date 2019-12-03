import * as types from "../constants/order";
import { takeLatest, put, call } from "redux-saga/effects";
import * as restAPI from "../services/order";
import * as actions from "../actions/order";

function* getOrderById(args) {
  try {
    let response = yield call(restAPI.getOrderById, args);
    yield put(actions.findOrderByIdSuccess(response.data));
  } catch (error) {
    yield put(actions.findOrderByIdFailed(error));
  }
}

function* getPaymentHistoriesByOrderId(args) {
  try {
    let response = yield call(restAPI.getPaymentHistoriesByOrderId, args);
    yield put(actions.findPaymentHistoryByOrderIdSuccess(response.data));
  } catch (error) {
    yield put(actions.findPaymentHistoryByOrderIdFailed(error));
  }
}

export default function* order() {
  takeLatest(types.ORDER_DETAIL_REQUEST, getOrderById)
  takeLatest(types.PAYMENT_LIST_REQUEST, getPaymentHistoriesByOrderId)
}