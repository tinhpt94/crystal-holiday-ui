import * as types from "../constants/order";
import Immutable from "seamless-immutable";

const DEFAULT_STATE = Immutable({
  order: null,
  paymentHistories: null,
  error: null,
  isRequesting: false
});

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.ORDER_DETAIL_REQUEST:
      return state
        .setIn(["isRequesting"], true)
        .setIn(["error"], null)
        .setIn(["order"], null);
    case types.ORDER_DETAIL_SUCCESS:
      return state
        .setIn(["isRequesting"], false)
        .setIn(["error"], null)
        .setIn(["order"], action.data);
    case types.PAYMENT_LIST_REQUEST:
      return state
        .setIn(["isRequesting"], true)
        .setIn(["error"], null)
        .setIn(["paymentHistories"], null);
    case types.PAYMENT_LIST_SUCCESS:
      return state
        .setIn(["isRequesting"], false)
        .setIn(["error"], null)
        .setIn(["paymentHistories"], action.data);
    case types.PAYMENT_LIST_FAILED:
      return state
        .setIn(["isRequesting"], false)
        .setIn(["error"], action.error)
        .setIn(["paymentHistories"], null);
    default:
      return state;
  }
};
