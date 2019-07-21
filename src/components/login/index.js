import React, { Component } from "react";
import Authentication from "../../util/authentication";
import { withRouter, Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    redirectToReferrer: false,
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    Authentication.authenticate(
      this.state.username,
      this.state.password,
      () => {
        this.setState({ redirectToReferrer: true, username: "", password: "" });
      },
      () => {
        this.setState({ redirectToReferrer: false, password: "" });
      }
    );
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div className="row">
        <div className="col-md-4 offset-3">
          {Authentication.error === 401 ? (
            <p>Invalid username/password</p>
          ) : (
            <p />
          )}
          <form style={{ marginTop: "30px" }}>
            <h3>Login</h3>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
