import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";

import 'antd/dist/antd.css';
import "tabler-react/dist/Tabler.css";


import store from "./store";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage"
import CustomerPage from "./pages/CustomerPage";
import ProductPage from "./pages/ProductPage";
import CustomerDetailPage from "./pages/CustomerDetailPage";
import OrderDetailPage from "./pages/OrderDetailPage";

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
              <Route exact path="/customer/:id" component={CustomerDetailPage} />
              <Route exact path="/product" component={ProductPage} />
              <Route exact path="/order/:id" component={OrderDetailPage} />
            </Switch>
          </Router>
      </Provider>
    );
  }
}

export default App;
