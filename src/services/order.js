import rest from './base_request'

const ORDER_SERVICE_URL = "/order/orders/"

export const getOrderById = id => rest.get(ORDER_SERVICE_URL + id , {
  headers: {
    Authorization: localStorage.getItem("token")
  }
})

export const getPaymentHistoriesByOrderId = id => rest.get(ORDER_SERVICE_URL + id + "/payment-histories", {
  headers: {
    Authorization: localStorage.getItem("token")
  }
})