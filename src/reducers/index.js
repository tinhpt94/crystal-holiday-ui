import { combineReducers } from "redux";
import auth from "./auth";
import product from "./product";
import customer from "./customer";
import order from "./order";

export default combineReducers({
  auth,
  product,
  customer,
  order
});
