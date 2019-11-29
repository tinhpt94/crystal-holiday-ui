import * as types from "../constants/customer";
import Immutable from "seamless-immutable";

const DEFAULT_STATE = Immutable({
  customers: null,
  isRequesting: false,
  customer: null,
  error: null
});

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.CUSTOMER_DETAIL_REQUEST:
      return state
        .setIn(["isRequesting"], true)
        .setIn(["error"], null)
        .setIn(["customer"], null);
    case types.CUSTOMER_DETAIL_SUCCESS:
      return state
        .setIn(["isRequesting"], false)
        .setIn(["error"], null)
        .setIn(["customer"], action.data);
    case types.CUSTOMER_DETAIL_FAILED:
      return state
        .setIn(["isRequesting"], false)
        .setIn(["error"], action.error)
        .setIn(["customer"], null);
    case types.CUSTOMER_LIST_REQUEST:
      return state
        .setIn(["isRequesting"], true)
        .setIn(["error"], null)
        .setIn(["customers"], null);
    case types.CUSTOMER_LIST_SUCCESS:
      return state
        .setIn(["isRequesting"], false)
        .setIn(["error"], null)
        .setIn(["customers"], action.data);
    case types.CUSTOMER_LIST_FAILED:
      return state
        .setIn(["isRequesting"], false)
        .setIn(["error"], action.error)
        .setIn(["customers"], null);
    default:
      return state;
  }
};
