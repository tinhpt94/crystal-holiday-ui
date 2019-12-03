import rest from './base_request';

export const getCustomers = params => rest.get("/order/customers", {
    params: params,
    headers: {
        Authorization: localStorage.getItem("token")
    }
})

export const getCustomer = id => rest.get("/order/customers/" + id, {
    headers: {
        Authorization: localStorage.getItem("token")
    }
})

export const getCustomerOrders = id => rest.get("/order/customers/" + id + "/orders", {
    headers: {
        Authorization: localStorage.getItem("token")
    }
})