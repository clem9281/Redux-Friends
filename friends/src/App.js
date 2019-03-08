import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./SASS/App.scss";

import { LoginPage, PrivateRoute, FriendsList, AddFriend } from "./components";

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
          <PrivateRoute exact path="/add-friend" component={AddFriend} />
        </div>
      </Router>
    );
  }
}

export default App;
