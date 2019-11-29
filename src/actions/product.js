import * as types from "./../constants/product";

export const fetchProductRequest = param => ({
  type: types.PRODUCT_LIST_REQUEST,
  param
});

export const fetchProductSuccess = data => ({
  type: types.PRODUCT_LIST_SUCCESS,
  data
});

export const fetchProductFailed = error => ({
  type: types.PRODUCT_LIST_FAILED,
  error
});
