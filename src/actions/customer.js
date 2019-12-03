import * as types from "./../constants/customer";

export const getCustomers = params => ({
  type: types.CUSTOMER_LIST_REQUEST,
  params
});

export const getCustomersSuccess = data => ({
  type: types.CUSTOMER_LIST_SUCCESS,
  data
});

export const getCustomersFailed = error => ({
  type: types.CUSTOMER_LIST_FAILED,
  error
});

export const getCustomer = idCustomer => ({
  type: types.CUSTOMER_DETAIL_REQUEST,
  id: idCustomer
});

export const getCustomerSuccess = data => ({
  type: types.CUSTOMER_DETAIL_SUCCESS,
  data
});

export const getCustomerFailed = error => ({
  type: types.CUSTOMER_DETAIL_FAILED,
  error
});

export const getCustomerOrders = idCustomer => ({
  type: types.CUSTOMER_ORDER_LIST_REQUEST,
  id: idCustomer
});

export const getCustomerOrdersSuccess = data => ({
  type: types.CUSTOMER_ORDER_LIST_SUCCESS,
  data
});

export const getCustomerOrdersFailed = error => ({
  type: types.CUSTOMER_ORDER_LIST_FAILED,
  error
});
