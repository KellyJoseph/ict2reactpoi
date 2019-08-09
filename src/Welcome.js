import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import decode from "jwt-decode";
const Id_token = localStorage.getItem("id_token");
if (Id_token != null) {
  console.log(Id_token);
}

class Welcome extends Component {
  render() {
    let welcomeMessage;
    const Id_token = localStorage.getItem("id_token");
    if (Id_token) {
      console.log(Id_token);
      this.welcomeMessage = Id_token;
    } else {
      this.welcomeMessage = "please log in";
    }

    return <div>{`${welcomeMessage}`}</div>;
  }
}
export default withRouter(Welcome);
