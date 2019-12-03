import * as types from "./../constants/order"

export const findOrderByIdRequest = id => ({
  type: types.ORDER_DETAIL_REQUEST,
  id
})

export const findOrderByIdSuccess = data => ({
  type: types.ORDER_DETAIL_SUCCESS,
  data
})

export const findOrderByIdFailed = error => ({
  type: types.ORDER_DETAIL_FAILED,
  error
})

export const findPaymentHistoryByOrderIdRequest = id => ({
  type: types.PAYMENT_LIST_REQUEST,
  id
})

export const findPaymentHistoryByOrderIdSuccess = data => ({
  type: types.PAYMENT_LIST_SUCCESS,
  data
})

export const findPaymentHistoryByOrderIdFailed = error => ({
  type: types.PAYMENT_LIST_FAILED,
  error
})