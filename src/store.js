import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
//import { browserHistory } from "react-router";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./sagas";
import * as reducers from "./reducers";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  //const routeMiddleware = routerMiddleware(browserHistory);

  return {
    ...createStore(
      combineReducers({ ...reducers, routing: routerReducer }),
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore();
