import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./pages/Home";

import "tabler-react/dist/Tabler.css";

import store from "./store";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage"

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/logout" component={LogoutPage} />
            </Switch>
          </Router>
      </Provider>
    );
  }
}

export default App;
