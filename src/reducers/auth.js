import * as types from "../constants/auth";
import Immutable from "seamless-immutable";

const DEFAULT_STATE = Immutable({
  isAuthenticated: localStorage.getItem("token") != null,
  isRequesting: false,
  user: null,
  error: null
});

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.AUTH_REQUEST:
      return state.setIn(["isRequesting"], true).setIn(["error"], null);
    case types.AUTH_SUCCESS:
      localStorage.setItem("token", action.data);
      return state
        .setIn(["isAuthenticated"], true)
        .setIn(["isRequesting"], false);
    case types.AUTH_FAILED:
      return state
        .setIn(["error"], action.error)
        .setIn(["isRequesting"], false)
        .setIn(["isAuthenticated"], false);
    case types.GET_CURRENT_USER_SUCCESS:
      return state.setIn(["user"], action.data);
    case types.GET_CURRENT_USER_FAILED:
      localStorage.removeItem("token");
      return state
        .setIn(["user"], null)
        .setIn(["error", action.error])
        .setIn(["isAuthenticated", false]);
    case types.LOGOUT_REQUEST:
      localStorage.removeItem("token");
      return state.setIn(["user"], null).setIn(["isAuthenticated"], false);
    default:
      return state;
  }
};
