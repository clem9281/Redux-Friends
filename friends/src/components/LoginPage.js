import React from "react";
import { connect } from "react-redux";
import { loginStart } from "../actions";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }
  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = (e, credentials) => {
    e.preventDefault();
    this.props.loginStart(credentials).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    console.log(this.props);
    const { credentials } = this.state;
    const { username, password } = credentials;
    return (
      <section className="login-page">
        <div className="form-container">
          <form onSubmit={e => this.handleSubmit(e, credentials)}>
            <h2>Account Login</h2>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="&#xf007;   username"
              value={username}
              onChange={this.handleChanges}
              required
            />
            <label htmlFor="password" className="upper">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="&#xf023;   password"
              value={password}
              onChange={this.handleChanges}
              required
            />
            <button>Login</button>
          </form>
        </div>
      </section>
    );
  }
}
// do I need this?
const mapStateToProps = state => ({
  state
});

export default connect(
  null,
  { loginStart }
)(LoginPage);
