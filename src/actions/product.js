import * as types from './../constants/product'

export const fetchProductRequest = (param) => {
  return {
    type: types.PRODUCT_LIST_REQUEST,
    param
  }
}

export const fetchProductSuccess = (data) => {
  return {
    type: types.PRODUCT_LIST_SUCCESS,
    data
  }
}

export const fetchProductFailed = (error) => {
  return {
    type: types.PRODUCT_LIST_FAILED,
    error
  }
}