import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";

import "tabler-react/dist/Tabler.css";

import store from "./store";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage"
import CustomerPage from "./pages/CustomerPage";
import ProductPage from "./pages/ProductPage";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/logout" component={LogoutPage} />
              <Route exact path="/customer" component={CustomerPage} />
              <Route exact path="/product" component={ProductPage} />
            </Switch>
          </Router>
      </Provider>
    );
  }
}

export default App;
