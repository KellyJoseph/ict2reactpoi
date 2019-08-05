import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import decode from "jwt-decode";
const Id_token = localStorage.getItem("id_token");
const email = decode(Id_token).email;

class Welcome extends Component {
  render() {
    return <div>{` Logged in as ${email}`}</div>;
  }
}
export default withRouter(Welcome);
