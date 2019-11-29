import rest from './base_request';

export const getProducts = (params) => {
  return rest.get("/order/products", {
    headers: {
      Authorization: localStorage.getItem("token")
    },
    params: params
  })
}