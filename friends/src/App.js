import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./SASS/App.scss";

import { LoginPage, PrivateRoute, FriendsList } from "./components";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/login"
            render={props => <LoginPage {...props} />}
          />
          <PrivateRoute exact path="/" component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
