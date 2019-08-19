import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import map from "../src/images/old-map.jpg";
import decode from "jwt-decode";
const Id_token = localStorage.getItem("id_token");
if (Id_token != null) {
  console.log(Id_token);
}

class Welcome extends Component {
  render() {
    return (
      <div>
        <img src={map} />
      </div>
    );
  }
}
export default withRouter(Welcome);
