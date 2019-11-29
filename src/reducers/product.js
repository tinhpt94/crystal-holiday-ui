import * as types from "../constants/product";
import Immutable from "seamless-immutable";

const DEFAULT_STATE = Immutable({
  products: null,
  isRequesting: false,
  error: null
});

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.PRODUCT_LIST_REQUEST:
      return state.setIn(["isRequesting"], true)
                  .setIn(["products"], null)
                  .setIn(["error"], null);
    case types.PRODUCT_LIST_SUCCESS:
      return state.setIn(["isRequesting"], false)
                  .setIn(["products"], action.data)
                  .setIn(["error"], null);
    case types.PRODUCT_LIST_FAILED:
      return state.setIn(["isRequesting"], false)
                  .setIn(["products"], null)
                  .setIn(["error"], action.error);
    default:
      return state;
  }
};
