import React, { Component } from "react";

import "./SASS/App.scss";

import LoginPage from "./components/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
